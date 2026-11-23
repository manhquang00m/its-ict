window.VI = window.VI || { topics: {}, objectives: {}, bank: {}, glossary: {}, ui: {} };

Object.assign(window.VI.bank, {

"2.1a": [
  ["Vì sao dữ liệu được chia thành các gói tin (packet) trước khi truyền?", "Gói nhỏ dễ định tuyến hơn, và chỉ những gói bị mất hoặc hỏng mới phải gửi lại", ["Gói tin làm cho dữ liệu được mã hóa", "Gói tin ngăn mọi lỗi xảy ra", "Gói tin làm cho tệp nhỏ đi"]],
  ["Ba phần chính của một gói tin là gì?", "Header, payload và trailer", ["Header, footer và body", "Địa chỉ, dữ liệu và checksum", "Đầu, giữa và cuối"]],
  ["Phần nào của gói tin chứa dữ liệu thực sự cần gửi?", "Payload", ["Header", "Trailer", "Số thứ tự gói"], { t: ["payload", "phần payload", "dữ liệu tải"] }],
  ["Phần nào của gói tin chứa địa chỉ đích?", "Header", ["Payload", "Trailer", "Checksum"], { t: ["packet header", "the header", "phần đầu", "phần đầu gói tin"] }],
  ["Mục nào sau đây có trong header của gói tin?", "Số thứ tự gói", ["Giá trị kiểm tra lỗi", "Dấu hiệu kết thúc gói tin", "Dữ liệu thực sự"]],
  ["Mục nào sau đây KHÔNG có trong header của gói tin?", "Dữ liệu payload", ["Địa chỉ đích", "Địa chỉ người gửi", "Số thứ tự gói"]],
  ["'Originator's address' (địa chỉ người gửi) trong header của gói tin là gì?", "Địa chỉ của thiết bị đã gửi gói tin", ["Địa chỉ của thiết bị nhận", "Địa chỉ của bộ định tuyến", "Địa chỉ của gói tin kế tiếp"]],
  ["Vì sao mỗi gói tin có một số thứ tự?", "Để các gói tin có thể được sắp xếp lại đúng thứ tự khi đến nơi", ["Để bộ định tuyến biết tốc độ", "Để gói tin có thể được mã hóa", "Để payload có thể được nén"]],
  ["Trailer của gói tin chứa gì?", "Cách nhận biết điểm kết thúc của gói tin và một phương pháp kiểm tra lỗi", ["Địa chỉ đích", "Số thứ tự gói", "Địa chỉ người gửi"]],
  ["Phương pháp kiểm tra lỗi nào có thể nằm trong trailer của gói tin?", "Kiểm tra dư thừa vòng (CRC) hoặc checksum", ["Chữ số kiểm tra (check digit)", "Kiểm tra bằng mắt", "Kiểm tra nhập hai lần"]],
  ["Header chứa ba mục. Danh sách nào đúng?", "Địa chỉ đích, số thứ tự gói, địa chỉ người gửi", ["Payload, trailer, checksum", "Tên người gửi, tên tệp, ngày", "Địa chỉ bộ định tuyến, tốc độ, kích thước"]],
  ["Phần nào của gói tin giúp bên nhận phát hiện dữ liệu có bị hỏng hay không?", "Trailer", ["Header", "Payload", "Số thứ tự gói"], { t: ["trailer", "phần trailer", "phần cuối"] }]
],

"2.1b": [
  ["Trong chuyển mạch gói, cái gì quyết định tuyến đi của mỗi gói tin?", "Bộ định tuyến (router)", ["Máy tính nhận", "Bàn phím", "Payload"], { t: ["router", "bộ định tuyến", "một bộ định tuyến", "các bộ định tuyến"] }],
  ["Trong chuyển mạch gói, tất cả các gói của một tệp có đi cùng một tuyến không?", "Không nhất thiết — mỗi gói có thể đi theo một tuyến khác nhau", ["Có, luôn luôn", "Chỉ khi tệp nhỏ", "Chỉ trên mạng không dây"]],
  ["Vì sao các gói tin có thể đến không đúng thứ tự?", "Chúng đi theo các tuyến khác nhau, có thể nhanh hoặc chậm hơn", ["Bộ định tuyến cố tình xáo trộn chúng", "Bên gửi gửi chúng theo thứ tự ngẫu nhiên", "Gói tin không có số thứ tự"]],
  ["Các gói tin được sắp xếp lại đúng thứ tự vào lúc nào?", "Khi gói cuối cùng đã đến đích", ["Trước khi chúng được gửi đi", "Tại bộ định tuyến đầu tiên", "Mỗi khi một gói đến một bộ định tuyến"]],
  ["Bộ định tuyến xem thông tin nào để quyết định gửi gói tin đi đâu?", "Địa chỉ đích trong header", ["Payload", "Trailer", "Chỉ kích thước của gói tin"]],
  ["Điều gì xảy ra nếu một gói tin bị mất trong chuyển mạch gói?", "Bên nhận yêu cầu gửi lại gói bị thiếu", ["Cả tệp bị xóa", "Bộ định tuyến tạo ra một gói mới", "Không có gì — tệp vẫn ổn khi thiếu gói đó"]],
  ["Đâu là một ưu điểm của chuyển mạch gói?", "Gói tin có thể được định tuyến lại để tránh các phần mạng đang bận hoặc hỏng", ["Gói tin luôn đến đúng thứ tự", "Không cần thêm dữ liệu nào", "Không bao giờ có độ trễ"]],
  ["Đâu là một nhược điểm của chuyển mạch gói?", "Gói tin có thể đến không đúng thứ tự và cần được sắp xếp lại, gây độ trễ", ["Mỗi đường truyền chỉ một người dùng được dùng tại một thời điểm", "Một đường truyền hỏng làm dừng mọi dữ liệu", "Phải gửi lại cả tệp nếu một gói bị mất"]],
  ["Vì sao chuyển mạch gói có thể gây vấn đề cho cuộc gọi video trực tiếp?", "Độ trễ khi sắp xếp lại các gói có thể làm cuộc gọi bị giật", ["Video không thể chia thành gói tin", "Gói tin không thể chở âm thanh", "Bộ định tuyến chặn video"]],
  ["Sắp xếp theo thứ tự: (1) các gói tin được sắp xếp lại (2) dữ liệu được chia thành gói tin (3) các gói tin đi theo các tuyến khác nhau", "2, 3, 1", ["1, 2, 3", "3, 2, 1", "2, 1, 3"]],
  ["Mỗi bước một gói tin đi từ bộ định tuyến này sang bộ định tuyến kế tiếp được gọi là một…", "hop", ["jump", "cycle", "pulse"], { t: ["hop", "chặng", "một chặng"] }]
],

"2.2a": [
  ["Truyền nối tiếp (serial) là gì?", "Dữ liệu được gửi từng bit một qua một dây duy nhất", ["Nhiều bit được gửi cùng lúc qua nhiều dây", "Dữ liệu được gửi theo cả hai hướng cùng lúc", "Dữ liệu được gửi qua không khí"]],
  ["Truyền song song (parallel) là gì?", "Nhiều bit được gửi cùng lúc qua nhiều dây", ["Dữ liệu được gửi từng bit một qua một dây", "Dữ liệu chỉ đi theo một hướng", "Dữ liệu được gửi thành các gói tin qua internet"]],
  ["Skew là gì?", "Hiện tượng các bit gửi song song đến vào những thời điểm hơi khác nhau", ["Khi cáp nối tiếp quá ngắn", "Khi một gói tin bị mất", "Khi hai thiết bị gửi dữ liệu cùng lúc"], { t: ["skew"] }],
  ["Vì sao truyền nối tiếp tốt hơn truyền song song trên khoảng cách xa?", "Các bit đến đúng thứ tự, không bị skew và ít bị nhiễu hơn", ["Nó luôn nhanh hơn", "Nó dùng nhiều dây hơn", "Nó chỉ gửi được một byte"]],
  ["Truyền song song thường được dùng ở đâu?", "Trên khoảng cách ngắn, chẳng hạn các bus bên trong máy tính", ["Trên khắp internet", "Cho cáp dài giữa các tòa nhà", "Cho các kết nối USB"]],
  ["Truyền simplex là gì?", "Dữ liệu chỉ đi theo một hướng", ["Dữ liệu đi theo cả hai hướng cùng lúc", "Dữ liệu đi theo cả hai hướng, nhưng không cùng lúc", "Dữ liệu đi qua nhiều dây"]],
  ["Truyền half-duplex là gì?", "Dữ liệu đi theo cả hai hướng, nhưng không cùng lúc", ["Dữ liệu chỉ đi theo một hướng", "Dữ liệu đi theo cả hai hướng cùng lúc", "Dữ liệu được gửi từng bit một"]],
  ["Truyền full-duplex là gì?", "Dữ liệu đi theo cả hai hướng cùng lúc", ["Dữ liệu chỉ đi theo một hướng", "Dữ liệu đi theo cả hai hướng, lần lượt từng hướng", "Dữ liệu chỉ đi qua một dây duy nhất"]],
  ["Bộ đàm (walkie-talkie) là ví dụ của…", "half-duplex", ["simplex", "full-duplex", "song song"], { t: ["half duplex", "half-duplex"] }],
  ["Một cuộc gọi điện thoại là ví dụ của…", "full-duplex", ["simplex", "half-duplex", "chỉ nối tiếp"], { t: ["full duplex", "full-duplex"] }],
  ["Gửi dữ liệu từ máy tính đến máy in mà máy in không bao giờ phản hồi là ví dụ của…", "simplex", ["half-duplex", "full-duplex", "song song"], { t: ["simplex"] }],
  ["Truyền hình quảng bá là ví dụ của…", "simplex", ["half-duplex", "full-duplex", "chuyển mạch gói"], { t: ["simplex"] }],
  ["Một cuộc gọi video qua internet phù hợp nhất với…", "nối tiếp full-duplex", ["song song simplex", "nối tiếp simplex", "song song half-duplex"], { t: ["serial full-duplex", "serial full duplex", "nối tiếp full duplex"] }],
  ["Đâu là một ưu điểm của truyền song song?", "Nhanh hơn trên khoảng cách ngắn", ["Không bị skew", "Rẻ hơn trên khoảng cách xa", "Dùng một dây duy nhất"]],
  ["Đâu là một nhược điểm của truyền song song?", "Skew và crosstalk làm nó không đáng tin cậy trên khoảng cách xa", ["Quá chậm trên khoảng cách ngắn", "Chỉ gửi được theo một hướng", "Không gửi được dữ liệu nhị phân"]],
  ["Nhiễu giữa các dây trong một cáp song song được gọi là…", "crosstalk", ["skew", "latency", "jitter"], { t: ["crosstalk"] }],
  ["Một trường học cần nối một máy in cách xa 20 m. Cách nào phù hợp nhất?", "Truyền nối tiếp", ["Truyền song song", "Song song simplex", "Không thể dùng cáp"]],
  ["Vì sao truyền nối tiếp thường rẻ hơn truyền song song?", "Nó cần ít dây hơn", ["Nó chỉ dùng cáp quang", "Nó không cần cáp", "Nó gửi ít dữ liệu hơn"]]
],

"2.2b": [
  ["USB là viết tắt của gì?", "Universal Serial Bus", ["Universal System Board", "United Serial Bridge", "Universal Signal Bus"], { t: ["universal serial bus"] }],
  ["USB dùng kiểu truyền nào?", "Nối tiếp", ["Song song", "Chỉ simplex", "Không dây"], { t: ["serial", "nối tiếp", "truyền nối tiếp"] }],
  ["Đâu là một ưu điểm của USB?", "Thiết bị được tự động phát hiện và driver phù hợp được nạp", ["Cáp có thể dài tùy ý", "Nó chỉ dùng được với máy in", "Nó dùng truyền song song"]],
  ["Đâu là một nhược điểm của USB?", "Chiều dài cáp tiêu chuẩn bị giới hạn (khoảng 5 m)", ["Thiết bị phải được cấu hình thủ công", "Nó không thể cấp điện cho thiết bị", "Nó không phải là chuẩn công nghiệp"]],
  ["Điều gì xảy ra khi một thiết bị USB được cắm vào máy tính lần đầu?", "Máy tính phát hiện nó và nạp (hoặc yêu cầu cài đặt) driver thiết bị phù hợp", ["Máy tính khởi động lại", "Các tệp của thiết bị bị xóa", "Thiết bị bị mã hóa"]],
  ["Vì sao việc USB là chuẩn công nghiệp lại hữu ích?", "Hầu hết máy tính và thiết bị đều hỗ trợ nó", ["Nó không thể bị sao chép", "Nó là kết nối nhanh nhất có thể", "Nó không bao giờ cần driver"]],
  ["'Backwards compatible' (tương thích ngược) có nghĩa gì với USB?", "Cổng USB mới vẫn hoạt động với các thiết bị USB cũ", ["Cáp USB dùng được theo cả hai chiều", "USB có thể gửi dữ liệu ngược lại", "Cổng cũ chạy nhanh hơn cổng mới"]],
  ["Ngoài dữ liệu, cáp USB thường còn có thể cấp thêm gì cho thiết bị?", "Điện để thiết bị hoạt động hoặc sạc", ["Truy cập internet", "Địa chỉ IP", "Địa chỉ MAC"]],
  ["Đầu nối USB chỉ cắm được một chiều (USB-C thì cắm chiều nào cũng được). Vì sao đó là một ưu điểm?", "Nó ngăn việc kết nối sai", ["Nó làm cáp dài hơn", "Nó tăng tốc độ", "Nó mã hóa dữ liệu"]],
  ["Trình điều khiển thiết bị (device driver) là gì?", "Phần mềm giúp hệ điều hành giao tiếp với một thiết bị phần cứng", ["Một sợi cáp USB", "Một loại virus", "Người đang dùng máy tính"]]
],

"2.3a": [
  ["Vì sao cần kiểm tra lỗi sau khi truyền dữ liệu?", "Nhiễu có thể làm hỏng dữ liệu, nên dữ liệu có thể không đến đúng y như khi gửi", ["Để làm dữ liệu nhỏ đi", "Để mã hóa dữ liệu", "Để tăng tốc mạng"]],
  ["Điều gì có thể gây ra lỗi khi truyền dữ liệu?", "Nhiễu, chẳng hạn nhiễu điện", ["Dùng hệ thập lục phân", "Dùng cáp USB", "Nén tệp"]],
  ["Ba loại lỗi nào có thể xảy ra khi truyền dữ liệu?", "Mất dữ liệu, thêm dữ liệu và thay đổi dữ liệu", ["Nén, mã hóa và giải mã dữ liệu", "Lỗi cú pháp, lỗi logic và lỗi khi chạy", "Tràn số, thiếu số và skew"]],
  ["Các bit bị đảo từ 0 thành 1 trong khi truyền là ví dụ của…", "thay đổi dữ liệu (data change)", ["mất dữ liệu", "thêm dữ liệu", "nén"], { t: ["data change", "thay đổi dữ liệu"] }],
  ["Có thêm bit thừa chen vào dữ liệu trong khi truyền là ví dụ của…", "thêm dữ liệu (data gain)", ["mất dữ liệu", "thay đổi dữ liệu", "mã hóa"], { t: ["data gain", "thêm dữ liệu"] }],
  ["Một số gói tin không bao giờ đến đích là ví dụ của…", "mất dữ liệu (data loss)", ["thêm dữ liệu", "thay đổi dữ liệu", "skew"], { t: ["data loss", "mất dữ liệu"] }]
],

"2.3b": [
  ["Với parity chẵn, tổng số bit 1 trong byte (tính cả parity bit) phải là…", "số chẵn", ["số lẻ", "8", "số không"], { t: ["even", "chẵn", "số chẵn"] }],
  ["Với parity lẻ, tổng số bit 1 trong byte (tính cả parity bit) phải là…", "số lẻ", ["số chẵn", "1", "7"], { t: ["odd", "lẻ", "số lẻ"] }],
  ["Parity bit là gì?", "Một bit thêm vào để số bit 1 thành lẻ hoặc chẵn", ["Bit cuối cùng của mọi tệp", "Bit lưu số thứ tự gói", "Bit dùng để mã hóa"]],
  ["Lỗi nào mà kiểm tra chẵn lẻ đơn giản KHÔNG phát hiện được?", "Hai bit bị đổi trong cùng một byte", ["Một bit bị đổi", "Một bit bị đảo từ 0 thành 1", "Một bit bị đảo từ 1 thành 0"]],
  ["So với một parity bit đơn, kiểm tra khối chẵn lẻ (parity block) cho thêm thông tin gì?", "Nó xác định được chính xác bit nào sai, nên có thể sửa lại", ["Nó mã hóa dữ liệu", "Nó nén dữ liệu", "Nó cho biết ai đã gửi dữ liệu"]],
  ["Trong kiểm tra khối chẵn lẻ, byte chẵn lẻ (parity byte) là gì?", "Một byte thêm vào, tạo từ parity của từng cột bit", ["Byte đầu tiên của tệp", "Một byte lưu checksum", "Một byte chứa địa chỉ đích"]],
  ["Trong kiểm tra khối chẵn lẻ, bit sai được tìm ra bằng cách nào?", "Nó nằm ở chỗ hàng và cột có parity sai giao nhau", ["Nó luôn là parity bit", "Nó là bit nhận được cuối cùng", "Nó được tìm bằng kiểm tra phản hồi (echo check)"]],
  ["Checksum hoạt động như thế nào?", "Một giá trị được tính từ dữ liệu và gửi kèm theo; bên nhận tính lại và so sánh", ["Mỗi byte được gửi hai lần", "Bên nhận gửi trả lại toàn bộ dữ liệu", "Người dùng thêm một chữ số"]],
  ["Trong checksum, điều gì xảy ra nếu giá trị bên nhận tính ra không khớp với giá trị được gửi?", "Đã có lỗi và dữ liệu được yêu cầu gửi lại", ["Dữ liệu vẫn được chấp nhận", "Dữ liệu bị mã hóa", "Bên gửi bị chặn"]],
  ["Kiểm tra phản hồi (echo check) hoạt động như thế nào?", "Bên nhận gửi một bản sao dữ liệu trở lại cho bên gửi, bên gửi so sánh với bản gốc", ["Một giá trị được tính và gửi kèm dữ liệu", "Một parity bit được thêm vào mỗi byte", "Người dùng gõ dữ liệu hai lần"]],
  ["Điểm yếu của kiểm tra phản hồi (echo check) là gì?", "Nếu có lỗi, bạn không biết nó xảy ra trên đường đi hay trên đường về", ["Nó không phát hiện được lỗi nào", "Nó chỉ dùng được cho văn bản", "Nó cần một chữ số kiểm tra"]],
  ["Phương pháp phát hiện lỗi nào làm lượng dữ liệu truyền đi tăng gấp đôi?", "Kiểm tra phản hồi (echo check)", ["Kiểm tra chẵn lẻ", "Checksum", "Chữ số kiểm tra"], { t: ["echo check", "kiểm tra phản hồi", "echo"] }],
  ["Dữ liệu được gửi bằng parity chẵn. Byte nào có lỗi?", "10110011", ["10110010", "00000000", "11110000"], { e: "10110011 có năm bit 1, là số lẻ — nên với parity chẵn thì nó chắc chắn có lỗi. Các byte còn lại có số bit 1 chẵn." }]
],

"2.3c": [
  ["Chữ số kiểm tra (check digit) là gì?", "Một chữ số thêm vào cuối một số, được tính từ các chữ số còn lại", ["Chữ số đầu tiên của một số", "Một chữ số được người dùng gõ hai lần", "Một parity bit cho mỗi byte"]],
  ["Chữ số kiểm tra phát hiện loại lỗi nào?", "Lỗi khi nhập dữ liệu, chẳng hạn lỗi gõ hoặc lỗi quét", ["Lỗi do nhiễu trong khi truyền", "Lỗi cú pháp trong mã", "Lỗi tràn số"]],
  ["Cái nào sau đây dùng chữ số kiểm tra?", "Số ISBN trên sách", ["Địa chỉ IP", "Địa chỉ MAC", "Tệp âm thanh"]],
  ["Cái nào sau đây dùng chữ số kiểm tra?", "Mã vạch trên sản phẩm", ["Địa chỉ email", "Mật khẩu", "Mã màu thập lục phân"]],
  ["Hai chữ số bị đổi chỗ khi gõ (ví dụ 5729 gõ thành 5279) được gọi là…", "lỗi hoán vị (transposition error)", ["lỗi chẵn lẻ", "lỗi tràn số", "lỗi skew"], { t: ["transposition", "transposition error", "lỗi hoán vị", "hoán vị"] }],
  ["Chữ số kiểm tra phát hiện được những lỗi nào?", "Một chữ số sai, hai chữ số bị đổi chỗ, hoặc thiếu/thừa một chữ số", ["Chỉ lỗi chính tả trong từ", "Chỉ lỗi trong tệp âm thanh", "Chỉ lỗi do virus gây ra"]],
  ["Khi một mã vạch được quét, chữ số kiểm tra được xử lý ra sao?", "Nó được tính lại từ các chữ số còn lại rồi so sánh với chữ số kiểm tra vừa quét", ["Nó bị bỏ qua", "Nó được cộng vào giá", "Nó được gửi cho nhà sản xuất"]],
  ["Trong cách tính ISBN-13, 12 chữ số đầu được nhân lần lượt với…", "1 và 3", ["1 và 2", "2 và 3", "10 và 1"]],
  ["Trong cách tính ISBN-13, nếu tổng MOD 10 bằng 0 thì chữ số kiểm tra là…", "0", ["10", "1", "9"], { t: ["zero", "không"] }]
],

"2.3d": [
  ["ARQ là viết tắt của gì?", "Automatic Repeat Query (request)", ["Automatic Receive Queue", "Advanced Routing Query", "Automatic Reply Quality"]],
  ["Trong ARQ, bên nhận gửi gì nếu dữ liệu đã đến đúng?", "Một xác nhận dương (positive acknowledgement)", ["Một xác nhận âm (negative acknowledgement)", "Một timeout", "Không gửi gì cả"], { t: ["positive acknowledgement", "positive acknowledgment", "acknowledgement", "xác nhận dương", "xác nhận"] }],
  ["Trong ARQ, bên nhận gửi gì nếu dữ liệu có lỗi?", "Một xác nhận âm (negative acknowledgement)", ["Một xác nhận dương (positive acknowledgement)", "Một checksum mới", "Một bản phản hồi (echo) của dữ liệu"], { t: ["negative acknowledgement", "negative acknowledgment", "xác nhận âm"] }],
  ["Timeout trong ARQ là gì?", "Khoảng thời gian cố định bên gửi chờ xác nhận trước khi gửi lại dữ liệu", ["Thời gian cần để mã hóa dữ liệu", "Thời gian bộ định tuyến giữ một gói tin", "Thời gian người dùng có để gõ mật khẩu"]],
  ["Trong ARQ, điều gì xảy ra nếu bên gửi không nhận được xác nhận nào trước khi hết timeout?", "Nó tự động gửi lại dữ liệu", ["Nó xóa dữ liệu", "Nó chờ mãi mãi", "Nó thực hiện kiểm tra phản hồi (echo check)"]],
  ["ARQ dùng gì để biết dữ liệu có lỗi hay không?", "Một phương pháp phát hiện lỗi, chẳng hạn checksum hoặc kiểm tra chẵn lẻ", ["Một chữ số kiểm tra do người dùng gõ", "Kiểm tra bằng mắt", "Mã hóa"]],
  ["Quá trình ARQ ngừng gửi lại dữ liệu khi nào?", "Khi nhận được xác nhận dương (hoặc sau một số lần thử nhất định)", ["Sau đúng một lần thử", "Khi dữ liệu được mã hóa", "Khi bộ định tuyến quyết định"]]
],

"2.4a": [
  ["Mục đích của mã hóa là gì?", "Làm cho dữ liệu vô nghĩa với bất kỳ ai chặn bắt nó mà không có khóa", ["Ngăn dữ liệu bị chặn bắt", "Làm tệp nhỏ đi", "Phát hiện lỗi trong dữ liệu"]],
  ["Mã hóa có ngăn tin tặc chặn bắt dữ liệu không?", "Không — nó chỉ làm cho dữ liệu bị chặn trở nên không đọc được", ["Có, hoàn toàn", "Chỉ trên mạng không dây", "Chỉ với tệp nhỏ"]],
  ["Plaintext (bản rõ) là gì?", "Dữ liệu gốc, đọc được, trước khi được mã hóa", ["Dữ liệu đã mã hóa", "Khóa dùng để mã hóa", "Văn bản không có định dạng"]],
  ["Ciphertext (bản mã) là gì?", "Dữ liệu đã mã hóa, không thể hiểu được nếu không có khóa", ["Dữ liệu gốc đọc được", "Một loại phông chữ", "Một mật khẩu"]],
  ["Thứ gì được dùng cùng với thuật toán mã hóa để mã hóa dữ liệu?", "Một khóa (key)", ["Một chữ số kiểm tra", "Một parity bit", "Một địa chỉ MAC"], { t: ["key", "an encryption key", "khóa", "một khóa", "khóa mã hóa"] }],
  ["Vì sao mã hóa đặc biệt quan trọng khi gửi dữ liệu qua internet?", "Internet là mạng công cộng, nên dữ liệu rất dễ bị chặn bắt", ["Internet chậm hơn mạng LAN", "Dữ liệu trên mạng luôn bị nén", "Bộ định tuyến xóa dữ liệu chưa mã hóa"]],
  ["Dữ liệu nào sau đây cần được mã hóa nhất khi gửi đi?", "Thông tin ngân hàng trực tuyến", ["Một trang tin tức công khai", "Giờ mở cửa của trường", "Dự báo thời tiết"]],
  ["Chuyển ciphertext trở lại thành plaintext được gọi là…", "giải mã (decryption)", ["mã hóa", "nén", "truyền"], { t: ["decryption", "decrypting", "decrypt", "giải mã"] }]
],

"2.4b": [
  ["Trong mã hóa đối xứng, dùng bao nhiêu khóa?", "Một — cùng một khóa vừa mã hóa vừa giải mã", ["Hai — một khóa công khai và một khóa riêng", "Ba", "Không có"]],
  ["Vấn đề chính của mã hóa đối xứng là gì?", "Khóa bí mật phải được chia sẻ cho bên nhận và có thể bị chặn bắt", ["Nó không mã hóa được văn bản", "Nó cần hai khóa khác nhau", "Nó quá chậm để dùng vào bất cứ việc gì"]],
  ["Trong mã hóa bất đối xứng, khóa nào được dùng để mã hóa dữ liệu?", "Khóa công khai của bên nhận", ["Khóa riêng của bên nhận", "Khóa riêng của bên gửi", "Một khóa bí mật dùng chung"]],
  ["Trong mã hóa bất đối xứng, khóa nào được dùng để giải mã dữ liệu?", "Khóa riêng của bên nhận", ["Khóa công khai của bên nhận", "Khóa công khai của bên gửi", "Khóa nào cũng được"]],
  ["Ai tạo ra khóa công khai và khóa riêng trong mã hóa bất đối xứng?", "Bên nhận", ["Bên gửi", "Bộ định tuyến", "Nhà cung cấp dịch vụ internet"], { t: ["the receiver", "receiver", "bên nhận", "người nhận"] }],
  ["Khóa công khai có thể được đưa cho ai?", "Bất kỳ ai", ["Chỉ bên nhận", "Chỉ chính phủ", "Không ai cả"], { t: ["anyone", "bất kỳ ai", "ai cũng được", "mọi người"] }],
  ["Khóa nào tuyệt đối không được chia sẻ?", "Khóa riêng", ["Khóa công khai", "Cả hai khóa", "Không khóa nào"], { t: ["private", "private key", "khóa riêng"] }],
  ["Mã hóa bất đối xứng giải quyết vấn đề phân phối khóa như thế nào?", "Khóa riêng dùng để giải mã dữ liệu không bao giờ phải gửi cho ai", ["Nó không dùng khóa nào cả", "Nó gửi khóa hai lần", "Nó nén khóa"]],
  ["Dùng độ dịch 3, mật mã Caesar mã hóa HELLO thành gì?", "KHOOR", ["IFMMP", "EBIIL", "HELLO3"], { t: ["KHOOR"] }],
  ["Loại mã hóa nào được các trang web HTTPS dùng để trao đổi khóa an toàn?", "Mã hóa bất đối xứng", ["Chỉ mã hóa đối xứng", "Mã hóa độ dài chạy (run-length encoding)", "Mã hóa parity"]],
  ["Mật khẩu Wi-Fi (khóa chia sẻ trước) là ví dụ của…", "mã hóa đối xứng", ["mã hóa bất đối xứng", "một chữ số kiểm tra", "một kiểm tra phản hồi (echo check)"], { t: ["symmetric", "symmetric encryption", "đối xứng"] }],
  ["Phát biểu nào về mã hóa bất đối xứng là ĐÚNG?", "Dữ liệu mã hóa bằng khóa công khai chỉ có thể giải mã bằng khóa riêng tương ứng", ["Khóa công khai dùng để giải mã dữ liệu", "Cả hai người đều cần cùng một khóa bí mật", "Khóa riêng của bên gửi được gửi kèm tin nhắn"]],
  ["Loại nào thường xử lý nhanh hơn?", "Mã hóa đối xứng", ["Mã hóa bất đối xứng", "Chúng luôn như nhau", "Cả hai đều không xử lý được"], { t: ["symmetric", "symmetric encryption", "đối xứng"] }],
  ["Vì sao các hệ thống mã hóa thực tế dùng khóa dài hàng trăm bit?", "Có rất nhiều khóa có thể, nên thử hết chúng (brute force) sẽ mất quá nhiều thời gian", ["Khóa dài làm tệp nhỏ đi", "Khóa ngắn không thể lưu trữ", "Khóa dài dễ nhớ hơn"]]
]
});
