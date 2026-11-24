// Tiến độ ôn tập CS9, lưu trong localStorage của trình duyệt (không gửi đi đâu).
// window.CS9Progress: mức thành thạo theo chủ đề (kiểu Khan Academy), chủ đề đang ôn dở, thẻ ghi nhớ đã thuộc.
// Dữ liệu đọc lại từ localStorage luôn được làm sạch (chỉ giữ id/khóa đúng định dạng) trước khi dùng.
(function () {
  'use strict';
  const KEY = 'cs9_progress';
  const MAX_ANS = 10;                               // tính độ chính xác trên 10 câu gần nhất
  const TOPIC_ID = /^[1-6]\.(?:[1-9]|1[0-9])$/;
  const CARD_KEY = /^[0-9A-Za-z.]{1,12}:\d{1,4}$/;  // "<objective>:<chỉ số thuật ngữ>"

  function clean(raw) {
    const out = { topics: {}, last: null, cards: {} };
    if (!raw || typeof raw !== 'object') return out;
    const tp = raw.topics;
    if (tp && typeof tp === 'object') Object.keys(tp).forEach(id => {
      if (!TOPIC_ID.test(id)) return;
      const v = tp[id] || {};
      out.topics[id] = {
        read: v.read === true,
        ans: Array.isArray(v.ans) ? v.ans.filter(x => x === 0 || x === 1).slice(-MAX_ANS) : []
      };
    });
    if (raw.last && TOPIC_ID.test(String(raw.last))) out.last = String(raw.last);
    const cards = raw.cards;
    if (cards && typeof cards === 'object') Object.keys(cards).forEach(k => { if (CARD_KEY.test(k) && cards[k] === 1) out.cards[k] = 1; });
    return out;
  }

  function load() {
    try { return clean(JSON.parse(localStorage.getItem(KEY) || 'null')); } catch (e) { return clean(null); }
  }
  let data = load();

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* hết dung lượng / bị chặn: chỉ mất phần lưu */ }
    window.dispatchEvent(new Event('cs9progress'));
  }
  const topic = id => data.topics[id] || (data.topics[id] = { read: false, ans: [] });

  // 0 Chưa ôn · 1 Đang ôn · 2 Khá · 3 Vững
  function status(id) {
    const p = data.topics[id];
    if (!p) return 0;
    const n = p.ans.length, ok = p.ans.reduce((s, x) => s + x, 0), acc = n ? ok / n : 0;
    if (n >= 5 && acc >= 0.85) return 3;
    if (n >= 3 && acc >= 0.6) return 2;
    return (p.read || n > 0) ? 1 : 0;
  }

  window.CS9Progress = {
    status,
    accuracy(id) { const p = data.topics[id]; const n = p ? p.ans.length : 0; return { n, pct: n ? Math.round(p.ans.reduce((s, x) => s + x, 0) / n * 100) : 0 }; },
    record(id, ok) { if (!TOPIC_ID.test(id)) return; const p = topic(id); p.ans.push(ok ? 1 : 0); p.ans = p.ans.slice(-MAX_ANS); save(); },
    isRead(id) { return !!(data.topics[id] && data.topics[id].read); },
    setRead(id, v) { if (!TOPIC_ID.test(id)) return; topic(id).read = !!v; save(); },
    last() { return data.last; },
    setLast(id) { if (!TOPIC_ID.test(id) || data.last === id) return; data.last = id; try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* bỏ qua */ } },
    cardKnown(k) { return data.cards[k] === 1; },
    setCard(k, known) { if (!CARD_KEY.test(k)) return; if (known) data.cards[k] = 1; else delete data.cards[k]; save(); },
    // điểm 0–100 cho một nhóm chủ đề (Vững = 3 phần, Khá = 2, Đang ôn = 1)
    score(ids) { return ids.length ? Math.round(ids.reduce((s, id) => s + status(id), 0) / (ids.length * 3) * 100) : 0; },
    reset() { data = clean(null); save(); },
    MAX_ANS
  };
})();
