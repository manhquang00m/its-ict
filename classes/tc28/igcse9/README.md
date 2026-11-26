# IGCSE Computer Science 9 — EN/VI (TC28)

Trang học liệu + bài tập + quiz cho IGCSE CS 0478 lớp 9, có nút **EN | VI**. Không build step, không npm: mở `index.html` hoặc deploy thẳng lên GitHub Pages (đường dẫn tương đối).

Nguồn: https://gilbertmtanofficial-gif.github.io/IGCSE9/ (© Mr. Gilbert — cần xin phép tác giả trước khi công bố; nội dung reading dựa trên sách Hodder). Giữ dòng ghi công ở footer.

## Cấu trúc
- `js/content-ch*.js`, `bank-ch*.js`, `glossary.js`, `generators.js` — nội dung tiếng Anh (bản gốc)
- `js/i18n.js` — lớp ngôn ngữ EN|VI (`localStorage`: `igcse9_lang`)
- `js/vi-ch*-topics.js`, `vi-ch*-bank.js` — bản VI (bank VI **khớp theo thứ tự** với bank EN: sửa câu EN thì sửa câu VI cùng vị trí)
- `js/vi-units.js`, `js/vi-ui.js` — tên chương, từ điển giao diện
- `js/exercises-ch*.js` — bài tập mới (EN + VI, kèm thang điểm), 6–8 bài/topic
- `unit-test.html` + `js/unit-test.js` — bài kiểm tra Unit 20 phút (`unit-test.html?unit=u1` … `u6`), cùng format với `classes/ol13/luyen-tap-35-phut.html`: nhập tên/lớp, đồng hồ, tự lưu, nộp, tải file .txt cho giáo viên chấm. Bộ câu hỏi cố định theo id bài tập, khai báo ở đầu `unit-test.js` (`UNITS`, lấy từ `exercises-ch*.js`); nếu đổi/xoá id bài tập thì sửa lại ở đây (trang sẽ báo lỗi nếu thiếu id). Nút "Kiểm tra Unit" nằm trên thẻ mỗi unit ở trang Topics (`vResources` trong `app.js`). Trang không hiện đáp án/thang điểm; giáo viên dùng "Xem đáp án & thang điểm" trong app theo id ghi trong file bài làm
- `tools/check.mjs` — kiểm tra bản dịch + bài tập: `node tools/check.mjs` (hoặc `node tools/check.mjs 4.1 4.2`); chỉ chạy tay khi sửa nội dung, không cần để deploy
- Thêm file JS mới: thêm thẻ `<script src>` vào `index.html` theo thứ tự (i18n.js sau helpers.js; vi-*.js và exercises-*.js sau glossary.js; app.js cuối)

## Mật khẩu giáo viên
Khu giáo viên **khóa** cho đến khi bạn điền `teacherPasswordHash` (SHA-256 hex 64 ký tự của một passphrase dài) trong `js/config.js`. Không có mật khẩu mặc định.
