window.VI = window.VI || { topics: {}, objectives: {}, bank: {}, glossary: {}, ui: {} };
Object.assign(window.VI.bank, {

"3.1a": [
  ["Bốn giai đoạn của vòng đời phát triển chương trình trong chương trình IGCSE là gì?", "Phân tích, thiết kế, lập trình, kiểm thử", ["Lập kế hoạch, xây dựng, bán, đánh giá", "Đầu vào, xử lý, đầu ra, lưu trữ", "Thiết kế, kiểm thử, lập trình, phân tích"]],
  ["Ở giai đoạn nào của vòng đời người ta xác định bài toán và quyết định các yêu cầu?", "Phân tích", ["Thiết kế", "Lập trình", "Kiểm thử"], { t: ["Analysis"] }],
  ["Ở giai đoạn nào người ta tạo ra sơ đồ cấu trúc, lưu đồ và mã giả?", "Thiết kế", ["Phân tích", "Lập trình", "Kiểm thử"], { t: ["Design"] }],
  ["Ở giai đoạn nào mã chương trình được viết và kiểm thử lặp?", "Lập trình", ["Phân tích", "Thiết kế", "Đánh giá"], { t: ["Coding"] }],
  ["Ở giai đoạn nào chương trình hoàn chỉnh được kiểm thử bằng dữ liệu kiểm thử?", "Kiểm thử", ["Thiết kế", "Phân tích", "Lập trình"], { t: ["Testing"] }],
  ["Trừu tượng hóa (abstraction) là gì?", "Loại bỏ các chi tiết không cần thiết và chỉ giữ lại những gì quan trọng để giải bài toán", ["Chia một bài toán thành các phần nhỏ hơn", "Viết mã bằng một ngôn ngữ bậc cao", "Kiểm thử từng mô-đun ngay khi viết xong"]],
  ["Phân rã (decomposition) là gì?", "Chia một bài toán thành các phần nhỏ, dễ xử lý hơn", ["Loại bỏ chi tiết không cần thiết", "Biến mã thành mã máy", "Kiểm tra dữ liệu có hợp lý không"]],
  ["Kiểm thử lặp (iterative testing) là gì?", "Kiểm thử từng phần của chương trình ngay khi viết xong, sửa lỗi rồi kiểm thử lại", ["Chỉ kiểm thử chương trình một lần ở cuối", "Nhờ người dùng kiểm thử chương trình cuối cùng", "Chỉ kiểm thử bằng dữ liệu cực biên"]],
  ["Bản đồ tàu điện ngầm chỉ hiển thị các ga và tuyến, không có tòa nhà hay đường phố. Đây là ví dụ của…", "trừu tượng hóa", ["phân rã", "phép lặp", "kiểm tra tính hợp lệ"], { t: ["abstraction"] }],
  ["Xác định xem người dùng cần chương trình làm gì được gọi là xác định…", "yêu cầu", ["dữ liệu kiểm thử", "mã giả", "các biến"], { t: ["requirements", "requirement", "các yêu cầu"] }],
  ["Giai đoạn nào đứng ngay sau thiết kế?", "Lập trình", ["Phân tích", "Kiểm thử", "Bảo trì"], { t: ["Coding"] }]
],

"3.1b": [
  ["Hệ thống con (sub-system) là gì?", "Một hệ thống nhỏ hơn là một phần của hệ thống lớn hơn", ["Một hệ thống không có đầu vào", "Một loại hệ điều hành", "Một hệ thống chỉ dùng để lưu trữ dữ liệu"]],
  ["Khi phân rã một bài toán, bốn thành phần nào được xác định?", "Đầu vào, xử lý, đầu ra và lưu trữ", ["Phân tích, thiết kế, lập trình, kiểm thử", "Phần cứng, phần mềm, dữ liệu, người dùng", "Biến, hằng, mảng, vòng lặp"]],
  ["Sơ đồ cấu trúc (structure diagram) thể hiện điều gì?", "Cách một hệ thống được chia thành các hệ thống con theo dạng phân cấp", ["Thứ tự các bước cùng với quyết định và vòng lặp", "Giá trị các biến khi chương trình chạy", "Mã nhị phân dùng cho mỗi ký tự"]],
  ["Trong chương trình tính điểm trung bình của một học sinh, năm điểm kiểm tra là…", "đầu vào", ["xử lý", "đầu ra", "lưu trữ"], { t: ["inputs", "input"] }],
  ["Trong chương trình tính điểm trung bình của một học sinh, việc cộng các điểm rồi chia là một…", "xử lý", ["đầu vào", "đầu ra", "lưu trữ"], { t: ["process", "processes", "processing"] }],
  ["Trong chương trình tính điểm trung bình của một học sinh, việc hiển thị điểm trung bình là…", "đầu ra", ["đầu vào", "xử lý", "lưu trữ"], { t: ["output", "outputs"] }],
  ["Lưu bảng điểm cao vào một tệp để lần sau vẫn còn là ví dụ của…", "lưu trữ", ["đầu vào", "xử lý", "đầu ra"], { t: ["storage"] }],
  ["Vì sao phân rã hữu ích?", "Mỗi phần nhỏ dễ thiết kế, lập trình và kiểm thử hơn, và nhiều người có thể làm các phần khác nhau", ["Nó làm chương trình chạy nhanh hơn", "Nó loại bỏ nhu cầu kiểm thử", "Nó khiến chương trình không cần biến"]],
  ["Ba phương pháp nào có thể dùng để thiết kế lời giải trong chương trình IGCSE?", "Sơ đồ cấu trúc, lưu đồ và mã giả", ["Bảng theo dõi, dữ liệu kiểm thử và kiểm tra tính hợp lệ", "Trình biên dịch, trình thông dịch và trình hợp dịch", "Bảng tính, cơ sở dữ liệu và trang web"]],
  ["Trong sơ đồ cấu trúc, tên của toàn bộ hệ thống được ghi ở đâu?", "Trong ô duy nhất ở trên cùng", ["Trong mọi ô", "Ở dưới cùng", "Trong hình thoi"]]
],

"3.2a": [
  ["Thuật toán (algorithm) là gì?", "Một tập các chỉ dẫn từng bước để giải một bài toán", ["Một loại ngôn ngữ lập trình", "Một sơ đồ phần cứng máy tính", "Một danh sách các biến"]],
  ["Ký hiệu lưu đồ nào dùng cho START và STOP?", "Ký hiệu bắt đầu/kết thúc (hình chữ nhật bo tròn)", ["Hình thoi", "Hình bình hành", "Hình chữ nhật"]],
  ["Ký hiệu lưu đồ nào dùng cho INPUT và OUTPUT?", "Hình bình hành", ["Hình chữ nhật", "Hình thoi", "Hình oval"], { t: ["parallelogram"] }],
  ["Ký hiệu lưu đồ nào dùng cho một quyết định?", "Hình thoi", ["Hình chữ nhật", "Hình bình hành", "Hình tròn"], { t: ["diamond", "decision"] }],
  ["Ký hiệu lưu đồ nào dùng cho một xử lý như Total ← Total + 1?", "Hình chữ nhật", ["Hình thoi", "Hình bình hành", "Ký hiệu bắt đầu/kết thúc"], { t: ["rectangle"] }],
  ["Chương trình con (subroutine/procedure) được thể hiện thế nào trong lưu đồ?", "Hình chữ nhật có hai đường kẻ đôi ở hai bên", ["Hình thoi có một vòng tròn", "Hình bình hành nét đứt", "Một hình tam giác"]],
  ["Ô quyết định có bao nhiêu lối ra?", "Hai, gắn nhãn Yes và No", ["Một", "Ba", "Bao nhiêu cũng được"]],
  ["Điều gì cho biết thứ tự các bước trong lưu đồ?", "Các đường nối có mũi tên", ["Màu của các ô", "Kích thước của các ô", "Số ghi trong mỗi ô"]],
  ["Cấu trúc nào có nghĩa là các bước được thực hiện lần lượt, cái này sau cái kia?", "Tuần tự", ["Rẽ nhánh", "Lặp", "Kiểm tra tính hợp lệ"], { t: ["sequence"] }],
  ["Cấu trúc nào có nghĩa là một quyết định chọn các bước nào sẽ xảy ra?", "Rẽ nhánh", ["Tuần tự", "Lặp", "Trừu tượng hóa"], { t: ["selection"] }],
  ["Cấu trúc nào có nghĩa là các bước được lặp lại?", "Lặp", ["Tuần tự", "Rẽ nhánh", "Phân rã"], { t: ["iteration", "vòng lặp", "lặp lại", "looping", "loop", "repetition"] }],
  ["Trong lưu đồ, vòng lặp được thể hiện thế nào?", "Một đường nối quay lại bước trước đó, thường là một ô quyết định", ["Bằng một ký hiệu vòng lặp riêng", "Bằng cách vẽ cùng các ô hai lần", "Bằng một ô nét đứt"]],
  ["Điều kiện nào được chấp nhận trong lưu đồ ở bài thi IGCSE?", "Age >= 18?", ["Người đó đã đủ tuổi chưa?", "Tuổi lớn không?", "Kiểm tra tuổi"]]
],

"3.2b": [
  ["Khi được yêu cầu giải thích mục đích của một lưu đồ, bạn nên làm gì trước tiên?", "Xác định các đầu vào và đầu ra rồi chạy thử với các giá trị mẫu", ["Đếm số ô", "Viết lại nó bằng hệ thập lục phân", "Chỉ nhìn các ô quyết định"]],
  ["Một lưu đồ nhập 10 số, cộng từng số vào Total, rồi xuất Total. Mục đích của nó là gì?", "Xuất tổng của 10 số", ["Xuất số lớn nhất trong 10 số", "Đếm xem có bao nhiêu số được nhập", "Xuất mỗi số hai lần"]],
  ["Một lưu đồ liên tục nhập mật khẩu cho đến khi bằng \"Secret\". Mục đích của nó là gì?", "Liên tục hỏi mật khẩu cho đến khi nhập đúng mật khẩu", ["Lưu mật khẩu vào một tệp", "Mã hóa mật khẩu", "Đếm số ký tự của mật khẩu"]],
  ["Một lưu đồ nhập Mark và xuất \"Pass\" nếu Mark >= 50, ngược lại xuất \"Fail\". Mark = 50. Kết quả xuất là gì?", "Pass", ["Fail", "50", "Không xuất gì"]]
],

"3.3a": [
  ["Trong mã giả Cambridge, ký hiệu ← có nghĩa là gì?", "Phép gán — lưu giá trị bên phải vào biến bên trái", ["Nhỏ hơn hoặc bằng", "Xuất", "Nhập từ bên trái"]],
  ["Từ khóa mã giả nào dùng để đọc một giá trị từ người dùng?", "INPUT", ["OUTPUT", "READLINE", "GET"]],
  ["Từ khóa mã giả nào dùng để hiển thị một giá trị?", "OUTPUT", ["INPUT", "SHOW", "WRITE"], { t: ["print"] }],
  ["Toán tử nào có nghĩa là 'khác' trong mã giả?", "<>", ["!=", "=/", "><"]],
  ["17 MOD 5 bằng bao nhiêu?", "2", ["3", "3.4", "12"], { e: "MOD cho ra số dư: 17 = 3 × 5 + 2." }],
  ["17 DIV 5 bằng bao nhiêu?", "3", ["2", "3.4", "85"], { e: "DIV cho ra phần nguyên của phép chia." }],
  ["2 ^ 3 bằng bao nhiêu?", "8", ["6", "5", "9"]],
  ["Nên dùng vòng lặp nào khi bạn biết chính xác số lần cần lặp?", "FOR … TO … NEXT", ["WHILE … DO … ENDWHILE", "REPEAT … UNTIL", "IF … THEN … ENDIF"]],
  ["Vòng lặp nào luôn chạy ít nhất một lần?", "REPEAT … UNTIL (kiểm tra điều kiện sau)", ["WHILE … DO (kiểm tra điều kiện trước)", "FOR … NEXT", "CASE … OF"]],
  ["Vòng lặp nào có thể không chạy lần nào?", "WHILE … DO … ENDWHILE (kiểm tra điều kiện trước)", ["REPEAT … UNTIL", "FOR 1 TO 10", "Không vòng lặp nào"]],
  ["Vòng lặp WHILE kiểm tra điều kiện của nó…", "trước mỗi lần lặp", ["sau mỗi lần lặp", "chỉ một lần ở cuối", "chỉ khi người dùng nhấn phím"]],
  ["Vòng lặp REPEAT … UNTIL kiểm tra điều kiện của nó…", "sau mỗi lần lặp", ["trước mỗi lần lặp", "chỉ ở lúc bắt đầu", "không bao giờ"]],
  ["Câu lệnh nào chọn giữa nhiều giá trị cố định của một biến?", "CASE OF … OTHERWISE … ENDCASE", ["FOR … NEXT", "REPEAT … UNTIL", "DECLARE"]],
  ["Trong câu lệnh CASE, OTHERWISE làm gì?", "Chạy khi giá trị không khớp với trường hợp nào được liệt kê", ["Kết thúc chương trình", "Lặp lại CASE", "Khai báo một biến"]],
  ["Cách khai báo đúng một biến kiểu số nguyên trong mã giả Cambridge là gì?", "DECLARE Count : INTEGER", ["INTEGER Count", "Count = INT", "DIM Count AS"]],
  ["LENGTH(\"Computer\") trả về giá trị nào?", "8", ["7", "9", "C"]],
  ["UCASE(\"hello\") trả về giá trị nào?", "\"HELLO\"", ["\"Hello\"", "\"hello\"", "5"], { t: ["HELLO"] }],
  ["SUBSTRING(\"Computer\", 1, 4) trả về giá trị nào?", "\"Comp\"", ["\"Computer\"", "\"omp\"", "\"Comput\""], { t: ["comp"] }],
  ["Kết quả xuất là gì?", "6", ["5", "4", "1 2 3"]],
  ["\"Hi\" được xuất bao nhiêu lần?", "4", ["3", "5", "0"]],
  ["Kết quả xuất là gì khi Age = 15?", "Child", ["Adult", "Teen", "Không có gì"]],
  ["Toán tử logic nào chỉ cho kết quả TRUE khi cả hai điều kiện đều TRUE?", "AND", ["OR", "NOT", "MOD"]],
  ["Toán tử logic nào cho kết quả TRUE khi có ít nhất một điều kiện TRUE?", "OR", ["AND", "NOT", "DIV"]],
  ["Hằng (constant) là gì?", "Một giá trị có tên không thay đổi trong lúc chương trình chạy", ["Một biến thay đổi ở mỗi vòng lặp", "Một loại vòng lặp", "Kết quả xuất của một chương trình"]]
],

"3.3b": [
  ["Mục đích của thuật toán này là gì?", "Đếm xem có bao nhiêu trong 20 số được nhập là số âm", ["Cộng 20 số", "Tìm số nhỏ nhất", "Chỉ xuất các số âm"]],
  ["Mục đích của thuật toán này là gì?", "Liên tục yêu cầu nhập điểm cho đến khi nhập được một điểm từ 0 đến 100", ["Cộng các điểm", "Đếm các điểm lớn hơn 100", "Xuất điểm cao nhất"]],
  ["Mục đích của thuật toán này là gì?", "Tìm và xuất số lớn nhất trong 10 số được nhập", ["Tìm số nhỏ nhất", "Tìm giá trị trung bình", "Sắp xếp các số"]],
  ["Mục đích của thuật toán này là gì?", "Xuất bảng cửu chương 7 từ 7 đến 84", ["Cộng các số từ 1 đến 12", "Xuất số 7 mười hai lần", "Nhân 7 với 7"]],
  ["Mục đích của thuật toán này là gì?", "Cộng các số cho đến khi nhập 0, rồi xuất tổng", ["Đếm xem có bao nhiêu số 0 được nhập", "Xuất từng số được nhập", "Dừng khi nhập một số âm"]],
  ["Mục đích của thuật toán này là gì?", "Xác định một số là chẵn hay lẻ", ["Chia một số cho 2", "Tìm số dư của một phép chia bất kỳ", "Đếm các số chẵn"]]
],

"3.4a": [
  ["Biến tổng nên được gán giá trị nào trước khi vòng lặp tính tổng bắt đầu?", "0", ["1", "Giá trị nhập đầu tiên", "-1"], { t: ["không"] }],
  ["Dòng nào là ví dụ của tính tổng?", "Total ← Total + Price", ["Count ← Count + 1", "Total ← Price", "OUTPUT Total"]],
  ["Dòng nào là ví dụ của đếm?", "Count ← Count + 1", ["Total ← Total + Mark", "Count ← Mark", "Count ← 0 + Mark"]],
  ["Tính tổng và đếm khác nhau thế nào?", "Tính tổng cộng từng giá trị; đếm cộng thêm 1 mỗi khi có sự việc xảy ra", ["Chúng giống nhau", "Đếm cộng từng giá trị; tính tổng cộng thêm 1", "Tính tổng chỉ dùng được với số thập phân"]],
  ["Kết quả xuất là gì?", "15", ["5", "10", "16"]],
  ["Kết quả xuất là gì nếu dữ liệu nhập là 4, 7, 2, 9?", "2", ["4", "1", "3"]]
],

"3.4b": [
  ["Giá trị trung bình được tính thế nào?", "Tổng ÷ số lượng giá trị", ["Lớn nhất − nhỏ nhất", "Tổng × số lượng giá trị", "Lớn nhất ÷ 2"]],
  ["Vì sao an toàn nhất là đặt Maximum bằng giá trị đầu tiên trong danh sách trước vòng lặp?", "Vì giá trị lớn nhất thật sự có thể nhỏ hơn mọi giá trị khởi đầu cố định (ví dụ khi mọi giá trị đều âm)", ["Vì giá trị đầu tiên luôn là lớn nhất", "Vì vòng lặp không thể bắt đầu từ 0", "Vì nó làm vòng lặp ngắn hơn"]],
  ["Khi tìm giá trị lớn nhất, phép so sánh nào được dùng trong vòng lặp?", "IF Value > Maximum THEN Maximum ← Value", ["IF Value < Maximum THEN Maximum ← Value", "IF Value = Maximum THEN Maximum ← 0", "Maximum ← Maximum + Value"]],
  ["Khi tìm giá trị nhỏ nhất, phép so sánh nào được dùng trong vòng lặp?", "IF Value < Minimum THEN Minimum ← Value", ["IF Value > Minimum THEN Minimum ← Value", "Minimum ← Minimum - Value", "IF Value = 0 THEN Minimum ← Value"]],
  ["Nếu Minimum bắt đầu bằng 0 và mọi giá trị đều dương thì điều gì sai?", "Minimum vẫn là 0, giá trị không có trong danh sách", ["Minimum trở thành giá trị lớn nhất", "Vòng lặp không bao giờ kết thúc", "Không có gì sai"]],
  ["Nên tính giá trị trung bình ở đâu?", "Sau khi vòng lặp đã cộng xong tất cả các giá trị", ["Trước khi vòng lặp bắt đầu", "Bên trong vòng lặp ở giá trị đầu tiên", "Ở đâu cũng được"]]
],

"3.4c": [
  ["Tìm kiếm tuần tự (linear search) hoạt động thế nào?", "Nó kiểm tra từng phần tử theo thứ tự, lần lượt từng cái, cho đến khi tìm thấy hoặc hết danh sách", ["Nó kiểm tra phần tử ở giữa rồi chia đôi danh sách", "Nó sắp xếp danh sách trước", "Nó chỉ kiểm tra phần tử đầu và cuối"]],
  ["Tìm kiếm tuần tự có cần dữ liệu đã được sắp xếp không?", "Không", ["Có", "Chỉ với số", "Chỉ với chuỗi"], { t: ["không cần", "khong"] }],
  ["Một danh sách có 50 phần tử và phần tử cần tìm không có trong đó. Tìm kiếm tuần tự kiểm tra bao nhiêu phần tử?", "50", ["1", "25", "49"]],
  ["Trong tìm kiếm tuần tự, biến Boolean Found có tác dụng gì?", "Để dừng việc tìm kiếm khi đã tìm thấy phần tử", ["Để đếm các phần tử", "Để lưu giá trị của phần tử", "Để sắp xếp danh sách"]],
  ["Names = [\"Ali\", \"Bea\", \"Cai\", \"Dev\", \"Eva\"]. Tìm kiếm tuần tự tìm \"Dev\". Có bao nhiêu phép so sánh được thực hiện?", "4", ["1", "3", "5"], { t: ["bốn"] }],
  ["Nhược điểm chính của tìm kiếm tuần tự trên một danh sách rất lớn là gì?", "Nó có thể chậm vì có thể phải kiểm tra mọi phần tử", ["Nó chỉ chạy được trên danh sách đã sắp xếp", "Nó không tìm được số", "Nó làm thay đổi thứ tự danh sách"]]
],

"3.4d": [
  ["Sắp xếp nổi bọt (bubble sort) hoạt động thế nào?", "Nó so sánh các cặp liền kề và hoán đổi chúng nếu sai thứ tự, lặp lại các lượt cho đến khi không còn hoán đổi nào", ["Nó tìm phần tử ở giữa và chia đôi danh sách", "Nó đặt từng phần tử vào một danh sách mới theo thứ tự", "Nó so sánh từng phần tử với một giá trị cần tìm"]],
  ["Sau lượt đầu tiên của sắp xếp nổi bọt (tăng dần), giá trị lớn nhất nằm ở đâu?", "Ở cuối danh sách", ["Ở đầu danh sách", "Ở giữa", "Có thể ở bất cứ đâu"]],
  ["Vì sao cần một biến tạm khi hoán đổi hai giá trị?", "Nếu không thì một trong hai giá trị sẽ bị ghi đè và mất", ["Để đếm số lần hoán đổi", "Để sắp xếp nhanh hơn", "Để lưu độ dài của danh sách"]],
  ["Khi nào sắp xếp nổi bọt biết danh sách đã được sắp xếp?", "Khi một lượt hoàn chỉnh được thực hiện mà không có hoán đổi nào", ["Sau đúng một lượt", "Khi phần tử đầu tiên là nhỏ nhất", "Sau 10 lượt"]],
  ["Một lần đi hết danh sách trong sắp xếp nổi bọt được gọi là gì?", "Một lượt", ["Một phép hoán đổi", "Một biến đếm vòng lặp", "Một phép tìm kiếm"], { t: ["pass", "lượt"] }],
  ["Danh sách sau lượt đầu tiên của sắp xếp nổi bọt tăng dần trên [4, 3, 1, 2] là gì?", "[3, 1, 2, 4]", ["[1, 2, 3, 4]", "[3, 4, 1, 2]", "[4, 1, 2, 3]"]],
  ["Dòng nào hoán đổi đúng List[i] và List[i + 1]?", "Temp ← List[i]; List[i] ← List[i + 1]; List[i + 1] ← Temp", ["List[i] ← List[i + 1]; List[i + 1] ← List[i]", "Temp ← List[i]; List[i + 1] ← Temp", "List[i] ← Temp; Temp ← List[i + 1]"]]
],

"3.5a": [
  ["Kiểm tra tính hợp lệ (validation) là gì?", "Một kiểm tra tự động của máy tính xem dữ liệu có hợp lý, chấp nhận được hay không", ["Kiểm tra dữ liệu đã được sao chép đúng từ bản gốc chưa", "Mã hóa dữ liệu", "Kiểm thử một chương trình bằng dữ liệu kiểm thử"]],
  ["Kiểm tra tính hợp lệ có thể chứng minh dữ liệu là đúng không?", "Không — nó chỉ kiểm tra dữ liệu có hợp lý", ["Có, luôn luôn", "Chỉ với số", "Chỉ với ngày tháng"]],
  ["Kiểm tra nào bảo đảm một điểm nằm giữa 0 và 100?", "Kiểm tra khoảng giá trị", ["Kiểm tra độ dài", "Kiểm tra sự hiện diện", "Kiểm tra định dạng"], { t: ["range check"] }],
  ["Kiểm tra nào bảo đảm một trường không bị bỏ trống?", "Kiểm tra sự hiện diện", ["Kiểm tra khoảng giá trị", "Kiểm tra kiểu dữ liệu", "Kiểm tra độ dài"], { t: ["presence check"] }],
  ["Kiểm tra nào bảo đảm mật khẩu có ít nhất 8 ký tự?", "Kiểm tra độ dài", ["Kiểm tra khoảng giá trị", "Kiểm tra kiểu dữ liệu", "Kiểm tra sự hiện diện"], { t: ["length check"] }],
  ["Kiểm tra nào bảo đảm tuổi là số nguyên chứ không phải chữ?", "Kiểm tra kiểu dữ liệu", ["Kiểm tra độ dài", "Kiểm tra khoảng giá trị", "Kiểm tra định dạng"], { t: ["type check"] }],
  ["Kiểm tra nào bảo đảm một ngày được nhập theo dạng DD/MM/YYYY?", "Kiểm tra định dạng", ["Kiểm tra khoảng giá trị", "Kiểm tra sự hiện diện", "Kiểm tra độ dài"], { t: ["format check"] }],
  ["Kiểm tra nào bảo đảm mã học sinh theo mẫu hai chữ cái rồi bốn chữ số (ví dụ AB1234)?", "Kiểm tra định dạng", ["Kiểm tra kiểu dữ liệu", "Kiểm tra khoảng giá trị", "Kiểm tra sự hiện diện"], { t: ["format check"] }],
  ["Kiểm tra tính hợp lệ nào được dùng cho ISBN và mã vạch?", "Chữ số kiểm tra", ["Kiểm tra khoảng giá trị", "Kiểm tra sự hiện diện", "Nhập hai lần"], { t: ["check digit"] }],
  ["Kiểm tra nào bảo đảm số điện thoại có đúng 10 chữ số?", "Kiểm tra độ dài", ["Kiểm tra định dạng", "Kiểm tra khoảng giá trị", "Kiểm tra sự hiện diện"], { t: ["length check"] }],
  ["Đoạn mã giả nào là kiểm tra khoảng giá trị?", "UNTIL Age >= 11 AND Age <= 18", ["UNTIL Name <> \"\"", "UNTIL LENGTH(Code) = 6", "UNTIL Answer = \"Y\" OR Answer = \"N\""]],
  ["Đoạn mã giả nào là kiểm tra sự hiện diện?", "UNTIL Name <> \"\"", ["UNTIL Age >= 11", "UNTIL LENGTH(PIN) = 4", "UNTIL Mark <= 100"]],
  ["Vì sao dùng kiểm tra tính hợp lệ?", "Để ngăn dữ liệu vô lý hoặc không thể có được nhập vào và xử lý", ["Để dữ liệu tải nhanh hơn", "Để nén dữ liệu", "Để sao lưu dữ liệu"]],
  ["Một người dùng gõ 230 làm tuổi và nó được chấp nhận. Thiếu kiểm tra nào?", "Kiểm tra khoảng giá trị", ["Kiểm tra sự hiện diện", "Kiểm tra độ dài", "Kiểm tra định dạng"], { t: ["range check"] }]
],

"3.5b": [
  ["Xác minh (verification) là gì?", "Kiểm tra dữ liệu đã được sao chép hoặc nhập chính xác — tức là khớp với bản gốc", ["Kiểm tra dữ liệu có hợp lý, chấp nhận được hay không", "Kiểm tra dữ liệu bằng chữ số kiểm tra", "Kiểm thử một chương trình bằng dữ liệu biên"]],
  ["Hai phương pháp xác minh trong chương trình học là gì?", "Kiểm tra bằng mắt và kiểm tra nhập hai lần", ["Kiểm tra khoảng giá trị và kiểm tra độ dài", "Kiểm tra chẵn lẻ và tổng kiểm tra", "Kiểm tra kiểu dữ liệu và kiểm tra định dạng"]],
  ["Kiểm tra nhập hai lần (double entry check) hoạt động thế nào?", "Dữ liệu được nhập hai lần và máy tính so sánh hai lần nhập", ["Hai người cùng nhìn màn hình", "Máy tính tính một chữ số kiểm tra", "Dữ liệu được gửi ngược lại cho người gửi"]],
  ["Kiểm tra bằng mắt (visual check) hoạt động thế nào?", "Người dùng nhìn dữ liệu trên màn hình và so sánh với tài liệu gốc", ["Máy tính so sánh hai lần nhập", "Một camera quét dữ liệu", "Máy tính kiểm tra khoảng giá trị"]],
  ["Nhập mật khẩu mới hai lần khi tạo tài khoản là ví dụ của…", "kiểm tra nhập hai lần", ["kiểm tra bằng mắt", "kiểm tra khoảng giá trị", "kiểm tra sự hiện diện"], { t: ["double entry", "double entry check", "nhập hai lần"] }],
  ["Vì sao một ngày sinh đã qua kiểm tra tính hợp lệ vẫn có thể sai?", "Kiểm tra tính hợp lệ chỉ xem nó có hợp lý, không bảo đảm đó là ngày sinh thật của người đó", ["Không thể kiểm tra tính hợp lệ của ngày tháng", "Kiểm tra tính hợp lệ luôn mắc lỗi", "Ngày tháng phải được xác minh bằng chữ số kiểm tra"]],
  ["Điểm yếu của kiểm tra bằng mắt là gì?", "Người kiểm tra có thể không nhận ra một lỗi", ["Nó không tốn thời gian", "Nó cần hai bàn phím", "Nó chỉ kiểm tra được số"]]
],

"3.6a": [
  ["Một chương trình nhận các số nguyên từ 1 đến 10. Dữ liệu nào là dữ liệu bình thường?", "6", ["0", "11", "\"six\""]],
  ["Một chương trình nhận các số nguyên từ 1 đến 10. Dữ liệu nào là dữ liệu cực biên?", "1 và 10", ["0 và 11", "5 và 6", "-1 và 100"]],
  ["Một chương trình nhận các số nguyên từ 1 đến 10. Những cặp nào là dữ liệu biên?", "0 và 1, 10 và 11", ["Chỉ 1 và 10", "5 và 6", "-10 và 100"]],
  ["Một chương trình nhận các số nguyên từ 1 đến 10. Dữ liệu nào là dữ liệu bất thường?", "\"ten\"", ["10", "5", "1"]],
  ["Dữ liệu kiểm thử bình thường là gì?", "Dữ liệu hợp lý mà chương trình phải chấp nhận", ["Dữ liệu phải bị từ chối", "Các giá trị lớn nhất và nhỏ nhất được chấp nhận", "Dữ liệu ngay sát bên ngoài khoảng"]],
  ["Dữ liệu kiểm thử bất thường (sai) là gì?", "Dữ liệu mà chương trình phải từ chối", ["Dữ liệu phải được chấp nhận", "Giá trị lớn nhất được chấp nhận", "Dữ liệu nằm đúng trên giới hạn"]],
  ["Dữ liệu kiểm thử cực biên là gì?", "Các giá trị lớn nhất và nhỏ nhất phải được chấp nhận", ["Các giá trị nằm rất xa ngoài khoảng", "Các giá trị ngẫu nhiên", "Chữ thay cho số"]],
  ["Dữ liệu kiểm thử biên là gì?", "Các giá trị lớn nhất/nhỏ nhất được chấp nhận và các giá trị ngay sát bên ngoài chúng phải bị từ chối", ["Chỉ các giá trị phải được chấp nhận", "Chỉ các giá trị là chữ", "Các giá trị ở giữa khoảng"]],
  ["Vì sao một chương trình được kiểm thử bằng nhiều loại dữ liệu kiểm thử?", "Để kiểm tra nó chấp nhận đúng dữ liệu hợp lệ và từ chối đúng dữ liệu không hợp lệ", ["Để nó chạy nhanh hơn", "Để dùng hết bộ nhớ", "Để kiểm tra chính tả"]],
  ["Điểm phải từ 0 đến 100. Kết quả mong đợi với dữ liệu kiểm thử 101 là gì?", "Bị từ chối", ["Được chấp nhận", "Làm tròn thành 100", "Đổi thành 1"], { t: ["rejected", "từ chối"] }],
  ["Điểm phải từ 0 đến 100. Kết quả mong đợi với dữ liệu kiểm thử 0 là gì?", "Được chấp nhận", ["Bị từ chối", "Báo lỗi", "Đổi thành 1"], { t: ["accepted", "chấp nhận"] }]
],

"3.6b": [
  ["Bảng theo dõi (trace table) dùng để làm gì?", "Ghi lại giá trị các biến và kết quả xuất ở từng bước khi chạy thử bằng tay một thuật toán", ["Liệt kê dữ liệu kiểm thử của một chương trình", "Thể hiện cấu trúc phân cấp của các hệ thống con", "Lưu kết quả của một chương trình vào tệp"]],
  ["Chạy thử bằng tay (dry run) là gì?", "Làm tay từng bước một thuật toán, không dùng máy tính", ["Chạy một chương trình mà không có dữ liệu", "Chạy một chương trình khi không có nguồn điện", "Biên dịch một chương trình"]],
  ["Một bảng theo dõi thường có những cột nào?", "Mỗi biến một cột, thêm một cột cho kết quả xuất", ["Mỗi dòng mã một cột", "Chỉ một cột cho kết quả xuất", "Mỗi loại dữ liệu kiểm thử một cột"]],
  ["Bảng theo dõi đặc biệt hữu ích để tìm loại lỗi nào?", "Lỗi logic", ["Lỗi cú pháp", "Lỗi phần cứng", "Lỗi gõ sai trên bàn phím"], { t: ["logic", "logic error", "lỗi logic"] }],
  ["Hoàn thành bảng theo dõi: giá trị cuối cùng của X là bao nhiêu?", "16", ["8", "4", "32"]],
  ["Kết quả xuất là gì?", "10", ["15", "9", "1"]]
],

"3.7a": [
  ["Thuật toán này phải xuất các số từ 10 xuống 1. Lỗi là gì?", "Vòng FOR cần STEP -1", ["Count nên bắt đầu từ 1", "OUTPUT nên nằm ngoài vòng lặp", "Không có lỗi"]],
  ["Thuật toán này phải nhập 5 tên và xuất mỗi tên bằng chữ in hoa. Lỗi là gì?", "Vòng lặp phải là FOR i ← 1 TO 5", ["UCASE nên là LCASE", "INPUT nên đặt sau OUTPUT", "Name nên là một số"]],
  ["Thuật toán này phải tính tổng của mảng Scores[1:10]. Lỗi là gì?", "Total ← Total + Scores[i] phải nằm bên trong vòng lặp, không phải sau nó", ["Total nên bắt đầu từ 10", "Vòng lặp nên bắt đầu từ 0", "Scores nên là một chuỗi"]],
  ["Một vòng REPEAT phải hỏi mã PIN cho đến khi nhập 1234. Dòng nào sai?", "UNTIL PIN <> 1234 phải là UNTIL PIN = 1234", ["REPEAT nên là WHILE", "INPUT PIN nên là OUTPUT PIN", "1234 nên đặt trong dấu nháy"]],
  ["Thuật toán này phải tính tổng 10 số. Lỗi là gì?", "Total phải được gán là 0, không phải 1", ["Vòng lặp nên là 0 TO 10", "OUTPUT nên nằm trong vòng lặp", "INPUT nên đặt sau vòng lặp"]],
  ["Thuật toán này phải xuất \"Pass\" với điểm từ 50 trở lên. Lỗi là gì?", "Điều kiện phải là Mark >= 50", ["Điều kiện nên là Mark < 50", "Pass nên là Fail", "INPUT nên là OUTPUT"]],
  ["Thuật toán này phải đếm xem có bao nhiêu trong 20 số là số dương. Lỗi là gì?", "Count ← Count + Num phải là Count ← Count + 1", ["Vòng lặp nên chạy đến 21", "Count nên bắt đầu từ 1", "IF nên dùng < 0"]],
  ["Thuật toán này phải tìm số nhỏ nhất trong 10 số. Lỗi là gì?", "Phép so sánh phải là Num < Smallest", ["Smallest nên bắt đầu từ 0", "Vòng lặp nên bắt đầu từ 0", "OUTPUT nên ở đầu tiên"]],
  ["Thuật toán này phải xuất giá trị trung bình của 5 số. Lỗi là gì?", "Giá trị trung bình phải được tính sau vòng lặp, không phải bên trong nó", ["Total nên bắt đầu từ 1", "Vòng lặp nên là 1 TO 4", "Không có lỗi"]],
  ["Đoạn kiểm tra này phải chấp nhận điểm từ 0 đến 100. Lỗi là gì?", "AND phải là OR trong điều kiện IF", ["0 nên là 1", "Vòng lặp nên là FOR", "100 nên là 99"]],
  ["Vòng lặp này phải xuất các số từ 1 đến 10. Lỗi là gì?", "Count không bao giờ được tăng, nên vòng lặp không bao giờ kết thúc", ["Count nên bắt đầu từ 0", "OUTPUT nên đặt sau ENDWHILE", "Điều kiện nên là > 10"]],
  ["Lỗi logic (logic error) là gì?", "Lỗi mà chương trình vẫn chạy nhưng cho kết quả sai", ["Lỗi khiến chương trình không thể được dịch", "Lỗi ở phần cứng", "Lỗi do virus gây ra"]]
],

"3.7b": [
  ["Vòng lặp nào phù hợp nhất cho 'nhập các số cho đến khi nhập -1'?", "Vòng lặp điều khiển bằng điều kiện (WHILE hoặc REPEAT)", ["Một vòng FOR từ 1 đến 10", "Một câu lệnh IF", "Một câu lệnh CASE"]],
  ["Vòng lặp nào phù hợp nhất cho 'nhập đúng 30 điểm'?", "Vòng FOR (lặp theo số lần)", ["Một vòng WHILE", "Một vòng REPEAT không bao giờ kết thúc", "Một câu lệnh CASE"]],
  ["Điều kiện nào được viết chính xác như yêu cầu trong bài thi IGCSE?", "Score > HighScore", ["Score lớn hơn HighScore", "Score vượt HighScore", "Nếu score cao"]],
  ["Trước một vòng lặp tính tổng các giá trị, bạn phải làm gì?", "Khởi tạo biến tổng bằng 0", ["Xuất biến tổng", "Khai báo biến tổng là chuỗi", "Gán biến tổng bằng giá trị cuối cùng"]],
  ["Tên định danh nào tốt nhất cho biến lưu tổng điểm của một học sinh?", "TotalMark", ["t", "x1", "Variable"]],
  ["Một thuật toán phải từ chối tuổi dưới 11 hoặc trên 18. Dòng nào hoàn thành đoạn kiểm tra?", "UNTIL Age >= 11 AND Age <= 18", ["UNTIL Age >= 11 OR Age <= 18", "UNTIL Age < 11 AND Age > 18", "UNTIL Age = 11 OR 18"]],
  ["Nên đặt OUTPUT Total ở đâu khi tính tổng 10 số?", "Sau NEXT, để chỉ xuất một lần ở cuối", ["Bên trong vòng lặp", "Trước vòng lặp", "Ở đầu chương trình"]],
  ["Làm thế nào để kiểm tra thuật toán của bạn có chạy đúng trước khi viết mã?", "Chạy thử bằng tay với bảng theo dõi và dữ liệu kiểm thử", ["Đếm số dòng", "In nó ra", "Đổi tên tất cả các biến"]]
]
});
