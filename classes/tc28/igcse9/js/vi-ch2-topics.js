window.VI = window.VI || { topics: {}, objectives: {}, bank: {}, glossary: {}, ui: {} };

Object.assign(window.VI.objectives, {
  "2.1a": "Hiểu rằng dữ liệu được chia thành các gói tin (packet) để truyền đi, và mô tả cấu trúc của một gói tin (header, payload, trailer). (Syllabus 2.1.1 a–b)",
  "2.1b": "Mô tả quá trình chuyển mạch gói (packet switching). (Syllabus 2.1.1 c)",
  "2.2a": "Mô tả truyền nối tiếp, truyền song song, simplex, half-duplex và full-duplex, và giải thích mỗi kiểu phù hợp với tình huống nào. (Syllabus 2.1.2)",
  "2.2b": "Hiểu giao diện USB (universal serial bus), cách USB truyền dữ liệu, cùng các ưu điểm và nhược điểm của nó. (Syllabus 2.1.3)",
  "2.3a": "Hiểu vì sao cần kiểm tra lỗi sau khi truyền dữ liệu và lỗi có thể xảy ra như thế nào (mất dữ liệu, thêm dữ liệu, thay đổi dữ liệu). (Syllabus 2.2.1)",
  "2.3b": "Mô tả kiểm tra chẵn lẻ (chẵn và lẻ, byte chẵn lẻ và khối chẵn lẻ), tổng kiểm tra (checksum) và kiểm tra phản hồi (echo check). (Syllabus 2.2.2)",
  "2.3c": "Mô tả cách chữ số kiểm tra (check digit) được dùng để phát hiện lỗi nhập dữ liệu, gồm ISBN và mã vạch. (Syllabus 2.2.3)",
  "2.3d": "Mô tả cách yêu cầu lặp tự động (ARQ) dùng xác nhận dương/âm và hết thời gian chờ (timeout). (Syllabus 2.2.4)",
  "2.4a": "Hiểu nhu cầu và mục đích của mã hóa khi truyền dữ liệu. (Syllabus 2.3.1)",
  "2.4b": "Hiểu cách dữ liệu được mã hóa bằng mã hóa đối xứng và bất đối xứng, gồm khóa công khai và khóa riêng. (Syllabus 2.3.2)"
});

Object.assign(window.VI.topics, {
  "2.1": {
    title: "Gói tin và chuyển mạch gói",
    summary: "Dữ liệu được chia thành các gói tin gồm header, payload và trailer. Chuyển mạch gói gửi mỗi gói theo tuyến tốt nhất.",
    reading: `
<h4>Vì sao phải chia dữ liệu thành các gói tin?</h4>
<p>Khi một tệp được gửi qua mạng hoặc internet, nó được chia thành các đơn vị nhỏ gọi là <b>gói tin (packet)</b> (thường từ 64 KiB trở xuống). Gói nhỏ dễ định tuyến hơn, và nếu một gói bị hỏng hoặc mất thì <b>chỉ gói đó</b> phải gửi lại — không cần gửi lại cả tệp.</p>

<h4>Cấu trúc của một gói tin</h4>
<table class="tbl"><tr><th>Phần</th><th>Chứa gì</th></tr>
<tr><td><b>Phần đầu gói tin (packet header)</b></td><td><ul class="tight"><li><b>địa chỉ đích</b> (địa chỉ IP của thiết bị nhận)</li><li><b>số thứ tự gói tin</b> (để sắp xếp lại các gói đúng thứ tự)</li><li><b>địa chỉ người gửi</b> (địa chỉ IP của thiết bị gửi)</li></ul></td></tr>
<tr><td><b>Payload (dữ liệu tải)</b></td><td><b>Dữ liệu thực sự</b> cần gửi (một phần của tệp, email, video…).</td></tr>
<tr><td><b>Trailer (phần cuối)</b></td><td>Cách nhận biết <b>điểm kết thúc của gói tin</b>, và một phương pháp <b>kiểm tra lỗi</b> như kiểm tra dư thừa vòng (CRC) hoặc tổng kiểm tra (checksum).</td></tr></table>
<svg viewBox="0 0 520 70" class="diagram" role="img" aria-label="Packet: header, payload, trailer"><rect x="5" y="10" width="150" height="46" rx="8" fill="#1b3a6b"/><text x="80" y="38" fill="#fff" font-size="14" font-weight="700" text-anchor="middle" font-family="Nunito">HEADER</text><rect x="160" y="10" width="250" height="46" rx="8" fill="#fff8e8" stroke="#e3b341" stroke-width="2"/><text x="285" y="38" fill="#16213a" font-size="14" font-weight="700" text-anchor="middle" font-family="Nunito">PAYLOAD (the data)</text><rect x="415" y="10" width="100" height="46" rx="8" fill="#a87908"/><text x="465" y="38" fill="#fff" font-size="14" font-weight="700" text-anchor="middle" font-family="Nunito">TRAILER</text></svg>

<h4>Chuyển mạch gói (packet switching)</h4>
<ol><li>Dữ liệu được <b>chia thành các gói tin</b>.</li>
<li>Mỗi gói được gửi <b>độc lập</b> và có thể đi theo một <b>tuyến khác nhau</b> qua mạng.</li>
<li>Ở mỗi chặng, một <b>bộ định tuyến (router)</b> đọc địa chỉ đích trong header rồi quyết định tuyến nào (chặng "hop" kế tiếp) là tốt nhất — tránh các đường truyền đang bận hoặc hỏng.</li>
<li>Vì đi theo các tuyến khác nhau, các gói có thể <b>đến không đúng thứ tự</b>.</li>
<li>Khi <b>gói cuối cùng đã đến</b>, thiết bị nhận <b>sắp xếp lại</b> các gói theo số thứ tự rồi ghép lại thành dữ liệu ban đầu.</li>
<li>Nếu một gói bị thiếu hoặc hỏng, thiết bị nhận sẽ gửi yêu cầu để gói đó được <b>gửi lại</b>.</li></ol>
<table class="tbl"><tr><th>Ưu điểm của chuyển mạch gói</th><th>Nhược điểm</th></tr>
<tr><td><ul class="tight"><li>Không có tuyến nào bị chiếm riêng, nên mạng được dùng hiệu quả.</li><li>Gói tin có thể tránh các tuyến hỏng hoặc đang bận — rất đáng tin cậy.</li><li>Chỉ các gói bị hỏng/mất mới phải gửi lại.</li><li>Nhiều người dùng có thể chia sẻ cùng các đường truyền cùng lúc.</li></ul></td>
<td><ul class="tight"><li>Gói tin có thể bị mất và phải gửi lại.</li><li>Có độ trễ khi sắp xếp lại các gói — có thể gây vấn đề cho cuộc gọi video thời gian thực.</li><li>Phải gửi thêm dữ liệu (header/trailer) kèm theo mỗi gói.</li></ul></td></tr></table>
<div class="tip"><b>Mẹo thi:</b> header chứa ba thứ — hãy nhớ theo <b>D-P-O</b>: Destination address (địa chỉ đích), Packet number (số thứ tự gói), Originator's address (địa chỉ người gửi).</div>
<div class="keywords"><b>Từ khóa:</b> packet (gói tin), header, payload, trailer, destination address (địa chỉ đích), originator's address (địa chỉ người gửi), packet number (số thứ tự gói), packet switching (chuyển mạch gói), router (bộ định tuyến), hop (chặng), CRC, reorder (sắp xếp lại)</div>`
  },
  "2.2": {
    title: "Các phương thức truyền dữ liệu và USB",
    summary: "Truyền nối tiếp và song song, simplex, half-duplex và full-duplex, cách chọn phương thức phù hợp, và giao diện USB.",
    reading: `
<h4>Truyền nối tiếp và truyền song song</h4>
<table class="tbl"><tr><th></th><th>Nối tiếp (serial)</th><th>Song song (parallel)</th></tr>
<tr><td>Cách thức</td><td>Dữ liệu được gửi <b>từng bit một</b> qua <b>một dây duy nhất</b>.</td><td><b>Nhiều bit được gửi cùng lúc</b> qua <b>nhiều dây</b> (ví dụ 8 dây cho 8 bit).</td></tr>
<tr><td>Ưu điểm</td><td>Các bit đến <b>đúng thứ tự</b> — đáng tin cậy trên <b>khoảng cách xa</b>. Ít bị nhiễu hơn. Rẻ hơn (ít dây hơn).</td><td>Truyền <b>nhanh hơn</b> trên khoảng cách ngắn.</td></tr>
<tr><td>Nhược điểm</td><td>Chậm hơn truyền song song trên khoảng cách ngắn.</td><td>Các bit có thể đến lệch nhau một chút về thời gian (<b>skew</b>) — không đáng tin cậy trên khoảng cách xa. Cáp đắt hơn. <b>Crosstalk</b> (nhiễu giữa các dây).</td></tr>
<tr><td>Dùng cho</td><td>USB, kết nối thiết bị ở khoảng cách xa hơn, internet</td><td>Bên trong máy tính: các bus và mạch bên trong; các kết nối khoảng cách ngắn</td></tr></table>

<h4>Hướng truyền dữ liệu</h4>
<table class="tbl"><tr><th>Phương thức</th><th>Ý nghĩa</th><th>Ví dụ</th></tr>
<tr><td><b>Simplex</b></td><td>Dữ liệu đi theo <b>một hướng duy nhất</b>.</td><td>Máy tính → máy in; truyền hình quảng bá; bàn phím → máy tính</td></tr>
<tr><td><b>Half-duplex</b></td><td>Dữ liệu đi theo <b>cả hai hướng, nhưng không cùng lúc</b>.</td><td>Bộ đàm; một số máy in gửi tín hiệu "hết giấy"</td></tr>
<tr><td><b>Full-duplex</b></td><td>Dữ liệu đi theo <b>cả hai hướng cùng một lúc</b>.</td><td>Cuộc gọi điện thoại hoặc gọi video; kết nối internet băng thông rộng</td></tr></table>
<p>Hai ý này có thể kết hợp: ví dụ <b>nối tiếp full-duplex</b> (cuộc gọi video qua internet) hoặc <b>song song simplex</b>.</p>
<div class="tip"><b>Chọn phương thức trong bài thi:</b> hãy nêu phương thức <b>và</b> một lý do gắn với tình huống đề bài. "Nối tiếp, vì máy in ở cách 15 m và truyền nối tiếp không bị skew trên khoảng cách xa."</div>

<h4>USB — Universal Serial Bus</h4>
<p><b>USB</b> là giao diện (interface) chuẩn công nghiệp để kết nối thiết bị với máy tính. USB dùng truyền <b>nối tiếp</b>. Khi cắm một thiết bị vào:</p>
<ol><li>Máy tính phát hiện có thiết bị được kết nối (nó cảm nhận sự thay đổi điện áp trên các dây dữ liệu).</li>
<li>Thiết bị được <b>tự động nhận diện</b> và <b>trình điều khiển (driver)</b> phù hợp được nạp (hoặc người dùng được yêu cầu cài đặt).</li>
<li>Sau đó dữ liệu có thể được truyền. Nhiều loại cáp USB còn có thể <b>cấp điện</b> / sạc cho thiết bị.</li></ol>
<table class="tbl"><tr><th>Ưu điểm của USB</th><th>Nhược điểm của USB</th></tr>
<tr><td><ul class="tight"><li>Thiết bị được tự động phát hiện và nạp driver</li><li>Đầu nối chỉ cắm được một chiều (USB-C thì cắm chiều nào cũng được)</li><li>Là chuẩn công nghiệp — hầu hết thiết bị đều hỗ trợ</li><li>Có thể cấp điện hoặc sạc cho thiết bị</li><li>Tương thích ngược với các phiên bản USB cũ</li><li>Tốc độ truyền cao</li></ul></td>
<td><ul class="tight"><li>Chiều dài cáp tiêu chuẩn bị giới hạn (khoảng 5 m)</li><li>Các phiên bản USB cũ có thể không được hỗ trợ / có thể chậm</li><li>Thiết bị rất cũ có thể không có cổng USB</li></ul></td></tr></table>
<div class="keywords"><b>Từ khóa:</b> serial (nối tiếp), parallel (song song), skew, crosstalk, interference (nhiễu), simplex, half-duplex, full-duplex, USB, interface (giao diện), driver (trình điều khiển), backwards compatible (tương thích ngược)</div>`
  },
  "2.3": {
    title: "Các phương pháp phát hiện lỗi",
    summary: "Kiểm tra chẵn lẻ, tổng kiểm tra, kiểm tra phản hồi, chữ số kiểm tra và ARQ — cách máy tính phát hiện lỗi.",
    reading: `
<h4>Vì sao phải kiểm tra lỗi?</h4>
<p>Trong khi truyền, <b>nhiễu (interference)</b> (ví dụ nhiễu điện, tín hiệu yếu) có thể làm hỏng dữ liệu. Lỗi có thể là:</p>
<ul><li><b>mất dữ liệu (data loss)</b> – một số bit hoặc gói tin bị mất;</li><li><b>thêm dữ liệu (data gain)</b> – có thêm bit thừa;</li><li><b>thay đổi dữ liệu (data change)</b> – các bit bị đảo (bit 0 thành 1 hoặc bit 1 thành 0).</li></ul>
<p>Vì vậy bên nhận phải kiểm tra xem dữ liệu có đến <b>đúng y như</b> khi gửi hay không.</p>

<h4>Kiểm tra chẵn lẻ (parity check)</h4>
<p>Bên gửi và bên nhận thỏa thuận dùng parity <b>chẵn</b> hay <b>lẻ</b>. Một bit của mỗi byte (thường là bit ngoài cùng bên trái) được dùng làm <b>bit chẵn lẻ (parity bit)</b>, được đặt sao cho byte có số bit 1 đúng như quy định.</p>
<ul><li><b>Parity chẵn:</b> tổng số bit 1 (tính cả parity bit) phải là số <b>chẵn</b>.</li>
<li><b>Parity lẻ:</b> tổng số bit 1 phải là số <b>lẻ</b>.</li></ul>
<div class="example">Dữ liệu 1011001 có bốn bit 1.<br>Parity chẵn → parity bit là <b>0</b> → <b>0</b>1011001 · Parity lẻ → parity bit là <b>1</b> → <b>1</b>1011001</div>
<p>Bên nhận đếm số bit 1. Nếu parity sai thì đã có lỗi. <b>Hạn chế:</b> nếu <b>hai</b> bit bị đổi thì số bit 1 vẫn chẵn/lẻ như cũ và lỗi <b>không bị phát hiện</b>. Kiểm tra chẵn lẻ đơn giản cũng không cho biết bit <i>nào</i> bị sai.</p>
<h4>Byte chẵn lẻ và kiểm tra khối chẵn lẻ</h4>
<p>Dữ liệu được gửi dưới dạng một <b>khối</b> các byte. Mỗi byte có một parity bit, <b>và</b> có thêm một <b>byte chẵn lẻ (parity byte)</b> gửi ở cuối, tạo từ parity của từng <b>cột</b>. Nếu một bit bị sai, thì <b>hàng</b> (byte) bị lỗi và <b>cột</b> bị lỗi đều có parity sai — chỗ chúng giao nhau chính là bit sai, nên có thể <b>sửa</b> được.</p>
<table class="tbl center pblock"><tr><th></th><th>P</th><th>b1</th><th>b2</th><th>b3</th><th>b4</th><th>b5</th><th>b6</th><th>b7</th></tr>
<tr><th>Byte 1</th><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
<tr><th>Byte 2</th><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
<tr class="bad-row"><th>Byte 3</th><td>0</td><td>0</td><td>0</td><td class="bad-cell">1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
<tr><th>Byte 4</th><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
<tr><th>Parity byte</th><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr></table>
<p class="small">Dùng parity chẵn. Byte 3 có năm bit 1 (lẻ ✗), nên hàng đó sai. Cột b3 (tính cả parity byte) có ba bit 1 (lẻ ✗), nên cột đó sai. Hai đường giao nhau tại <b>Byte 3, b3</b>: bit đó đã bị đảo từ 0 thành 1, nên bên nhận có thể sửa lại.</p>

<h4>Tổng kiểm tra (checksum)</h4>
<ol><li>Bên gửi tính một giá trị (<b>checksum</b>) từ khối dữ liệu bằng một thuật toán đã thỏa thuận.</li>
<li>Checksum được gửi <b>kèm theo</b> dữ liệu.</li>
<li>Bên nhận <b>tính lại</b> checksum từ dữ liệu nhận được.</li>
<li>Nếu hai giá trị <b>khác nhau</b>, đã có lỗi và dữ liệu được yêu cầu gửi lại.</li></ol>

<h4>Kiểm tra phản hồi (echo check)</h4>
<p>Bên nhận gửi <b>một bản sao của dữ liệu trở lại</b> cho bên gửi. Bên gửi so sánh với bản gốc. Nếu khác nhau, dữ liệu được gửi lại. <b>Hạn chế:</b> nếu có sự khác nhau, bạn không biết lỗi xảy ra trên đường <b>đi</b> hay trên đường <b>về</b> — và lượng dữ liệu phải gửi tăng gấp đôi.</p>

<h4>Chữ số kiểm tra (check digit) — lỗi khi nhập dữ liệu</h4>
<p><b>Chữ số kiểm tra (check digit)</b> là một chữ số thêm vào cuối một số như <b>ISBN</b> (mã số sách) hoặc <b>mã vạch (bar code)</b>. Nó được <b>tính từ các chữ số còn lại</b>. Khi số được gõ vào hoặc quét, chữ số kiểm tra được tính lại; nếu không khớp thì số đã bị nhập sai. Nó phát hiện được: một chữ số sai, hai chữ số bị đổi chỗ (<b>lỗi hoán vị — transposition</b>), thiếu hoặc thừa một chữ số.</p>
<div class="example"><b>Cách tính ISBN-13:</b> nhân 12 chữ số đầu lần lượt với 1 và 3, cộng lại, lấy số dư khi chia cho 10, rồi lấy 10 trừ đi số dư đó (kết quả bằng 10 thì thành 0).<br>
978030640615? → 9×1 + 7×3 + 8×1 + 0×3 + 3×1 + 0×3 + 6×1 + 4×3 + 0×1 + 6×3 + 1×1 + 5×3 = 93 · 93 MOD 10 = 3 · 10 − 3 = <b>7</b> → ISBN 9780306406157</div>
<div class="tip">Parity, checksum và echo check phát hiện lỗi khi <b>truyền</b> dữ liệu. Chữ số kiểm tra phát hiện lỗi khi <b>nhập</b> dữ liệu (gõ hoặc quét).</div>

<h4>Yêu cầu lặp tự động (Automatic Repeat Query – ARQ)</h4>
<ol><li>Bên gửi gửi dữ liệu và bắt đầu một <b>bộ đếm thời gian</b>.</li>
<li>Bên nhận kiểm tra dữ liệu bằng một phương pháp phát hiện lỗi.</li>
<li>Nếu dữ liệu đúng, bên nhận gửi <b>xác nhận dương (positive acknowledgement)</b>. Nếu có lỗi, bên nhận gửi <b>xác nhận âm (negative acknowledgement)</b> — và dữ liệu được gửi lại.</li>
<li>Nếu bên gửi <b>không nhận được xác nhận nào</b> trước khi <b>hết thời gian chờ (timeout)</b>, nó cho rằng dữ liệu đã mất và tự động <b>gửi lại</b>.</li>
<li>Quá trình này lặp lại cho đến khi nhận được xác nhận dương (hoặc đủ một số lần thử nhất định).</li></ol>
<div class="keywords"><b>Từ khóa:</b> interference (nhiễu), data loss (mất dữ liệu), data gain (thêm dữ liệu), data change (thay đổi dữ liệu), parity bit, even parity (parity chẵn), odd parity (parity lẻ), parity byte, parity block, checksum, echo check, check digit, ISBN, bar code (mã vạch), transposition error (lỗi hoán vị), ARQ, positive acknowledgement (xác nhận dương), negative acknowledgement (xác nhận âm), timeout (hết thời gian chờ)</div>`
  },
  "2.4": {
    title: "Mã hóa",
    summary: "Mã hóa làm cho dữ liệu bị chặn trở nên vô nghĩa. Mã hóa đối xứng dùng một khóa; mã hóa bất đối xứng dùng khóa công khai và khóa riêng.",
    reading: `
<h4>Vì sao phải mã hóa dữ liệu?</h4>
<p>Dữ liệu gửi qua mạng (đặc biệt là internet, một mạng <b>công cộng</b>) có thể bị tin tặc hoặc kẻ nghe lén <b>chặn bắt (intercept)</b>. <b>Mã hóa (encryption)</b> xáo trộn dữ liệu để nếu bị chặn bắt thì nó <b>vô nghĩa</b> và không thể hiểu được nếu không có khóa.</p>
<div class="tip"><b>Lỗi thường gặp:</b> mã hóa <b>không ngăn</b> dữ liệu bị chặn bắt, bị tấn công hay bị xóa. Nó chỉ làm cho dữ liệu bị chặn trở nên <b>không đọc được</b>.</div>
<table class="tbl"><tr><th>Thuật ngữ</th><th>Ý nghĩa</th></tr>
<tr><td><b>Plaintext (bản rõ)</b></td><td>Dữ liệu gốc, đọc được, trước khi mã hóa.</td></tr>
<tr><td><b>Ciphertext (bản mã)</b></td><td>Dữ liệu đã bị xáo trộn, không đọc được, sau khi mã hóa.</td></tr>
<tr><td><b>Thuật toán mã hóa (encryption algorithm)</b></td><td>Phương pháp (tập hợp các quy tắc) dùng để xáo trộn dữ liệu.</td></tr>
<tr><td><b>Khóa (key)</b></td><td>Một giá trị mà thuật toán dùng để mã hóa hoặc giải mã dữ liệu.</td></tr></table>
<p>Plaintext → <b>thuật toán mã hóa + khóa</b> → ciphertext → <b>giải mã bằng khóa</b> → plaintext</p>

<h4>Mã hóa đối xứng (symmetric encryption)</h4>
<p>Dùng <b>cùng một khóa bí mật</b> để mã hóa <b>và</b> giải mã dữ liệu. Cả bên gửi và bên nhận đều phải có khóa này.</p>
<div class="example"><b>Mật mã Caesar (một ví dụ rất đơn giản):</b> khóa = dịch mỗi chữ cái đi 3 vị trí. HELLO → <b>KHOOR</b>. Bên nhận dịch ngược lại 3 vị trí để giải mã.</div>
<ul><li><b>Vấn đề — phân phối khóa:</b> khóa bí mật phải được gửi cho bên nhận trước. Nếu nó bị chặn bắt, bất kỳ ai cũng có thể giải mã mọi thông điệp.</li>
<li>Các hệ thống thực tế dùng khóa 256 bit — có 2²⁵⁶ khóa có thể — nên việc đoán khóa (brute force) gần như không thể.</li>
<li>Dùng cho: mật khẩu Wi-Fi (khóa chia sẻ trước), tệp ZIP có mật khẩu, ổ cứng được mã hóa.</li></ul>

<h4>Mã hóa bất đối xứng (asymmetric encryption)</h4>
<p>Dùng <b>hai khóa khác nhau nhưng khớp với nhau</b>, cả hai đều do <b>bên nhận</b> tạo ra:</p>
<ul><li><b>khóa công khai (public key)</b> — đưa cho bất kỳ ai; dùng để <b>mã hóa</b> dữ liệu;</li>
<li><b>khóa riêng (private key)</b> — bên nhận giữ bí mật; đây là khóa duy nhất có thể <b>giải mã</b> dữ liệu đã được mã hóa bằng khóa công khai tương ứng.</li></ul>
<ol><li>Bên nhận (ví dụ Tom) gửi <b>khóa công khai</b> của mình cho bên gửi (Meera).</li>
<li>Meera <b>mã hóa</b> tin nhắn bằng khóa công khai của Tom.</li>
<li>Bản mã được gửi đi. Dù bị chặn bắt, khóa công khai cũng không thể giải mã nó.</li>
<li>Tom <b>giải mã</b> bằng <b>khóa riêng</b> của mình, khóa này không bao giờ rời khỏi máy tính của anh ấy.</li></ol>
<div class="example"><b>Ví dụ so sánh với ổ khóa:</b> Tom phát ra những ổ khóa đang mở (khóa công khai). Ai cũng có thể bóp một ổ khóa lại để khóa cái hộp, nhưng chỉ Tom có chìa (khóa riêng) để mở nó.</div>
<p>Cách này <b>giải quyết vấn đề phân phối khóa</b> — khóa riêng không bao giờ phải gửi đi. Nó được dùng cho các trang web <b>HTTPS</b>, ngân hàng trực tuyến và email an toàn. Nó xử lý chậm hơn mã hóa đối xứng, nên trên thực tế thường được dùng để chia sẻ một khóa đối xứng một cách an toàn.</p>
<table class="tbl"><tr><th></th><th>Đối xứng</th><th>Bất đối xứng</th></tr>
<tr><td>Số khóa</td><td>1 khóa bí mật dùng chung</td><td>2 khóa: công khai + riêng</td></tr>
<tr><td>Mã hóa bằng</td><td>khóa dùng chung</td><td>khóa công khai của bên nhận</td></tr>
<tr><td>Giải mã bằng</td><td>cùng khóa dùng chung đó</td><td>khóa riêng của bên nhận</td></tr>
<tr><td>Vấn đề chính</td><td>chia sẻ khóa an toàn</td><td>xử lý chậm hơn</td></tr></table>
<div class="keywords"><b>Từ khóa:</b> encryption (mã hóa), decryption (giải mã), interception (chặn bắt), plaintext (bản rõ), ciphertext (bản mã), algorithm (thuật toán), key (khóa), symmetric (đối xứng), asymmetric (bất đối xứng), public key (khóa công khai), private key (khóa riêng), key distribution (phân phối khóa), brute force, HTTPS</div>`
  }
});

Object.assign(window.VI.glossary, {
  "2.1a": [["Packet", "Một đơn vị dữ liệu nhỏ được gửi qua mạng"], ["Packet header", "Phần của gói tin chứa địa chỉ đích, số thứ tự gói và địa chỉ người gửi"], ["Payload", "Dữ liệu thực sự được chở trong gói tin"], ["Trailer", "Phần của gói tin đánh dấu điểm kết thúc và chứa dữ liệu kiểm tra lỗi"], ["Packet number", "Số giúp sắp xếp các gói tin lại đúng thứ tự"], ["Originator's address", "Địa chỉ của thiết bị đã gửi gói tin"]],
  "2.1b": [["Packet switching", "Phương pháp trong đó các gói tin đi độc lập, có thể theo các tuyến khác nhau, và được sắp xếp lại ở nơi nhận"], ["Router", "Thiết bị quyết định tuyến đi của mỗi gói tin"], ["Hop", "Một chặng trong hành trình của gói tin, từ bộ định tuyến này sang bộ định tuyến kế tiếp"]],
  "2.2a": [["Serial transmission", "Truyền dữ liệu từng bit một qua một dây duy nhất"], ["Parallel transmission", "Truyền nhiều bit cùng lúc qua nhiều dây"], ["Simplex", "Dữ liệu chỉ đi theo một hướng"], ["Half-duplex", "Dữ liệu đi theo cả hai hướng, nhưng không cùng lúc"], ["Full-duplex", "Dữ liệu đi theo cả hai hướng cùng một lúc"], ["Skew", "Hiện tượng các bit gửi song song đến vào những thời điểm khác nhau"], ["Crosstalk", "Nhiễu giữa các dây của một sợi cáp"]],
  "2.2b": [["USB", "Universal serial bus, giao diện nối tiếp chuẩn công nghiệp để kết nối thiết bị"], ["Device driver", "Phần mềm giúp hệ điều hành giao tiếp với một thiết bị phần cứng"], ["Backwards compatible", "Có thể hoạt động với các phiên bản cũ hơn của cùng một công nghệ"]],
  "2.3a": [["Interference", "Sự nhiễu loạn tín hiệu có thể làm hỏng dữ liệu"], ["Data loss", "Một phần dữ liệu bị mất trong khi truyền"], ["Data gain", "Có thêm dữ liệu thừa trong khi truyền"], ["Data change", "Các bit bị thay đổi (bị đảo) trong khi truyền"]],
  "2.3b": [["Parity bit", "Một bit thêm vào để số bit 1 thành chẵn hoặc lẻ"], ["Even parity", "Tổng số bit 1 phải là số chẵn"], ["Odd parity", "Tổng số bit 1 phải là số lẻ"], ["Parity byte", "Một byte thêm vào chứa parity của từng cột trong một khối"], ["Checksum", "Giá trị được tính từ dữ liệu, gửi kèm theo và được bên nhận tính lại"], ["Echo check", "Bên nhận gửi dữ liệu trở lại cho bên gửi để so sánh"]],
  "2.3c": [["Check digit", "Một chữ số thêm vào, được tính từ các chữ số còn lại, dùng để phát hiện lỗi nhập dữ liệu"], ["Transposition error", "Lỗi hai chữ số bị đổi chỗ cho nhau khi nhập dữ liệu"], ["ISBN", "Mã số sách có chữ số cuối là chữ số kiểm tra"]],
  "2.3d": [["ARQ", "Phương pháp dùng xác nhận và hết thời gian chờ để đảm bảo dữ liệu đến nơi không có lỗi"], ["Positive acknowledgement", "Thông báo từ bên nhận cho biết dữ liệu đã đến đúng"], ["Negative acknowledgement", "Thông báo từ bên nhận cho biết dữ liệu có lỗi"], ["Timeout", "Khoảng thời gian bên gửi chờ xác nhận trước khi gửi lại"]],
  "2.4a": [["Encryption", "Xáo trộn dữ liệu để nó vô nghĩa nếu bị chặn bắt"], ["Plaintext", "Dữ liệu đọc được trước khi mã hóa"], ["Ciphertext", "Dữ liệu đã mã hóa, không đọc được"], ["Decryption", "Chuyển ciphertext trở lại thành plaintext"], ["Interception", "Việc người không được phép truy cập dữ liệu trong lúc nó đang được truyền"]],
  "2.4b": [["Symmetric encryption", "Dùng cùng một khóa bí mật để mã hóa và giải mã"], ["Asymmetric encryption", "Khóa công khai dùng để mã hóa và khóa riêng tương ứng dùng để giải mã"], ["Public key", "Khóa mà ai cũng có thể có, dùng để mã hóa dữ liệu gửi cho bên nhận"], ["Private key", "Khóa bí mật do bên nhận giữ, dùng để giải mã dữ liệu"], ["Key distribution problem", "Khó khăn trong việc gửi khóa bí mật cho bên nhận một cách an toàn"], ["Brute force", "Thử mọi khóa có thể cho đến khi tìm được khóa đúng"]]
});
