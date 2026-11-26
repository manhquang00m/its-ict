/* Unit test page (20 minutes, theory questions) — same flow as classes/ol13/luyen-tap-35-phut.html.
   Questions are taken from window.EXERCISES (exercises-ch*.js) by id, so wording stays in sync with the practice exercises.
   No innerHTML: exercise HTML is copied node by node through an allow-list. Teacher marks the exported .txt. */
(() => {
  'use strict';
  const MINUTES = 20;
  const MAX_TEXT = 4000;
  const LANG_KEY = 'igcse9_lang';
  const $ = (s) => document.querySelector(s);

  // Fixed question set per unit (about 1 mark per minute). Ids refer to exercises-ch*.js.
  const UNITS = {
    u1: { n: 1, title: { en: 'Data representation', vi: 'Biểu diễn dữ liệu' }, ids: ['1.1-e6', '1.2-e7', '1.3-e7', '1.4-e4', '1.5-e3', '1.6-e4', '1.7-e5'] },
    u2: { n: 2, title: { en: 'Data transmission & encryption', vi: 'Truyền dữ liệu & mã hóa' }, ids: ['2.1-e1', '2.1-e6', '2.2-e5', '2.3-e1', '2.3-e7', '2.4-e5'] },
    u3: { n: 3, title: { en: 'Algorithm design & problem-solving', vi: 'Thiết kế thuật toán & giải quyết vấn đề' }, ids: ['3.1-e2', '3.1-e6', '3.2-e2', '3.3-e2', '3.4-e1', '3.5-e4', '3.6-e6', '3.7-e5'] },
    u4: { n: 4, title: { en: 'Hardware', vi: 'Phần cứng' }, ids: ['4.1-e1', '4.2-e5', '4.3-e1', '4.4-e2', '4.5-e3', '4.6-e1', '4.7-e2', '4.8-e1', '4.9-e2', '4.10-e1', '4.11-e1'] },
    u5: { n: 5, title: { en: 'Software', vi: 'Phần mềm' }, ids: ['5.1-e1', '5.1-e6', '5.2-e1', '5.2-e4', '5.3-e1', '5.3-e5', '5.4-e1', '5.4-e4'] },
    u6: { n: 6, title: { en: 'Boolean logic', vi: 'Logic Boole' }, ids: ['6.1-e1', '6.1-e2', '6.1-e5', '6.1-e6', '6.2-e2', '6.2-e3'] }
  };

  const TXT = {
    en: {
      pageTitle: 'Unit test', sub: 'IGCSE Computer Science (0478) — theory questions',
      back: '← Back to IGCSE 9', langLabel: 'Language',
      rules: [
        (n, p, m) => n + ' theory questions, ' + p + ' marks in total, marked by your teacher.',
        (n, p, m) => 'You have ' + m + ' minutes. The timer starts as soon as you press Start and keeps running even if you reload the page. Your test is submitted automatically when time runs out.',
        () => 'Write your answers in your own words. No notes, no textbook, no other websites.',
        () => 'Answer every part of a question. The number of marks is a guide to how many points to give.',
        () => 'Your answers are saved automatically in this browser. When you finish, download your answer file and send it to your teacher.'
      ],
      name: 'Full name', cls: 'Class', start: 'Start test', errName: 'Enter your full name (2–60 characters).', errCls: 'Class must be 30 characters or fewer.',
      submit: 'Submit', q: 'Question ', marks: 'marks', mark1: 'mark', goTo: 'Go to question ', answerFor: 'Answer for question ', placeholder: 'Write your answer here…',
      answered: 'Answered ', pal: 'Question list', confirmLeft: (n) => n + ' question(s) not answered yet. Submit anyway?', confirmNow: 'Submit now?',
      done: 'Test submitted', timeUsed: 'Time taken: ', answeredOf: (a, t) => 'Answered ' + a + '/' + t + ' questions — your teacher will mark them. Download your answer file and send it to your teacher.',
      dl: 'Download answer file (.txt)', cp: 'Copy answers', again: 'Start over', copied: 'Answers copied.', copyFail: 'Could not copy — please use the Download button.',
      confirmAgain: 'Delete your current answers and start over?',
      kinds: { short: 'Short answer', explain: 'Explain', apply: 'Apply' },
      bad: 'This unit test could not be loaded. Choose a unit from the IGCSE 9 page.', badLink: 'Go to IGCSE 9',
      exTitle: (n, t, m) => 'IGCSE CS 9 — UNIT ' + n + ' TEST (' + m + ' MIN) — ' + t, exName: 'Name: ', exClass: 'Class: ', exNoClass: '(not given)',
      exTime: 'Time taken: ', exMax: (p) => 'Maximum marks: ' + p + ' — marked by teacher', exAns: 'Answer: ', exBlank: '(left blank)', exMarks: 'marks'
    },
    vi: {
      pageTitle: 'Kiểm tra Unit', sub: 'IGCSE Computer Science (0478) — câu hỏi lý thuyết',
      back: '← Quay lại IGCSE 9', langLabel: 'Ngôn ngữ',
      rules: [
        (n, p, m) => n + ' câu hỏi lý thuyết, tổng ' + p + ' điểm, do giáo viên chấm.',
        (n, p, m) => 'Thời gian ' + m + ' phút, đồng hồ chạy ngay khi bấm Bắt đầu và không dừng lại kể cả khi tải lại trang. Hết giờ bài sẽ tự nộp.',
        () => 'Trả lời bằng lời của em. Không xem ghi chú, sách giáo khoa hay trang web khác.',
        () => 'Trả lời đủ mọi phần của câu hỏi. Số điểm gợi ý số ý cần nêu.',
        () => 'Bài làm được lưu tự động trên trình duyệt này. Làm xong, tải file bài làm gửi cho giáo viên.'
      ],
      name: 'Họ và tên', cls: 'Lớp', start: 'Bắt đầu làm bài', errName: 'Nhập họ và tên (2–60 ký tự).', errCls: 'Lớp tối đa 30 ký tự.',
      submit: 'Nộp bài', q: 'Câu ', marks: 'điểm', mark1: 'điểm', goTo: 'Đến câu ', answerFor: 'Bài làm câu ', placeholder: 'Viết câu trả lời của em tại đây…',
      answered: 'Đã làm ', pal: 'Danh sách câu hỏi', confirmLeft: (n) => 'Còn ' + n + ' câu chưa làm. Vẫn nộp bài?', confirmNow: 'Nộp bài ngay?',
      done: 'Đã nộp bài', timeUsed: 'Thời gian làm bài: ', answeredOf: (a, t) => 'Đã làm ' + a + '/' + t + ' câu — giáo viên sẽ chấm. Hãy tải file bài làm gửi cho giáo viên.',
      dl: 'Tải file bài làm (.txt)', cp: 'Sao chép bài làm', again: 'Làm lại từ đầu', copied: 'Đã sao chép bài làm.', copyFail: 'Không sao chép được — hãy dùng nút Tải file.',
      confirmAgain: 'Xóa bài làm hiện tại và bắt đầu lại từ đầu?',
      kinds: { short: 'Trả lời ngắn', explain: 'Giải thích', apply: 'Vận dụng' },
      bad: 'Không tải được bài kiểm tra Unit này. Hãy chọn unit từ trang IGCSE 9.', badLink: 'Đến trang IGCSE 9',
      exTitle: (n, t, m) => 'IGCSE CS 9 — KIỂM TRA UNIT ' + n + ' (' + m + ' PHÚT) — ' + t, exName: 'Họ tên: ', exClass: 'Lớp: ', exNoClass: '(không ghi)',
      exTime: 'Thời gian làm: ', exMax: (p) => 'Tổng điểm tối đa: ' + p + ' — giáo viên chấm', exAns: 'Trả lời: ', exBlank: '(bỏ trống)', exMarks: 'điểm'
    }
  };

  function el(tag, props, ...kids) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(props || {})) {
      if (k === 'class') e.className = v;
      else if (k === 'text') e.textContent = v;
      else e.setAttribute(k, v);
    }
    for (const c of kids) if (c != null) e.append(c);
    return e;
  }
  const pad = (n) => String(n).padStart(2, '0');
  const fmt = (ms) => { const s = Math.max(0, Math.ceil(ms / 1000)); return pad(Math.floor(s / 60)) + ':' + pad(s % 60); };

  // ---------- safe rendering of exercise HTML (allow-list, no attributes) ----------
  const ALLOWED = new Set(['p', 'b', 'i', 'code', 'pre', 'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'br']);
  function appendSafe(dst, html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const walk = (src, to) => {
      for (const n of src.childNodes) {
        if (n.nodeType === 3) to.append(document.createTextNode(n.nodeValue));
        else if (n.nodeType === 1) {
          const tag = n.tagName.toLowerCase();
          if (ALLOWED.has(tag)) { const e = document.createElement(tag); walk(n, e); to.append(e); }
          else walk(n, to); // unknown tag: drop the tag, keep its text
        }
      }
    };
    walk(doc.body, dst);
  }
  function toText(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const out = [];
    const walk = (node) => {
      for (const c of node.childNodes) {
        if (c.nodeType === 3) { out.push(c.nodeValue); continue; }
        if (c.nodeType !== 1) continue;
        const tag = c.tagName.toLowerCase();
        if (tag === 'li') out.push('\n- ');
        else if (tag === 'tr') out.push('\n');
        else if (tag === 'td' || tag === 'th') out.push(' | ');
        else if (tag === 'p' || tag === 'pre' || tag === 'br') out.push('\n');
        walk(c);
      }
    };
    walk(doc.body);
    return out.join('').replace(/ /g, ' ').replace(/[ \t]+/g, ' ').replace(/\n[ \t]+/g, '\n').replace(/\n\| /g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  }

  // ---------- load the unit ----------
  const unitKey = new URLSearchParams(location.search).get('unit');
  const unit = unitKey && Object.prototype.hasOwnProperty.call(UNITS, unitKey) ? UNITS[unitKey] : null;
  const byId = new Map(Object.values(window.EXERCISES || {}).flat().map((e) => [e.id, e]));
  const qs = unit ? unit.ids.map((id) => byId.get(id)).filter(Boolean) : [];
  const KEY = 'igcse9_unit_test_' + unitKey + '_v1';

  function readLang() { try { return localStorage.getItem(LANG_KEY) === 'vi' ? 'vi' : 'en'; } catch { return 'en'; } }
  function load() { try { const r = localStorage.getItem(KEY); return r ? JSON.parse(r) : null; } catch { return null; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch { /* storage may be blocked */ } }

  let S = null;
  let lang = readLang();
  let tick = null;
  let submitted = false;
  const T = () => TXT[lang];
  const qNo = (i) => String(i + 1);
  const topicOf = (q) => q.id.split('-')[0];
  const qHtml = (q) => (q.q && (q.q[lang] || q.q.en)) || '';
  const totalMarks = () => qs.reduce((n, q) => n + (Number(q.marks) || 0), 0);
  const isDone = (q) => { const a = S && S.answers[q.id]; return typeof a === 'string' && a.trim().length > 0; };

  function show(id) { for (const s of ['start', 'exam', 'result', 'bad']) $('#' + s).classList.toggle('hidden', s !== id); $('#bar').classList.toggle('hidden', id !== 'exam'); window.scrollTo(0, 0); }

  // ---------- start ----------
  function renderStart() {
    const t = T();
    document.documentElement.lang = lang;
    document.title = t.pageTitle + ' ' + unit.n + ': ' + unit.title[lang] + ' — IGCSE CS 9';
    $('#sTitle').textContent = t.pageTitle + ' ' + unit.n + ' (' + MINUTES + (lang === 'vi' ? ' phút' : ' min') + ')';
    $('#sSub').textContent = unit.title[lang] + ' · ' + t.sub;
    const ul = $('#rules'); ul.textContent = '';
    for (const r of t.rules) ul.append(el('li', { text: r(qs.length, totalMarks(), MINUTES) }));
    $('#lName').textContent = t.name; $('#lCls').textContent = t.cls; $('#go').textContent = t.start;
    $('#backS').textContent = t.back; $('#langLabel').textContent = t.langLabel;
    for (const b of document.querySelectorAll('#langBtns button')) b.setAttribute('aria-pressed', String(b.getAttribute('data-l') === lang));
  }
  function initStart() {
    renderStart();
    for (const b of document.querySelectorAll('#langBtns button')) b.addEventListener('click', () => { lang = b.getAttribute('data-l') === 'vi' ? 'vi' : 'en'; renderStart(); });
    $('#go').addEventListener('click', () => {
      const name = $('#name').value.trim().replace(/\s+/g, ' ');
      const cls = $('#cls').value.trim().replace(/\s+/g, ' ');
      if (name.length < 2 || name.length > 60) { $('#serr').textContent = T().errName; return; }
      if (cls.length > 30) { $('#serr').textContent = T().errCls; return; }
      const now = Date.now();
      S = { name, cls, lang, start: now, end: now + MINUTES * 60000, answers: {}, submitted: false };
      save();
      startExam();
    });
  }

  // ---------- exam ----------
  function buildExam() {
    const t = T();
    const root = $('#questions'); root.textContent = '';
    const pal = $('#pal'); pal.textContent = ''; pal.setAttribute('aria-label', t.pal);
    root.append(el('h2', { text: t.pageTitle + ' ' + unit.n + ': ' + unit.title[lang] }));
    qs.forEach((q, i) => {
      const card = el('div', { class: 'q', id: 'q-' + i });
      const kind = (t.kinds[q.kind] || t.kinds.short);
      card.append(el('span', { class: 'tag', text: topicOf(q) + ' · ' + kind + ' · ' + q.marks + ' ' + (q.marks === 1 ? t.mark1 : t.marks) }));
      card.append(el('div', { class: 'qh' }, el('span', { class: 'no', text: t.q + qNo(i) })));
      const body = el('div', { class: 'body' });
      appendSafe(body, qHtml(q));
      card.append(body);
      const ta = el('textarea', { 'aria-label': t.answerFor + qNo(i), maxlength: String(MAX_TEXT), spellcheck: 'false', autocomplete: 'off', placeholder: t.placeholder });
      ta.value = typeof S.answers[q.id] === 'string' ? S.answers[q.id] : '';
      ta.addEventListener('input', () => { S.answers[q.id] = ta.value.slice(0, MAX_TEXT); save(); refresh(); });
      card.append(ta);
      root.append(card);
      const b = el('button', { type: 'button', 'data-i': String(i), 'aria-label': t.goTo + qNo(i), text: qNo(i) });
      b.addEventListener('click', () => document.getElementById('q-' + i).scrollIntoView({ behavior: 'smooth', block: 'start' }));
      pal.append(b);
    });
    $('#submit').textContent = t.submit; $('#submit2').textContent = t.submit;
  }
  function refresh() {
    let n = 0;
    for (const b of document.querySelectorAll('#pal button')) {
      const d = isDone(qs[Number(b.getAttribute('data-i'))]); b.classList.toggle('done', d); if (d) n++;
    }
    $('#prog').textContent = T().answered + n + '/' + qs.length;
  }
  function startExam() {
    lang = S.lang === 'vi' ? 'vi' : 'en'; // the language chosen at the start stays fixed for this attempt
    document.documentElement.lang = lang;
    $('#who').textContent = S.name + (S.cls ? ' · ' + S.cls : '');
    buildExam(); refresh(); show('exam');
    const timer = $('#timer');
    const upd = () => {
      const left = S.end - Date.now();
      timer.textContent = fmt(left);
      timer.classList.toggle('low', left <= 5 * 60000);
      if (left <= 0) { clearInterval(tick); submit(true); }
    };
    upd(); tick = setInterval(upd, 1000);
  }

  // ---------- submit / result ----------
  function submit(auto) {
    if (submitted || S.submitted) return;
    if (!auto) {
      const left = qs.filter((q) => !isDone(q)).length;
      if (!confirm(left ? T().confirmLeft(left) : T().confirmNow)) return;
    }
    submitted = true;
    clearInterval(tick);
    S.submitted = true;
    S.submittedAt = Math.min(Date.now(), S.end);
    save();
    showResult();
  }
  function exportText() {
    const t = T();
    const L = [];
    L.push(t.exTitle(unit.n, unit.title[lang], MINUTES));
    L.push(t.exName + S.name); L.push(t.exClass + (S.cls || t.exNoClass));
    L.push(t.exTime + fmt(S.submittedAt - S.start) + ' / ' + MINUTES + ':00');
    L.push(t.exMax(totalMarks())); L.push('');
    qs.forEach((q, i) => {
      L.push(t.q.trim() + ' ' + qNo(i) + ' [' + q.id + '] (' + q.marks + ' ' + t.exMarks + '): ' + toText(qHtml(q)));
      L.push(t.exAns + (S.answers[q.id] || t.exBlank)); L.push('');
    });
    return L.join('\n');
  }
  function showResult() {
    lang = S.lang === 'vi' ? 'vi' : 'en';
    const t = T();
    document.documentElement.lang = lang;
    $('#rTitle').textContent = t.done;
    $('#rname').textContent = S.name + (S.cls ? ' · ' + S.cls : '') + ' · ' + unit.title[lang];
    $('#rtime').textContent = t.timeUsed + fmt(S.submittedAt - S.start) + ' / ' + MINUTES + ':00';
    const box = $('#res'); box.textContent = '';
    qs.forEach((q, i) => { const d = isDone(q); box.append(el('span', { class: d ? 'ok' : 'blank', text: qNo(i) + (d ? ' ✓' : ' –') })); });
    $('#rwr').textContent = t.answeredOf(qs.filter(isDone).length, qs.length);
    $('#dl').textContent = t.dl; $('#cp').textContent = t.cp; $('#again').textContent = t.again; $('#backR').textContent = t.back;
    show('result');
  }
  function download() {
    const safe = S.name.normalize('NFKD').replace(/[^\p{L}\p{N}]+/gu, '_').slice(0, 40) || 'answers';
    const blob = new Blob([exportText()], { type: 'text/plain;charset=utf-8' });
    const a = el('a', { href: URL.createObjectURL(blob), download: 'igcse9-unit-test-' + unitKey + '_' + safe + '.txt' });
    document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  async function copy() {
    try { await navigator.clipboard.writeText(exportText()); $('#toast').textContent = T().copied; }
    catch { $('#toast').textContent = T().copyFail; }
  }

  // ---------- wiring ----------
  if (!unit || qs.length !== unit.ids.length) {
    $('#badMsg').textContent = TXT[lang].bad;
    $('#badLink').textContent = TXT[lang].badLink;
    show('bad');
    return;
  }
  S = load();
  initStart();
  for (const id of ['#submit', '#submit2']) $(id).addEventListener('click', () => submit(false));
  $('#dl').addEventListener('click', download);
  $('#cp').addEventListener('click', copy);
  $('#again').addEventListener('click', () => {
    if (!confirm(T().confirmAgain)) return;
    try { localStorage.removeItem(KEY); } catch { /* ignore */ }
    S = null; location.reload();
  });
  window.addEventListener('beforeunload', (e) => { if (S && !S.submitted && !$('#exam').classList.contains('hidden')) { e.preventDefault(); e.returnValue = ''; } });

  if (S && S.submitted) showResult();
  else if (S && !S.submitted) startExam(); // if time already ran out, the first tick auto-submits
  else show('start');
})();
