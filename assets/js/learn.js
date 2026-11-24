// Ôn thi IGCSE CS 9: bảng ôn tập (data-page="course"), đề cương chương (data-page="chapter"),
// thẻ ghi nhớ (data-page="cards"). Dữ liệu do learn-data.js nạp từ igcse9/js; tiến độ do cs9-progress.js lưu.
// An toàn: chỉ HTML tĩnh first-party trong repo (reading, đề bài, gợi ý, đáp án) được chèn bằng innerHTML;
// mọi chuỗi khác (tiêu đề, thuật ngữ, câu trắc nghiệm, tham số URL) đi qua textContent / encodeURIComponent.
(function () {
  'use strict';

  /* ---------------- Ngôn ngữ & chế độ xem ---------------- */
  const KEY = 'igcse9_lang'; // dùng chung với trang chủ
  const MKEY = 'cs9_mode';   // 'brief' (Gọn) | 'full' (Đầy đủ)
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* bỏ qua */ } }
  };
  let lang = store.get(KEY) === 'en' ? 'en' : 'vi';
  let mode = store.get(MKEY) === 'full' ? 'full' : 'brief';

  const L = {
    vi: {
      course: 'IGCSE CS 9', courseFull: 'IGCSE Computer Science 9', chapter: 'Chương', semester: 'Học kỳ',
      topics: 'chủ đề', chapters: 'chương', back: '‹ Khoá học', inThis: 'Trong chương',
      brief: 'Gọn', full: 'Đầy đủ', print: 'In', pages: 'Sách tr.',
      need: 'Cần nắm', keyPoints: 'Ý chính', terms: 'Thuật ngữ',
      practice: 'Bài tập tự luận', ex: 'Bài', marks: 'điểm', hint: 'Gợi ý', ms: 'Đáp án & cách chấm',
      lv_recall: 'Nhận biết', lv_understand: 'Giải thích', lv_calc: 'Tính toán', lv_apply: 'Vận dụng',
      selfTest: 'Tự kiểm tra', selfTestDesc: 'Câu hỏi trộn từ mọi chủ đề trong chương. Chọn đáp án để xem ngay đúng/sai.',
      correct: 'Đúng', done: 'Đã làm', newSet: 'Làm bộ khác', right: 'Chính xác.', wrongAns: 'Chưa đúng. Đáp án: ',
      result: 'Kết quả', r_good: 'Rất tốt, em đã nắm chắc chương này.', r_mid: 'Khá. Xem lại các câu sai và đọc lại chủ đề liên quan.',
      r_low: 'Nên đọc lại đề cương (chế độ Đầy đủ) rồi thử lại.',
      prevCh: '‹ Chương ', nextCh: 'Chương ', backCourse: 'Về trang khoá học',
      loading: 'Đang tải…', notFound: 'Không tìm thấy chương này.', loadErr: 'Không tải được dữ liệu. Thử tải lại trang.',
      // tiến độ
      st: ['Chưa ôn', 'Đang ôn', 'Khá', 'Vững'],
      stHelp: 'Mức thành thạo tính theo 10 câu tự kiểm tra gần nhất của chủ đề: Khá từ 60% (ít nhất 3 câu), Vững từ 85% (ít nhất 5 câu).',
      markRead: 'Đánh dấu đã đọc', marked: 'Đã đọc', mastered: 'vững', acc: 'đúng',
      resume: 'Tiếp tục ôn', resumeBtn: 'Tiếp tục', start: 'Bắt đầu ôn', startDesc: 'Bắt đầu từ chủ đề 1.1, đọc ý chính rồi làm tự kiểm tra cuối chương.',
      overall: 'Tiến độ của em', resetProg: 'Xoá tiến độ', resetAsk: 'Xoá toàn bộ tiến độ ôn tập và thẻ đã nhớ trên trình duyệt này?',
      savedLocal: 'Tiến độ chỉ lưu trên trình duyệt này.',
      // thẻ ghi nhớ
      cards: 'Thẻ ghi nhớ', cardsN: 'thẻ', allChapter: 'Cả chương', dirTerm: 'Thuật ngữ → Nghĩa', dirDef: 'Nghĩa → Thuật ngữ',
      known: 'Đã nhớ', left: 'Còn lại trong lượt', flip: 'Bấm hoặc nhấn Space để lật', no: 'Chưa nhớ', yes: 'Nhớ rồi',
      keys: 'Phím tắt: Space lật thẻ · 1 hoặc ← Chưa nhớ · 2 hoặc → Nhớ rồi',
      roundDone: 'Xong lượt này!', allKnown: 'Em đã nhớ hết thẻ trong phần này.', againUnknown: 'Ôn tiếp thẻ chưa nhớ', againAll: 'Ôn lại tất cả',
      toChapter: 'Đọc đề cương chương', reviewThese: 'Nên ôn lại các chủ đề sau:'
    },
    en: {
      course: 'IGCSE CS 9', courseFull: 'IGCSE Computer Science 9', chapter: 'Chapter', semester: 'Semester',
      topics: 'topics', chapters: 'chapters', back: '‹ Course', inThis: 'In this chapter',
      brief: 'Brief', full: 'Full', print: 'Print', pages: 'Book p.',
      need: 'You need to', keyPoints: 'Key points', terms: 'Key terms',
      practice: 'Written exercises', ex: 'Exercise', marks: 'marks', hint: 'Hint', ms: 'Mark scheme',
      lv_recall: 'Recall', lv_understand: 'Explain', lv_calc: 'Calculate', lv_apply: 'Apply',
      selfTest: 'Self-test', selfTestDesc: 'Questions mixed from every topic in this chapter. Pick an answer to see right/wrong.',
      correct: 'Correct', done: 'Answered', newSet: 'New set', right: 'Correct.', wrongAns: 'Not quite. Answer: ',
      result: 'Result', r_good: 'Excellent, you know this chapter well.', r_mid: 'Good. Review the wrong answers and the related topics.',
      r_low: 'Re-read the sheet in Full mode, then try again.',
      prevCh: '‹ Chapter ', nextCh: 'Chapter ', backCourse: 'Back to course',
      loading: 'Loading…', notFound: 'Chapter not found.', loadErr: 'Could not load the data. Please reload the page.',
      st: ['Not started', 'In progress', 'Good', 'Mastered'],
      stHelp: 'Mastery uses the last 10 self-test answers for the topic: Good from 60% (at least 3 answers), Mastered from 85% (at least 5).',
      markRead: 'Mark as read', marked: 'Read', mastered: 'mastered', acc: 'correct',
      resume: 'Continue revising', resumeBtn: 'Continue', start: 'Start revising', startDesc: 'Start at topic 1.1: read the key points, then take the chapter self-test.',
      overall: 'Your progress', resetProg: 'Reset progress', resetAsk: 'Delete all revision progress and known cards in this browser?',
      savedLocal: 'Progress is saved in this browser only.',
      cards: 'Flashcards', cardsN: 'cards', allChapter: 'Whole chapter', dirTerm: 'Term → Meaning', dirDef: 'Meaning → Term',
      known: 'Known', left: 'Left in this round', flip: 'Click or press Space to flip', no: 'Not yet', yes: 'Got it',
      keys: 'Shortcuts: Space flip · 1 or ← Not yet · 2 or → Got it',
      roundDone: 'Round complete!', allKnown: 'You know every card in this set.', againUnknown: 'Keep going with unknown cards', againAll: 'Review all again',
      toChapter: 'Read the chapter sheet', reviewThese: 'Review these topics:'
    }
  };
  const t = k => (L[lang][k] != null ? L[lang][k] : L.vi[k]);

  /* ---------------- DOM helper ---------------- */
  function el(tag, props, children) {
    const n = document.createElement(tag);
    if (props) Object.keys(props).forEach(k => {
      if (k === 'class') n.className = props[k];
      else if (k === 'text') n.textContent = props[k];
      else if (k === 'html') n.innerHTML = props[k]; // CHỈ dùng cho HTML tĩnh trong repo
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), props[k]);
      else n.setAttribute(k, props[k]);
    });
    (children || []).forEach(c => { if (c != null) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }
  const chapterHref = n => 'chapter.html?c=' + encodeURIComponent(n);
  const cardsHref = (n, id) => 'cards.html?c=' + encodeURIComponent(n) + (id ? '&t=' + encodeURIComponent(id) : '');
  const anchorOf = id => 't-' + String(id).replace('.', '-');

  /* ---------------- Truy cập dữ liệu ---------------- */
  const VI = () => window.VI || {};
  const unitTitle = u => (lang === 'vi' && VI().units && VI().units[u.id] && VI().units[u.id].title) || u.title;
  function topicField(tp, f) {
    const v = lang === 'vi' && VI().topics && VI().topics[tp.id];
    return (v && v[f]) || tp[f] || '';
  }
  const objText = o => (lang === 'vi' && VI().objectives && VI().objectives[o]) || (window.OBJECTIVES || {})[o] || o;
  function glossaryOf(tp) {
    const seen = new Set(), out = [];
    tp.objectives.forEach(o => {
      const src = (lang === 'vi' && VI().glossary && VI().glossary[o]) || (window.GLOSSARY || {})[o] || [];
      src.forEach(([term, def]) => { const k = String(term).toLowerCase(); if (!seen.has(k)) { seen.add(k); out.push([String(term), String(def)]); } });
    });
    return out;
  }
  const pick2 = obj => obj ? (obj[lang] || obj.en || '') : '';

  // Thẻ ghi nhớ của một chủ đề: khoá "<objective>:<chỉ số>" không phụ thuộc ngôn ngữ (glossary EN/VI cùng thứ tự)
  function cardsOf(tp, seen) {
    const out = [];
    tp.objectives.forEach(o => {
      const en = (window.GLOSSARY || {})[o] || [];
      const vi = (VI().glossary || {})[o];
      en.forEach((row, i) => {
        const k = String(row[0]).toLowerCase();
        if (seen.has(k)) return; seen.add(k);
        const v = (lang === 'vi' && vi && vi.length === en.length && vi[i]) || row;
        out.push({ key: o + ':' + i, topic: tp.id, term: String(v[0]), def: String(v[1]) });
      });
    });
    return out;
  }

  /* ---------------- Tiến độ (hiển thị) ---------------- */
  const P = window.CS9Progress || null;
  const stDot = id => el('span', { class: 'st', 'data-st': id });
  // Cập nhật mọi chỗ hiển thị trạng thái trên trang (gọi lại khi tiến độ thay đổi)
  function paintStatus() {
    if (!P) return;
    document.querySelectorAll('[data-st]').forEach(n => { const s = P.status(n.dataset.st); n.className = 'st s' + s; n.title = n.dataset.st + ': ' + t('st')[s]; });
    document.querySelectorAll('[data-stl]').forEach(n => {
      const id = n.dataset.stl, s = P.status(id), a = P.accuracy(id);
      n.className = 'st-label s' + s; n.textContent = t('st')[s] + (a.n ? ' · ' + a.pct + '% ' + t('acc') : '');
    });
    document.querySelectorAll('[data-read]').forEach(b => {
      const r = P.isRead(b.dataset.read); b.setAttribute('aria-pressed', String(r)); b.textContent = r ? '✓ ' + t('marked') : t('markRead');
    });
    document.querySelectorAll('[data-sum]').forEach(n => {
      const ids = n.dataset.sum.split(','); n.textContent = ids.filter(id => P.status(id) === 3).length + '/' + ids.length + ' ' + t('mastered');
    });
    document.querySelectorAll('[data-bar]').forEach(n => { n.style.width = P.score(n.dataset.bar.split(',')) + '%'; });
  }
  addEventListener('cs9progress', paintStatus);

  // Ngân hàng trắc nghiệm của chủ đề (chỉ lấy câu có phương án sai -> dạng chọn 1).
  function quizPool(tp) {
    const pool = [];
    tp.objectives.forEach(o => {
      const en = (window.BANK || {})[o] || [], vi = (VI().bank || {})[o] || [];
      en.forEach((r, i) => {
        const v = vi[i];
        const row = (lang === 'vi' && v && (v[2] || []).length === (r[2] || []).length) ? v : r;
        if (!(row[2] || []).length) return;
        const extra = row[3] || r[3] || {};
        pool.push({ topic: tp.id, q: String(row[0]), a: String(row[1]), wrong: row[2].map(String), e: extra.e ? String(extra.e) : '', c: (r[3] && r[3].c) ? String(r[3].c) : '' });
      });
    });
    return pool;
  }

  // Xáo trộn (Fisher-Yates). Dùng crypto cho đồng bộ quy ước chung; ở đây không phục vụ bảo mật.
  function rand(n) {
    if (window.crypto && crypto.getRandomValues) { const a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % n; }
    return Math.floor(Math.random() * n);
  }
  function shuffle(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rand(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  function wrapTables(root) {
    root.querySelectorAll('table').forEach(tb => {
      if (tb.parentElement && tb.parentElement.classList.contains('tbl-wrap')) return;
      const w = el('div', { class: 'tbl-wrap' }); tb.parentNode.insertBefore(w, tb); w.appendChild(tb);
    });
  }

  // Nút chọn 2 giá trị (EN|VI, Gọn|Đầy đủ)
  function seg(label, items, current, onPick) {
    const box = el('div', { class: 'seg', role: 'group', 'aria-label': label });
    items.forEach(([val, text]) => {
      const btn = el('button', { type: 'button', 'aria-pressed': String(val === current), text: text });
      btn.addEventListener('click', () => {
        box.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
        onPick(val);
      });
      box.appendChild(btn);
    });
    return box;
  }
  function langSwitch(rerender) {
    return seg('Ngôn ngữ / Language', [['en', 'EN'], ['vi', 'VI']], lang, l => {
      if (l === lang) return; lang = l; store.set(KEY, l); document.documentElement.lang = l; rerender();
    });
  }
  function modeSwitch() {
    return seg(t('brief') + ' / ' + t('full'), [['brief', t('brief')], ['full', t('full')]], mode, m => {
      mode = m; store.set(MKEY, m); document.body.dataset.mode = m; onScroll();
    });
  }

  /* =====================================================================
     TRANG CHƯƠNG (đề cương ôn tập)
     ===================================================================== */
  const LEVELS = [
    { key: 'recall', kinds: ['short'] },
    { key: 'understand', kinds: ['explain'] },
    { key: 'calc', kinds: ['calc', 'trace', 'logic'] },
    { key: 'apply', kinds: ['apply', 'code'] }
  ];
  const levelOf = kind => { const lv = LEVELS.find(x => x.kinds.includes(kind)); return lv ? lv.key : null; };
  // Các khối được coi là "ý cần nhớ" ở chế độ Gọn
  const KEY_SEL = '.tip, table, .diagram, .gate-grid';
  let unitCtx = null;

  function chapterPage() {
    const app = document.getElementById('app');
    app.appendChild(el('p', { class: 'state', text: t('loading') }));
    const raw = new URLSearchParams(location.search).get('c') || '';
    // Chỉ chấp nhận 1–6, sau đó còn đối chiếu với dữ liệu thật.
    if (!/^[1-6]$/.test(raw)) return showState(t('notFound'), true);
    const ch = parseInt(raw, 10);
    window.LearnData.loadChapter(ch).then(() => {
      const unit = window.LearnData.units().find(u => u.num === ch);
      if (!unit) return showState(t('notFound'), true);
      unitCtx = unit;
      renderChapter();
      // vào thẳng chủ đề bằng #t-X-Y (chỉ dùng để tìm phần tử, không chèn vào DOM)
      if (/^#(t-[1-6]-\d{1,2}|selftest)$/.test(location.hash)) {
        const target = document.getElementById(location.hash.slice(1));
        if (target) target.scrollIntoView();
      }
    }).catch(() => showState(t('loadErr'), true));
  }

  function showState(msg, isErr) {
    const app = document.getElementById('app');
    app.textContent = '';
    app.appendChild(el('p', { class: 'state' + (isErr ? ' err' : ''), text: msg }));
    app.appendChild(el('p', null, [el('a', { href: './', text: t('backCourse') })]));
  }

  function renderChapter() {
    const unit = unitCtx;
    const app = document.getElementById('app');
    const y = window.scrollY;
    app.textContent = '';
    document.body.dataset.mode = mode;
    document.title = t('chapter') + ' ' + unit.num + ' · ' + unitTitle(unit) + ' | ' + t('course');

    const ids = unit.topics.map(x => x.id).join(',');
    app.appendChild(el('header', { class: 'ch-head' }, [
      el('a', { class: 'back', href: './', text: t('back') }),
      el('h1', { text: t('chapter') + ' ' + unit.num + ' · ' + unitTitle(unit) }),
      el('p', { class: 'sub' }, [
        t('semester') + ' ' + (unit.semester || 1) + ' · ' + unit.topics.length + ' ' + t('topics') + ' · ',
        el('span', { 'data-sum': ids })
      ]),
      el('div', { class: 'meter', title: t('stHelp') }, [el('i', { 'data-bar': ids })]),
      el('div', { class: 'tools' }, [
        modeSwitch(), langSwitch(renderChapter),
        el('a', { class: 'btn', href: cardsHref(unit.num), text: t('cards') }),
        el('button', { type: 'button', class: 'btn', text: t('print'), onclick: () => window.print() })
      ])
    ]));

    unit.topics.forEach(tp => app.appendChild(topicBlock(tp)));

    // Tự kiểm tra cả chương
    const pool = [];
    unit.topics.forEach(tp => quizPool(tp).forEach(q => pool.push(q)));
    const qroot = el('div');
    app.appendChild(el('section', { class: 'selftest', id: 'selftest' }, [
      el('h2', { text: t('selfTest') + ' · ' + t('chapter') + ' ' + unit.num }),
      el('p', { class: 'muted', text: t('selfTestDesc') }),
      qroot
    ]));
    startQuiz(qroot, pool, 20);

    app.appendChild(pager(unit));
    renderToc(unit);
    paintStatus();
    if (y) window.scrollTo(0, y);
    onScroll();
  }

  function topicBlock(tp) {
    const sec = el('section', { class: 'topic', id: anchorOf(tp.id) });
    sec.appendChild(el('div', { class: 'topic-head' }, [
      el('h2', null, [el('span', { class: 'id', text: tp.id }), topicField(tp, 'title')]),
      P ? el('span', { class: 'topic-st', title: t('stHelp') }, [stDot(tp.id), el('span', { 'data-stl': tp.id })]) : null
    ]));
    const summary = topicField(tp, 'summary');
    if (summary) sec.appendChild(el('p', { class: 'lede', text: summary }));
    if (tp.pages) sec.appendChild(el('p', { class: 'pages', text: t('pages') + ' ' + tp.pages }));

    // Cần nắm = mục tiêu của chủ đề (đúng những gì đề thi hỏi)
    const need = el('ul');
    tp.objectives.forEach(o => need.appendChild(el('li', { text: objText(o) })));
    sec.appendChild(el('div', { class: 'need' }, [el('h3', { class: 'label', text: t('need') }), need]));

    // Nội dung: bản Gọn (chỉ khung ghi nhớ, bảng, sơ đồ) và bản Đầy đủ; CSS ẩn/hiện theo body[data-mode]
    const reading = topicField(tp, 'reading');
    const brief = briefOf(reading);
    const full = el('div', { class: 'full prose' + (brief ? '' : ' always'), html: reading }); // HTML tĩnh trong repo
    wrapTables(full);
    if (brief) {
      wrapTables(brief);
      sec.appendChild(el('h3', { class: 'label brief', text: t('keyPoints') }));
      sec.appendChild(brief);
    }
    sec.appendChild(full);

    const terms = glossaryOf(tp);
    if (terms.length) {
      const dl = el('dl');
      terms.forEach(([term, def]) => { dl.appendChild(el('dt', { text: term })); dl.appendChild(el('dd', { text: def })); });
      sec.appendChild(el('div', { class: 'terms' }, [el('h3', { class: 'label', text: t('terms') }), dl]));
    }

    const nCards = cardsOf(tp, new Set()).length;
    sec.appendChild(el('div', { class: 'topic-actions' }, [
      P ? el('button', { type: 'button', class: 'btn mark', 'data-read': tp.id, onclick: () => P.setRead(tp.id, !P.isRead(tp.id)) }) : null,
      nCards ? el('a', { class: 'btn', href: cardsHref(unitCtx.num, tp.id), text: t('cards') + ' (' + nCards + ')' }) : null
    ]));

    const exList = ((window.EXERCISES || {})[tp.id] || []).slice();
    if (exList.length) {
      const rank = e => { const i = LEVELS.findIndex(lv => lv.kinds.includes(e.kind)); return i < 0 ? LEVELS.length : i; };
      exList.sort((a, b) => rank(a) - rank(b)); // sort ổn định: giữ thứ tự gốc trong cùng mức
      const det = el('details', { class: 'practice' }, [el('summary', { text: t('practice') + ' (' + exList.length + ')' })]);
      exList.forEach((e, i) => det.appendChild(exerciseCard(e, i + 1)));
      wrapTables(det);
      sec.appendChild(det);
    }
    return sec;
  }

  // Tách HTML lý thuyết thành các mục theo <h4>. Nội dung trước <h4> đầu tiên là phần mở đầu.
  function splitReading(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html; // HTML tĩnh trong repo igcse9
    const out = []; let cur = { title: null, nodes: [] };
    Array.from(tmp.childNodes).forEach(n => {
      if (n.nodeType === 1 && n.tagName === 'H4') { out.push(cur); cur = { title: n.textContent, nodes: [] }; }
      else cur.nodes.push(n);
    });
    out.push(cur);
    return out;
  }

  // Bản Gọn: với mỗi mục chỉ giữ các khối ý chính; trả về null nếu chủ đề không có khối nào.
  function briefOf(html) {
    const box = el('div', { class: 'brief prose' });
    let count = 0;
    splitReading(html).forEach(s => {
      const keep = s.nodes.filter(n => n.nodeType === 1 && n.matches(KEY_SEL));
      if (!keep.length) return;
      if (s.title) box.appendChild(el('h4', { text: s.title }));
      keep.forEach(n => box.appendChild(n));
      count += keep.length;
    });
    return count ? box : null;
  }

  function exerciseCard(e, no) {
    const lv = levelOf(e.kind);
    const card = el('article', { class: 'ex' });
    card.appendChild(el('div', { class: 'ex-head' }, [
      el('b', { text: t('ex') + ' ' + no }),
      lv ? el('span', { text: t('lv_' + lv) }) : null,
      e.marks ? el('span', { class: 'marks', text: e.marks + ' ' + t('marks') }) : null
    ]));
    card.appendChild(el('div', { class: 'prose', html: pick2(e.q) }));
    if (e.hint) card.appendChild(el('details', { class: 'hint' }, [el('summary', { text: t('hint') }), el('div', { class: 'inner prose', html: pick2(e.hint) })]));
    if (e.ms) card.appendChild(el('details', { class: 'ms' }, [el('summary', { text: t('ms') }), el('div', { class: 'inner prose', html: pick2(e.ms) })]));
    return card;
  }

  /* ---------------- Trắc nghiệm ---------------- */
  function startQuiz(root, pool, n) {
    root.textContent = '';
    const qs = shuffle(pool).slice(0, Math.min(n, pool.length));
    let answered = 0, score = 0;
    const byTopic = {}; // kết quả lượt này theo chủ đề, để gợi ý chủ đề cần ôn lại
    const scoreEl = el('span', { class: 'quiz-score' });
    const upd = () => { scoreEl.textContent = t('done') + ' ' + answered + '/' + qs.length + ' · ' + t('correct') + ' ' + score; };
    root.appendChild(el('div', { class: 'quiz-bar' }, [
      scoreEl, el('button', { type: 'button', class: 'btn', text: t('newSet'), onclick: () => startQuiz(root, pool, n) })
    ]));
    const list = el('div');
    root.appendChild(list);
    const resultBox = el('div');
    root.appendChild(resultBox);

    qs.forEach((q, i) => {
      const card = el('div', { class: 'mcq' });
      card.appendChild(el('p', { class: 'mcq-q' }, [el('span', { class: 'n', text: (i + 1) + '.' }), el('span', { text: q.q })]));
      if (q.c) card.appendChild(el('pre', { class: 'code', text: q.c }));
      const opts = el('div', { class: 'opts' });
      const options = shuffle([q.a].concat(q.wrong));
      const btns = options.map((txt, k) => el('button', { type: 'button', class: 'opt' }, [el('span', { class: 'k', text: 'ABCDEFG'[k] }), el('span', { text: txt })]));
      btns.forEach((b, k) => {
        b.addEventListener('click', () => {
          btns.forEach(x => { x.disabled = true; });
          const ok = options[k] === q.a;
          btns[options.indexOf(q.a)].classList.add('right');
          if (!ok) b.classList.add('wrong');
          answered++; if (ok) score++;
          const r = byTopic[q.topic] || (byTopic[q.topic] = { n: 0, ok: 0 }); r.n++; if (ok) r.ok++;
          if (P && q.topic) P.record(q.topic, ok);
          card.appendChild(el('div', { class: 'feedback ' + (ok ? 'ok' : 'no') }, [
            el('b', { text: ok ? t('right') : t('wrongAns') + q.a }), q.e ? ' ' + q.e : null
          ]));
          upd();
          if (answered === qs.length) showResult();
        });
        opts.appendChild(b);
      });
      card.appendChild(opts);
      list.appendChild(card);
    });

    function showResult() {
      const pct = Math.round(score / qs.length * 100);
      const msg = pct >= 85 ? t('r_good') : pct >= 60 ? t('r_mid') : t('r_low');
      // Chủ đề làm sai trong lượt này -> link tới đúng chủ đề để ôn lại
      const weak = Object.keys(byTopic).filter(id => byTopic[id].ok < byTopic[id].n).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
      const units = window.LearnData ? window.LearnData.units() : [];
      const titleOf = id => { for (const u of units) { const x = u.topics.find(tp => tp.id === id); if (x) return topicField(x, 'title'); } return ''; };
      const weakList = weak.length ? el('div', { class: 'weak' }, [
        el('p', { text: t('reviewThese') }),
        el('ul', null, weak.map(id => el('li', null, [
          el('a', { href: '#' + anchorOf(id), text: id + ' ' + titleOf(id) }),
          el('span', { class: 'muted', text: ' · ' + byTopic[id].ok + '/' + byTopic[id].n + ' ' + t('acc') })
        ])))
      ]) : null;
      resultBox.appendChild(el('div', { class: 'quiz-result' }, [
        el('span', { text: t('result') }), el('b', { text: score + '/' + qs.length + ' (' + pct + '%)' }), el('p', { text: msg }),
        weakList,
        el('button', { type: 'button', class: 'btn', text: t('newSet'), onclick: () => { startQuiz(root, pool, n); root.scrollIntoView({ block: 'start' }); } })
      ]));
    }
    upd();
  }

  function pager(unit) {
    const box = el('nav', { class: 'pager', 'aria-label': 'pager' });
    box.appendChild(unit.num > 1
      ? el('a', { href: chapterHref(unit.num - 1), text: t('prevCh') + (unit.num - 1) })
      : el('a', { href: './', text: t('back') }));
    box.appendChild(unit.num < 6
      ? el('a', { href: chapterHref(unit.num + 1), text: t('nextCh') + (unit.num + 1) + ' ›' })
      : el('a', { href: './', text: t('backCourse') + ' ›' }));
    return box;
  }

  function renderToc(unit) {
    const toc = document.getElementById('toc');
    if (!toc) return;
    toc.textContent = '';
    toc.appendChild(el('h4', { text: t('inThis') }));
    const ol = el('ol');
    unit.topics.forEach(tp => ol.appendChild(el('li', null, [el('a', { href: '#' + anchorOf(tp.id), 'data-spy': anchorOf(tp.id) }, [
      P ? stDot(tp.id) : null, el('span', { class: 'id', text: tp.id }), el('span', { class: 't', text: topicField(tp, 'title') })
    ])])));
    ol.appendChild(el('li', { class: 'sep' }, [el('a', { href: '#selftest', 'data-spy': 'selftest' }, [el('span', { class: 't-always', text: t('selfTest') })])]));
    toc.appendChild(ol);
  }

  // Đánh dấu chủ đề đang xem trong mục lục
  let ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const links = Array.from(document.querySelectorAll('#toc [data-spy]'));
      let active = null;
      links.forEach(a => { const s = document.getElementById(a.dataset.spy); if (s && s.getBoundingClientRect().top < 140) active = a; });
      links.forEach(a => a.classList.toggle('active', a === active));
      // nhớ chủ đề đang ôn để bảng ôn tập có nút "Tiếp tục ôn"
      const m = active && /^t-([1-6])-(\d{1,2})$/.exec(active.dataset.spy);
      if (m && P) P.setLast(m[1] + '.' + m[2]);
      const toc = document.getElementById('toc');
      if (active && toc && innerWidth <= 900 && toc.dataset.last !== active.dataset.spy) {
        toc.dataset.last = active.dataset.spy;
        toc.scrollTo({ left: active.offsetLeft - 16, behavior: 'smooth' });
      }
    });
  }

  /* =====================================================================
     TRANG KHOÁ HỌC
     ===================================================================== */
  function coursePage() {
    const app = document.getElementById('app');
    app.appendChild(el('p', { class: 'state', text: t('loading') }));
    window.LearnData.loadOverview().then(renderCourse).catch(() => {
      app.textContent = ''; app.appendChild(el('p', { class: 'state err', text: t('loadErr') }));
    });
  }

  function renderCourse() {
    const app = document.getElementById('app');
    app.textContent = '';
    const units = window.LearnData.units();
    const total = units.reduce((s, u) => s + u.topics.length, 0);
    document.title = t('courseFull') + ' | ITS ICT';

    app.appendChild(el('header', { class: 'course-head' }, [
      el('div', null, [
        el('h1', { text: t('courseFull') }),
        el('p', { class: 'sub', text: units.length + ' ' + t('chapters') + ' · ' + total + ' ' + t('topics') + ' · Cambridge IGCSE 0478' })
      ]),
      el('div', { class: 'right' }, [langSwitch(renderCourse)])
    ]));

    // Tiếp tục ôn (chủ đề xem gần nhất) hoặc Bắt đầu
    const all = [];
    units.forEach(u => u.topics.forEach(tp => all.push({ u, tp })));
    const lastId = P && P.last();
    const last = all.find(x => x.tp.id === lastId);
    const go = last || all[0];
    if (go) {
      const href = chapterHref(go.u.num) + '#' + anchorOf(go.tp.id);
      app.appendChild(el('section', { class: 'resume' }, [
        el('div', null, [
          el('p', { class: 'k', text: last ? t('resume') : t('start') }),
          el('a', { class: 'resume-title', href: href }, [el('span', { class: 'id', text: go.tp.id }), topicField(go.tp, 'title')]),
          el('p', { class: 'muted', text: last ? t('chapter') + ' ' + go.u.num + ' · ' + unitTitle(go.u) : t('startDesc') })
        ]),
        el('a', { class: 'btn btn-go', href: href, text: (last ? t('resumeBtn') : t('start')) + ' ›' })
      ]));
    }

    // Tổng quan tiến độ: số chủ đề theo từng mức
    if (P) {
      const counts = [0, 0, 0, 0];
      all.forEach(x => counts[P.status(x.tp.id)]++);
      const bar = el('div', { class: 'stack', role: 'img', 'aria-label': t('st').map((s, i) => s + ' ' + counts[i]).join(', ') });
      [3, 2, 1].forEach(s => { if (counts[s]) bar.appendChild(el('i', { class: 's' + s, style: 'width:' + (counts[s] / all.length * 100) + '%' })); });
      const legend = el('ul', { class: 'legend' });
      [3, 2, 1, 0].forEach(s => legend.appendChild(el('li', null, [el('span', { class: 'st s' + s }), t('st')[s] + ' ', el('b', { text: String(counts[s]) })])));
      app.appendChild(el('section', { class: 'overall' }, [
        el('h2', { class: 'sem-title', text: t('overall') }), bar, legend,
        el('p', { class: 'muted small', text: t('stHelp') })
      ]));
    }

    const sems = Array.from(new Set(units.map(u => u.semester || 1))).sort();
    sems.forEach(s => {
      app.appendChild(el('h2', { class: 'sem-title', text: t('semester') + ' ' + s }));
      const list = el('ol', { class: 'chlist' });
      units.filter(u => (u.semester || 1) === s).forEach(u => {
        const ids = u.topics.map(x => x.id).join(',');
        const topics = el('ul', { class: 'ch-topics' });
        u.topics.forEach(tp => topics.appendChild(el('li', null, [el('a', { href: chapterHref(u.num) + '#' + anchorOf(tp.id) }, [
          P ? stDot(tp.id) : null, el('span', { class: 'id', text: tp.id }), topicField(tp, 'title')
        ])])));
        list.appendChild(el('li', { class: 'chrow', id: 'ch-' + u.num }, [
          el('div', { class: 'ch-row-head' }, [
            el('a', { class: 'ch-link', href: chapterHref(u.num) }, [el('span', { class: 'n', text: String(u.num) }), el('span', { text: unitTitle(u) })]),
            P ? el('span', { class: 'ch-prog' }, [el('span', { class: 'meter' }, [el('i', { 'data-bar': ids })]), el('span', { 'data-sum': ids })]) : null,
            el('a', { class: 'btn btn-sm', href: cardsHref(u.num), text: t('cards') })
          ]),
          topics
        ]));
      });
      app.appendChild(list);
    });

    if (P) app.appendChild(el('p', { class: 'foot-note muted small' }, [
      t('savedLocal') + ' ',
      el('button', { type: 'button', class: 'linkish', text: t('resetProg'), onclick: () => { if (confirm(t('resetAsk'))) { P.reset(); renderCourse(); } } })
    ]));
    paintStatus();
  }

  /* =====================================================================
     THẺ GHI NHỚ (flashcard, kiểu Quizlet)
     ===================================================================== */
  const cardState = { unit: null, scope: '', dir: 'term', queue: [], flipped: false };

  function cardsPage() {
    const app = document.getElementById('app');
    app.appendChild(el('p', { class: 'state', text: t('loading') }));
    const qs = new URLSearchParams(location.search);
    const raw = qs.get('c') || '';
    if (!/^[1-6]$/.test(raw)) return showState(t('notFound'), true);
    const ch = parseInt(raw, 10);
    window.LearnData.loadChapter(ch).then(() => {
      const unit = window.LearnData.units().find(u => u.num === ch);
      if (!unit) return showState(t('notFound'), true);
      cardState.unit = unit;
      const tq = qs.get('t') || '';
      cardState.scope = unit.topics.some(x => x.id === tq) ? tq : ''; // chỉ nhận id có thật trong chương
      newRound(false);
      renderCards();
      document.addEventListener('keydown', cardKeys);
    }).catch(() => showState(t('loadErr'), true));
  }

  function deck() {
    const unit = cardState.unit, seen = new Set(), out = [];
    unit.topics.forEach(tp => cardsOf(tp, seen).forEach(c => { if (!cardState.scope || c.topic === cardState.scope) out.push(c); }));
    return out;
  }
  // Lượt mới: xáo các thẻ chưa nhớ (hoặc tất cả nếu reviewAll)
  function newRound(reviewAll) {
    const d = deck();
    if (reviewAll && P) d.forEach(c => P.setCard(c.key, false));
    cardState.queue = shuffle(d.filter(c => !(P && P.cardKnown(c.key)))).map(c => c.key);
    cardState.flipped = false;
  }

  function renderCards() {
    const unit = cardState.unit;
    const app = document.getElementById('app');
    app.textContent = '';
    const d = deck(), byKey = {};
    d.forEach(c => { byKey[c.key] = c; });
    const knownN = d.filter(c => P && P.cardKnown(c.key)).length;
    document.title = t('cards') + ' · ' + t('chapter') + ' ' + unit.num + ' | ' + t('course');

    const scopeSel = el('select', { class: 'sel', 'aria-label': t('topics') });
    scopeSel.appendChild(el('option', { value: '', text: t('allChapter') }));
    unit.topics.forEach(tp => { if (cardsOf(tp, new Set()).length) scopeSel.appendChild(el('option', { value: tp.id, text: tp.id + ' ' + topicField(tp, 'title') })); });
    scopeSel.value = cardState.scope;
    scopeSel.addEventListener('change', () => {
      cardState.scope = unit.topics.some(x => x.id === scopeSel.value) ? scopeSel.value : '';
      history.replaceState(null, '', cardsHref(unit.num, cardState.scope));
      newRound(false); renderCards();
    });

    app.appendChild(el('header', { class: 'ch-head' }, [
      el('a', { class: 'back', href: chapterHref(unit.num), text: '‹ ' + t('chapter') + ' ' + unit.num }),
      el('h1', { text: t('cards') }),
      el('p', { class: 'sub', text: t('chapter') + ' ' + unit.num + ' · ' + unitTitle(unit) }),
      el('div', { class: 'tools' }, [
        scopeSel,
        seg(t('dirTerm') + ' / ' + t('dirDef'), [['term', t('dirTerm')], ['def', t('dirDef')]], cardState.dir, v => { cardState.dir = v; cardState.flipped = false; renderCards(); }),
        langSwitch(renderCards)
      ])
    ]));

    app.appendChild(el('div', { class: 'cards-prog' }, [
      el('span', { text: t('known') + ' ' + knownN + '/' + d.length }),
      el('span', { class: 'meter' }, [el('i', { style: 'width:' + (d.length ? knownN / d.length * 100 : 0) + '%' })]),
      el('span', { class: 'muted', text: t('left') + ': ' + cardState.queue.length })
    ]));

    const cur = byKey[cardState.queue[0]];
    if (!cur) {
      const left = d.length - knownN;
      app.appendChild(el('div', { class: 'cards-done' }, [
        el('b', { text: left ? t('roundDone') : t('allKnown') }),
        el('p', { class: 'muted', text: t('known') + ' ' + knownN + '/' + d.length }),
        el('div', { class: 'row' }, [
          left ? el('button', { type: 'button', class: 'btn btn-go', text: t('againUnknown'), onclick: () => { newRound(false); renderCards(); } }) : null,
          el('button', { type: 'button', class: 'btn', text: t('againAll'), onclick: () => { newRound(true); renderCards(); } }),
          el('a', { class: 'btn', href: chapterHref(unit.num), text: t('toChapter') })
        ])
      ]));
      return;
    }

    const topic = unit.topics.find(x => x.id === cur.topic);
    const frontText = cardState.dir === 'term' ? cur.term : cur.def;
    const backText = cardState.dir === 'term' ? cur.def : cur.term;
    const card = el('button', { type: 'button', class: 'flash' + (cardState.flipped ? ' flipped' : ''), 'aria-label': t('flip'), onclick: flipCard }, [
      el('span', { class: 'face front' }, [
        el('span', { class: 'face-text' + (cardState.dir === 'term' ? ' big' : ''), text: frontText }),
        el('span', { class: 'face-hint', text: t('flip') })
      ]),
      el('span', { class: 'face back' }, [
        el('span', { class: 'face-text' + (cardState.dir === 'def' ? ' big' : ''), text: backText }),
        el('span', { class: 'face-hint', text: cur.topic + ' · ' + (topic ? topicField(topic, 'title') : '') })
      ])
    ]);
    app.appendChild(el('div', { class: 'card-stage' }, [card]));
    app.appendChild(el('div', { class: 'card-actions' }, [
      el('button', { type: 'button', class: 'btn btn-no', onclick: () => answerCard(false) }, [t('no'), el('kbd', { text: '1' })]),
      el('button', { type: 'button', class: 'btn btn-yes', onclick: () => answerCard(true) }, [t('yes'), el('kbd', { text: '2' })])
    ]));
    app.appendChild(el('p', { class: 'muted small center', text: t('keys') }));
  }

  function flipCard() {
    cardState.flipped = !cardState.flipped;
    const c = document.querySelector('.flash');
    if (c) c.classList.toggle('flipped', cardState.flipped);
  }
  function answerCard(known) {
    const key = cardState.queue.shift();
    if (key == null) return;
    if (known) { if (P) P.setCard(key, true); }
    else cardState.queue.splice(Math.min(cardState.queue.length, 4), 0, key); // gặp lại sau vài thẻ
    cardState.flipped = false;
    renderCards();
  }
  function cardKeys(e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'SELECT' || tag === 'INPUT' || tag === 'TEXTAREA') return;
    if (!document.querySelector('.flash')) return;
    if (e.key === ' ') { e.preventDefault(); flipCard(); }
    else if (e.key === '1' || e.key === 'ArrowLeft') { e.preventDefault(); answerCard(false); }
    else if (e.key === '2' || e.key === 'ArrowRight') { e.preventDefault(); answerCard(true); }
  }

  /* ---------------- Khởi động ---------------- */
  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.lang = lang;
    const page = document.body.dataset.page;
    if (page === 'chapter') { chapterPage(); addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll); }
    else if (page === 'course') coursePage();
    else if (page === 'cards') cardsPage();
  });
})();
