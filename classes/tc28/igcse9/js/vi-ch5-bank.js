window.VI = window.VI || { topics: {}, objectives: {}, bank: {}, glossary: {}, ui: {} };
Object.assign(window.VI.bank, {

"5.1a": [
  ["Phần mềm hệ thống (system software) là gì?", "Phần mềm cung cấp các dịch vụ mà máy tính cần, như hệ điều hành và các tiện ích", ["Phần mềm mà người dùng cần để hoàn thành một công việc", "Bất kỳ chương trình nào miễn phí", "Phần cứng bên trong CPU"]],
  ["Phần mềm ứng dụng (application software) là gì?", "Phần mềm cung cấp các dịch vụ mà người dùng cần để thực hiện một công việc", ["Phần mềm điều khiển phần cứng", "Bootloader", "Trình điều khiển thiết bị (device driver)"]],
  ["Phần mềm nào sau đây là phần mềm ứng dụng?", "Trình soạn thảo văn bản", ["Hệ điều hành", "Phần mềm diệt virus", "Trình điều khiển thiết bị (device driver)"]],
  ["Phần mềm nào sau đây là phần mềm hệ thống?", "Hệ điều hành", ["Bảng tính", "Trình duyệt web", "Phần mềm chỉnh sửa ảnh"]],
  ["Phần mềm nào sau đây là phần mềm tiện ích (utility software)?", "Phần mềm chống phân mảnh (defragmentation)", ["Một trò chơi điện tử", "Trình soạn thảo văn bản", "Trình duyệt web"]],
  ["Phần mềm chống phân mảnh (defragmentation) làm gì?", "Sắp xếp lại các phần của tệp trên ổ cứng để mỗi tệp được lưu liền nhau, giúp truy cập nhanh hơn", ["Loại bỏ virus", "Nén tệp", "Sao lưu tệp lên đám mây"]],
  ["Vì sao SSD không cần chống phân mảnh?", "SSD không có đầu đọc/ghi chuyển động, nên vị trí của tệp không làm chậm việc truy cập", ["SSD không thể lưu tệp", "SSD lúc nào cũng đầy", "SSD tự chống phân mảnh mỗi giây"]],
  ["Phần mềm diệt virus (antivirus) làm gì?", "Quét tệp để tìm virus và cách ly hoặc xóa các tệp bị nhiễm", ["Làm CPU chạy nhanh hơn", "Dịch mã", "Nén hình ảnh"]],
  ["Phần mềm sao lưu (backup) làm gì?", "Tạo bản sao của tệp để có thể khôi phục nếu tệp gốc bị mất hoặc hư hỏng", ["Xóa các tệp cũ", "Mã hóa email", "Chống phân mảnh đĩa"]],
  ["Trình duyệt web thuộc loại phần mềm nào?", "Phần mềm ứng dụng", ["Phần mềm hệ thống", "Phần mềm tiện ích", "Phần sụn (firmware)"], { t: ["ứng dụng"] }],
  ["Phần mềm diệt virus thuộc loại phần mềm nào?", "Phần mềm tiện ích (hệ thống)", ["Phần mềm ứng dụng", "Phần sụn (firmware)", "Phần cứng"], { t: ["tiện ích", "hệ thống", "phần mềm hệ thống", "phần mềm tiện ích"] }],
  ["Phần mềm nào sau đây KHÔNG phải là phần mềm hệ thống?", "Bảng tính", ["Trình điều khiển thiết bị (device driver)", "Hệ điều hành", "Phần mềm sao lưu"]]
],

"5.1b": [
  ["Ngắt (interrupt) là gì?", "Một tín hiệu gửi đến CPU từ một thiết bị hoặc chương trình, báo rằng có việc cần được chú ý", ["Một chương trình ngăn chặn virus", "Một loại bus", "Một linh kiện phần cứng bị hỏng"]],
  ["Ngắt nào sau đây là ngắt phần cứng?", "Nhấn một phím trên bàn phím", ["Chia cho số không", "Hai tiến trình cùng cố dùng một ô nhớ", "Một chương trình yêu cầu thêm bộ nhớ"]],
  ["Ngắt nào sau đây là ngắt phần mềm?", "Chia cho số không", ["Di chuyển chuột", "Máy in hết giấy", "Nhấn một phím"]],
  ["Ngắt nào sau đây là ngắt phần mềm?", "Hai tiến trình cùng truy cập một ô nhớ", ["Nhấp chuột", "Cắm một USB vào máy", "Nhấn nút nguồn"]],
  ["Ngắt nào sau đây là ngắt phần cứng?", "Máy in hết giấy", ["Chia cho số không", "Một chương trình bị treo", "Một chương trình yêu cầu dữ liệu"]],
  ["Chương trình phục vụ ngắt (interrupt service routine, ISR) là gì?", "Đoạn mã chạy để xử lý một ngắt cụ thể", ["Danh sách tất cả các ngắt", "Chương trình đã tạo ra ngắt", "Một linh kiện phần cứng lưu trữ các ngắt"]],
  ["CPU kiểm tra ngắt vào lúc nào?", "Vào cuối mỗi chu kỳ nạp–giải mã–thực thi", ["Chỉ khi máy tính khởi động", "Mỗi ngày một lần", "Chỉ khi người dùng yêu cầu"]],
  ["CPU làm gì trước khi chạy ISR?", "Lưu trạng thái (nội dung các thanh ghi) của tác vụ hiện tại", ["Xóa tác vụ hiện tại", "Khởi động lại máy tính", "Xóa sạch RAM"]],
  ["Điều gì xảy ra sau khi ISR chạy xong?", "Trạng thái đã lưu được khôi phục và tác vụ ban đầu tiếp tục", ["Máy tính tắt", "Tác vụ bắt đầu lại từ đầu", "Mọi chương trình đều đóng"]],
  ["Vì sao các ngắt có mức ưu tiên?", "Để các ngắt quan trọng hơn được xử lý trước", ["Để chúng chạy theo thứ tự bảng chữ cái", "Để làm chúng chậm hơn", "Để chỉ một ngắt có thể xảy ra"]],
  ["Tín hiệu ngắt được gửi đến CPU qua bus nào?", "Bus điều khiển", ["Bus địa chỉ", "Bus dữ liệu", "USB"], { t: ["control bus"] }],
  ["Vì sao ngắt hữu ích?", "Máy tính có thể phản ứng nhanh với các sự kiện mà không phải liên tục kiểm tra từng thiết bị", ["Chúng làm chương trình nhỏ hơn", "Chúng ngăn chặn virus", "Chúng tiết kiệm điện"]]
],

"5.2a": [
  ["Đâu là một chức năng của hệ điều hành?", "Quản lý bộ nhớ", ["Chỉnh sửa ảnh", "Viết bài luận", "Duyệt web"]],
  ["Đâu KHÔNG phải là chức năng của hệ điều hành?", "Viết thư thay cho người dùng", ["Quản lý tệp", "Xử lý ngắt", "Quản lý tài khoản người dùng"]],
  ["Hệ điều hành 'quản lý đa nhiệm' (multitasking) nghĩa là gì?", "Chia sẻ thời gian CPU giữa nhiều chương trình để chúng có vẻ chạy cùng một lúc", ["Chỉ chạy một chương trình", "Cho nhiều người dùng gõ cùng lúc", "In nhiều bản sao"]],
  ["Trình điều khiển thiết bị (device driver) là gì?", "Phần mềm cho phép hệ điều hành giao tiếp với một thiết bị phần cứng cụ thể", ["Một người sửa máy tính", "Một sợi cáp USB", "Một loại ngắt"]],
  ["GUI là gì?", "Giao diện đồ họa dùng cửa sổ, biểu tượng, menu và con trỏ", ["Giao diện gõ lệnh", "Một loại ổ cứng", "Một ngôn ngữ lập trình"]],
  ["Đâu là ưu điểm của giao diện dòng lệnh (CLI) so với GUI?", "Tốn ít bộ nhớ hơn và cho quyền điều khiển trực tiếp hơn", ["Dễ dùng hơn cho người mới", "Không cần học lệnh", "Hiển thị hình ảnh"]],
  ["Đâu là ưu điểm của GUI so với CLI?", "Dễ học — người dùng không phải nhớ các lệnh", ["Tốn ít bộ nhớ hơn", "Người dùng thành thạo gõ lệnh nhanh hơn", "Không cần màn hình"]],
  ["Hệ điều hành quản lý bộ nhớ bằng cách nào?", "Quyết định chương trình và dữ liệu nào được giữ trong RAM và ngăn chúng ghi đè lên nhau", ["Xóa RAM mỗi giây", "Lưu mọi thứ trong ROM", "Nén tất cả các chương trình"]],
  ["Chức năng nào của hệ điều hành cho phép nhiều người đăng nhập với tệp và thiết lập riêng của mình?", "Quản lý tài khoản người dùng", ["Xử lý ngắt", "Quản lý thiết bị ngoại vi", "Cung cấp nền tảng"]],
  ["'Cung cấp nền tảng để chạy ứng dụng' nghĩa là gì?", "Ứng dụng dùng các dịch vụ của hệ điều hành (ví dụ lưu tệp, in) thay vì điều khiển trực tiếp phần cứng", ["Hệ điều hành là sân ga tàu hỏa", "Hệ điều hành chạy ứng dụng trên đám mây", "Ứng dụng không cần hệ điều hành"]],
  ["Chức năng nào của hệ điều hành bao gồm tường lửa và cập nhật bảo mật?", "Cung cấp bảo mật hệ thống", ["Quản lý tệp", "Quản lý đa nhiệm", "Cung cấp giao diện"]],
  ["Đâu là một hệ điều hành?", "Android", ["Microsoft Word", "Google Chrome", "Photoshop"]],
  ["Sao chép, di chuyển, đổi tên và xóa tệp thuộc chức năng nào của hệ điều hành?", "Quản lý tệp", ["Quản lý bộ nhớ", "Xử lý ngắt", "Quản lý đa nhiệm"]]
],

"5.2b": [
  ["Phần sụn (firmware) là gì?", "Phần mềm được lưu vĩnh viễn trong ROM (hoặc flash) và điều khiển phần cứng ở mức thấp", ["Phần cứng rất cứng", "Một ứng dụng tải từ internet", "Một loại virus"]],
  ["Bootloader là gì?", "Phần sụn chạy khi bật máy và nạp hệ điều hành", ["Chương trình tắt máy tính", "Một loại ứng dụng", "Một sợi cáp để khởi động"]],
  ["Ứng dụng chạy trên…", "hệ điều hành", ["trực tiếp trên phần sụn", "bàn phím", "chỉ bootloader"]],
  ["Hệ điều hành chạy trên…", "phần sụn", ["các ứng dụng", "người dùng", "internet"]],
  ["Bootloader chạy trên…", "phần cứng", ["các ứng dụng", "hệ điều hành", "đám mây"]],
  ["Sắp xếp các lớp theo thứ tự từ dưới lên.", "Phần cứng → phần sụn → hệ điều hành → ứng dụng", ["Ứng dụng → hệ điều hành → phần sụn → phần cứng", "Phần sụn → phần cứng → ứng dụng → hệ điều hành", "Hệ điều hành → phần cứng → ứng dụng → phần sụn"]],
  ["Bootloader được lưu ở đâu?", "Trong ROM", ["Trong RAM", "Trên đĩa DVD", "Trên đám mây"], { t: ["ROM"] }],
  ["Vì sao không thể nạp hệ điều hành nếu không có phần sụn?", "Phần sụn chứa các lệnh để khởi động phần cứng và nạp hệ điều hành từ bộ nhớ lưu trữ", ["Hệ điều hành được lưu trong phần sụn", "Phần sụn xóa hệ điều hành", "Hệ điều hành quá nhỏ"]],
  ["Vì sao bootloader được lưu trong ROM chứ không phải RAM?", "ROM không mất dữ liệu khi tắt nguồn (non-volatile), nên các lệnh vẫn còn khi bật máy", ["ROM nhanh hơn RAM", "RAM không thể chứa chương trình", "ROM lớn hơn RAM"]]
],

"5.3a": [
  ["Ngôn ngữ bậc cao (high-level language) là gì?", "Ngôn ngữ lập trình gần với ngôn ngữ con người, như Python hoặc Java", ["Mã máy gồm các số 1 và 0", "Ngôn ngữ dùng các mnemonic như LDA", "Ngôn ngữ chỉ CPU mới dùng"]],
  ["Ngôn ngữ bậc thấp (low-level language) là gì?", "Ngôn ngữ gần với mã máy, như hợp ngữ hoặc mã máy", ["Ngôn ngữ chỉ dành cho người mới học", "Ngôn ngữ như Python", "Một ngôn ngữ nói"]],
  ["Đâu là ưu điểm của ngôn ngữ bậc cao?", "Dễ đọc, dễ viết và dễ gỡ lỗi", ["Có thể thao tác trực tiếp với phần cứng", "Không cần trình dịch", "Phụ thuộc vào máy"]],
  ["Đâu là ưu điểm của ngôn ngữ bậc thấp?", "Có thể thao tác trực tiếp với phần cứng, như các thanh ghi và ô nhớ cụ thể", ["Dễ đọc", "Không phụ thuộc máy", "Dễ gỡ lỗi"]],
  ["'Không phụ thuộc máy' (machine independent) nghĩa là gì?", "Chương trình có thể chạy trên nhiều loại máy tính khác nhau (sau khi dịch)", ["Không cần máy nào để chạy", "Chỉ chạy trên một loại CPU", "Không thể dịch được"]],
  ["Loại ngôn ngữ nào phụ thuộc vào máy?", "Ngôn ngữ bậc thấp", ["Ngôn ngữ bậc cao", "Mã giả (pseudocode)", "Tiếng Anh"], { t: ["bậc thấp", "low-level", "low level"] }],
  ["Đâu là một ngôn ngữ bậc cao?", "Python", ["Hợp ngữ", "Mã máy", "Nhị phân"], { t: true }],
  ["Vì sao lập trình viên viết trình điều khiển thiết bị có thể dùng ngôn ngữ bậc thấp?", "Nó cho phép điều khiển trực tiếp phần cứng và viết mã hiệu quả, nhanh", ["Nó dễ đọc hơn", "Nó chạy được trên mọi loại máy tính", "Nó không cần kiểm thử"]],
  ["Loại ngôn ngữ nào dễ gỡ lỗi hơn?", "Ngôn ngữ bậc cao", ["Ngôn ngữ bậc thấp", "Mã máy", "Cả hai khó như nhau"], { t: ["bậc cao", "high-level", "high level"] }],
  ["Ngôn ngữ duy nhất mà CPU có thể thực thi trực tiếp là gì?", "Mã máy", ["Python", "Hợp ngữ", "Mã giả (pseudocode)"], { t: ["mã máy", "nhị phân", "machine code", "binary"] }]
],

"5.3b": [
  ["Hợp ngữ (assembly language) là gì?", "Một ngôn ngữ bậc thấp dùng các mnemonic", ["Một ngôn ngữ bậc cao giống tiếng Anh", "Một ngôn ngữ để lắp ráp đồ nội thất", "Một ngôn ngữ chỉ gồm các số 1 và 0"]],
  ["Mnemonic trong hợp ngữ là gì?", "Một mã ngắn thay cho một lệnh, như LDA hoặc ADD", ["Một tên biến", "Một loại vòng lặp", "Một chú thích"]],
  ["Trình dịch nào chuyển hợp ngữ sang mã máy?", "Trình hợp dịch (assembler)", ["Trình biên dịch (compiler)", "Trình thông dịch (interpreter)", "Trình liên kết (linker)"], { t: ["assembler", "trình hợp dịch"] }],
  ["Đâu là một lệnh hợp ngữ?", "ADD 21", ["print(21)", "x = x + 21", "FOR i ← 1 TO 21"]],
  ["Mỗi lệnh hợp ngữ thường tương ứng với…", "một lệnh mã máy", ["một dòng Python", "nhiều lệnh mã máy", "cả một chương trình"]]
],

"5.3c": [
  ["Trình biên dịch (compiler) dịch chương trình như thế nào?", "Dịch toàn bộ chương trình cùng một lúc trước khi chạy, tạo ra một tệp thực thi", ["Dịch và chạy từng dòng một", "Chỉ dịch hợp ngữ", "Dịch mã máy sang tiếng Anh"]],
  ["Trình thông dịch (interpreter) dịch chương trình như thế nào?", "Dịch và thực thi chương trình từng dòng một", ["Dịch toàn bộ chương trình cùng một lúc", "Tạo ra một tệp thực thi", "Chỉ dịch hợp ngữ"]],
  ["Trình biên dịch báo lỗi như thế nào?", "Đưa ra báo cáo lỗi cho toàn bộ chương trình sau khi cố gắng dịch", ["Dừng ở lỗi đầu tiên trong khi thực thi", "Không báo lỗi", "Tự động sửa lỗi"]],
  ["Trình thông dịch báo lỗi như thế nào?", "Dừng thực thi khi gặp lỗi và báo lỗi đó", ["Liệt kê mọi lỗi ở cuối", "Bỏ qua lỗi", "Xóa dòng đó"]],
  ["Trình dịch nào tạo ra tệp thực thi?", "Trình biên dịch", ["Trình thông dịch", "IDE", "Trình soạn thảo văn bản"], { t: ["compiler", "trình biên dịch"] }],
  ["Trình dịch nào thường được dùng khi phát triển và gỡ lỗi chương trình?", "Trình thông dịch", ["Trình biên dịch", "Trình hợp dịch", "Trình chống phân mảnh"], { t: ["interpreter", "trình thông dịch"] }],
  ["Trình dịch nào thường được dùng để dịch chương trình hoàn chỉnh cho người dùng?", "Trình biên dịch", ["Trình thông dịch", "Trình hợp dịch", "Phần mềm diệt virus"], { t: ["compiler", "trình biên dịch"] }],
  ["Vì sao chương trình đã biên dịch chạy nhanh hơn chương trình thông dịch?", "Nó đã được dịch sẵn, nên không cần dịch lại mỗi lần chạy", ["Trình biên dịch dùng nhiều nhân hơn", "Chương trình thông dịch dài hơn", "Chương trình đã biên dịch bỏ qua một số lệnh"]],
  ["Vì sao một công ty có thể thích đưa cho người dùng chương trình đã biên dịch?", "Người dùng không nhận được mã nguồn, nên khó bị sao chép hoặc chỉnh sửa", ["Nó dễ chỉnh sửa hơn", "Nó cần có trình thông dịch", "Nó chạy được trên mọi CPU"]],
  ["Đâu là nhược điểm của trình thông dịch?", "Chương trình phải được dịch mỗi lần chạy, nên chạy chậm hơn", ["Nó không tìm được lỗi", "Nó tạo ra các tệp thực thi lớn", "Nó không chạy được Python"]],
  ["Đâu là nhược điểm của trình biên dịch?", "Không thấy được lỗi xảy ra ở đâu trong khi chương trình chạy; mọi lỗi phải được sửa trước khi chạy", ["Nó dịch từng dòng một", "Nó phải có mặt mỗi lần chạy chương trình", "Nó chia sẻ mã nguồn"]],
  ["Trình dịch (translator) là gì?", "Một chương trình chuyển mã thành mã máy", ["Một người nói được hai ngôn ngữ", "Một loại thiết bị nhập", "Một trình điều khiển thiết bị"]]
],

"5.4a": [
  ["Chức năng nào của IDE sẽ làm nổi bật dấu ngoặc bị thiếu ở dòng 12?", "Chẩn đoán lỗi (error diagnostics)", ["Prettyprint", "Môi trường chạy (run-time environment)", "Tự động hoàn thành (auto-completion)"], { t: ["error diagnostics", "chẩn đoán lỗi"] }],
  ["Chức năng nào của IDE cho phép lập trình viên chạy từng dòng mã và theo dõi các biến?", "Các công cụ gỡ lỗi trong môi trường chạy (run-time environment)", ["Prettyprint", "Tự động sửa lỗi (auto-correction)", "Phông chữ của trình soạn thảo mã"]],
  ["Chức năng nào của IDE làm cho các từ khóa hiện có màu?", "Prettyprint / tô màu cú pháp (syntax highlighting)", ["Tự động sửa lỗi (auto-correction)", "Trình dịch (translator)", "Môi trường chạy (run-time environment)"]],
  ["Vì sao IDE hữu ích cho người mới học lập trình?", "Nó hiển thị lỗi rõ ràng và giúp viết và kiểm thử mã ở cùng một nơi", ["Nó viết cả chương trình thay cho họ", "Nó giúp chương trình chạy mà không cần dịch", "Nó ngăn mọi lỗi logic"]],
  ["Chức năng nào của IDE dịch mã để có thể chạy được?", "Trình dịch (compiler hoặc interpreter)", ["Prettyprint", "Tự động hoàn thành (auto-completion)", "Trình soạn thảo mã (code editor)"]],
  ["Khi lập trình viên gõ 'pri' và IDE gợi ý 'print()', đó là chức năng nào?", "Tự động hoàn thành (auto-completion)", ["Tự động sửa lỗi (auto-correction)", "Prettyprint", "Chẩn đoán lỗi (error diagnostics)"], { t: ["auto-completion", "auto completion", "autocomplete", "tự động hoàn thành"] }],
  ["IDE là viết tắt của gì?", "Môi trường phát triển tích hợp (integrated development environment)", ["Trình soạn thảo dữ liệu nội bộ (internal data editor)", "Công cụ thiết kế tương tác (interactive design engine)", "Trình soạn thảo gỡ lỗi tích hợp (integrated debugging editor)"], { t: ["integrated development environment", "môi trường phát triển tích hợp"] }],
  ["IDE là gì?", "Phần mềm cung cấp các công cụ để viết, dịch, kiểm thử và gỡ lỗi mã ở cùng một nơi", ["Một loại ổ cứng", "Một ngôn ngữ lập trình", "Một hệ điều hành"]],
  ["Chức năng nào của IDE gợi ý cách viết tiếp một từ khóa hoặc tên biến khi đang gõ?", "Tự động hoàn thành (auto-completion)", ["Prettyprint", "Môi trường chạy (run-time environment)", "Chẩn đoán lỗi (error diagnostics)"], { t: ["auto-completion", "auto completion", "autocomplete", "autocompletion", "tự động hoàn thành"] }],
  ["Chức năng nào của IDE tự động sửa các lỗi thường gặp như gõ sai từ khóa?", "Tự động sửa lỗi (auto-correction)", ["Tự động hoàn thành (auto-completion)", "Prettyprint", "Trình dịch (translator)"], { t: ["auto-correction", "auto correction", "autocorrect", "autocorrection", "tự động sửa lỗi"] }],
  ["Chức năng nào của IDE tô màu và thụt lề mã để dễ đọc hơn?", "Prettyprint", ["Môi trường chạy (run-time environment)", "Tự động hoàn thành (auto-completion)", "Trình dịch (translator)"], { t: ["pretty print", "prettyprinting", "định dạng mã đẹp"] }],
  ["Chức năng nào của IDE chỉ ra lỗi ở đâu và giải thích lỗi?", "Chẩn đoán lỗi (error diagnostics)", ["Prettyprint", "Tự động hoàn thành (auto-completion)", "Trình soạn thảo mã (code editor)"], { t: ["error diagnostics", "error diagnostic", "diagnostics", "chẩn đoán lỗi"] }],
  ["Chức năng nào của IDE cho phép chạy và kiểm thử chương trình ngay trong IDE?", "Môi trường chạy (run-time environment)", ["Trình soạn thảo mã (code editor)", "Prettyprint", "Tự động sửa lỗi (auto-correction)"], { t: ["run-time environment", "runtime environment", "run time environment", "môi trường chạy"] }],
  ["Chức năng nào của IDE cho phép lập trình viên gõ và sửa mã của mình?", "Trình soạn thảo mã (code editor)", ["Trình dịch (translator)", "Chẩn đoán lỗi (error diagnostics)", "Môi trường chạy (run-time environment)"], { t: ["code editor", "editor", "trình soạn thảo mã", "trình soạn thảo"] }],
  ["Chức năng nào của IDE chuyển mã thành mã máy?", "Trình dịch (compiler hoặc interpreter)", ["Prettyprint", "Trình soạn thảo mã (code editor)", "Tự động hoàn thành (auto-completion)"], { t: ["trình dịch", "translator", "compiler", "interpreter"] }],
  ["Điểm dừng (breakpoint) là gì?", "Một điểm mà chương trình tạm dừng để lập trình viên kiểm tra giá trị của các biến", ["Phần kết thúc của chương trình", "Một lỗi cú pháp", "Một loại vòng lặp"]],
  ["Đâu là lợi ích của tự động hoàn thành (auto-completion)?", "Viết mã nhanh hơn và ít lỗi chính tả hơn", ["Chương trình chạy nhanh hơn", "Tệp được nén", "Mã được mã hóa"]],
  ["Đâu là một ví dụ về IDE?", "Thonny hoặc Visual Studio", ["Windows 11", "Google Chrome", "Microsoft Excel"]]
],

"6.1a": [
  ["Cổng logic nào chỉ có một đầu vào?", "NOT", ["AND", "OR", "XOR"], { t: true }],
  ["Vòng tròn nhỏ (bong bóng) ở đầu ra của ký hiệu cổng có nghĩa là gì?", "Đầu ra bị đảo (NOT)", ["Cổng có ba đầu vào", "Cổng đang tắt", "Đầu ra luôn bằng 1"]],
  ["Ký hiệu cổng nào có phần lưng cong và đầu nhọn, với thêm một đường cong ở phía sau?", "XOR", ["OR", "AND", "NAND"], { t: ["EOR"] }],
  ["Ký hiệu cổng nào có hình chữ D với lưng phẳng và đầu tròn?", "AND", ["OR", "NOT", "XOR"], { t: true }],
  ["Ký hiệu cổng nào là hình tam giác có một vòng tròn nhỏ ở đỉnh?", "NOT", ["NAND", "NOR", "AND"], { t: true }],
  ["Ký hiệu cổng nào có hình dạng của AND kèm một vòng tròn ở đầu ra?", "NAND", ["NOR", "XOR", "NOT"], { t: true }],
  ["Ký hiệu cổng nào có hình dạng của OR kèm một vòng tròn ở đầu ra?", "NOR", ["NAND", "XOR", "OR"], { t: true }],
  ["Trong chương trình IGCSE, các cổng AND, OR, NAND, NOR và XOR có bao nhiêu đầu vào?", "Hai", ["Một", "Ba", "Bất kỳ số nào"], { t: ["2", "two"] }]
],

"6.1b": [
  ["Cổng AND cho đầu ra 1 khi…", "cả hai đầu vào bằng 1", ["một trong hai đầu vào bằng 1", "cả hai đầu vào bằng 0", "hai đầu vào khác nhau"]],
  ["Cổng OR cho đầu ra 1 khi…", "có ít nhất một đầu vào bằng 1", ["chỉ khi cả hai đầu vào bằng 1", "cả hai đầu vào bằng 0", "hai đầu vào giống nhau"]],
  ["Cổng NOT cho đầu ra…", "ngược với đầu vào của nó", ["giống đầu vào của nó", "luôn bằng 1", "luôn bằng 0"]],
  ["Cổng NAND cho đầu ra 0 chỉ khi…", "cả hai đầu vào bằng 1", ["cả hai đầu vào bằng 0", "hai đầu vào khác nhau", "một trong hai đầu vào bằng 1"]],
  ["Cổng NOR cho đầu ra 1 chỉ khi…", "cả hai đầu vào bằng 0", ["cả hai đầu vào bằng 1", "một trong hai đầu vào bằng 1", "hai đầu vào khác nhau"]],
  ["Cổng XOR cho đầu ra 1 khi…", "hai đầu vào khác nhau", ["hai đầu vào giống nhau", "cả hai đầu vào bằng 1", "cả hai đầu vào bằng 0"]],
  ["Đầu ra của A AND B là bao nhiêu khi A = 1 và B = 0?", "0", ["1"], { t: true }],
  ["Đầu ra của A OR B là bao nhiêu khi A = 1 và B = 0?", "1", ["0"], { t: true }],
  ["Đầu ra của A XOR B là bao nhiêu khi A = 1 và B = 1?", "0", ["1"], { t: true }],
  ["Đầu ra của A NAND B là bao nhiêu khi A = 1 và B = 1?", "0", ["1"], { t: true }],
  ["Đầu ra của A NOR B là bao nhiêu khi A = 0 và B = 0?", "1", ["0"], { t: true }],
  ["Đầu ra của NOT A là bao nhiêu khi A = 1?", "0", ["1"], { t: true }],
  ["Bảng chân trị của một cổng hai đầu vào có bao nhiêu hàng?", "4", ["2", "3", "8"], { t: ["bốn"] }],
  ["Bảng chân trị cho ba đầu vào có bao nhiêu hàng?", "8", ["3", "6", "9"], { t: ["tám"] }],
  ["\"Chuông báo động kêu nếu cửa đang mở và hệ thống đang bật.\" Đó là cổng nào?", "AND", ["OR", "XOR", "NOR"], { t: true }],
  ["\"Đèn sáng nếu công tắc A hoặc công tắc B được nhấn.\" Đó là cổng nào?", "OR", ["AND", "NAND", "NOT"], { t: true }],
  ["\"Chuông reo nếu đúng một trong hai nút được nhấn.\" Đó là cổng nào?", "XOR", ["OR", "AND", "NOR"], { t: ["EOR"] }],
  ["Cổng nào tương đương với một cổng AND nối tiếp một cổng NOT?", "NAND", ["NOR", "XOR", "OR"], { t: true }],
  ["Cổng nào tương đương với một cổng OR nối tiếp một cổng NOT?", "NOR", ["NAND", "XOR", "AND"], { t: true }],
  ["Cổng hai đầu vào nào có cột đầu ra của bảng chân trị là 0, 1, 1, 1 (ứng với đầu vào 00, 01, 10, 11)?", "OR", ["AND", "XOR", "NAND"], { t: true }],
  ["Cổng hai đầu vào nào có cột đầu ra của bảng chân trị là 0, 0, 0, 1?", "AND", ["OR", "NOR", "NAND"], { t: true }],
  ["Cổng hai đầu vào nào có cột đầu ra của bảng chân trị là 0, 1, 1, 0?", "XOR", ["OR", "NAND", "NOR"], { t: ["EOR"] }],
  ["Cổng hai đầu vào nào có cột đầu ra của bảng chân trị là 1, 1, 1, 0?", "NAND", ["NOR", "OR", "AND"], { t: true }],
  ["Cổng hai đầu vào nào có cột đầu ra của bảng chân trị là 1, 0, 0, 0?", "NOR", ["NAND", "AND", "XOR"], { t: true }]
],

"6.2a": [
  ["Các hàng đầu vào của bảng chân trị ba đầu vào phải được viết theo thứ tự nào?", "Thứ tự đếm nhị phân: 000, 001, 010 … 111", ["Thứ tự bất kỳ", "111 trước, rồi ngẫu nhiên", "Chỉ các hàng có đầu ra bằng 1"]],
  ["Vì sao cột trung gian (working column) hữu ích khi hoàn thành bảng chân trị?", "Chúng cho thấy đầu ra của từng phần trong biểu thức, giúp ít nhầm lẫn hơn", ["Chúng cần để thêm đầu vào", "Chúng thay thế cột đầu ra", "Chúng hiển thị các ký hiệu cổng"]]
],

"6.2b": [
  ["Khi viết biểu thức logic từ bảng chân trị, bạn dùng những hàng nào?", "Những hàng có đầu ra bằng 1", ["Những hàng có đầu ra bằng 0", "Chỉ hàng đầu tiên", "Mọi hàng"]],
  ["Với hàng trong bảng chân trị có A = 0, B = 1 cho đầu ra 1, ta viết số hạng nào?", "(NOT A AND B)", ["(A AND B)", "(A OR NOT B)", "(NOT A OR NOT B)"]],
  ["Một máy sưởi (X) bật khi trời lạnh (C = 1) VÀ không phải cuối tuần (W = 1 nghĩa là cuối tuần). Biểu thức nào đúng?", "X = C AND NOT W", ["X = C OR W", "X = NOT C AND W", "X = C AND W"]],
  ["Một cánh cửa mở ra (X) nếu nút được nhấn (B) HOẶC thẻ được quét (S). Biểu thức nào đúng?", "X = B OR S", ["X = B AND S", "X = NOT B OR S", "X = B XOR S"]]
],

"6.2c": [
  ["Cần bao nhiêu cổng để vẽ mạch cho X = (A AND B) OR C, không rút gọn?", "2", ["1", "3", "4"], { t: ["hai"] }],
  ["Cần bao nhiêu cổng để vẽ mạch cho X = NOT (A OR B) AND C, không rút gọn?", "3", ["2", "4", "1"], { t: ["ba"] }],
  ["Trong bài thi IGCSE, có nên rút gọn biểu thức logic trước khi vẽ mạch không?", "Không — vẽ mạch đúng như biểu thức đã cho", ["Có, luôn luôn", "Chỉ khi có cổng NOT", "Chỉ khi có ba đầu vào"]],
  ["Một mạch logic trong bài thi IGCSE có tối đa bao nhiêu đầu vào?", "3", ["2", "4", "8"], { t: ["ba"] }],
  ["Với X = (A OR B) AND C, cổng nào được vẽ trước (gần đầu vào nhất)?", "Cổng OR", ["Cổng AND", "Một cổng NOT", "Cả hai cùng lúc"]]
]
});
