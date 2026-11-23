# IGCSE Computer Science 9 — EN/VI (TC28)

Trang học liệu + bài tập + quiz cho IGCSE CS 0478 lớp 9, có nút **EN | VI**. Không build step, không npm: mở `index.html` hoặc deploy thẳng lên GitHub Pages (đường dẫn tương đối).

Nguồn: https://gilbertmtanofficial-gif.github.io/IGCSE9/ (© Mr. Gilbert — cần xin phép tác giả trước khi công bố; nội dung reading dựa trên sách Hodder). Giữ dòng ghi công ở footer.

## Cấu trúc
- `js/content-ch*.js`, `bank-ch*.js`, `glossary.js`, `generators.js` — nội dung tiếng Anh (bản gốc)
- `js/i18n.js` — lớp ngôn ngữ EN|VI (`localStorage`: `igcse9_lang`)
- `js/vi-ch*-topics.js`, `vi-ch*-bank.js` — bản VI (bank VI **khớp theo thứ tự** với bank EN: sửa câu EN thì sửa câu VI cùng vị trí)
- `js/vi-units.js`, `js/vi-ui.js` — tên chương, từ điển giao diện
- `js/exercises-ch*.js` — bài tập mới (EN + VI, kèm thang điểm), 6–8 bài/topic
- `tools/check.mjs` — kiểm tra bản dịch + bài tập: `node tools/check.mjs` (hoặc `node tools/check.mjs 4.1 4.2`); chỉ chạy tay khi sửa nội dung, không cần để deploy
- Thêm file JS mới: thêm thẻ `<script src>` vào `index.html` theo thứ tự (i18n.js sau helpers.js; vi-*.js và exercises-*.js sau glossary.js; app.js cuối)

## Mật khẩu giáo viên
Khu giáo viên **khóa** cho đến khi bạn điền `teacherPasswordHash` (SHA-256 hex 64 ký tự của một passphrase dài) trong `js/config.js`. Không có mật khẩu mặc định.
