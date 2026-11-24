// Trang chủ: dựng danh sách chương/chủ đề IGCSE từ dữ liệu của igcse9 (nạp qua assets/js/learn-data.js)
// và link sang đề cương ôn thi classes/tc28/cs9/chapter.html?c=N.
// Dùng textContent/DOM API, không ghép HTML từ dữ liệu.
(function () {
  const BASE = 'classes/tc28/cs9/';
  const KEY = 'igcse9_lang'; // dùng chung với trang học để giữ lựa chọn EN | VI

  function getLang() {
    try { return localStorage.getItem(KEY) === 'en' ? 'en' : 'vi'; } catch (e) { return 'vi'; }
  }
  function setLang(l) {
    try { localStorage.setItem(KEY, l); } catch (e) { /* bỏ qua */ }
  }

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // Dữ liệu nạp bất đồng bộ nên đọc lại mỗi lần render
  const VI = () => window.VI || {};

  function unitTitle(u, lang) {
    const v = lang === 'vi' && VI().units && VI().units[u.id];
    return (v && v.title) || u.title;
  }
  function topicTitle(t, lang) {
    const v = lang === 'vi' && VI().topics && VI().topics[t.id];
    return (v && v.title) || t.title;
  }

  function render() {
    const root = document.getElementById('chapters');
    if (!root) return;
    const lang = getLang();
    root.textContent = '';
    const units = window.LearnData ? window.LearnData.units() : [];

    let total = 0;
    units.forEach(u => {
      total += u.topics.length;
      const box = el('div', 'chap');

      const head = el('a', 'chap-title');
      const chHref = BASE + 'chapter.html?c=' + encodeURIComponent(u.num);
      head.href = chHref;
      head.appendChild(el('span', 'chap-num', String(u.num)));
      head.appendChild(el('span', null, unitTitle(u, lang)));
      head.appendChild(el('span', 'chap-count', u.topics.length + (lang === 'vi' ? ' chủ đề' : ' topics')));
      box.appendChild(head);

      const ul = el('ul', 'topics');
      u.topics.forEach(t => {
        const li = el('li');
        const a = el('a');
        a.href = chHref + '#t-' + String(t.id).replace('.', '-');
        a.appendChild(el('span', 'id', t.id));
        a.appendChild(el('span', null, topicTitle(t, lang)));
        li.appendChild(a);
        ul.appendChild(li);
      });
      box.appendChild(ul);
      root.appendChild(box);
    });

    const sub = document.getElementById('igcse-sub');
    if (sub) {
      sub.textContent = !units.length ? '' : lang === 'vi'
        ? units.length + ' chương · ' + total + ' chủ đề'
        : units.length + ' chapters · ' + total + ' topics';
    }
    document.querySelectorAll('.seg button').forEach(b => {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.seg button').forEach(b => {
      b.addEventListener('click', () => { setLang(b.dataset.lang); render(); });
    });
    render(); // cập nhật nút EN|VI ngay, danh sách hiện khi dữ liệu nạp xong
    if (window.LearnData) window.LearnData.loadOverview().then(render).catch(() => { /* vẫn còn nút "Vào trang học" */ });
  });
})();
