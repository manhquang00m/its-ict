window.VI = window.VI || { topics: {}, objectives: {}, bank: {}, glossary: {}, ui: {} };
Object.assign(window.VI.objectives, {
  "5.1a": "Mô tả sự khác nhau giữa phần mềm hệ thống và phần mềm ứng dụng, và nêu ví dụ cho mỗi loại. (Syllabus 4.1.1)",
  "5.1b": "Mô tả vai trò và cách hoạt động của ngắt (interrupt): ngắt được tạo ra như thế nào và được xử lý bằng chương trình phục vụ ngắt (ISR). (Syllabus 4.1.4)",
  "5.2a": "Mô tả vai trò và các chức năng cơ bản của hệ điều hành. (Syllabus 4.1.2)",
  "5.2b": "Hiểu vì sao cần có phần cứng, phần sụn (firmware) và hệ điều hành để chạy phần mềm ứng dụng. (Syllabus 4.1.3)",
  "5.3a": "Giải thích ngôn ngữ bậc cao và ngôn ngữ bậc thấp, cùng ưu điểm và nhược điểm của từng loại. (Syllabus 4.2.1)",
  "5.3b": "Hiểu rằng hợp ngữ (assembly language) là ngôn ngữ bậc thấp dùng các mnemonic và được trình hợp dịch (assembler) dịch sang mã máy. (Syllabus 4.2.2)",
  "5.3c": "Mô tả cách trình biên dịch và trình thông dịch dịch mã và báo lỗi, cùng ưu điểm và nhược điểm của chúng. (Syllabus 4.2.3–4.2.4)",
  "5.4a": "Giải thích vai trò của IDE trong việc viết mã chương trình và các chức năng thường gặp của nó. (Syllabus 4.2.5)",
  "6.1a": "Nhận biết và sử dụng các ký hiệu chuẩn của các cổng logic NOT, AND, OR, NAND, NOR và XOR. (Syllabus 10.1)",
  "6.1b": "Định nghĩa chức năng của từng cổng logic và đầu ra nhị phân tạo ra từ mọi tổ hợp đầu vào có thể có. (Syllabus 10.2)",
  "6.2a": "Hoàn thành bảng chân trị từ một đề bài mô tả bằng lời, một biểu thức logic hoặc một mạch logic. (Syllabus 10.3b)",
  "6.2b": "Viết biểu thức logic từ một đề bài mô tả bằng lời, một mạch logic hoặc một bảng chân trị. (Syllabus 10.3c)",
  "6.2c": "Dùng các cổng logic để tạo mạch logic từ một đề bài mô tả bằng lời, một biểu thức logic hoặc một bảng chân trị (tối đa ba đầu vào). (Syllabus 10.3a)"
});

Object.assign(window.VI.topics, {
"5.1": {
  title: "Các loại phần mềm và ngắt",
  summary: "Phần mềm hệ thống giúp máy tính vận hành; phần mềm ứng dụng giúp người dùng làm việc. Ngắt (interrupt) thu hút sự chú ý của CPU.",
  reading: `
<h4>Phần mềm hệ thống (system software) và phần mềm ứng dụng (application software)</h4>
<table class="tbl"><tr><th></th><th>Phần mềm hệ thống</th><th>Phần mềm ứng dụng</th></tr>
<tr><td>Mục đích</td><td>Cung cấp các <b>dịch vụ mà máy tính cần</b> — nó điều khiển và quản lý phần cứng, đồng thời cho phép các phần mềm khác chạy.</td><td>Cung cấp các <b>dịch vụ mà người dùng cần</b> — nó giúp người dùng thực hiện một công việc.</td></tr>
<tr><td>Ví dụ</td><td><b>Hệ điều hành</b> (Windows, macOS, Android, iOS, Linux), <b>phần mềm tiện ích</b> (diệt virus, chống phân mảnh, sao lưu, nén, dọn dẹp đĩa), trình điều khiển thiết bị, trình biên dịch</td><td>Trình soạn thảo văn bản, bảng tính, trình duyệt web, phần mềm chỉnh sửa ảnh, trò chơi, trình phát video, cơ sở dữ liệu</td></tr></table>
<h4>Phần mềm tiện ích (utility software)</h4>
<p><b>Phần mềm tiện ích</b> là phần mềm hệ thống giúp <b>bảo trì và bảo vệ</b> máy tính:</p>
<ul><li><b>Diệt virus (antivirus)</b> – quét tệp để tìm virus rồi cách ly hoặc xóa chúng.</li>
<li><b>Chống phân mảnh (defragmentation)</b> – sắp xếp lại các khối tệp trên ổ cứng để mỗi tệp được lưu liền nhau, giúp truy cập nhanh hơn (SSD không cần).</li>
<li><b>Sao lưu (backup)</b> – sao chép tệp để có thể khôi phục khi bị mất.</li>
<li><b>Nén</b> – làm tệp nhỏ lại (ví dụ ZIP).</li>
<li><b>Dọn dẹp / định dạng đĩa</b>, <b>trình bảo vệ màn hình</b>, <b>bảo mật</b> (tường lửa) và <b>trình điều khiển thiết bị</b>.</li></ul>

<h4>Ngắt (interrupt)</h4>
<p><b>Ngắt</b> là một <b>tín hiệu</b> gửi đến CPU từ một thiết bị hoặc một chương trình, báo rằng có việc <b>cần được chú ý</b>. Ngắt giúp máy tính phản ứng nhanh với các sự kiện và cho phép chạy nhiều tác vụ cùng lúc.</p>
<table class="tbl"><tr><th>Ngắt phần cứng</th><th>Ngắt phần mềm</th></tr>
<tr><td>Nhấn một phím trên bàn phím · di chuyển hoặc nhấp chuột · máy in hết giấy hoặc hết mực · cắm một thiết bị vào · mất điện</td><td>Chia cho số không · hai tiến trình cùng truy cập một ô nhớ · chương trình yêu cầu nhập/xuất · một ứng dụng bị treo</td></tr></table>
<h4>Cách xử lý một ngắt</h4>
<ol><li>Một thiết bị hoặc chương trình <b>tạo ra</b> tín hiệu ngắt và gửi đến CPU (qua bus điều khiển). Mỗi ngắt có một <b>mức ưu tiên</b>.</li>
<li>Cuối mỗi chu kỳ nạp–giải mã–thực thi, CPU <b>kiểm tra xem có ngắt nào không</b>.</li>
<li>Nếu có ngắt có <b>mức ưu tiên cao hơn</b> tác vụ hiện tại, CPU <b>lưu trạng thái</b> của tác vụ đó (nội dung các thanh ghi) — thường vào một ngăn xếp (stack).</li>
<li>CPU chạy <b>chương trình phục vụ ngắt (interrupt service routine, ISR)</b> — đoạn mã xử lý ngắt đó (ví dụ đọc phím vừa được nhấn, hiển thị thông báo lỗi).</li>
<li>Khi ISR xong, trạng thái đã lưu được <b>khôi phục</b> và tác vụ ban đầu <b>tiếp tục</b> từ chỗ đã dừng (trừ khi ngắt làm nó kết thúc, ví dụ khi chương trình bị treo).</li></ol>
<div class="tip"><b>Kết quả của một ngắt:</b> tác vụ hiện tại bị tạm dừng và ngắt được xử lý; sau đó tác vụ tiếp tục chạy, hoặc (với một số ngắt phần mềm như chia cho số không) chương trình hiện thông báo lỗi hoặc bị dừng.</div>
<div class="keywords"><b>Từ khóa:</b> phần mềm hệ thống (system software), phần mềm ứng dụng (application software), hệ điều hành (operating system), phần mềm tiện ích (utility software), diệt virus (antivirus), chống phân mảnh (defragmentation), sao lưu (backup), trình điều khiển thiết bị (device driver), ngắt (interrupt), ngắt phần cứng, ngắt phần mềm, mức ưu tiên (priority), chương trình phục vụ ngắt (ISR), lưu trạng thái, khôi phục</div>`
},
"5.2": {
  title: "Phần cứng, phần sụn và hệ điều hành",
  summary: "Hệ điều hành làm gì, và phần cứng, phần sụn (firmware) và hệ điều hành phối hợp như thế nào để ứng dụng chạy được.",
  reading: `
<h4>Hệ điều hành (operating system, OS)</h4>
<p><b>Hệ điều hành</b> là phần mềm hệ thống quản lý phần cứng và phần mềm của máy tính, đồng thời cung cấp giao diện cho người dùng. Các chức năng chính của nó là:</p>
<table class="tbl"><tr><th>Chức năng</th><th>Ý nghĩa</th></tr>
<tr><td><b>Quản lý tệp</b></td><td>Tạo, lưu, mở, sao chép, di chuyển, đổi tên và xóa tệp và thư mục; tổ chức bộ nhớ lưu trữ.</td></tr>
<tr><td><b>Xử lý ngắt</b></td><td>Phản hồi các tín hiệu ngắt và chạy đúng chương trình phục vụ ngắt.</td></tr>
<tr><td><b>Cung cấp giao diện</b></td><td>Cách để người dùng giao tiếp với máy tính: <b>GUI</b> (cửa sổ, biểu tượng, menu, con trỏ) hoặc <b>CLI</b> (gõ lệnh).</td></tr>
<tr><td><b>Quản lý thiết bị ngoại vi và trình điều khiển</b></td><td>Giao tiếp với các thiết bị nhập/xuất bằng <b>trình điều khiển thiết bị (device driver)</b> — phần mềm chuyển lệnh của hệ điều hành thành lệnh phù hợp với một thiết bị cụ thể; quản lý hàng đợi in (bộ đệm).</td></tr>
<tr><td><b>Quản lý bộ nhớ</b></td><td>Quyết định chương trình và dữ liệu nào được giữ trong RAM, cấp phát bộ nhớ cho từng tiến trình để chúng không ghi đè lên nhau, và dùng bộ nhớ ảo khi RAM đầy.</td></tr>
<tr><td><b>Quản lý đa nhiệm</b></td><td>Cho phép nhiều chương trình chạy "cùng một lúc" bằng cách chia sẻ thời gian CPU giữa các tiến trình (lập lịch) và xử lý mức ưu tiên của chúng.</td></tr>
<tr><td><b>Cung cấp nền tảng để chạy ứng dụng</b></td><td>Ứng dụng dùng các dịch vụ của hệ điều hành (để lưu tệp, in, truy cập bộ nhớ) thay vì điều khiển trực tiếp phần cứng.</td></tr>
<tr><td><b>Cung cấp bảo mật hệ thống</b></td><td>Tường lửa, tích hợp diệt virus, mã hóa, cập nhật bảo mật, thiết lập quyền riêng tư.</td></tr>
<tr><td><b>Quản lý tài khoản người dùng</b></td><td>Mỗi người dùng có tên đăng nhập, mật khẩu, tệp và quyền truy cập riêng.</td></tr></table>
<h4>GUI và CLI</h4>
<p><b>GUI</b> (giao diện đồ họa) dễ học và không cần nhớ lệnh, nhưng tốn nhiều bộ nhớ và sức xử lý hơn. <b>CLI</b> (giao diện dòng lệnh) cần học và gõ lệnh thật chính xác, nhưng cho người dùng quyền điều khiển trực tiếp hơn và tốn ít bộ nhớ hơn.</p>

<h4>Một ứng dụng chạy được như thế nào</h4>
<p>Phần mềm được xếp thành các lớp — mỗi lớp chạy trên lớp bên dưới nó:</p>
<svg viewBox="0 0 520 210" class="diagram" role="img" aria-label="Các lớp: ứng dụng chạy trên hệ điều hành, hệ điều hành chạy trên phần sụn, phần sụn chạy trên phần cứng">
${[["Phần mềm ứng dụng","ví dụ trình duyệt web, trò chơi",14,"#fff8e8"],["Hệ điều hành","quản lý phần cứng và cung cấp dịch vụ",62,"#eaf0fa"],["Phần sụn (bootloader / BIOS)","lưu trong ROM — khởi động máy tính",110,"#fdf4dc"],["Phần cứng","CPU, RAM, bộ nhớ lưu trữ, thiết bị",158,"#e2f6ec"]].map(([t,d,y,c])=>`<rect x="40" y="${y}" width="440" height="42" rx="8" fill="${c}" stroke="#16213a" stroke-width="2"/><text x="60" y="${y+20}" font-size="14" font-weight="800" fill="#16213a" font-family="Nunito">${t}</text><text x="60" y="${y+35}" font-size="11.5" fill="#4c5873" font-family="Nunito">${d}</text>`).join("")}
</svg>
<ul><li><b>Ứng dụng chạy trên hệ điều hành</b> — chúng nhờ hệ điều hành làm những việc như lưu tệp hoặc in.</li>
<li><b>Hệ điều hành chạy trên phần sụn</b>.</li>
<li><b>Bootloader (phần sụn) chạy trên phần cứng</b>.</li></ul>
<p><b>Phần sụn (firmware)</b> là phần mềm được lưu vĩnh viễn trong <b>ROM</b> (hoặc bộ nhớ flash) và điều khiển phần cứng ở mức thấp. Khi bật máy, <b>bootloader</b> trong ROM chạy đầu tiên: nó kiểm tra phần cứng (tự kiểm tra khi bật nguồn) rồi <b>nạp hệ điều hành</b> từ bộ nhớ phụ vào RAM. Sau đó hệ điều hành mới có thể chạy các ứng dụng.</p>
<div class="keywords"><b>Từ khóa:</b> hệ điều hành (operating system), quản lý tệp, xử lý ngắt, giao diện (interface), GUI, CLI, thiết bị ngoại vi (peripheral), trình điều khiển thiết bị (device driver), quản lý bộ nhớ, đa nhiệm (multitasking), nền tảng (platform), bảo mật, tài khoản người dùng, phần sụn (firmware), bootloader, BIOS, ROM</div>`
},
"5.3": {
  title: "Các loại ngôn ngữ lập trình và trình dịch",
  summary: "Ngôn ngữ bậc cao và bậc thấp, hợp ngữ và trình hợp dịch, trình biên dịch và trình thông dịch.",
  reading: `
<h4>Ngôn ngữ bậc cao (high-level) và bậc thấp (low-level)</h4>
<table class="tbl"><tr><th></th><th>Ngôn ngữ bậc cao</th><th>Ngôn ngữ bậc thấp</th></tr>
<tr><td>Là gì</td><td>Gần với <b>ngôn ngữ con người</b>, ví dụ Python, Java, Visual Basic, C++</td><td>Gần với <b>mã máy</b>: chính <b>mã máy</b> (nhị phân) và <b>hợp ngữ (assembly language)</b></td></tr>
<tr><td>Độ dễ đọc và viết</td><td><b>Dễ</b> đọc, viết và hiểu</td><td><b>Khó</b> đọc và viết</td></tr>
<tr><td>Gỡ lỗi</td><td><b>Dễ hơn</b> trong việc tìm và sửa lỗi</td><td><b>Khó hơn</b> để gỡ lỗi</td></tr>
<tr><td>Không phụ thuộc máy</td><td><b>Không phụ thuộc máy</b> (có tính khả chuyển) — sau khi dịch có thể chạy trên nhiều loại máy tính</td><td><b>Phụ thuộc máy</b> — được viết cho một loại CPU / một tập lệnh</td></tr>
<tr><td>Điều khiển phần cứng</td><td>Không thao tác trực tiếp được với phần cứng</td><td><b>Thao tác trực tiếp với phần cứng</b> (ví dụ các ô nhớ và thanh ghi cụ thể)</td></tr>
<tr><td>Khác</td><td>Một câu lệnh = nhiều lệnh mã máy; cần trình biên dịch hoặc trình thông dịch</td><td>Có thể chạy nhanh hơn và dùng ít bộ nhớ hơn; phù hợp cho trình điều khiển thiết bị và hệ thống nhúng</td></tr></table>
<h4>Hợp ngữ (assembly language)</h4>
<p><b>Hợp ngữ</b> là một <b>ngôn ngữ bậc thấp</b> dùng các <b>mnemonic</b> — những mã ngắn dễ nhớ hơn nhị phân, chẳng hạn <code>LDA</code> (nạp), <code>ADD</code>, <code>STO</code> (lưu), <code>JMP</code> (nhảy). Mỗi mnemonic thường tương ứng với một lệnh mã máy. Cần có <b>trình hợp dịch (assembler)</b> để dịch chương trình hợp ngữ sang <b>mã máy</b>.</p>
<pre class="code">LDA 20     ; load the number at address 20 into the accumulator
ADD 21     ; add the number at address 21
STO 22     ; store the answer at address 22</pre>

<h4>Trình dịch: trình biên dịch (compiler) và trình thông dịch (interpreter)</h4>
<p>Máy tính chỉ chạy được <b>mã máy</b>, nên mã bậc cao phải được dịch.</p>
<table class="tbl"><tr><th></th><th>Trình biên dịch</th><th>Trình thông dịch</th></tr>
<tr><td>Cách dịch</td><td>Dịch <b>toàn bộ chương trình cùng một lúc</b>, trước khi chạy, và tạo ra một <b>tệp thực thi</b> (mã máy)</td><td>Dịch và thực thi mã <b>từng dòng một</b></td></tr>
<tr><td>Lỗi</td><td>Đưa ra <b>báo cáo lỗi cho toàn bộ mã</b> sau khi dịch; nếu có lỗi thì không tạo ra tệp thực thi</td><td><b>Dừng thực thi khi gặp lỗi</b> và báo lỗi; có thể sửa dòng đó rồi chạy tiếp</td></tr>
<tr><td>Chạy lại chương trình</td><td>Tệp thực thi chạy <b>nhanh</b> mà không cần dịch lại; không cần mã nguồn (và mã nguồn không bị chia sẻ)</td><td>Phải được dịch lại <b>mỗi lần</b> chạy — chậm hơn; cần có trình thông dịch và mã nguồn</td></tr>
<tr><td>Dùng tốt nhất cho</td><td>Dịch chương trình <b>hoàn chỉnh</b> để đưa cho người dùng</td><td><b>Phát triển</b> và gỡ lỗi chương trình</td></tr></table>
<div class="tip"><b>Tóm tắt:</b> trình thông dịch chủ yếu dùng <b>khi đang phát triển</b> chương trình (dễ gỡ lỗi từng dòng); trình biên dịch dùng để dịch chương trình <b>hoàn chỉnh</b> (nhanh, không chia sẻ mã nguồn).</div>
<div class="keywords"><b>Từ khóa:</b> ngôn ngữ bậc cao (high-level language), ngôn ngữ bậc thấp (low-level language), mã máy (machine code), hợp ngữ (assembly language), mnemonic, trình hợp dịch (assembler), không phụ thuộc máy (machine independent), khả chuyển (portable), trình dịch (translator), trình biên dịch (compiler), trình thông dịch (interpreter), tệp thực thi (executable file), báo cáo lỗi, mã nguồn (source code)</div>`
},
"5.4": {
  title: "Vai trò của IDE trong việc viết mã chương trình",
  summary: "Môi trường phát triển tích hợp gom các công cụ mà lập trình viên cần vào một nơi.",
  reading: `
<h4>IDE là gì?</h4>
<p><b>Môi trường phát triển tích hợp (integrated development environment, IDE)</b> là phần mềm cung cấp tất cả các <b>công cụ mà lập trình viên cần để viết, kiểm thử và gỡ lỗi mã</b> ở cùng một nơi. Ví dụ: IDLE và Thonny (Python), Visual Studio, Eclipse, PyCharm, VS Code.</p>
<h4>Các chức năng thường gặp của IDE</h4>
<table class="tbl"><tr><th>Chức năng</th><th>Làm gì</th></tr>
<tr><td><b>Trình soạn thảo mã (code editor)</b></td><td>Trình soạn thảo văn bản để viết và sửa mã chương trình, thường có số dòng và <b>tô màu cú pháp (syntax highlighting)</b> (từ khóa có màu).</td></tr>
<tr><td><b>Môi trường chạy (run-time environment)</b></td><td>Cho phép <b>chạy (thực thi) và kiểm thử</b> chương trình ngay trong IDE, hiển thị kết quả, và cho lập trình viên quan sát chương trình khi nó đang chạy.</td></tr>
<tr><td><b>Trình dịch (translator)</b></td><td>Có sẵn <b>trình biên dịch và/hoặc trình thông dịch</b> để mã được dịch sang mã máy.</td></tr>
<tr><td><b>Chẩn đoán lỗi (error diagnostics)</b></td><td>Phát hiện lỗi, chỉ ra lỗi nằm <b>ở đâu</b> (ví dụ số dòng, gạch chân) và giải thích lỗi; có các công cụ gỡ lỗi như <b>điểm dừng (breakpoint)</b>, <b>chạy từng bước (stepping)</b> qua từng dòng mã và <b>theo dõi biến (watching variables)</b>.</td></tr>
<tr><td><b>Tự động hoàn thành (auto-completion)</b></td><td>Gợi ý cách viết tiếp một từ khóa, biến hoặc tên hàm khi đang gõ, giúp tiết kiệm thời gian và giảm lỗi chính tả.</td></tr>
<tr><td><b>Tự động sửa lỗi (auto-correction)</b></td><td>Tự động sửa các lỗi thường gặp như gõ sai từ khóa hoặc thiếu dấu ngoặc.</td></tr>
<tr><td><b>Định dạng mã đẹp (prettyprint)</b></td><td>Định dạng mã để dễ đọc hơn: <b>tô màu</b> từ khóa, chú thích và chuỗi, và tự động <b>thụt lề</b>.</td></tr></table>
<div class="example"><b>Vì sao nên dùng IDE?</b> Lập trình viên viết mã nhanh hơn và ít sai sót hơn, tìm và sửa lỗi dễ hơn, và kiểm thử chương trình mà không cần rời khỏi trình soạn thảo — mọi thứ được tích hợp ở một nơi.</div>
<div class="tip"><b>Mẹo làm bài thi:</b> nếu đề yêu cầu "mô tả hai chức năng của IDE", hãy nêu tên chức năng <b>và</b> nói nó giúp ích thế nào: "Auto-completion gợi ý từ khóa khi lập trình viên đang gõ, giúp viết mã nhanh hơn và giảm lỗi chính tả."</div>
<div class="keywords"><b>Từ khóa:</b> môi trường phát triển tích hợp (IDE), trình soạn thảo mã (code editor), tô màu cú pháp (syntax highlighting), môi trường chạy (run-time environment), trình dịch (translator), chẩn đoán lỗi (error diagnostics), điểm dừng (breakpoint), chạy từng bước (stepping), tự động hoàn thành (auto-completion), tự động sửa lỗi (auto-correction), prettyprint, thụt lề (indentation)</div>`
},
"6.1": {
  title: "Logic Boole: sáu cổng logic",
  summary: "NOT, AND, OR, NAND, NOR và XOR — ký hiệu, chức năng và bảng chân trị của chúng.",
  reading: `
<h4>Cổng logic (logic gate)</h4>
<p><b>Cổng logic</b> là một linh kiện điện tử nhận một hoặc nhiều <b>đầu vào nhị phân</b> (0 hoặc 1) và cho ra <b>một đầu ra nhị phân</b>. Máy tính dùng hàng triệu cổng logic để xử lý dữ liệu. <b>NOT</b> chỉ có <b>một đầu vào</b>; tất cả các cổng còn lại có <b>hai đầu vào</b>.</p>
<p><b>Bảng chân trị (truth table)</b> cho biết đầu ra ứng với <b>mọi tổ hợp</b> đầu vào có thể có. Với 2 đầu vào có 4 hàng; với 3 đầu vào có 8 hàng.</p>
<div class="gate-grid">
${[["NOT","Đầu ra là giá trị đảo (ngược) của đầu vào.","X = NOT A",{op:"NOT",a:{in:"A"}}],
["AND","Đầu ra bằng 1 chỉ khi <b>cả hai</b> đầu vào bằng 1.","X = A AND B",{op:"AND",a:{in:"A"},b:{in:"B"}}],
["OR","Đầu ra bằng 1 nếu <b>một trong hai hoặc cả hai</b> đầu vào bằng 1.","X = A OR B",{op:"OR",a:{in:"A"},b:{in:"B"}}],
["NAND","NOT AND: đầu ra bằng 0 chỉ khi cả hai đầu vào bằng 1.","X = A NAND B",{op:"NAND",a:{in:"A"},b:{in:"B"}}],
["NOR","NOT OR: đầu ra bằng 1 chỉ khi cả hai đầu vào bằng 0.","X = A NOR B",{op:"NOR",a:{in:"A"},b:{in:"B"}}],
["XOR","OR loại trừ (EOR): đầu ra bằng 1 nếu hai đầu vào <b>khác nhau</b>.","X = A XOR B",{op:"XOR",a:{in:"A"},b:{in:"B"}}]
].map(([n,d,e,t])=>`<div class="gate-card"><div class="gate-name">${n}</div>${window.LOGIC.gateSVG(n,{caption:false,w:170})}<p>${d}</p><code>${e}</code>${window.LOGIC.truthTableHTML(t)}</div>`).join("")}
</div>
<div class="tip"><b>Mẹo nhớ nhanh:</b> NAND là ngược của AND, NOR là ngược của OR — hãy tìm vòng tròn nhỏ (&quot;bong bóng NOT&quot;) ở đầu ra. XOR có thêm một đường cong ở phía sau và có nghĩa là "cái này hoặc cái kia, nhưng không phải cả hai".</div>
<h4>Logic trong lời nói hằng ngày</h4>
<ul><li>"Chuông báo động kêu nếu cửa đang mở <b>VÀ</b> hệ thống đang bật." → AND</li>
<li>"Đèn sáng nếu công tắc A <b>HOẶC</b> công tắc B được nhấn." → OR</li>
<li>"Quạt chạy nếu cửa sổ <b>KHÔNG</b> mở." → NOT</li>
<li>"Chuông reo nếu <b>đúng một</b> trong hai nút được nhấn." → XOR</li></ul>
<div class="keywords"><b>Từ khóa:</b> cổng logic (logic gate), đầu vào nhị phân, đầu ra (output), NOT, AND, OR, NAND, NOR, XOR (EOR), bảng chân trị (truth table), giá trị đảo (inverse)</div>`
},
"6.2": {
  title: "Bảng chân trị, mạch logic và biểu thức logic",
  summary: "Chuyển qua lại giữa đề bài bằng lời, biểu thức logic, mạch logic và bảng chân trị (tối đa ba đầu vào).",
  reading: `
<p>Trong bài thi, bạn phải biết chuyển qua lại giữa <b>bốn</b> cách mô tả cùng một logic: một <b>đề bài bằng lời</b>, một <b>biểu thức logic</b>, một <b>mạch logic (logic circuit)</b> và một <b>bảng chân trị</b>.</p>
<h4>1. Lập bảng chân trị từ biểu thức logic</h4>
<p>Ví dụ: <code>X = (A AND B) OR NOT C</code></p>
<ol><li>Liệt kê mọi tổ hợp đầu vào theo thứ tự nhị phân: 000, 001, 010 … 111 (8 hàng cho 3 đầu vào).</li>
<li>Thêm các <b>cột trung gian</b> cho từng phần: A AND B, rồi NOT C.</li>
<li>Kết hợp các cột trung gian để được X.</li></ol>
<table class="tbl center tt"><tr><th>A</th><th>B</th><th>C</th><th>A AND B</th><th>NOT C</th><th>X</th></tr>
${[0,1,2,3,4,5,6,7].map(m=>{const a=m>>2&1,b=m>>1&1,c=m&1,p=a&b,q=c?0:1;return `<tr><td>${a}</td><td>${b}</td><td>${c}</td><td>${p}</td><td>${q}</td><td><b>${p|q}</b></td></tr>`}).join("")}</table>

<h4>2. Vẽ mạch logic từ biểu thức logic</h4>
<p>Vẽ một cổng cho mỗi phép toán. Làm việc từ <b>đầu vào ở bên trái</b> sang <b>đầu ra ở bên phải</b>. Dấu ngoặc cho biết cổng nào làm trước. Mạch phải được vẽ <b>không rút gọn</b>.</p>
${window.LOGIC.circuitSVG({op:"OR",a:{op:"AND",a:{in:"A"},b:{in:"B"}},b:{op:"NOT",a:{in:"C"}}})}

<h4>3. Viết biểu thức logic từ mạch logic</h4>
<p>Bắt đầu từ các <b>đầu vào</b>. Viết ra những gì đi ra khỏi từng cổng, rồi đưa vào cổng kế tiếp, dùng dấu ngoặc. Với mạch dưới đây:</p>
${window.LOGIC.circuitSVG({op:"NAND",a:{op:"XOR",a:{in:"A"},b:{in:"B"}},b:{op:"NOR",a:{in:"B"},b:{in:"C"}}})}
<p>X = <code>(A XOR B) NAND (B NOR C)</code></p>

<h4>4. Từ đề bài bằng lời</h4>
<div class="example"><b>Đề bài:</b> Một máy bơm nước (X) được bật nếu bể <b>không</b> đầy (T = 0) <b>và</b> bộ hẹn giờ đang bật (M = 1) <b>hoặc</b> nút bấm thủ công được nhấn (B = 1).<br>
<b>Biểu thức:</b> <code>X = NOT T AND (M OR B)</code></div>
<p>Mẹo: các từ như "và", "hoặc", "không" thường tương ứng trực tiếp với các cổng. Viết điều kiện cho mỗi đầu vào dưới dạng 1 hoặc 0 ("bể đầy" = 1, nên "bể không đầy" = NOT T).</p>

<h4>5. Viết biểu thức logic từ bảng chân trị</h4>
<p>Tìm mọi hàng có đầu ra bằng <b>1</b>. Với mỗi hàng, viết các đầu vào nối với nhau bằng AND (dùng NOT cho đầu vào nào bằng 0). Sau đó nối các hàng lại bằng OR.</p>
<table class="tbl center tt"><tr><th>A</th><th>B</th><th>X</th></tr><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td><b>1</b></td></tr><tr><td>1</td><td>0</td><td><b>1</b></td></tr><tr><td>1</td><td>1</td><td>0</td></tr></table>
<p>X = <code>(NOT A AND B) OR (A AND NOT B)</code> — chính là <b>A XOR B</b>.</p>
<div class="tip"><b>Mẹo làm bài thi:</b> tối đa ba đầu vào và một đầu ra · luôn liệt kê đầu vào theo thứ tự nhị phân chuẩn · dùng cột trung gian · kiểm tra mỗi hàng hai lần · không rút gọn trừ khi đề yêu cầu.</div>
<div class="keywords"><b>Từ khóa:</b> biểu thức logic (logic expression), mạch logic (logic circuit), bảng chân trị (truth table), đề bài bằng lời (problem statement), cột trung gian (working column), tổ hợp đầu vào, đầu ra (output), dấu ngoặc, rút gọn (simplify)</div>`
}
});

Object.assign(window.VI.glossary, {
  "5.1a": [["System software", "Phần mềm cung cấp các dịch vụ mà máy tính cần"], ["Application software", "Phần mềm cung cấp các dịch vụ mà người dùng cần"], ["Utility software", "Phần mềm hệ thống giúp bảo trì và bảo vệ máy tính"], ["Defragmentation", "Sắp xếp lại các khối tệp trên ổ cứng để mỗi tệp được lưu liền nhau"]],
  "5.1b": [["Interrupt", "Tín hiệu gửi đến CPU báo rằng có việc cần được chú ý"], ["Interrupt service routine", "Đoạn mã xử lý một ngắt cụ thể"], ["Hardware interrupt", "Ngắt do một thiết bị tạo ra, chẳng hạn khi nhấn phím"], ["Software interrupt", "Ngắt do một chương trình tạo ra, chẳng hạn chia cho số không"]],
  "5.2a": [["Operating system", "Phần mềm hệ thống quản lý phần cứng và cung cấp nền tảng cho các ứng dụng"], ["GUI", "Giao diện dùng cửa sổ, biểu tượng, menu và con trỏ"], ["CLI", "Giao diện trong đó người dùng gõ lệnh"], ["Multitasking", "Chia sẻ thời gian CPU giữa nhiều chương trình"]],
  "5.2b": [["Firmware", "Phần mềm lưu trong ROM, điều khiển phần cứng ở mức thấp"], ["Bootloader", "Phần sụn khởi động máy tính và nạp hệ điều hành"]],
  "5.3a": [["High-level language", "Ngôn ngữ lập trình gần với ngôn ngữ con người"], ["Low-level language", "Ngôn ngữ gần với mã máy"], ["Machine independent", "Có thể chạy trên nhiều loại máy tính khác nhau"]],
  "5.3b": [["Assembly language", "Ngôn ngữ bậc thấp dùng các mnemonic"], ["Mnemonic", "Mã ngắn thay cho một lệnh, ví dụ LDA"], ["Assembler", "Dịch hợp ngữ sang mã máy"]],
  "5.3c": [["Compiler", "Dịch toàn bộ chương trình cùng một lúc thành một tệp thực thi"], ["Interpreter", "Dịch và thực thi mã từng dòng một"], ["Executable file", "Tệp mã máy có thể chạy mà không cần dịch lại"], ["Translator", "Chương trình chuyển mã thành mã máy"]],
  "5.4a": [["IDE", "Phần mềm cung cấp các công cụ để viết, dịch, kiểm thử và gỡ lỗi mã"], ["Code editor", "Nơi viết và sửa mã chương trình"], ["Run-time environment", "Cho phép chạy và kiểm thử chương trình ngay trong IDE"], ["Error diagnostics", "Chỉ ra lỗi nằm ở đâu và giải thích lỗi"], ["Auto-completion", "Gợi ý cách viết tiếp từ khóa và tên khi đang gõ"], ["Auto-correction", "Tự động sửa các lỗi thường gặp"], ["Prettyprint", "Tô màu và thụt lề mã để dễ đọc hơn"], ["Breakpoint", "Điểm mà chương trình tạm dừng để có thể kiểm tra các biến"]],
  "6.1b": [["AND", "Đầu ra bằng 1 chỉ khi cả hai đầu vào bằng 1"], ["OR", "Đầu ra bằng 1 nếu một trong hai hoặc cả hai đầu vào bằng 1"], ["NOT", "Đầu ra là giá trị ngược của đầu vào"], ["NAND", "Đầu ra bằng 0 chỉ khi cả hai đầu vào bằng 1"], ["NOR", "Đầu ra bằng 1 chỉ khi cả hai đầu vào bằng 0"], ["XOR", "Đầu ra bằng 1 nếu hai đầu vào khác nhau"], ["Truth table", "Bảng cho biết đầu ra ứng với mọi tổ hợp đầu vào"]]
});
