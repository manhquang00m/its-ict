# Brief: Vietnamese content + new exercises (IGCSE Computer Science 0478, Grade 9)

Project: `e:\dev\igcse9` (a vanilla-JS study site). English content lives in `js/content-chN.js` (topics, reading HTML, objectives), `js/bank-chN.js` (quiz bank) and `js/glossary.js` (key terms; keyed by objective id like `"1.1a"`). You produce **new files only** — never edit existing files, and never touch files owned by another agent.

Audience: Vietnamese students aged ~14-15 learning Cambridge IGCSE CS in English. Vietnamese text must be natural, plain and accurate, not machine-literal. Keep the English technical term in brackets the first time it appears in each topic's reading, e.g. "thanh ghi (register)". Keep these unchanged: code, pseudocode, variable names, binary/hex/denary numbers, ASCII/Unicode, acronyms (CPU, RAM, ROM, ALU, SSD, IDE, ARQ, MAC, AND/OR/NOT/NAND/NOR/XOR...), units (KiB, MiB...), HTML colour codes, file names.

## Terminology (use consistently)
binary = nhị phân; denary = thập phân; hexadecimal = thập lục phân; bit; nibble (4 bit); byte; register = thanh ghi; transistor; logic gate = cổng logic; overflow = tràn số (overflow); two's complement = số bù hai; logical shift = dịch bit logic; character set = bộ ký tự; sample rate = tần số lấy mẫu; sample resolution = độ phân giải mẫu; resolution = độ phân giải; colour depth = độ sâu màu; compression = nén; lossy = nén có mất dữ liệu; lossless = nén không mất dữ liệu; run-length encoding (RLE) = mã hóa độ dài chạy; packet = gói tin; packet switching = chuyển mạch gói; router = bộ định tuyến; header = phần đầu (header); parity check = kiểm tra chẵn lẻ; checksum = tổng kiểm tra; echo check = kiểm tra phản hồi; check digit = chữ số kiểm tra; encryption = mã hóa; symmetric/asymmetric = đối xứng/bất đối xứng; public/private key = khóa công khai/khóa riêng; algorithm = thuật toán; flowchart = lưu đồ; pseudocode = mã giả; trace table = bảng theo dõi (trace table); validation = kiểm tra tính hợp lệ (validation); verification = xác minh (verification); array = mảng; variable = biến; loop = vòng lặp; selection = cấu trúc rẽ nhánh; CPU = bộ xử lý trung tâm (CPU); control unit = bộ điều khiển; cache = bộ nhớ đệm (cache); clock speed = tốc độ xung nhịp; core = nhân; fetch–decode–execute = nạp–giải mã–thực thi; embedded system = hệ thống nhúng; input/output device = thiết bị nhập/xuất; sensor = cảm biến; actuator = cơ cấu chấp hành; primary/secondary storage = bộ nhớ chính/bộ nhớ phụ; magnetic/optical/solid-state = từ/quang/thể rắn; cloud storage = lưu trữ đám mây; operating system = hệ điều hành; firmware = phần sụn (firmware); interrupt = ngắt (interrupt); compiler = trình biên dịch; interpreter = trình thông dịch; assembler = trình hợp dịch; high-level / low-level language = ngôn ngữ bậc cao / bậc thấp; source code / object code = mã nguồn / mã đối tượng; Boolean logic = logic Boole; truth table = bảng chân trị; logic circuit = mạch logic.

## File formats (exact)

### A. `js/vi-<group>-topics.js` — objectives, topic text, glossary
```js
window.VI = window.VI || { topics: {}, objectives: {}, bank: {}, glossary: {}, ui: {} };
Object.assign(window.VI.objectives, { "1.1a": "…VI…. (Syllabus 1.1.1)" });          // keep the "(Syllabus x.y.z)" suffix
Object.assign(window.VI.topics, {
  "1.1": { title: "…", summary: "…", reading: `…HTML…` }
});
Object.assign(window.VI.glossary, { "1.1a": [["Bit", "VI definition"], …] });         // SAME length and order as GLOSSARY["1.1a"]; the term stays English
```
- `reading` must have the **same HTML structure** as the English one: same tags in the same order (h4, p, ul, li, b, table…). Translate only the text. Do not add or drop tags (the validator compares the tag sequence). Keep inline `<code>`/`<pre>`/`<svg>` content untouched.
- Use template literals (backticks). Escape any backtick or `${` inside text.

### B. `js/vi-<group>-bank.js` — quiz bank
```js
window.VI = window.VI || { topics: {}, objectives: {}, bank: {}, glossary: {}, ui: {} };
Object.assign(window.VI.bank, {
  "1.1a": [
    ["VI question", "VI correct answer", ["VI wrong 1", "VI wrong 2", "VI wrong 3"], { e: "VI explanation", t: ["extra accepted typed answers in VI"] }],
    …
  ]
});
```
- **Index-aligned**: `VI.bank[obj][i]` is the translation of `BANK[obj][i]`, same number of rows, same number of wrong answers, same order. Row `i` must keep the same meaning and the same correct answer.
- If the English `{ e: … }` exists, give `{ e: … }` too. Add `t: [...]` only when a typed answer can reasonably be given in other forms (VI). Do NOT copy `c` (code) or `s` (seconds) — the app reads those from the English row. Omit the 4th element if nothing is needed.
- Answers that are numbers, binary, hex, code, pseudocode or single acronyms stay **identical** to English (validator enforces this). Do not translate such wrong answers either.
- Every question must still be answerable and unambiguous in Vietnamese; the correct answer and wrong options must stay distinct from each other.
- Questions that reference a diagram (`h:`/`c:` fields in the English row) — read the English row so your VI question matches what is shown.

### C. `js/exercises-<group>.js` — NEW exercises (this content does not exist yet; you write it, in English AND Vietnamese)
```js
window.EXERCISES = window.EXERCISES || {};
Object.assign(window.EXERCISES, {
  "1.1": [
    { id: "1.1-e1", kind: "calc", marks: 3,
      q:    { en: `<p>…</p>`, vi: `<p>…</p>` },
      hint: { en: `Start from the right-most column.`, vi: `…` },            // optional but recommended on harder items
      ms:   { en: `<ul><li>… [1]</li></ul>`, vi: `<ul><li>… [1]</li></ul>` }  // mark scheme + worked answer
    }, …
  ]
});
```
- **Every topic id of your group gets 6–8 exercises** (min 6), ids `"<topic>-e1"`, `"<topic>-e2"`…
- `kind` ∈ `short` (1–2 marks, recall/define), `calc` (calculation with working), `explain` (describe/explain, 3–6 marks), `trace` (trace table / dry-run), `code` (write or fix pseudocode), `logic` (truth table / circuit / expression), `apply` (scenario-based). Use **at least 3 different kinds per topic** that suit the topic; order them easy → hard. `marks` is an integer 1–8 and must equal the total of the `[n]` marks in the mark scheme.
- Style: Cambridge 0478 exam style (command words: State, Give, Describe, Explain, Calculate, Complete, Identify), with the marks shown at the end of the question as `[3]`. Questions must be **original** (do not copy textbook or past-paper wording) and match the topic's syllabus objectives (see `OBJECTIVES` in the content file) and the depth in the reading.
- `q`/`hint`/`ms` are HTML (allowed tags: `p, b, i, ul, ol, li, code, pre, br, table, tr, td, th, sub, sup`). Pseudocode goes in `<pre>`. The `en` and `vi` versions of the same field **must use the same tag sequence**. Code/pseudocode/numbers identical in both languages.
- Mark scheme: list each mark point on its own `<li>` with `[1]`, include the worked solution and the final answer. **Every calculation, conversion, trace and truth table must be correct — verify with `node -e` where possible** (binary/hex conversion, file sizes, trace tables). Wrong mark schemes are worse than none.
- Pseudocode style must follow Cambridge: `←` for assignment, `IF … THEN … ELSE … ENDIF`, `FOR i ← 1 TO n … NEXT i`, `WHILE … DO … ENDWHILE`, `REPEAT … UNTIL`, `INPUT`, `OUTPUT`, `DECLARE x : INTEGER`.
- No real personal data, no URLs, no secrets.

## Workflow & checks
1. Read the English source for your group (content, bank rows for your objectives, glossary entries for your objectives). Also read the `Syllabus` tags in `OBJECTIVES`.
2. Write the three files in chunks if long (you may create `…-topics.js` and then append with additional `Object.assign` blocks; each file must stay valid JS). Do not use any placeholder/TODO.
3. Run `node tools/check.mjs <topic ids or chapter prefixes of your group>` from `e:\dev\igcse9` (e.g. `node tools/check.mjs 4.1 4.2 4.3`). Fix every reported problem until it prints `OK`. The validator checks coverage, alignment, tag sequences, numeric-answer identity and exercise counts.
4. Final report (short): files written, counts (topics / bank rows / glossary terms / exercises), anything you were unsure about (ambiguous source rows, questions that cannot be translated 1:1, terminology choices). Do not paste file contents.
