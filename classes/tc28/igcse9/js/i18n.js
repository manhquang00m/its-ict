/* EN / VI language layer.
   - window.I18N.lang            current language ("en" | "vi"), saved in localStorage (igcse9_lang)
   - window.I18N.L(en, vi)       pick a string for the current language (falls back to EN when vi is missing)
   - window.VI                   Vietnamese content: topics, objectives, bank (index-aligned with BANK), glossary (index-aligned), ui, uiPatterns
   - UI chrome: English text nodes / attributes are swapped for Vietnamese using VI.ui (exact match) and VI.uiPatterns
     (regexp -> replacement). Elements with data-notr (reading text, quiz questions, answers) are never touched. */
(function () {
  const KEY = "igcse9_lang";
  const VI = window.VI = window.VI || {};
  ["topics", "objectives", "bank", "glossary", "ui", "units"].forEach(k => { VI[k] = VI[k] || {}; });
  VI.uiPatterns = VI.uiPatterns || [];

  let lang = "en";
  try { const v = localStorage.getItem(KEY); if (v === "vi" || v === "en") lang = v; } catch (e) { /* private mode */ }

  const listeners = [];
  const I18N = window.I18N = {
    get lang() { return lang; },
    isVI: () => lang === "vi",
    L: (en, vi) => (lang === "vi" && vi != null && vi !== "" ? vi : en),
    onChange: fn => listeners.push(fn),
    set(l) {
      if (l !== "en" && l !== "vi") return; if (l === lang) return;
      lang = l; try { localStorage.setItem(KEY, l); } catch (e) { }
      if (document.documentElement) document.documentElement.lang = l;
      applyContent();
      if (document.body) translateTree(document.body);
      syncToggle();
      listeners.forEach(fn => { try { fn(l); } catch (e) { console.error(e); } });
    },
    /* translate a single English UI string (used by app code for dynamic strings) */
    tr: s => (lang === "vi" ? trString(s) : s),
    applyContent,
    translateTree: n => { if (lang === "vi") translateTree(n); }
  };

  /* ---------- learning content ----------
     The app reads t.title / t.summary / t.reading, u.title / u.blurb and OBJECTIVES[id] everywhere, so instead of
     patching every template the objects are switched in place. The English originals are kept in ._en. */
  function applyContent() {
    const vi = lang === "vi";
    (window.UNITS || []).forEach(u => {
      u._en = u._en || { title: u.title, blurb: u.blurb };
      const vu = vi && VI.units && VI.units[u.id];
      u.title = (vu && vu.title) || u._en.title; u.blurb = (vu && vu.blurb) || u._en.blurb;
      u.topics.forEach(t => {
        t._en = t._en || { title: t.title, summary: t.summary, reading: t.reading };
        const v = vi && VI.topics[t.id];
        t.title = (v && v.title) || t._en.title; t.summary = (v && v.summary) || t._en.summary; t.reading = (v && v.reading) || t._en.reading;
      });
    });
    const O = window.OBJECTIVES; if (O) {
      if (!O.__en) Object.defineProperty(O, "__en", { value: Object.assign({}, O), enumerable: false });
      Object.keys(O.__en).forEach(k => { O[k] = (vi && VI.objectives[k]) || O.__en[k]; });
    }
  }

  /* ---------- UI chrome translation ---------- */
  const SKIP = "SCRIPT,STYLE,TEXTAREA,CODE,PRE,[data-notr],.reading,.qtext,.q-html";
  const ATTRS = ["placeholder", "aria-label", "title", "alt"];
  const orig = new WeakMap();           // text node -> original English text
  let busy = false;

  function trString(raw) {
    const s = String(raw), lead = s.match(/^\s*/)[0], trail = s.match(/\s*$/)[0], core = s.trim();
    if (!core) return s;
    if (Object.prototype.hasOwnProperty.call(VI.ui, core)) return lead + VI.ui[core] + trail;
    for (const [re, rep] of VI.uiPatterns) { if (re.test(core)) return lead + core.replace(re, rep) + trail; }
    return s;
  }
  function skipped(el) { return !el || (el.closest && el.closest(SKIP)); }
  function textNode(n) {
    if (skipped(n.parentElement)) return;
    if (lang === "vi") { const base = orig.has(n) ? orig.get(n) : n.data; if (!orig.has(n)) orig.set(n, base); const t = trString(base); if (t !== n.data) n.data = t; }
    else if (orig.has(n)) { if (n.data !== orig.get(n)) n.data = orig.get(n); orig.delete(n); }
  }
  function attrs(el) {
    if (skipped(el)) return;
    ATTRS.forEach(a => {
      const store = "data-en-" + a;
      if (lang === "vi") { if (!el.hasAttribute(a)) return; const cur = el.hasAttribute(store) ? el.getAttribute(store) : el.getAttribute(a); if (!el.hasAttribute(store)) el.setAttribute(store, cur); const t = trString(cur); if (t !== el.getAttribute(a)) el.setAttribute(a, t); }
      else if (el.hasAttribute(store)) { el.setAttribute(a, el.getAttribute(store)); el.removeAttribute(store); }
    });
  }
  function translateTree(root) {
    if (!root || busy) return; busy = true;
    try {
      if (root.nodeType === 3) textNode(root);
      else if (root.nodeType === 1) {
        attrs(root);
        const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
        let n; while ((n = w.nextNode())) { if (n.nodeType === 3) textNode(n); else attrs(n); }
      }
    } finally { busy = false; }
  }

  /* ---------- EN | VI toggle ---------- */
  function syncToggle() { document.querySelectorAll("[data-lang-btn]").forEach(b => { const on = b.getAttribute("data-lang-btn") === lang; b.classList.toggle("on", on); b.setAttribute("aria-pressed", on ? "true" : "false"); }); }
  function boot() {
    if (document.documentElement) document.documentElement.lang = lang;
    document.addEventListener("click", e => { const b = e.target.closest && e.target.closest("[data-lang-btn]"); if (b) I18N.set(b.getAttribute("data-lang-btn")); });
    if (typeof MutationObserver === "function") {
      new MutationObserver(recs => { if (busy || lang !== "vi") return; recs.forEach(r => r.addedNodes.forEach(n => { if (n.nodeType === 1 || n.nodeType === 3) translateTree(n); })); }).observe(document.body, { childList: true, subtree: true });
    }
    syncToggle(); if (lang === "vi") translateTree(document.body);
  }
  if (typeof document !== "undefined" && document.readyState !== undefined) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
  }
})();
