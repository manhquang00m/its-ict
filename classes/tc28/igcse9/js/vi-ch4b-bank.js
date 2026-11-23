window.VI = window.VI || { topics: {}, objectives: {}, bank: {}, glossary: {}, ui: {} };

Object.assign(window.VI.bank, {

"4.7a": [
  ["Loại máy in nào tạo vật thể 3D bằng cách làm chảy sợi nhựa qua một đầu phun được nung nóng?", "Máy in 3D", ["Máy in laser", "Máy in phun", "Máy chiếu DLP"], { t: ["may in 3d", "3D printer"] }],
  ["Bộ phận nào của máy in laser được tia laser quét qua?", "Trống in", ["Tờ giấy", "Bộ sấy", "Hộp mực"], { t: ["trống", "drum"] }],
  ["Vì sao có thể chọn máy in phun cho một văn phòng nhỏ tại nhà?", "Giá mua rẻ và in màu chất lượng tốt", ["Rẻ nhất tính theo mỗi trang khi in hàng nghìn trang", "Nó in được vật thể rắn", "Nó không cần mực"]],
  ["Trong máy in phun áp điện (piezoelectric), cái gì ép giọt mực ra ngoài?", "Một tinh thể rung khi có dòng điện chạy qua", ["Một bọt khí được nung nóng", "Một tia laser", "Một trống tích điện"]],
  ["Máy in phun đưa mực lên giấy bằng cách nào?", "Đầu in phun những giọt mực lỏng rất nhỏ qua các vòi phun", ["Tia laser làm chảy mực bột lên giấy", "Một trống lăn bột lên giấy", "Các kim đập vào ruy băng mực"]],
  ["Máy in phun tạo giọt mực bằng hai cách nào?", "Bọt khí nhiệt và áp điện", ["Laser và mực bột", "Từ và quang", "Tĩnh và động"]],
  ["Trong máy in laser, lúc đầu trống in được cấp gì?", "Điện tích dương", ["Một lớp mực", "Một lớp nhựa", "Một từ trường âm"]],
  ["Trong máy in laser, tia laser làm gì?", "Làm mất điện dương ở một số vùng của trống, tạo ra ảnh tĩnh điện của trang", ["Đốt chữ vào giấy", "Làm chảy nhựa", "Quét tài liệu"]],
  ["Toner là gì?", "Mực dạng bột dùng trong máy in laser", ["Mực lỏng dùng trong máy in phun", "Sợi nhựa", "Một loại giấy"]],
  ["Bộ sấy (fuser) trong máy in laser làm gì?", "Dùng nhiệt làm chảy mực bột để dính vào giấy", ["Tích điện cho trống", "Cắt giấy", "Làm nguội máy in"]],
  ["Máy in nào phù hợp nhất để in nhanh 500 bản tin?", "Máy in laser", ["Máy in phun", "Máy in 3D", "Máy in kim"], { t: ["laser", "may in laser"] }],
  ["Máy in nào phù hợp nhất để in vài tấm ảnh màu chất lượng cao tại nhà?", "Máy in phun", ["Máy in laser", "Máy in 3D", "Máy vẽ (plotter)"], { t: ["phun", "may in phun", "inkjet"] }],
  ["Máy in 3D tạo ra một vật thể bằng cách nào?", "Đắp nó lên từng lớp một từ một thiết kế số", ["Khắc từ một khối vật liệu", "In ra một bức ảnh của nó", "Quét nó"]],
  ["Việc tạo ra một vật thể bằng cách đắp thêm các lớp vật liệu được gọi là…", "sản xuất bồi đắp (additive manufacturing)", ["sản xuất cắt gọt", "nén", "kết xuất (render)"], { t: ["sản xuất bồi đắp", "additive manufacturing"] }],
  ["Phần mềm nào được dùng để thiết kế vật thể cho in 3D?", "CAD (thiết kế có sự hỗ trợ của máy tính)", ["Bảng tính", "Trình duyệt web", "Phần mềm diệt virus"], { t: ["CAD", "thiết kế có sự hỗ trợ của máy tính"] }],
  ["Đâu là một ứng dụng của in 3D?", "Làm chi thể giả theo yêu cầu", ["In đề thi", "Trình chiếu bài thuyết trình", "Lưu ảnh"]],
  ["Vì sao máy in laser lưu cả trang vào bộ nhớ trước khi in?", "Cả trang được in một lần khi trống quay", ["Để quét virus", "Để nén nó", "Để dịch nó sang Python"]],
  ["Đâu là một nhược điểm của máy in phun?", "Hộp mực hết nhanh và đắt tính theo mỗi trang", ["Giá mua rất đắt", "Không in được màu", "Chúng quá nhanh"]],
  ["Đâu là một nhược điểm của máy in laser?", "Giá mua đắt và bụi mực có thể gây hại cho sức khỏe", ["Chúng chỉ in được ảnh", "Chúng chậm hơn máy in phun", "Chúng không in được chữ"]]
],

"4.8a": [
  ["Cảm biến (sensor) là gì?", "Một thiết bị nhập đo một đại lượng vật lý của môi trường", ["Một thiết bị xuất tạo ra chuyển động", "Một bộ xử lý đưa ra quyết định", "Một loại bộ nhớ lưu trữ"]],
  ["Hầu hết cảm biến tạo ra dữ liệu tương tự. Phải làm gì trước khi máy tính dùng được dữ liệu đó?", "Phải chuyển sang dạng số bằng ADC", ["Phải in ra", "Phải mã hóa", "Không cần gì — máy tính dùng dữ liệu tương tự"]],
  ["Cảm biến có quyết định khi nào bật máy sưởi không?", "Không — nó chỉ gửi dữ liệu; bộ vi xử lý mới quyết định", ["Có, cảm biến tự quyết định", "Chỉ cảm biến nhiệt độ mới làm vậy", "Chỉ trong nhà kính"]],
  ["Cảm biến nào đo lượng hơi nước trong không khí?", "Humidity", ["Moisture", "Level", "Flow"], { t: ["humidity sensor", "độ ẩm không khí"] }],
  ["Cảm biến nào đo lượng nước trong đất?", "Moisture", ["Humidity", "pH", "Level"], { t: ["moisture sensor", "độ ẩm đất"] }],
  ["Cảm biến nào đo độ axit hoặc độ kiềm?", "pH", ["Gas", "Moisture", "Light"], { t: ["ph sensor"] }],
  ["Cảm biến nào đo sự thay đổi tốc độ hoặc hướng, hoặc độ nghiêng?", "Accelerometer", ["Proximity", "Pressure", "Flow"], { t: ["gia tốc"] }],
  ["Cảm biến nào đo mức âm thanh?", "Acoustic", ["Infra-red", "Pressure", "Magnetic field"], { t: ["acoustic sensor", "sound sensor", "âm thanh"] }],
  ["Cảm biến nào đo tốc độ chất lỏng hoặc chất khí chảy qua một đường ống?", "Flow", ["Level", "Pressure", "Humidity"], { t: ["flow sensor", "lưu lượng"] }],
  ["Cảm biến nào đo mức đầy của một bể chứa?", "Level", ["Flow", "Pressure", "Proximity"], { t: ["level sensor", "mức"] }],
  ["Cảm biến nào phát hiện nhiệt từ một cơ thể hoặc một chùm tia vô hình bị chắn?", "Infra-red", ["Light", "Acoustic", "Gas"], { t: ["infrared", "infra-red sensor", "hồng ngoại"] }],
  ["Cảm biến nào phát hiện một vật ở gần đến mức nào mà không cần chạm vào?", "Proximity", ["Pressure", "Level", "Accelerometer"], { t: ["proximity sensor"] }],
  ["Cảm biến nào phát hiện sự thay đổi của từ trường?", "Magnetic field", ["Acoustic", "Light", "Pressure"], { t: ["magnetic", "magnetic field sensor", "từ trường"] }],
  ["Cảm biến nào đo lượng carbon dioxide trong nhà kính?", "Gas", ["Humidity", "Moisture", "Light"], { t: ["gas sensor", "khí"] }],
  ["Cảm biến nào đo độ sáng?", "Light", ["Infra-red", "Proximity", "Acoustic"], { t: ["light sensor", "ánh sáng"] }],
  ["Cảm biến nào đo trọng lượng hoặc lực đè lên nó?", "Pressure", ["Level", "Flow", "Accelerometer"], { t: ["pressure sensor", "áp suất"] }],
  ["Trong hệ thống điều khiển dùng cảm biến, bộ vi xử lý làm gì với mỗi số đo?", "So sánh nó với các giá trị đã lưu và quyết định có cần cho cơ cấu chấp hành hoạt động hay không", ["In nó ra", "Xóa nó", "Gửi nó trở lại cảm biến"]],
  ["Thiết bị nào thực hiện hành động trong hệ thống điều khiển dùng cảm biến, chẳng hạn mở một van?", "Cơ cấu chấp hành (actuator)", ["Cảm biến", "ADC", "Màn hình"], { t: ["actuator", "cơ cấu chấp hành"] }],
  ["Hệ thống giám sát khác hệ thống điều khiển ở điểm nào?", "Hệ thống giám sát ghi lại/hiển thị dữ liệu hoặc cảnh báo; hệ thống điều khiển còn thay đổi điều kiện bằng cơ cấu chấp hành", ["Chúng giống nhau", "Hệ thống giám sát dùng cơ cấu chấp hành; hệ thống điều khiển thì không", "Hệ thống điều khiển không dùng cảm biến"]]
],

"4.8b": [
  ["Cảm biến nào sẽ tự động bật đèn đường lúc chạng vạng?", "Light", ["Infra-red", "Temperature", "Proximity"], { t: ["light sensor", "ánh sáng"] }],
  ["Chuông báo trộm dùng cảm biến nào để phát hiện người di chuyển trong phòng?", "Infra-red", ["pH", "Humidity", "Flow"], { t: ["infrared", "infra-red sensor", "hồng ngoại"] }],
  ["Ô tô dùng cảm biến nào để cảnh báo người lái khi lùi xe gần sát tường?", "Proximity", ["Light", "Gas", "Humidity"], { t: ["proximity sensor"] }],
  ["Cảm biến nào làm màn hình điện thoại xoay khi quay điện thoại nằm ngang?", "Accelerometer", ["Proximity", "Light", "Magnetic field"], { t: ["gia tốc"] }],
  ["Cảm biến nào quyết định khi nào tưới cây trong hệ thống vườn tự động?", "Moisture", ["Humidity", "pH", "Light"], { t: ["moisture sensor", "độ ẩm đất"] }],
  ["Cảm biến nào phát hiện sự tích tụ nguy hiểm của khí carbon monoxide trong nhà?", "Gas", ["Smoke", "Humidity", "Pressure"], { t: ["gas sensor", "khí"] }],
  ["Cảm biến nào điều khiển hệ thống sưởi trong một văn phòng?", "Temperature", ["Light", "Pressure", "Level"], { t: ["temperature sensor", "nhiệt độ"] }],
  ["Cảm biến nào kiểm tra nước bể bơi không quá axit?", "pH", ["Moisture", "Level", "Flow"], { t: ["ph sensor"] }],
  ["Cảm biến nào phát hiện bình nhiên liệu sắp cạn?", "Level", ["Flow", "Pressure", "Gas"], { t: ["level sensor", "mức"] }],
  ["Cảm biến nào phát hiện tiếng kính vỡ trong hệ thống an ninh?", "Acoustic", ["Light", "Moisture", "pH"], { t: ["acoustic sensor", "âm thanh"] }],
  ["Cảm biến nào phát hiện một chiếc ô tô chạy qua tấm đệm giấu dưới đường ở đèn giao thông?", "Pressure", ["Light", "Humidity", "pH"], { t: ["pressure sensor", "magnetic field", "áp suất", "từ trường"] }],
  ["Điện thoại dùng cảm biến nào cho ứng dụng la bàn?", "Magnetic field", ["Proximity", "Light", "Acoustic"], { t: ["magnetic", "magnetic field sensor", "từ trường"] }],
  ["Hệ thống túi khí của ô tô dùng cảm biến nào để phát hiện một vụ va chạm đột ngột?", "Accelerometer", ["Temperature", "Gas", "Light"], { t: ["gia tốc"] }],
  ["Cảm biến nào đo lượng nước một hộ gia đình dùng qua đường ống nước?", "Flow", ["Level", "Moisture", "Humidity"], { t: ["flow sensor", "lưu lượng"] }],
  ["Cảm biến nào giúp các bức tranh trong bảo tàng khỏi bị hư hại do không khí ẩm?", "Humidity", ["Moisture", "pH", "Flow"], { t: ["humidity sensor", "độ ẩm không khí"] }],
  ["Cảm biến nào tắt màn hình điện thoại khi bạn áp nó vào tai lúc gọi?", "Proximity", ["Accelerometer", "Light", "Pressure"], { t: ["proximity sensor"] }],
  ["Cảm biến nào phát hiện cửa bị mở nếu có gắn một nam châm vào cửa?", "Magnetic field", ["Light", "Humidity", "Gas"], { t: ["magnetic", "magnetic field sensor", "từ trường"] }],
  ["Cảm biến nào phát hiện đường ống trong nhà máy bị rò rỉ bằng cách nghe tiếng xì?", "Acoustic", ["pH", "Light", "Level"], { t: ["acoustic sensor", "âm thanh"] }]
],

"4.9a": [
  ["Bộ nhớ chính (primary storage) là gì?", "Bộ nhớ mà CPU truy cập trực tiếp, như RAM và ROM", ["Bộ nhớ giữ dữ liệu khi mất điện, như HDD", "Bộ nhớ trên internet", "Bộ nhớ trong USB"]],
  ["Loại bộ nhớ nào là khả biến (volatile)?", "RAM", ["ROM", "SSD", "HDD"], { t: ["ram"] }],
  ["'Khả biến' (volatile) nghĩa là gì?", "Nội dung bị mất khi tắt nguồn điện", ["Nội dung không thể thay đổi", "Rất nhanh", "Được lưu trên đám mây"]],
  ["Bộ nhớ nào lưu các lệnh khởi động (bootloader) của máy tính?", "ROM", ["RAM", "Cache", "Bộ nhớ ảo"], { t: ["bộ nhớ chỉ đọc", "read only memory"] }],
  ["Bộ nhớ nào lưu các chương trình và dữ liệu đang được sử dụng?", "RAM", ["ROM", "DVD", "Chỉ cache"], { t: ["bộ nhớ truy cập ngẫu nhiên", "random access memory"] }],
  ["ROM thông thường có ghi vào được không?", "Không — chỉ có thể đọc", ["Có, luôn luôn", "Chỉ người dùng mới ghi được", "Chỉ khi nó đầy"]],
  ["Vì sao máy tính cần ROM?", "Để chứa các lệnh khởi động, vốn không được phép mất khi tắt nguồn", ["Để lưu ảnh của người dùng", "Để làm internet nhanh hơn", "Để chứa các chương trình đang chạy"]],
  ["Vì sao máy tính cần RAM?", "Để chứa các chương trình và dữ liệu đang dùng để CPU đọc và ghi nhanh", ["Để lưu bootloader vĩnh viễn", "Để sao lưu tệp", "Để kết nối Wi-Fi"]],
  ["RAM là viết tắt của gì?", "Random access memory", ["Read and modify", "Rapid action memory", "Random allocated memory"], { t: ["random access memory", "bộ nhớ truy cập ngẫu nhiên"] }],
  ["ROM là viết tắt của gì?", "Read only memory", ["Random only memory", "Rewritable optical memory", "Run on memory"], { t: ["read only memory", "bộ nhớ chỉ đọc"] }],
  ["Nhận định nào về ROM là ĐÚNG?", "Nó không khả biến (non-volatile)", ["Nó khả biến (volatile)", "Nó chứa các tài liệu đang mở của người dùng", "Nó thường lớn hơn RAM"]],
  ["Trong một máy tính cá nhân, thường cái nào lớn hơn?", "RAM", ["ROM", "Chúng luôn bằng nhau", "Cache"], { t: ["ram"] }],
  ["Vì sao bạn không thể 'lưu' bài làm vào RAM?", "RAM khả biến, nên bài làm sẽ mất khi tắt máy", ["RAM là bộ nhớ chỉ đọc", "RAM quá chậm", "RAM nằm trên đám mây"]]
],

"4.9b": [
  ["Bộ nhớ ảo (virtual memory) là gì?", "Một phần của bộ nhớ phụ được dùng như thể là RAM bổ sung khi RAM đầy", ["Một loại ROM", "Bộ nhớ bên trong CPU", "Bộ nhớ trên internet"]],
  ["Bộ nhớ ảo được dùng khi nào?", "Khi RAM đầy", ["Khi máy tính khởi động", "Khi ROM đầy", "Khi internet chậm"]],
  ["Trong bộ nhớ ảo, dữ liệu được chuyển qua lại giữa RAM và bộ nhớ phụ theo các khối gọi là…", "trang (page)", ["cung (sector)", "gói tin (packet)", "khung (frame)"], { t: ["trang", "page", "pages"] }],
  ["Vì sao cần bộ nhớ ảo?", "Nó giúp chương trình tiếp tục chạy ngay cả khi RAM đầy, thay vì bị treo", ["Nó làm máy nhanh hơn việc thêm RAM", "Nó lưu bootloader", "Nó mã hóa tệp"]],
  ["Nhược điểm của việc dùng bộ nhớ ảo là gì?", "Bộ nhớ phụ chậm hơn RAM rất nhiều, nên máy chạy chậm đi", ["Nó xóa dữ liệu", "Nó chiếm hết ROM", "Nó cần kết nối internet"]],
  ["Disk thrashing là gì?", "Khi máy mất quá nhiều thời gian hoán đổi các trang giữa RAM và đĩa khiến nó chậm đi nghiêm trọng", ["Khi ổ cứng bị rơi", "Khi dữ liệu được chống phân mảnh", "Khi virus tấn công ổ đĩa"]],
  ["Cách tốt nhất để giảm nhu cầu dùng bộ nhớ ảo là gì?", "Lắp thêm RAM", ["Dùng màn hình lớn hơn", "Thêm ROM", "Dùng chuột nhanh hơn"]],
  ["Những trang nào được chuyển từ RAM sang bộ nhớ ảo?", "Những trang chưa cần dùng ngay", ["Những trang đang được dùng ngay lúc này", "Mã khởi động của hệ điều hành", "Chỉ có hình ảnh"]]
],

"4.10a": [
  ["Bộ nhớ phụ (secondary storage) là gì?", "Bộ nhớ không khả biến mà CPU không truy cập trực tiếp, dùng để lưu dữ liệu lâu dài", ["Bộ nhớ mà CPU truy cập trực tiếp", "Bộ nhớ rất nhanh bên trong CPU", "Bộ nhớ bị mất khi tắt nguồn"]],
  ["Vì sao cần bộ nhớ phụ?", "Để giữ dữ liệu, tệp và chương trình lâu dài khi tắt nguồn", ["Để chạy chu trình FDE", "Để chứa lệnh tiếp theo", "Để làm RAM khả biến"]],
  ["Trước khi CPU dùng được một chương trình lưu trên bộ nhớ phụ, nó phải được…", "nạp vào RAM", ["in ra", "mã hóa", "nén"]],
  ["Cái nào sau đây là bộ nhớ phụ?", "Ổ thể rắn (SSD)", ["RAM", "Cache", "Thanh ghi"], { t: ["SSD", "ổ thể rắn"] }]
],

"4.10b": [
  ["Loại lưu trữ nào dùng các đĩa chia thành rãnh và cung?", "Từ (ổ đĩa cứng)", ["Quang", "Thể rắn", "ROM"]],
  ["Dữ liệu được ghi vào ổ đĩa cứng bằng cách nào?", "Một nam châm điện trong đầu đọc/ghi từ hóa những vùng rất nhỏ của đĩa", ["Tia laser đốt ra các hố", "Các electron bị giữ trong cổng nổi", "Mực được phun lên"]],
  ["Loại lưu trữ nào dùng tia laser để đọc các hố và mặt phẳng?", "Quang", ["Từ", "Thể rắn", "Đám mây"], { t: ["quang", "optical"] }],
  ["Cái nào sau đây là lưu trữ quang?", "Đĩa Blu-ray", ["SSD", "Thẻ SD", "Ổ đĩa cứng"], { t: ["blu-ray", "CD", "DVD"] }],
  ["Vì sao đĩa Blu-ray chứa được nhiều dữ liệu hơn DVD?", "Nó dùng laser xanh tím có bước sóng ngắn hơn, nên các hố có thể nhỏ hơn", ["Nó quay nhanh hơn", "Nó lớn hơn", "Nó dùng nam châm"]],
  ["Lưu trữ thể rắn (flash) dùng công nghệ nào?", "Bộ nhớ flash NAND hoặc NOR", ["Đĩa từ", "Hố và mặt phẳng", "Hộp mực"]],
  ["Trong lưu trữ thể rắn, cái gì quyết định một ô nhớ lưu 1 hay 0?", "Các transistor đóng vai trò cổng điều khiển và cổng nổi, giữ các electron", ["Một nam châm quay", "Một tia laser", "Một đầu đọc/ghi"]],
  ["Loại lưu trữ nào không có bộ phận chuyển động?", "Thể rắn", ["Từ", "Quang", "Tất cả"], { t: ["SSD", "thể rắn", "solid state"] }],
  ["Cái nào sau đây là lưu trữ thể rắn?", "USB flash", ["DVD", "Ổ đĩa cứng", "CD-R"]],
  ["Vì sao SSD là lựa chọn tốt cho laptop?", "Không có bộ phận chuyển động nên bền, nhanh, nhẹ và ít tốn điện", ["Nó rẻ nhất tính theo mỗi GiB", "Nó dễ bị trầy xước", "Nó cần tia laser"]],
  ["Vì sao một công ty có thể chọn ổ đĩa cứng cho một máy chủ sao lưu lớn?", "Chúng cho dung lượng lớn với chi phí mỗi GiB thấp", ["Chúng không có bộ phận chuyển động", "Chúng là loại lưu trữ nhanh nhất", "Chúng là loại lưu trữ nhẹ nhất"]],
  ["Đâu là một nhược điểm của lưu trữ quang?", "Dung lượng thấp và dễ bị trầy xước", ["Nó khả biến", "Mỗi đĩa rất đắt", "Nó không thể mang theo"]],
  ["Đâu là một nhược điểm của ổ đĩa cứng?", "Nó có bộ phận chuyển động có thể hỏng nếu bị rơi", ["Nó khả biến", "Nó chứa rất ít dữ liệu", "Nó không ghi lại được"]],
  ["Đâu là một nhược điểm của lưu trữ thể rắn?", "Chi phí mỗi GiB cao hơn và số lần ghi có hạn", ["Nó rất chậm", "Nó rất ồn", "Nó mất dữ liệu khi không có điện"]],
  ["Máy ảnh kỹ thuật số thường lưu ảnh trên…", "thẻ SD (thể rắn)", ["ổ cứng", "đĩa DVD", "ROM"]],
  ["Loại lưu trữ nào phù hợp nhất để bán một bộ phim ở cửa hàng?", "Quang (Blu-ray)", ["Từ (HDD)", "RAM", "Cache"]]
],

"4.11a": [
  ["Lưu trữ đám mây (cloud storage) là gì?", "Lưu dữ liệu trên các máy chủ từ xa được truy cập qua internet", ["Lưu dữ liệu trên ổ cứng của chính bạn", "Lưu dữ liệu trong RAM", "Lưu dữ liệu trên đĩa CD"]],
  ["Lưu trữ đám mây có cần phần cứng vật lý không?", "Có — dữ liệu được lưu trên các máy chủ vật lý trong trung tâm dữ liệu", ["Không — nó được lưu trong không khí", "Không — nó được lưu trong RAM của người dùng", "Chỉ với ảnh"]],
  ["Lưu trữ 'cục bộ' (local) là gì?", "Lưu trên chính thiết bị của người dùng, ví dụ ổ cứng hoặc USB", ["Lưu trên một máy chủ từ xa", "Lưu trong một trung tâm dữ liệu", "Lưu trong cache"]],
  ["Cái nào sau đây là ví dụ về dịch vụ lưu trữ đám mây?", "Google Drive", ["Một USB flash", "Một SSD", "Một đĩa Blu-ray"]],
  ["Vì sao các nhà cung cấp đám mây thường sao chép dữ liệu sang nhiều máy chủ?", "Để dữ liệu không bị mất nếu một máy chủ hỏng", ["Để làm tệp lớn hơn", "Để làm chậm tin tặc", "Để dùng nhiều điện hơn"]],
  ["Một công ty dùng máy chủ riêng của mình để lưu dữ liệu chỉ cho nhân viên. Đây là…", "đám mây riêng (private cloud)", ["đám mây công cộng", "ổ cứng cục bộ", "đám mây quang"], { t: ["đám mây riêng", "private", "private cloud"] }]
],

"4.11b": [
  ["Một trường học muốn học sinh mở bài tập về nhà từ nhà và ở trường. Loại lưu trữ nào phù hợp nhất?", "Lưu trữ đám mây", ["Chỉ ổ cứng cục bộ của trường", "Một đĩa DVD", "ROM"]],
  ["Vì sao một bệnh viện nên thận trọng khi dùng đám mây công cộng để lưu hồ sơ bệnh nhân?", "Dữ liệu mang tính riêng tư và do bên thứ ba lưu giữ, nên có rủi ro về bảo mật và quyền riêng tư", ["Đám mây không lưu được văn bản", "Đám mây luôn chậm hơn giấy", "Bệnh viện không có internet"]],
  ["Đâu là một ưu điểm của lưu trữ đám mây đối với một doanh nghiệp đang phát triển nhanh?", "Có thể dễ dàng tăng dung lượng mà không cần mua thêm phần cứng mới", ["Nó không bao giờ cần internet", "Nó luôn miễn phí", "Nó không thể bị tấn công"]],
  ["Đâu là một ưu điểm của lưu trữ đám mây so với lưu trữ cục bộ?", "Có thể truy cập tệp từ mọi thiết bị, ở bất cứ đâu, miễn là có kết nối internet", ["Nó hoạt động mà không cần kết nối internet", "Nó luôn miễn phí", "Nó không bao giờ bị tấn công"]],
  ["Đâu là một nhược điểm của lưu trữ đám mây so với lưu trữ cục bộ?", "Cần có kết nối internet để truy cập các tệp", ["Nó không lưu được ảnh", "Tệp chỉ mở được trên một thiết bị", "Nó cần ổ đĩa CD"]],
  ["Vì sao lưu trữ đám mây hữu ích cho các dự án nhóm?", "Nhiều người có thể dễ dàng chia sẻ và chỉnh sửa tệp", ["Mỗi người cần một bản sao trên USB", "Chỉ một người mở được", "Nó xóa các phiên bản cũ"]],
  ["Điều gì xảy ra với các tệp trong lưu trữ đám mây nếu laptop của bạn bị đánh cắp?", "Chúng vẫn an toàn trên máy chủ của nhà cung cấp", ["Chúng mất vĩnh viễn", "Chúng cũng bị đánh cắp", "Chúng được chuyển vào ROM"]],
  ["Đâu là một mối lo ngại về bảo mật của lưu trữ đám mây?", "Dữ liệu của bạn do bên thứ ba lưu giữ và có thể bị tấn công hoặc bị truy cập trái phép", ["Tệp quá nhỏ", "Nó dùng quá nhiều RAM", "Nó không thể được mã hóa"]],
  ["Đâu là một nhược điểm liên quan đến chi phí của lưu trữ đám mây?", "Bạn có thể phải trả phí thuê bao cho dung lượng lớn hơn", ["Bạn phải mua máy tính mới", "Bạn phải trả tiền cho mỗi lần gõ phím", "Nó cần cáp đặc biệt"]],
  ["Đâu là một ưu điểm của lưu trữ cục bộ so với lưu trữ đám mây?", "Có thể mở tệp mà không cần kết nối internet", ["Có thể truy cập tệp từ bất cứ đâu", "Tệp được nhà cung cấp tự động sao lưu", "Dễ chia sẻ tệp với người khác hơn"]],
  ["Một học sinh có kết nối internet chậm và cần chỉnh sửa các tệp video lớn. Loại lưu trữ nào tốt hơn?", "Lưu trữ cục bộ", ["Lưu trữ đám mây", "ROM", "Cache"]],
  ["Điều gì có thể xảy ra nếu nhà cung cấp đám mây gặp sự cố kỹ thuật hoặc phá sản?", "Người dùng có thể mất quyền truy cập vào dữ liệu của mình", ["Máy tính của người dùng ngừng hoạt động", "Dữ liệu chuyển vào ROM của người dùng", "Không có gì — dữ liệu luôn sẵn sàng"]]
]
});
