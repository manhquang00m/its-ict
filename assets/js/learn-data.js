// Nạp dữ liệu IGCSE CS 9 từ classes/tc28/igcse9/js (không sửa, không chép dữ liệu gốc).
// Cách dùng: <script src=".../learn-data.js" data-base="đường-dẫn-tới/igcse9/js/"></script>
// rồi LearnData.loadChapter(n) hoặc LearnData.loadOverview() -> Promise.
(function () {
  const me = document.currentScript;
  const BASE = (me && me.dataset.base) || 'js/';

  // Các file dùng chung. helpers.js phải nạp TRƯỚC vì content/exercises gọi window.FLOW / window.LOGIC lúc nạp.
  const COMMON = ['helpers.js', 'glossary.js', 'videos.js', 'vi-units.js'];

  // Chương -> file. Chương 4 tách a/b; chương 5 và 6 nằm chung bộ file *-ch5.
  const set = (c, v) => ({
    content: ['content-ch' + c + '.js'],
    vi: v.map(s => 'vi-ch' + s + '-topics.js'),
    ex: v.map(s => 'exercises-ch' + s + '.js'),
    bank: ['bank-ch' + c + '.js'],
    vibank: v.map(s => 'vi-ch' + s + '-bank.js')
  });
  const CHAPTER_FILES = {
    1: set(1, ['1']),
    2: set(2, ['2']),
    3: set(3, ['3']),
    4: set(4, ['4a', '4b']),
    5: set(5, ['5']),
    6: set(5, ['5'])
  };
  const CHAPTERS = [1, 2, 3, 4, 5, 6];

  // Các file content-ch2..5 push thẳng vào UNITS/OBJECTIVES nên phải khởi tạo sẵn.
  function initGlobals() {
    window.UNITS = window.UNITS || [];
    window.OBJECTIVES = window.OBJECTIVES || {};
    window.BANK = window.BANK || {};
    window.EXERCISES = window.EXERCISES || {};
    window.GENERATORS = window.GENERATORS || []; // glossary.js push câu hỏi sinh ngẫu nhiên vào đây
    window.VI = window.VI || {};
    ['topics', 'objectives', 'bank', 'glossary', 'units', 'ui'].forEach(k => {
      window.VI[k] = window.VI[k] || {};
    });
  }

  // Nạp tuần tự (async=false giữ đúng thứ tự thực thi).
  function loadScripts(files) {
    initGlobals();
    const seen = new Set();
    const list = files.filter(f => !seen.has(f) && seen.add(f));
    return Promise.all(list.map(f => new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = BASE + f;
      s.async = false;
      s.onload = resolve;
      s.onerror = () => reject(new Error('Không tải được dữ liệu: ' + f));
      document.head.appendChild(s);
    })));
  }

  function filesForChapter(n) {
    const c = CHAPTER_FILES[n];
    if (!c) return null;
    return COMMON.concat(c.content, c.vi, c.ex, c.bank, c.vibank);
  }

  // Chỉ tên chương/chủ đề (cho trang chủ, trang tổng quan).
  function filesForOverview() {
    const content = [], vi = [];
    [1, 2, 3, 4, 5].forEach(n => {
      content.push(...CHAPTER_FILES[n].content);
      vi.push(...CHAPTER_FILES[n].vi);
    });
    return ['helpers.js', 'vi-units.js'].concat(content, vi);
  }

  window.LearnData = {
    CHAPTERS,
    CHAPTER_FILES,
    filesForChapter,
    filesForOverview,
    loadChapter: n => {
      const f = filesForChapter(n);
      return f ? loadScripts(f) : Promise.reject(new Error('Chương không hợp lệ'));
    },
    loadOverview: () => loadScripts(filesForOverview()),
    units: () => (window.UNITS || []).slice().sort((a, b) => a.num - b.num)
  };
})();
