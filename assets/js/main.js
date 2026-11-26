// Script dùng chung cho mọi trang
// Chuyển EN | VI ở header (#langSeg): lưu lựa chọn vào localStorage (igcse9_lang, dùng chung với trang học)
// và đổi chữ của mọi phần tử có data-en. Trang có data-lang-fixed="vi" (SQL) luôn hiện tiếng Việt.
(function () {
  const KEY = 'igcse9_lang';

  function getLang() {
    try { return localStorage.getItem(KEY) === 'en' ? 'en' : 'vi'; } catch (e) { return 'vi'; }
  }
  function setLang(l) {
    try { localStorage.setItem(KEY, l); } catch (e) { /* bỏ qua */ }
  }

  function apply() {
    const chosen = getLang();
    const fixed = document.body.dataset.langFixed;
    const eff = fixed || chosen;
    document.documentElement.lang = eff;
    document.querySelectorAll('[data-en]').forEach(n => {
      if (n.dataset.vi === undefined) n.dataset.vi = n.textContent; // giữ bản gốc tiếng Việt
      n.textContent = eff === 'en' ? n.dataset.en : n.dataset.vi;
    });
    document.querySelectorAll('#langSeg button').forEach(b => {
      b.setAttribute('aria-pressed', String(b.dataset.lang === chosen));
    });
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: eff } }));
  }

  document.addEventListener('DOMContentLoaded', () => {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    document.querySelectorAll('#langSeg button').forEach(b => {
      b.addEventListener('click', () => { setLang(b.dataset.lang === 'en' ? 'en' : 'vi'); apply(); });
    });
    // Chỉ áp dụng trên trang có công tắc/chữ dịch; các trang học (cs9...) tự quản lý ngôn ngữ
    if (document.getElementById('langSeg') || document.querySelector('[data-en]')) apply();
  });
})();
