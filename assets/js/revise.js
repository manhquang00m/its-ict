// Trang ôn tập theo dạng bài: hiện các bài tự luận theo id, lấy từ dữ liệu igcse9 (window.EXERCISES).
// Cách dùng: <body data-chapter="3">, mỗi nhóm bài là <div class="rv-set" data-ids="3.1-e1,3.1-e2"></div>.
// Cần nạp main.js và learn-data.js trước file này. Ngôn ngữ theo <html lang> (main.js đặt), đổi theo sự kiện langchange.
(function () {
  'use strict';

  const TXT = {
    vi: { ex: 'Bài', marks: 'điểm', hint: 'Gợi ý', ms: 'Đáp án & cách chấm', missing: 'Không tìm thấy bài ', fail: 'Không tải được bài tập. Hãy tải lại trang.' },
    en: { ex: 'Exercise', marks: 'marks', hint: 'Hint', ms: 'Mark scheme', missing: 'Exercise not found: ', fail: 'Could not load the exercises. Please reload the page.' }
  };
  const ID_RE = /^\d\.\d{1,2}-e\d{1,2}$/;

  const lang = () => (document.documentElement.lang === 'en' ? 'en' : 'vi');
  const pick = (obj, l) => (obj ? (obj[l] || obj.en || '') : '');

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  // HTML đề bài / đáp án là dữ liệu tĩnh trong repo igcse9 (giống learn.js), không có dữ liệu người dùng.
  function prose(cls, html) {
    const e = el('div', cls);
    e.innerHTML = html;
    e.querySelectorAll('table').forEach(t => {
      const w = el('div', 'tbl-wrap');
      t.replaceWith(w);
      w.appendChild(t);
    });
    return e;
  }

  function fold(cls, label, html) {
    const d = el('details', cls);
    d.appendChild(el('summary', null, label));
    d.appendChild(prose('inner prose', html));
    return d;
  }

  function card(e, l) {
    const t = TXT[l];
    const c = el('article', 'ex');
    const head = el('div', 'ex-head');
    head.appendChild(el('b', null, t.ex + ' ' + e.id));
    if (e.marks) head.appendChild(el('span', 'marks', e.marks + ' ' + t.marks));
    c.appendChild(head);
    c.appendChild(prose('prose', pick(e.q, l)));
    if (e.hint) c.appendChild(fold('hint', t.hint, pick(e.hint, l)));
    if (e.ms) c.appendChild(fold('ms', t.ms, pick(e.ms, l)));
    return c;
  }

  let byId = null;

  function render() {
    if (!byId) return;
    const l = lang();
    document.querySelectorAll('.rv-set').forEach(box => {
      const ids = (box.dataset.ids || '').split(',').map(s => s.trim()).filter(s => ID_RE.test(s));
      box.replaceChildren();
      ids.forEach(id => {
        const e = byId.get(id);
        box.appendChild(e ? card(e, l) : el('p', 'rv-missing', TXT[l].missing + id));
      });
    });
  }

  function start() {
    const n = Number(document.body.dataset.chapter);
    if (!window.LearnData) return;
    window.LearnData.loadChapter(n).then(() => {
      byId = new Map();
      Object.values(window.EXERCISES || {}).forEach(list => (list || []).forEach(e => byId.set(e.id, e)));
      render();
    }).catch(() => {
      document.querySelectorAll('.rv-set').forEach(box => box.replaceChildren(el('p', 'rv-missing', TXT[lang()].fail)));
    });
  }

  document.addEventListener('langchange', render);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
