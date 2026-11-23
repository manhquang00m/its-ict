// Validator for VI translations + exercises.
// Usage: node tools/check.mjs [topicPrefix ...]     e.g.  node tools/check.mjs 1     or   node tools/check.mjs 4.1 4.2 4.3
// With no args every topic is checked. Exit code 1 if any error.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
const root = path.resolve(import.meta.dirname, "..");
const win = { addEventListener() {}, localStorage: { getItem() { return null; }, setItem() {} } };
win.window = win; win.document = { addEventListener() {}, querySelector() { return null; } };
const ctx = vm.createContext(win);
const load = f => { try { vm.runInContext(fs.readFileSync(path.join(root, "js", f), "utf8"), ctx, { filename: f }); } catch (e) { errs.push(`LOAD ${f}: ${e.message}`); } };
const errs = [];
["helpers.js", "i18n.js", ...fs.readdirSync(path.join(root, "js")).filter(f => /^(content|bank)-ch\d\.js$/.test(f)), "generators.js", "glossary.js",
 ...fs.readdirSync(path.join(root, "js")).filter(f => /^(vi|exercises)-.+\.js$/.test(f) && f !== "vi-ui.js").sort()].forEach(f => { if (fs.existsSync(path.join(root, "js", f))) load(f); });
const W = win, VI = W.VI || { topics: {}, objectives: {}, bank: {}, glossary: {} }, EX = W.EXERCISES || {};
const prefixes = process.argv.slice(2);
const want = id => !prefixes.length || prefixes.some(p => id === p || id.startsWith(p + "."));
const tags = h => (String(h).match(/<\/?[a-zA-Z][a-zA-Z0-9]*/g) || []).map(s => s.toLowerCase()).join(" ");
const plain = s => /^[\s\d.,\/\-+x:=#A-Fa-f_\[\]()<>%^*'"→←]*$/.test(String(s)) && /\d/.test(String(s)); // pure number/binary/hex style answers must not be translated
let nTopics = 0, nBank = 0, nEx = 0, nGl = 0;
for (const u of W.UNITS || []) for (const t of u.topics) {
  if (!want(t.id)) continue; nTopics++;
  const vt = VI.topics[t.id];
  if (!vt) errs.push(`[${t.id}] missing VI.topics`); else {
    ["title", "summary", "reading"].forEach(k => { if (!vt[k] || typeof vt[k] !== "string" || vt[k].length < 3) errs.push(`[${t.id}] VI.topics.${k} empty`); });
    if (vt.reading && tags(vt.reading) !== tags(t.reading)) errs.push(`[${t.id}] VI reading HTML tag sequence differs from EN`);
    if (vt.reading && vt.reading.length < t.reading.length * 0.6) errs.push(`[${t.id}] VI reading suspiciously short (${vt.reading.length} vs ${t.reading.length})`);
  }
  for (const o of t.objectives) {
    if (!VI.objectives[o]) errs.push(`[${o}] missing VI.objectives`);
    const en = (W.BANK || {})[o] || [], vi = VI.bank[o];
    if (!vi) { if (en.length) errs.push(`[${o}] missing VI.bank`); } else {
      if (vi.length !== en.length) errs.push(`[${o}] VI.bank length ${vi.length} != EN ${en.length}`);
      en.forEach((r, i) => { const v = vi[i]; nBank++; if (!v) return;
        if (typeof v[0] !== "string" || !v[0].trim()) errs.push(`[${o}#${i}] VI question empty`);
        if (typeof v[1] !== "string" || !v[1].trim()) errs.push(`[${o}#${i}] VI answer empty`);
        if ((v[2] || []).length !== (r[2] || []).length) errs.push(`[${o}#${i}] VI wrong-answer count ${(v[2] || []).length} != EN ${(r[2] || []).length}`);
        if (plain(r[1]) && String(v[1]) !== String(r[1])) errs.push(`[${o}#${i}] numeric/code-like answer must stay identical: EN "${r[1]}" VI "${v[1]}"`);
        if (r[3] && r[3].e && !(v[3] && v[3].e)) errs.push(`[${o}#${i}] EN has explanation, VI missing {e}`);
        if (new Set([String(v[1]), ...(v[2] || []).map(String)]).size !== 1 + (v[2] || []).length) errs.push(`[${o}#${i}] VI answer/wrong options not all distinct`);
      });
    }
    const gl = (W.GLOSSARY || {})[o];
    if (gl) { const vg = VI.glossary[o]; nGl += gl.length; if (!vg) errs.push(`[${o}] missing VI.glossary`); else { if (vg.length !== gl.length) errs.push(`[${o}] VI.glossary length ${vg.length} != EN ${gl.length}`); vg.forEach((g, i) => { if (!g || !g[0] || !g[1]) errs.push(`[${o}.glossary#${i}] bad entry`); else if (gl[i] && g[0] !== gl[i][0]) errs.push(`[${o}.glossary#${i}] term must stay English: "${gl[i][0]}" != "${g[0]}"`); }); } }
  }
  const ex = EX[t.id];
  if (!ex || ex.length < 6) errs.push(`[${t.id}] needs >= 6 exercises (has ${ex ? ex.length : 0})`); else {
    const ids = new Set(); const kinds = new Set();
    ex.forEach((e, i) => { nEx++;
      if (!e.id || ids.has(e.id)) errs.push(`[${t.id}.ex#${i}] missing/duplicate id`); ids.add(e.id); kinds.add(e.kind);
      if (!Number.isInteger(e.marks) || e.marks < 1 || e.marks > 8) errs.push(`[${t.id}.ex#${i}] marks must be integer 1-8`);
      ["q", "ms"].forEach(k => ["en", "vi"].forEach(l => { if (!e[k] || typeof e[k][l] !== "string" || e[k][l].trim().length < 3) errs.push(`[${t.id}.ex#${i}] ${k}.${l} missing`); }));
      if (e.hint) ["en", "vi"].forEach(l => { if (typeof e.hint[l] !== "string" || !e.hint[l].trim()) errs.push(`[${t.id}.ex#${i}] hint.${l} missing`); });
      if (e.q && e.q.en && e.q.vi && tags(e.q.en) !== tags(e.q.vi)) errs.push(`[${t.id}.ex#${i}] q en/vi HTML tags differ`);
      if (e.ms && e.ms.en && e.ms.vi && tags(e.ms.en) !== tags(e.ms.vi)) errs.push(`[${t.id}.ex#${i}] ms en/vi HTML tags differ`);
    });
    if (kinds.size < 3) errs.push(`[${t.id}] exercises should mix at least 3 kinds`);
  }
}
console.log(`checked topics=${nTopics} bankRows=${nBank} glossaryTerms=${nGl} exercises=${nEx}`);
if (errs.length) { console.log(errs.slice(0, 80).join("\n")); if (errs.length > 80) console.log(`... +${errs.length - 80} more`); console.log(`FAILED: ${errs.length} problem(s)`); process.exit(1); }
console.log("OK");
