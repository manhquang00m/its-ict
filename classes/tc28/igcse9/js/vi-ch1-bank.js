/* Vietnamese quiz bank — Chapter 1 Data representation (index-aligned with BANK) */
window.VI = window.VI || { topics: {}, objectives: {}, bank: {}, glossary: {}, ui: {} };
Object.assign(window.VI.bank, {

"1.1a": [
  ["Vì sao máy tính dùng nhị phân để biểu diễn dữ liệu?", "Chúng được tạo từ các công tắc (transistor) chỉ có hai trạng thái: bật và tắt", ["Nhị phân dễ đọc hơn đối với con người", "Nhị phân tốn ít điện hơn thập phân", "Số nhị phân luôn ngắn hơn"], { e: "Mỗi transistor hoặc bật (1) hoặc tắt (0), nên mọi dữ liệu phải được lưu dưới dạng các số 1 và 0." }],
  ["Những loại dữ liệu nào phải được đổi sang nhị phân trước khi máy tính xử lý được?", "Tất cả — số, văn bản, hình ảnh, âm thanh và lệnh", ["Chỉ số", "Chỉ văn bản và số", "Chỉ lệnh của chương trình"]],
  ["Dữ liệu được xử lý bên trong CPU bằng…", "cổng logic", ["bảng thập lục phân", "bộ đếm thập phân", "ký tự Unicode"], { t: ["cổng logic", "logic gate", "các cổng logic"] }],
  ["Dữ liệu mà CPU đang xử lý được giữ trong các vị trí nhớ nhỏ, rất nhanh gọi là…", "thanh ghi", ["cung từ (sector)", "gói tin", "điểm ảnh"], { t: ["thanh ghi", "register", "các thanh ghi"] }],
  ["Một chữ số nhị phân được gọi là gì?", "Một bit", ["Một byte", "Một nibble", "Một điểm ảnh"], { t: ["bit"] }],
  ["Một nibble có bao nhiêu bit?", "4", ["2", "8", "16"], { t: ["bốn"] }],
  ["Một byte có bao nhiêu bit?", "8", ["4", "10", "16"], { t: ["tám"] }],
  ["Hệ nhị phân có cơ số bao nhiêu?", "Cơ số 2", ["Cơ số 10", "Cơ số 8", "Cơ số 16"], { t: ["2", "cơ số 2", "co so 2"] }],
  ["Hệ thập phân có cơ số bao nhiêu?", "Cơ số 10", ["Cơ số 2", "Cơ số 16", "Cơ số 8"], { t: ["10", "cơ số 10", "co so 10"] }],
  ["Phát biểu nào về nhị phân là ĐÚNG?", "Mỗi cột có giá trị gấp đôi cột bên phải nó", ["Mỗi cột có giá trị gấp mười lần cột bên phải nó", "Nó dùng các chữ số từ 0 đến 9", "Nó chỉ biểu diễn được số"]],
  ["Một số nhị phân kết thúc bằng 1. Bạn biết gì về số đó?", "Nó là số lẻ", ["Nó là số chẵn", "Nó là số âm", "Nó lớn hơn 128"]],
  ["Hai trạng thái của một chữ số nhị phân thường được viết là…", "1 và 0", ["A và B", "bật và đúng", "có và có thể"]],
  ["Dùng 8 bit có thể lưu được bao nhiêu giá trị khác nhau?", "256", ["255", "128", "512"], { t: true, e: "2⁸ = 256 giá trị khác nhau (từ 0 đến 255)." }],
  ["Dùng 4 bit có thể lưu được bao nhiêu giá trị khác nhau?", "16", ["15", "8", "32"], { t: true }],
  ["Dùng 16 bit có thể lưu được bao nhiêu giá trị khác nhau?", "65536", ["65535", "32768", "1024"], { t: ["65,536", "65 536"], e: "2¹⁶ = 65 536 (từ 0 đến 65 535)." }]
],

"1.1b": [
  ["Giá trị vị trí của bit ngoài cùng bên trái trong một số nhị phân 8 bit là bao nhiêu?", "128", ["256", "64", "100"], { t: true }],
  ["Giá trị vị trí của bit ngoài cùng bên trái trong một số nhị phân 16 bit là bao nhiêu?", "32768", ["65536", "16384", "1024"], { t: ["32,768", "32 768"] }],
  ["Số thập phân lớn nhất có thể lưu trong 8 bit (không dấu) là bao nhiêu?", "255", ["256", "128", "127"], { t: true }],
  ["Số thập phân lớn nhất có thể lưu trong 16 bit (không dấu) là bao nhiêu?", "65535", ["65536", "32767", "1023"], { t: ["65,535", "65 535"] }],
  ["Cần tối thiểu bao nhiêu bit để lưu số thập phân 200?", "8", ["7", "9", "6"], { t: ["tám"], e: "7 bit chỉ lưu được đến 127; 8 bit lưu được đến 255." }],
  ["Cần tối thiểu bao nhiêu bit để lưu số thập phân 64?", "7", ["6", "8", "5"], { t: ["bảy"], e: "64 = 1000000, gồm 7 bit." }],
  ["Khi đổi thập phân sang nhị phân bằng cách chia cho 2, các số dư được đọc…", "từ dưới lên trên", ["từ trên xuống dưới", "theo thứ tự bất kỳ", "từ giữa ra ngoài"]],
  ["11111111 trong hệ thập phân là bao nhiêu?", "255", ["256", "128", "127"], { t: true }],
  ["10000000 trong hệ thập phân là bao nhiêu?", "128", ["1", "64", "256"], { t: true }],
  ["00000001 trong hệ thập phân là bao nhiêu?", "1", ["0", "128", "2"], { t: true }],
  ["Thêm một số 0 vào bên phải một số nhị phân (ví dụ 101 → 1010) làm giá trị của nó thế nào?", "Gấp đôi", ["Giảm một nửa", "Cộng thêm 1", "Nhân với 10"]],
  ["Số nào sau đây KHÔNG phải là số nhị phân hợp lệ?", "10201", ["10101", "11111", "00000"], { e: "Nhị phân chỉ dùng các chữ số 0 và 1." }],
  ["1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 bằng bao nhiêu?", "255", ["256", "254", "128"], { t: true, e: "Đó là khi bật tất cả các cột của một byte: 11111111." }]
],

"1.1c": [
  ["Trong phép cộng nhị phân, 1 + 1 = ?", "0 nhớ 1", ["2", "1 nhớ 0", "1 nhớ 1"], { e: "1 + 1 = 2, tức là 10 trong nhị phân: ghi 0, nhớ 1." }],
  ["Trong phép cộng nhị phân, 1 + 1 + 1 = ?", "1 nhớ 1", ["0 nhớ 1", "3", "1 nhớ 0"], { e: "1 + 1 + 1 = 3, tức là 11 trong nhị phân: ghi 1, nhớ 1." }],
  ["Trong phép cộng nhị phân, 1 + 0 = ?", "1 nhớ 0", ["0 nhớ 1", "10", "0 nhớ 0"]],
  ["Lỗi tràn số (overflow error) là gì?", "Khi kết quả phép tính cần nhiều bit hơn số bit thanh ghi chứa được", ["Khi một số là số âm", "Khi chương trình hết thời gian chạy", "Khi hai số bằng nhau"], { e: "Bit thừa không có chỗ để lưu, nên kết quả được lưu là sai." }],
  ["Trong thanh ghi 8 bit, lỗi tràn số xảy ra nếu kết quả lớn hơn…", "255", ["256", "128", "127"], { t: true }],
  ["Phép cộng nhị phân được thực hiện…", "từ phải sang trái, nhớ sang cột kế tiếp", ["từ trái sang phải", "từng byte một từ bên trái", "bằng cách đổi sang hex trước"]],
  ["Hai số 8 bit được cộng và kết quả cần 9 bit. Điều gì đã xảy ra?", "Lỗi tràn số", ["Lỗi tràn dưới (underflow)", "Lỗi cú pháp", "Lỗi chẵn lẻ"], { t: ["tràn số", "lỗi tràn số", "overflow"] }],
  ["Vì sao máy tính không thể lưu mọi số có thể có?", "Mỗi thiết bị có giới hạn định sẵn về số bit có thể lưu, ví dụ 16 bit", ["Máy tính chỉ lưu văn bản", "Nhị phân không biểu diễn được số lớn", "Các số được lưu bằng thập lục phân"]],
  ["Kết quả của 11111111 + 00000001 trong thanh ghi 8 bit là gì?", "00000000 kèm lỗi tràn số", ["100000000 được lưu đúng", "11111111", "00000001"], { e: "255 + 1 = 256 cần 9 bit; chỉ 8 bit thấp (00000000) được giữ lại." }],
  ["Cặp số 8 bit nào sẽ gây tràn số khi cộng?", "200 và 100", ["100 và 100", "127 và 128", "50 và 200"], { e: "200 + 100 = 300, lớn hơn 255." }]
],

"1.2a": [
  ["Hệ thập lục phân có cơ số bao nhiêu?", "Cơ số 16", ["Cơ số 2", "Cơ số 10", "Cơ số 8"], { t: ["16", "cơ số 16", "co so 16"] }],
  ["Hệ thập lục phân dùng những chữ số và chữ cái nào?", "0–9 và A–F", ["Chỉ 0–9", "Chỉ 0–1", "A–Z"]],
  ["Chữ số hex F có giá trị thập phân là bao nhiêu?", "15", ["16", "14", "6"], { t: true }],
  ["Chữ số hex A có giá trị thập phân là bao nhiêu?", "10", ["11", "1", "16"], { t: true }],
  ["Chữ số hex C có giá trị thập phân là bao nhiêu?", "12", ["13", "11", "3"], { t: true }],
  ["Một chữ số thập lục phân biểu diễn bao nhiêu bit?", "4", ["8", "2", "16"], { t: ["bốn"], e: "Một chữ số hex = một nibble = 4 bit." }],
  ["Giá trị vị trí của hai cột trong một số hex 2 chữ số là gì?", "16 và 1", ["10 và 1", "2 và 1", "256 và 16"]],
  ["Giá trị vị trí của cột thứ ba tính từ bên phải trong hệ thập lục phân là bao nhiêu?", "256", ["100", "160", "4096"], { t: true }],
  ["Khi đổi nhị phân sang hex, bạn tách số nhị phân thành các nhóm 4 bit bắt đầu từ…", "bên phải", ["bên trái", "ở giữa", "bit có trọng số lớn nhất"], { t: ["phải", "bên phải", "right"] }],
  ["Giá trị thập phân lớn nhất có thể biểu diễn bằng 2 chữ số hex là bao nhiêu?", "255", ["99", "256", "160"], { t: true, e: "FF = 15 × 16 + 15 = 255." }],
  ["FF trong nhị phân là gì?", "11111111", ["11110000", "10101010", "00001111"], { t: true }],
  ["1111 trong hex là gì?", "F", ["E", "15", "A"], { t: true }],
  ["Chữ số hex ứng với nhị phân 1010 là gì?", "A", ["10", "B", "9"], { t: true }],
  ["Giá trị hex nào lớn nhất?", "F0", ["9F", "AB", "EF"]],
  ["10 trong hệ thập lục phân bằng bao nhiêu trong hệ thập phân?", "16", ["10", "2", "1"], { t: true, e: "10 trong hex nghĩa là một số 16 và không có đơn vị nào." }]
],

"1.2b": [
  ["Vì sao các nhà khoa học máy tính thường dùng hệ thập lục phân thay cho nhị phân?", "Nó ngắn hơn và con người dễ đọc, dễ nhớ hơn", ["Máy tính xử lý hex nhanh hơn nhị phân", "Nó tốn ít dung lượng bộ nhớ hơn", "Đó là cách duy nhất để lưu màu sắc"]],
  ["Vì sao con người ít mắc lỗi với hex hơn với nhị phân?", "Số hex ngắn hơn nhiều nên có ít chữ số cần chép", ["Hex không bao giờ có lỗi", "Hex được kiểm tra bằng bit chẵn lẻ", "Hex chỉ dùng chữ cái"]],
  ["Máy tính có xử lý dữ liệu bằng thập lục phân không?", "Không — nó vẫn làm việc bằng nhị phân; hex chỉ để con người đọc", ["Có, CPU làm việc bằng hex", "Chỉ GPU làm việc bằng hex", "Có, nhưng chỉ với màu sắc"]],
  ["Đâu là một ứng dụng phổ biến của hệ thập lục phân?", "Địa chỉ MAC", ["Lưu các mẫu âm thanh", "Đo tốc độ xung nhịp", "Tính dung lượng tệp"]],
  ["#FF0000 là ví dụ về việc dùng hệ thập lục phân cho…", "một mã màu HTML/CSS", ["một địa chỉ MAC", "một địa chỉ IP", "một bản sao bộ nhớ (memory dump)"]],
  ["Trong mã màu HTML như #00FF00, ba cặp chữ số hex biểu diễn lượng…", "đỏ, lục và lam", ["lục lam, đỏ tươi và vàng", "độ sáng, độ tương phản và sắc độ", "đen, trắng và xám"]],
  ["Mã màu HTML nào là màu trắng?", "#FFFFFF", ["#000000", "#FF0000", "#0000FF"]],
  ["Mã màu HTML nào là màu đen?", "#000000", ["#FFFFFF", "#00FF00", "#888888"]],
  ["Lập trình viên dùng hex trong thông báo lỗi và bản sao bộ nhớ vì…", "địa chỉ bộ nhớ là những số nhị phân dài, và hex hiển thị chúng ngắn gọn, dễ đọc", ["bộ nhớ được lưu bằng hex", "hacker không đọc được hex", "hex đã được mã hóa"]],
  ["Giá trị nào sau đây được viết bằng thập lục phân?", "00-1C-B3-4F-25-FE", ["192.168.0.1", "11000000", "www.school.edu"], { e: "Đây là một địa chỉ MAC — sáu cặp chữ số hex." }],
  ["Địa chỉ IPv6 được viết bằng…", "thập lục phân", ["thập phân", "nhị phân", "ASCII"], { t: ["hex", "thập lục phân", "thap luc phan"] }],
  ["Địa chỉ MAC dùng để nhận dạng…", "card giao tiếp mạng của một thiết bị", ["một trang web", "một tệp trên đĩa", "mật khẩu của người dùng"]],
  ["Lý do tốt nhất khiến hex được dùng cho địa chỉ MAC là gì?", "48 bit sẽ rất dài trong nhị phân, nhưng chỉ có 12 chữ số trong hex", ["Địa chỉ MAC được tạo từ chữ cái", "Địa chỉ hex gửi nhanh hơn", "Hex an toàn hơn"]],
  ["Trong một URL, %20 là mã thập lục phân của ký tự nào?", "Dấu cách", ["Dấu chấm", "Chữ T", "Dấu gạch chéo"]],
  ["Đâu KHÔNG phải là ứng dụng điển hình của hệ thập lục phân?", "Lưu các mẫu của một tệp âm thanh", ["Mã màu HTML", "Địa chỉ MAC", "Địa chỉ bộ nhớ trong thông báo lỗi"]]
],

"1.3a": [
  ["Dịch bit logic sang trái 1 vị trí làm gì với một số nguyên nhị phân dương?", "Nhân nó với 2", ["Chia nó cho 2", "Cộng thêm 1", "Biến nó thành số âm"], { t: ["x2", "nhân 2", "nhân với 2", "gấp đôi"] }],
  ["Dịch bit logic sang phải 1 vị trí làm gì với một số nguyên nhị phân dương?", "Chia nó cho 2", ["Nhân nó với 2", "Trừ đi 1", "Đảo các bit của nó"], { t: ["chia 2", "chia cho 2", "một nửa", "giảm một nửa", "/2"] }],
  ["Dịch bit logic sang trái 3 vị trí nhân số đó với…", "8", ["3", "6", "9"], { t: ["tám"] }],
  ["Dịch bit logic sang phải 2 vị trí chia số đó cho…", "4", ["2", "8", "3"], { t: ["bốn"] }],
  ["Trong phép dịch bit logic, cái gì được đưa vào ở đầu đối diện của thanh ghi?", "Các số 0", ["Các số 1", "Các bit vừa rơi ra", "Một bit chẵn lẻ"], { t: ["0", "số 0", "các số 0", "số không"] }],
  ["Điều gì xảy ra với các bit bị đẩy ra khỏi đầu thanh ghi?", "Chúng bị mất", ["Chúng quay vòng sang đầu bên kia", "Chúng được lưu trong thanh ghi tích lũy (accumulator)", "Chúng trở thành bit chẵn lẻ"]],
  ["Phép dịch phải làm mất một bit 1 ở đầu có trọng số nhỏ nhất. Hậu quả là gì?", "Kết quả không còn chính xác — phần dư bị mất", ["Số trở thành số âm", "Luôn xảy ra lỗi tràn số", "Số tăng gấp đôi"]],
  ["Phép dịch trái làm mất một bit 1 ở đầu có trọng số lớn nhất. Hậu quả là gì?", "Kết quả sai — giống như tràn số, giá trị không còn bằng số đó × 2", ["Số bị chia cho 2", "Không có gì — không mất dữ liệu", "Số trở thành số lẻ"]],
  ["Bit nào bị mất khi dịch thanh ghi 8 bit sang trái 1 vị trí?", "Bit có trọng số lớn nhất (MSB)", ["Bit có trọng số nhỏ nhất (LSB)", "Bit chẵn lẻ", "Không bit nào bị mất"]],
  ["Bit nào bị mất khi dịch thanh ghi 8 bit sang phải 1 vị trí?", "Bit có trọng số nhỏ nhất (LSB)", ["Bit có trọng số lớn nhất (MSB)", "Chỉ bit dấu", "Không bit nào bị mất"]],
  ["Để nhân một số nhị phân dương với 16, hãy dịch nó…", "sang trái 4 vị trí", ["sang phải 4 vị trí", "sang trái 16 vị trí", "sang trái 2 vị trí"]],
  ["Để chia một số nhị phân dương cho 8, hãy dịch nó…", "sang phải 3 vị trí", ["sang trái 3 vị trí", "sang phải 8 vị trí", "sang phải 2 vị trí"]]
],

"1.3b": [
  ["Trong số bù hai 8 bit, giá trị vị trí của bit có trọng số lớn nhất là bao nhiêu?", "-128", ["128", "-1", "256"], { t: ["−128"] }],
  ["Số bù hai 8 bit lưu được dải số nào?", "-128 đến +127", ["0 đến 255", "-127 đến +127", "-255 đến +255"]],
  ["Trong số bù hai, làm sao biết một số là số âm?", "Bit có trọng số lớn nhất của nó là 1", ["Bit có trọng số nhỏ nhất của nó là 1", "Nó có nhiều số 1 hơn số 0", "Nó bắt đầu bằng 0"]],
  ["Các bước để đổi một số nhị phân dương thành số âm tương ứng trong số bù hai là gì?", "Đảo tất cả các bit, rồi cộng 1", ["Cộng 1, rồi dịch trái", "Chỉ đổi bit đầu tiên thành 1", "Trừ đi 128"]],
  ["Số dương lớn nhất trong số bù hai 8 bit là bao nhiêu?", "127", ["128", "255", "126"], { t: true }],
  ["Số âm nhỏ nhất (âm nhất) trong số bù hai 8 bit là bao nhiêu?", "-128", ["-127", "-255", "-256"], { t: ["−128"] }],
  ["11111111 trong số bù hai 8 bit là bao nhiêu?", "-1", ["255", "-127", "-128"], { t: ["−1"], e: "−128 + 127 = −1." }],
  ["10000000 trong số bù hai 8 bit là bao nhiêu?", "-128", ["128", "-0", "-1"], { t: ["−128"] }],
  ["01111111 trong số bù hai 8 bit là bao nhiêu?", "127", ["-127", "255", "-1"], { t: true }],
  ["Một số dương như 45 trong số bù hai trông thế nào so với nhị phân thông thường?", "Giống hệt, với bit trọng số lớn nhất là 0", ["Tất cả các bit bị đảo", "Bit trọng số lớn nhất là 1", "Nó bị dịch trái 1 vị trí"]],
  ["Vì sao không thể lưu +200 trong số bù hai 8 bit?", "Giá trị dương lớn nhất là +127", ["Số bù hai chỉ dành cho số âm", "200 là số chẵn", "Nó cần một bit chẵn lẻ"]],
  ["0 trong số bù hai 8 bit là gì?", "00000000", ["10000000", "11111111", "01111111"], { t: true }]
],

"1.4a": [
  ["Bộ ký tự (character set) là gì?", "Danh sách xác định các ký tự máy tính có thể biểu diễn, mỗi ký tự có một mã nhị phân riêng", ["Một phông chữ như Arial", "Một tập hợp phím tắt", "Một loại nén"]],
  ["ASCII là viết tắt của gì?", "American Standard Code for Information Interchange", ["Automatic System Code for Internet Information", "American Simple Computer Information Index", "Advanced Standard Character Input Interface"]],
  ["ASCII chuẩn dùng bao nhiêu bit cho mỗi ký tự?", "7", ["8", "16", "32"], { t: ["bảy"] }],
  ["ASCII chuẩn (7 bit) biểu diễn được bao nhiêu ký tự?", "128", ["256", "127", "65 536"], { t: true }],
  ["ASCII mở rộng (8 bit) biểu diễn được bao nhiêu ký tự?", "256", ["128", "512", "1024"], { t: true }],
  ["Vì sao Unicode ra đời?", "ASCII không biểu diễn được ký tự của nhiều ngôn ngữ hay emoji", ["ASCII dùng quá nhiều bit", "Unicode gõ nhanh hơn", "ASCII không lưu được số"]],
  ["Unicode có thể dùng tối đa bao nhiêu bit cho mỗi ký tự?", "32", ["7", "8", "64"], { t: ["ba mươi hai", "32 bit"] }],
  ["Bộ ký tự nào biểu diễn được emoji?", "Unicode", ["ASCII", "ASCII mở rộng", "Thập phân mã hóa nhị phân (BCD)"], { t: true }],
  ["Vì sao tệp văn bản lưu bằng Unicode thường chiếm nhiều dung lượng hơn so với ASCII?", "Unicode dùng nhiều bit hơn cho mỗi ký tự", ["Unicode lưu hình ảnh của từng chữ cái", "Unicode thêm một chữ số kiểm tra vào mỗi chữ cái", "Tệp Unicode không được nén"]],
  ["128 ký tự đầu tiên của Unicode là…", "giống hệt ASCII", ["toàn bộ là emoji", "các ký tự tiếng Trung", "chỉ có mã điều khiển"]],
  ["Mã ASCII của 'A' là 65. Mã của 'D' là bao nhiêu?", "68", ["67", "69", "100"], { t: true }],
  ["Mã ASCII của 'a' là 97. Mã của 'c' là bao nhiêu?", "99", ["98", "67", "100"], { t: true }],
  ["Mã ASCII của một chữ thường lớn hơn mã của chữ hoa tương ứng bao nhiêu?", "32", ["26", "1", "64"], { t: true }],
  ["Mã ASCII của 'A' là 65. Mã của 'a' là bao nhiêu?", "97", ["66", "91", "33"], { t: true }],
  ["Ký tự '5' có được lưu với cùng mã như số 5 không?", "Không — ký tự '5' có mã ký tự riêng (53 trong ASCII)", ["Có, luôn luôn", "Chỉ trong Unicode", "Chỉ trong ASCII mở rộng"]],
  ["Ưu điểm nào của ASCII so với Unicode?", "Dùng ít bit hơn cho mỗi ký tự nên tệp văn bản nhỏ hơn", ["Hỗ trợ mọi ngôn ngữ", "Có cả emoji", "Có hơn một triệu ký tự"]],
  ["Ưu điểm nào của Unicode so với ASCII?", "Biểu diễn được ký tự của mọi ngôn ngữ trên thế giới", ["Dùng ít bit hơn cho mỗi ký tự", "Chỉ cần 7 bit", "Không thể thay đổi"]],
  ["Một người dùng máy tính ở Việt Nam muốn gõ tin nhắn có chữ có dấu và emoji. Cần dùng bộ ký tự nào?", "Unicode", ["ASCII 7 bit", "Thập lục phân", "Thập phân mã hóa nhị phân (BCD)"], { t: true }]
],

"1.5a": [
  ["Âm thanh tự nhiên là ví dụ của…", "dữ liệu tương tự (analogue)", ["dữ liệu số", "dữ liệu nhị phân", "dữ liệu thập lục phân"]],
  ["'Lấy mẫu' (sampling) một âm thanh nghĩa là gì?", "Đo biên độ của sóng âm tại những khoảng thời gian đều đặn", ["Ghi âm hai lần", "Loại bỏ tiếng ồn nền", "Chuyển âm thanh thành văn bản"]],
  ["Tần số lấy mẫu (sample rate) là gì?", "Số mẫu lấy mỗi giây", ["Số bit dùng cho mỗi mẫu", "Thời lượng của bản ghi", "Âm lượng của âm thanh"]],
  ["Độ phân giải mẫu (sample resolution) là gì?", "Số bit dùng để lưu mỗi mẫu", ["Số mẫu mỗi giây", "Số loa được dùng", "Dung lượng tệp tính bằng byte"]],
  ["Tần số lấy mẫu được đo bằng…", "hertz (Hz)", ["bit", "byte", "điểm ảnh"], { t: ["hz", "hertz"] }],
  ["Biên độ của một sóng âm liên quan đến điều gì?", "Độ cao của nó — âm thanh to hay nhỏ", ["Âm thanh kéo dài bao lâu", "Số mẫu", "Loại micro"]],
  ["Điều gì xảy ra với bản ghi khi tăng tần số lấy mẫu?", "Nó chính xác hơn và dung lượng tệp tăng", ["Nó kém chính xác hơn và tệp nhỏ hơn", "Không có gì thay đổi", "Chỉ dung lượng tệp thay đổi"]],
  ["Điều gì xảy ra với bản ghi khi tăng độ phân giải mẫu?", "Mỗi mẫu được lưu chính xác hơn nên độ chính xác và dung lượng tệp đều tăng", ["Mỗi giây lấy ít mẫu hơn", "Tệp trở nên nhỏ hơn", "Âm thanh to hơn"]],
  ["Thiết bị nào chuyển âm thanh thành tín hiệu điện?", "Micro", ["Loa", "Cơ cấu chấp hành (actuator)", "DAC"], { t: ["micro", "microphone"] }],
  ["Thiết bị nào chuyển tín hiệu tương tự của micro thành dữ liệu số?", "Bộ chuyển đổi tương tự sang số (ADC)", ["Bộ chuyển đổi số sang tương tự (DAC)", "Trình biên dịch", "Bộ định tuyến"], { t: ["ADC", "bộ chuyển đổi tương tự sang số", "analogue to digital converter"] }],
  ["Âm thanh chất lượng CD dùng tần số lấy mẫu…", "44 100 Hz", ["8000 Hz", "100 Hz", "1 000 000 Hz"]],
  ["Độ phân giải mẫu 16 bit cho phép bao nhiêu giá trị biên độ khác nhau?", "65 536", ["16", "256", "32"], { e: "2¹⁶ = 65 536." }],
  ["Vì sao bản ghi số không bao giờ là bản sao hoàn hảo của âm thanh gốc?", "Mẫu chỉ được lấy tại các khoảng cách nhất định nên các giá trị giữa các mẫu không được ghi lại", ["Dữ liệu số luôn bị nén", "Micro không nghe được âm thanh nhỏ", "Nhị phân không lưu được số âm"]],
  ["Nhược điểm của việc dùng tần số lấy mẫu rất cao là gì?", "Dung lượng tệp lớn hơn nhiều", ["Âm thanh kém chính xác hơn", "Âm thanh phát chậm hơn", "Âm thanh trở thành mono"]]
],

"1.5b": [
  ["Công thức nào cho dung lượng tệp âm thanh tính bằng bit?", "tần số lấy mẫu × độ phân giải mẫu × thời lượng tính bằng giây", ["tần số lấy mẫu + độ phân giải + thời lượng", "tần số lấy mẫu ÷ độ phân giải × thời lượng", "thời lượng × 8 ÷ tần số lấy mẫu"]],
  ["Để đổi dung lượng tệp từ bit sang byte, bạn…", "chia cho 8", ["nhân với 8", "chia cho 1024", "nhân với 1024"]],
  ["Khi tính dung lượng tệp âm thanh trong IGCSE, dùng số nào để đổi byte sang KiB?", "1024", ["1000", "8", "100"], { t: true }],
  ["Một âm thanh được ghi ở stereo thay vì mono. Dung lượng tệp thay đổi thế nào?", "Gấp đôi", ["Giảm một nửa", "Giữ nguyên", "Tăng thêm 8 bit"]],
  ["Trước khi dùng công thức tính dung lượng tệp âm thanh, thời lượng bản nhạc 3 phút phải được đổi thành…", "180 giây", ["3 giây", "300 giây", "0.05 giờ"], { t: ["180"] }],
  ["Nếu tần số lấy mẫu giảm một nửa và mọi thứ khác giữ nguyên, dung lượng tệp…", "giảm một nửa", ["tăng gấp đôi", "giữ nguyên", "giảm còn một phần tư"]]
],

"1.6a": [
  ["Điểm ảnh (pixel) là gì?", "Phần tử nhỏ nhất của ảnh bitmap — một chấm màu", ["Một đơn vị lưu trữ bằng 8 bit", "Một loại nén", "Một hình vector"]],
  ["Độ phân giải của ảnh là gì?", "Số điểm ảnh của bức ảnh (rộng × cao)", ["Số bit mỗi điểm ảnh", "Kích thước bản in của ảnh tính bằng cm", "Số màu"]],
  ["Độ sâu màu là gì?", "Số bit dùng để biểu diễn màu của mỗi điểm ảnh", ["Số điểm ảnh trong ảnh", "Độ sáng của ảnh", "Số màu trên màn hình cùng lúc"]],
  ["Độ sâu màu 8 bit biểu diễn được bao nhiêu màu?", "256", ["8", "16", "64"], { t: true }],
  ["Độ sâu màu 1 bit biểu diễn được bao nhiêu màu?", "2", ["1", "4", "8"], { t: ["hai"] }],
  ["Độ sâu màu 24 bit biểu diễn được bao nhiêu màu?", "16 777 216", ["24", "256", "65 536"]],
  ["Điều gì xảy ra với ảnh khi tăng độ phân giải?", "Ảnh có nhiều chi tiết hơn và dung lượng tệp lớn hơn", ["Ảnh có ít màu hơn", "Dung lượng tệp giảm", "Ảnh bị vỡ hạt"]],
  ["Điều gì xảy ra với ảnh khi tăng độ sâu màu?", "Hiển thị được nhiều màu hơn và dung lượng tệp tăng", ["Ảnh có nhiều điểm ảnh hơn", "Dung lượng tệp giảm", "Ảnh trở thành đen trắng"]],
  ["Một ảnh độ phân giải thấp bị phóng to. Nó trông thế nào?", "Vỡ hạt — có thể thấy từng ô vuông riêng lẻ", ["Sắc nét hơn", "Nhiều màu hơn", "Hoàn toàn như cũ"]],
  ["Cần bao nhiêu bit mỗi điểm ảnh để có 16 màu?", "4", ["16", "8", "2"], { t: ["bốn"], e: "2⁴ = 16." }],
  ["Vì sao một tệp ảnh thực tế thường lớn hơn một chút so với dung lượng tính toán?", "Nó còn lưu siêu dữ liệu (metadata) như chiều rộng, chiều cao và độ sâu màu", ["Máy tính thêm các điểm ảnh dư", "Ảnh luôn được lưu hai lần", "Phép tính dùng 1000 thay vì 1024"]],
  ["Phát biểu nào đúng?", "Dung lượng tệp và chất lượng ảnh tăng khi độ phân giải và độ sâu màu tăng", ["Độ phân giải cao hơn luôn làm tệp nhỏ hơn", "Độ sâu màu không ảnh hưởng đến dung lượng tệp", "Độ phân giải là số bit mỗi điểm ảnh"]],
  ["Loại ảnh nào được tạo từ các điểm ảnh?", "Bitmap", ["Vector", "Lưu đồ", "Bảng tính"], { t: true }],
  ["Một ảnh có độ sâu màu 2 bit. Nó có thể chứa bao nhiêu màu khác nhau?", "4", ["2", "8", "16"], { t: ["bốn"] }]
],

"1.6b": [
  ["Công thức nào cho dung lượng ảnh bitmap tính bằng bit?", "rộng × cao × độ sâu màu", ["rộng + cao + độ sâu màu", "rộng × cao ÷ độ sâu màu", "rộng × cao × 8"]],
  ["Độ sâu màu của một ảnh tăng gấp đôi từ 8 lên 16 bit. Dung lượng tệp thay đổi thế nào?", "Gấp đôi", ["Giảm một nửa", "Nhân với 4", "Giữ nguyên"]],
  ["Chiều rộng và chiều cao của một ảnh đều tăng gấp đôi. Dung lượng tệp thay đổi thế nào?", "Nhân với 4", ["Gấp đôi", "Giữ nguyên", "Nhân với 8"]],
  ["Muốn có dung lượng ảnh tính bằng byte từ kết quả tính bằng bit, bạn phải làm gì?", "Chia cho 8", ["Nhân với 8", "Chia cho 1024", "Chia cho 1000"]]
],

"1.7a": [
  ["Danh sách nào được sắp xếp từ nhỏ đến lớn?", "bit, nibble, byte, KiB, MiB, GiB", ["byte, bit, nibble, KiB, GiB, MiB", "nibble, bit, byte, MiB, KiB, GiB", "bit, byte, nibble, KiB, MiB, GiB"]],
  ["Một kibibyte (KiB) có bao nhiêu byte?", "1024", ["1000", "8", "1048"], { t: true }],
  ["Một gibibyte có bao nhiêu mebibyte?", "1024", ["1000", "100", "8"], { t: true }],
  ["Một tebibyte có bao nhiêu gibibyte?", "1024", ["1000", "512", "2048"], { t: true }],
  ["Đơn vị nào bằng 1024 tebibyte?", "Pebibyte (PiB)", ["Exbibyte (EiB)", "Gibibyte (GiB)", "Mebibyte (MiB)"], { t: ["pebibyte", "PiB"] }],
  ["Đơn vị nào bằng 1024 pebibyte?", "Exbibyte (EiB)", ["Tebibyte (TiB)", "Zettabyte", "Gibibyte (GiB)"], { t: ["exbibyte", "EiB"] }],
  ["Đơn vị nào lớn nhất trong danh sách của IGCSE?", "Exbibyte (EiB)", ["Pebibyte (PiB)", "Tebibyte (TiB)", "Gibibyte (GiB)"]],
  ["Đơn vị nào bằng 4 bit?", "Nibble", ["Byte", "Bit", "Kibibyte"], { t: true }],
  ["Để đổi từ đơn vị nhỏ hơn sang đơn vị lớn hơn, bạn…", "chia", ["nhân", "cộng 1024", "trừ 8"], { t: ["chia"] }],
  ["Để đổi từ đơn vị lớn hơn sang đơn vị nhỏ hơn, bạn…", "nhân", ["chia", "cộng 8", "trừ 1024"], { t: ["nhân"] }],
  ["Trong các bài tính của IGCSE, phải dùng số nào giữa các đơn vị từ byte trở lên?", "1024", ["1000", "100", "8"], { t: true }],
  ["Vì sao một ổ cứng mới '1 TB' hiển thị ít hơn 1 TiB dung lượng trên máy tính?", "Nhà sản xuất tính 1000 byte cho 1 KB còn máy tính dùng 1024", ["Một phần của nó bị hỏng", "Nó lưu hệ điều hành hai lần", "Ổ cứng luôn mất 10%"]],
  ["Phần 'bi' trong kibibyte và mebibyte cho bạn biết điều gì?", "Đơn vị dựa trên lũy thừa của 2 (1024)", ["Đơn vị là hai byte", "Đơn vị dùng thập phân mã hóa nhị phân", "Đơn vị là hai chiều"]]
],

"1.7b": [
  ["Mục đích của việc nén dữ liệu là gì?", "Làm giảm kích thước của một tệp", ["Tăng chất lượng của tệp", "Mã hóa một tệp", "Kiểm tra lỗi của một tệp"]],
  ["Lợi ích của việc nén một tệp là gì?", "Cần ít dung lượng lưu trữ hơn", ["Tệp được mã hóa", "Chất lượng tệp luôn được cải thiện", "Tệp không thể bị sao chép"]],
  ["Vì sao nén làm giảm thời gian truyền?", "Có ít dữ liệu hơn để gửi", ["Nó làm mạng nhanh hơn", "Nó loại bỏ lỗi", "Nó gửi dữ liệu song song"]],
  ["Tệp đã nén cần ít ___ hơn để gửi qua mạng.", "băng thông", ["độ phân giải", "độ sâu màu", "điện áp"], { t: ["băng thông", "bandwidth"] }],
  ["Đâu là lý do một dịch vụ phát video trực tuyến nén video của mình?", "Để có thể phát nhanh, dùng ít băng thông hơn", ["Để không thể xem ngoại tuyến", "Để tăng độ phân giải", "Để thêm phụ đề"]],
  ["Một học sinh không thể gửi email bức ảnh 30 MiB vì giới hạn là 10 MiB. Em có thể làm gì?", "Nén bức ảnh trước khi gửi", ["Tăng độ sâu màu", "Đổi tên tệp", "Gửi ở dạng stereo"]],
  ["Điều nào KHÔNG phải là lợi ích của việc nén?", "Tệp được tự động sao lưu", ["Thời gian tải lên và tải xuống ngắn hơn", "Cần ít dung lượng lưu trữ hơn", "Cần ít băng thông hơn"]],
  ["Vì sao một công ty lưu tệp trên đám mây có thể nén chúng?", "Để giảm chi phí lưu trữ, vì họ trả tiền theo dung lượng sử dụng", ["Để tệp khó mở hơn", "Để chúng tải chậm hơn", "Để kiểm tra virus"]]
],

"1.7c": [
  ["Nén có mất dữ liệu (lossy) là gì?", "Nén loại bỏ vĩnh viễn một phần dữ liệu để giảm dung lượng tệp", ["Nén mà không mất dữ liệu nào", "Nén có mã hóa dữ liệu", "Nén có thêm chữ số kiểm tra"]],
  ["Nén không mất dữ liệu (lossless) là gì?", "Nén làm giảm dung lượng tệp mà không mất vĩnh viễn dữ liệu nào", ["Nén xóa dữ liệu không cần thiết", "Nén làm giảm độ phân giải", "Nén chỉ dùng cho âm nhạc"]],
  ["Đâu là ví dụ của nén không mất dữ liệu?", "Mã hóa độ dài chạy (RLE)", ["Giảm độ sâu màu", "Giảm tần số lấy mẫu", "Perceptual music shaping"]],
  ["Phương pháp nào là một kiểu nén có mất dữ liệu cho hình ảnh?", "Giảm độ phân giải hoặc độ sâu màu", ["Mã hóa độ dài chạy", "Thêm bit chẵn lẻ", "Dùng Unicode"]],
  ["Phương pháp nào là một kiểu nén có mất dữ liệu cho âm thanh?", "Giảm tần số lấy mẫu hoặc độ phân giải mẫu", ["Mã hóa độ dài chạy", "Thêm tổng kiểm tra", "Đổi sang thập lục phân"]],
  ["Loại tệp nào nên được nén bằng nén không mất dữ liệu?", "Một tài liệu văn bản hoặc mã chương trình", ["Một bức ảnh kỳ nghỉ đăng mạng xã hội", "Một bản nhạc để phát trực tuyến", "Một video cho trang web"], { e: "Mất dù chỉ một ký tự của văn bản hay mã cũng làm thay đổi ý nghĩa của nó." }],
  ["Vì sao ảnh X-quang y khoa phải dùng nén không mất dữ liệu?", "Bất kỳ chi tiết nào bị mất đều có thể dẫn đến chẩn đoán sai", ["Tệp nén có mất dữ liệu không in được", "Tệp nén không mất dữ liệu nhỏ hơn", "Ảnh X-quang luôn là đen trắng"]],
  ["Mã hóa độ dài chạy (RLE) hoạt động như thế nào?", "Nó thay một chuỗi dữ liệu giống nhau bằng một bản sao của dữ liệu và một số đếm", ["Nó loại bỏ dữ liệu mà con người không nhìn thấy", "Nó giảm số điểm ảnh", "Nó sắp xếp dữ liệu theo thứ tự"]],
  ["Khi nào RLE KHÔNG hiệu quả?", "Khi dữ liệu có rất ít giá trị lặp lại liên tiếp", ["Khi dữ liệu có những chuỗi dài cùng một giá trị", "Khi ảnh có những vùng lớn cùng một màu", "Khi tệp là ảnh đen trắng"]],
  ["Các định dạng tệp nào thường dùng nén có mất dữ liệu?", "JPEG và MP3", ["PNG và ZIP", "TXT và CSV", "FLAC và GIF"]],
  ["Các định dạng tệp nào thường dùng nén không mất dữ liệu?", "PNG và ZIP", ["JPEG và MP3", "MP4 và MP3", "JPEG và MP4"]],
  ["Perceptual music shaping loại bỏ…", "những âm thanh tai người không nghe được hoặc bị âm lớn hơn át đi", ["cứ một mẫu bỏ một mẫu", "toàn bộ các nốt trầm", "kênh bên trái"]],
  ["Sau khi nén có mất dữ liệu, có thể dựng lại tệp gốc chính xác không?", "Không", ["Có", "Chỉ với ảnh", "Chỉ khi nó là stereo"], { t: ["không", "khong"] }],
  ["Sau khi nén không mất dữ liệu, có thể dựng lại tệp gốc chính xác không?", "Có", ["Không", "Chỉ với âm thanh", "Chỉ trên cùng một máy tính"], { t: ["có", "co"] }],
  ["Kiểu nén nào thường giảm dung lượng tệp nhiều hơn?", "Nén có mất dữ liệu", ["Nén không mất dữ liệu", "Chúng luôn như nhau", "RLE"], { t: ["lossy", "có mất dữ liệu", "nén có mất dữ liệu"] }]
]
});
