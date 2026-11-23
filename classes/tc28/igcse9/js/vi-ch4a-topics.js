window.VI = window.VI || { topics: {}, objectives: {}, bank: {}, glossary: {}, ui: {} };

Object.assign(window.VI.objectives, {
  "4.1a": "Hiểu vai trò của CPU trong máy tính và vi xử lý (microprocessor) là gì. (Syllabus 3.1.1)",
  "4.1b": "Hiểu mục đích của các thành phần trong CPU theo kiến trúc Von Neumann: ALU, CU, các thanh ghi (PC, MAR, MDR, CIR, ACC) và các bus (địa chỉ, dữ liệu, điều khiển). (Syllabus 3.1.2a)",
  "4.2a": "Mô tả chu trình nạp–giải mã–thực thi (FDE), gồm vai trò của từng thành phần. (Syllabus 3.1.2b)",
  "4.2b": "Hiểu nhân (core), bộ nhớ đệm (cache) và xung nhịp (clock) trong CPU là gì và chúng ảnh hưởng thế nào đến hiệu năng. (Syllabus 3.1.3)",
  "4.3a": "Hiểu mục đích và cách dùng của tập lệnh (instruction set) của một CPU. (Syllabus 3.1.4)",
  "4.3b": "Mô tả mục đích và đặc điểm của hệ thống nhúng, và nhận biết các thiết bị dùng hệ thống nhúng. (Syllabus 3.1.5)",
  "4.4a": "Hiểu thiết bị nhập là gì và vì sao cần có (bàn phím, micro, chuột quang, màn hình cảm ứng). (Syllabus 3.2.1)",
  "4.4b": "Hiểu thiết bị xuất là gì và vì sao cần có. (Syllabus 3.2.2)",
  "4.5a": "Mô tả máy quét mã vạch, máy quét mã QR, máy ảnh kỹ thuật số và máy quét 2D/3D. (Syllabus 3.2.1)",
  "4.6a": "Mô tả màn hình LED và LCD, máy chiếu DLP và máy chiếu LCD. (Syllabus 3.2.2)",
  "4.6b": "Mô tả cơ cấu chấp hành (actuator) và loa. (Syllabus 3.2.2)"
});

Object.assign(window.VI.topics, {
  "4.1": {
    title: "Kiến trúc máy tính: CPU và các thành phần của nó",
    summary: "CPU, vi xử lý và các thành phần của kiến trúc Von Neumann: ALU, CU, thanh ghi và các bus.",
    reading: `
<h4>Bộ xử lý trung tâm (CPU)</h4>
<p><b>CPU</b> là bộ phận của máy tính <b>xử lý các lệnh và dữ liệu</b> được đưa vào máy tính để có thể xuất ra kết quả. Nó thực hiện (execute) các lệnh của chương trình lần lượt từng lệnh một, với tốc độ cực nhanh.</p>
<p><b>Vi xử lý (microprocessor)</b> là một loại <b>mạch tích hợp (integrated circuit) trên một chip duy nhất</b> có chứa một CPU. Vi xử lý có mặt trong máy tính cá nhân, điện thoại, máy chơi game và nhiều thiết bị khác.</p>

<h4>Kiến trúc Von Neumann</h4>
<p>Hầu hết máy tính theo thiết kế <b>Von Neumann</b> (chương trình được lưu trữ): <b>chương trình và dữ liệu được lưu chung trong bộ nhớ (RAM)</b>, và các lệnh được nạp từ bộ nhớ từng lệnh một rồi thực thi theo thứ tự.</p>
<svg viewBox="0 0 600 250" class="diagram" role="img" aria-label="Von Neumann architecture: CPU with CU, ALU and registers connected to RAM by address, data and control buses">
<rect x="10" y="10" width="330" height="230" rx="14" fill="#eaf0fa" stroke="#1b3a6b" stroke-width="2"/><text x="22" y="32" font-size="14" font-weight="800" fill="#1b3a6b" font-family="Nunito">CPU</text>
<rect x="28" y="44" width="130" height="50" rx="8" fill="#fff8e8" stroke="#16213a" stroke-width="2"/><text x="93" y="74" font-size="13" font-weight="800" text-anchor="middle" fill="#16213a" font-family="Nunito">Control unit</text>
<rect x="190" y="44" width="130" height="50" rx="8" fill="#fff8e8" stroke="#16213a" stroke-width="2"/><text x="255" y="66" font-size="13" font-weight="800" text-anchor="middle" fill="#16213a" font-family="Nunito">ALU</text><text x="255" y="83" font-size="11" text-anchor="middle" fill="#4c5873" font-family="Nunito">+ Accumulator</text>
${["PC","MAR","MDR","CIR","ACC"].map((r,i)=>`<rect x="${28+i*60}" y="120" width="52" height="34" rx="6" fill="#1b3a6b"/><text x="${54+i*60}" y="142" font-size="12" font-weight="800" text-anchor="middle" fill="#fff" font-family="JetBrains Mono, monospace">${r}</text>`).join("")}
<text x="28" y="176" font-size="11" fill="#4c5873" font-family="Nunito">Registers: tiny, very fast memory locations inside the CPU</text>
<rect x="450" y="40" width="140" height="180" rx="12" fill="#fdf4dc" stroke="#a87908" stroke-width="2"/><text x="520" y="120" font-size="15" font-weight="800" text-anchor="middle" fill="#16213a" font-family="Nunito">Memory</text><text x="520" y="138" font-size="12" text-anchor="middle" fill="#4c5873" font-family="Nunito">(RAM: instructions</text><text x="520" y="153" font-size="12" text-anchor="middle" fill="#4c5873" font-family="Nunito">and data)</text>
${[["Address bus →",70,"#16b981"],["Data bus ↔",130,"#e3b341"],["Control bus ↔",190,"#c9354f"]].map(([t,y,c])=>`<line x1="340" y1="${y}" x2="450" y2="${y}" stroke="${c}" stroke-width="7"/><text x="395" y="${y-8}" font-size="11.5" font-weight="800" text-anchor="middle" fill="#16213a" font-family="Nunito">${t}</text>`).join("")}
</svg>
<h4>Các đơn vị</h4>
<table class="tbl"><tr><th>Thành phần</th><th>Mục đích</th></tr>
<tr><td><b>Bộ điều khiển (control unit, CU)</b></td><td>Điều khiển và phối hợp tất cả các bộ phận khác. Nó <b>giải mã</b> các lệnh và gửi các <b>tín hiệu điều khiển</b> qua bus điều khiển để bảo các thành phần biết phải làm gì. Nó quản lý chu trình nạp–giải mã–thực thi.</td></tr>
<tr><td><b>Bộ số học và logic (arithmetic logic unit, ALU)</b></td><td>Thực hiện các <b>phép tính</b> (+ − × ÷) và các <b>phép toán logic</b> (so sánh như AND, OR, &gt;, =). Kết quả được lưu trong thanh ghi tích lũy.</td></tr></table>
<h4>Các thanh ghi</h4>
<table class="tbl"><tr><th>Thanh ghi</th><th>Nó chứa gì</th></tr>
<tr><td><b>Bộ đếm chương trình (program counter, PC)</b></td><td><b>Địa chỉ của lệnh kế tiếp</b> sẽ được nạp.</td></tr>
<tr><td><b>Thanh ghi địa chỉ bộ nhớ (memory address register, MAR)</b></td><td><b>Địa chỉ</b> của vị trí nhớ sắp được đọc hoặc ghi.</td></tr>
<tr><td><b>Thanh ghi dữ liệu bộ nhớ (memory data register, MDR)</b></td><td><b>Dữ liệu hoặc lệnh</b> vừa được đọc từ bộ nhớ, hoặc sắp được ghi vào bộ nhớ.</td></tr>
<tr><td><b>Thanh ghi lệnh hiện hành (current instruction register, CIR)</b></td><td><b>Lệnh đang được giải mã và thực thi</b>.</td></tr>
<tr><td><b>Thanh ghi tích lũy (accumulator, ACC)</b></td><td>Tạm thời giữ <b>kết quả các phép tính</b> do ALU thực hiện.</td></tr></table>
<h4>Các bus</h4>
<p><b>Bus</b> là một nhóm dây song song truyền tín hiệu giữa các thành phần.</p>
<table class="tbl"><tr><th>Bus</th><th>Truyền gì</th><th>Chiều truyền</th></tr>
<tr><td><b>Bus địa chỉ (address bus)</b></td><td><b>Địa chỉ bộ nhớ</b> (từ MAR đến bộ nhớ)</td><td><b>Một chiều</b> (unidirectional): CPU → bộ nhớ</td></tr>
<tr><td><b>Bus dữ liệu (data bus)</b></td><td><b>Dữ liệu và lệnh</b> (giữa MDR và bộ nhớ)</td><td><b>Hai chiều</b> (bidirectional)</td></tr>
<tr><td><b>Bus điều khiển (control bus)</b></td><td><b>Tín hiệu điều khiển</b> từ CU, ví dụ đọc, ghi, xung nhịp, ngắt</td><td><b>Hai chiều</b> (bidirectional)</td></tr></table>
<div class="tip"><b>Ghi nhớ:</b> bus <b>địa chỉ</b> chỉ đi <b>một chiều</b> — CPU nói cho bộ nhớ biết <i>ở đâu</i>; bộ nhớ không bao giờ cần gửi địa chỉ ngược lại.</div>
<div class="keywords"><b>Từ khóa:</b> CPU, microprocessor (vi xử lý), integrated circuit (mạch tích hợp), Von Neumann architecture, stored program (chương trình lưu trữ), control unit, ALU, register (thanh ghi), PC, MAR, MDR, CIR, accumulator, address bus, data bus, control bus</div>`
  },
  "4.2": {
    title: "Nhân, bộ nhớ đệm, xung nhịp và chu trình FDE",
    summary: "CPU nạp, giải mã và thực thi lệnh như thế nào, và điều gì làm CPU nhanh hơn.",
    reading: `
<h4>Chu trình nạp–giải mã–thực thi (fetch–decode–execute, FDE)</h4>
<p>CPU lặp lại chu trình này hàng tỷ lần mỗi giây.</p>
<table class="tbl"><tr><th>Giai đoạn</th><th>Điều gì xảy ra</th></tr>
<tr><td><b>Nạp (fetch)</b></td><td><ol class="tight"><li>Địa chỉ trong <b>PC</b> được sao chép sang <b>MAR</b>.</li><li>Địa chỉ được gửi qua <b>bus địa chỉ</b> đến bộ nhớ, và một tín hiệu <b>đọc</b> được gửi qua <b>bus điều khiển</b>.</li><li>Lệnh tại địa chỉ đó được gửi qua <b>bus dữ liệu</b> đến <b>MDR</b>.</li><li>Lệnh được sao chép từ MDR sang <b>CIR</b>.</li><li><b>PC được tăng lên</b> (+1) để trỏ đến lệnh kế tiếp.</li></ol></td></tr>
<tr><td><b>Giải mã (decode)</b></td><td><b>Bộ điều khiển</b> giải mã lệnh trong CIR để hiểu nó nghĩa là gì (dựa vào <b>tập lệnh</b>).</td></tr>
<tr><td><b>Thực thi (execute)</b></td><td>Lệnh được thực hiện. CU gửi các tín hiệu điều khiển; <b>ALU</b> có thể thực hiện một phép tính và lưu kết quả vào <b>thanh ghi tích lũy</b>; dữ liệu có thể được đọc từ hoặc ghi vào bộ nhớ thông qua MAR và MDR.</td></tr></table>
<div class="tip"><b>Mẹo nhớ giai đoạn nạp:</b> PC → MAR → (bus địa chỉ) → bộ nhớ → (bus dữ liệu) → MDR → CIR, rồi PC + 1.</div>

<h4>Điều gì ảnh hưởng đến hiệu năng của CPU?</h4>
<table class="tbl"><tr><th>Yếu tố</th><th>Là gì</th><th>Ảnh hưởng đến hiệu năng</th></tr>
<tr><td><b>Tốc độ xung nhịp (clock speed)</b></td><td>CPU có một <b>đồng hồ (clock)</b> bên trong phát ra các xung; mỗi xung thực hiện một bước của chu trình FDE. Đo bằng <b>hertz</b>: 3.5 GHz = 3,5 tỷ chu kỳ mỗi giây.</td><td><b>Tốc độ xung nhịp cao hơn</b> nghĩa là <b>nhiều lệnh hơn mỗi giây</b>. (Quá cao thì bị quá nhiệt; ép xung (overclocking) có thể làm máy tính hoạt động không ổn định.)</td></tr>
<tr><td><b>Số nhân (core)</b></td><td><b>Nhân</b> là một đơn vị xử lý độc lập bên trong CPU, có ALU, CU và các thanh ghi riêng. Dual-core = 2, quad-core = 4.</td><td>Nhiều nhân hơn có thể xử lý <b>nhiều lệnh hơn cùng một lúc</b>. Nhưng tăng gấp đôi số nhân không phải lúc nào cũng làm tốc độ gấp đôi: phần mềm phải được viết để tận dụng các nhân, và các nhân phải trao đổi với nhau.</td></tr>
<tr><td><b>Dung lượng bộ nhớ đệm (cache)</b></td><td><b>Cache</b> là một lượng nhỏ bộ nhớ rất nhanh nằm <b>bên trong hoặc rất gần CPU</b>, lưu các dữ liệu và lệnh được dùng thường xuyên.</td><td>Cache truy cập nhanh hơn RAM rất nhiều, nên <b>cache lớn hơn</b> nghĩa là CPU phải chờ dữ liệu ít hơn. (Nhưng cache quá lớn thì tìm kiếm lâu hơn.)</td></tr></table>
<div class="example"><b>Câu trả lời mẫu theo kiểu đề thi:</b> "Computer B sẽ hoạt động tốt hơn vì tốc độ xung nhịp của nó cao hơn, nên nó thực hiện được nhiều chu trình FDE hơn mỗi giây, và cache lớn hơn nghĩa là các lệnh dùng thường xuyên được nạp nhanh hơn so với từ RAM."</div>
<div class="keywords"><b>Từ khóa:</b> fetch–decode–execute cycle, fetch, decode, execute, increment (tăng), clock, clock speed, GHz, overclocking, core, multi-core (đa nhân), cache, performance (hiệu năng)</div>`
  },
  "4.3": {
    title: "Tập lệnh, vi xử lý và hệ thống nhúng",
    summary: "Tập lệnh là danh sách các lệnh mã máy mà một CPU có thể chạy. Hệ thống nhúng chỉ làm một công việc chuyên dụng.",
    reading: `
<h4>Tập lệnh</h4>
<p><b>Tập lệnh (instruction set)</b> là <b>danh sách tất cả các lệnh mà một CPU có thể xử lý</b>. Các lệnh này ở dạng <b>mã máy (machine code)</b> (nhị phân). Mỗi lệnh có một <b>mã thao tác (opcode)</b> (làm gì, ví dụ ADD, LOAD, STORE, JUMP) và thường có một <b>toán hạng (operand)</b> (dữ liệu hoặc địa chỉ cần dùng).</p>
<pre class="code">Opcode   Operand        Meaning
LDA      20             Load the value at address 20 into the accumulator
ADD      21             Add the value at address 21
STA      22             Store the result at address 22</pre>
<p>Các họ CPU khác nhau (ví dụ x86 trong hầu hết máy tính cá nhân, ARM trong hầu hết điện thoại) có <b>tập lệnh khác nhau</b>. Đó là lý do một chương trình đã biên dịch cho loại CPU này sẽ không chạy được trên loại khác.</p>

<h4>Vi xử lý</h4>
<p><b>Vi xử lý (microprocessor)</b> là một <b>mạch tích hợp trên một chip duy nhất</b> làm công việc của CPU. Nó đọc lệnh từ bộ nhớ, giải mã chúng bằng tập lệnh của mình rồi thực thi. Các phiên bản nhỏ hơn, rẻ hơn gọi là <b>vi điều khiển (microcontroller)</b> còn có thêm bộ nhớ và các cổng nhập/xuất trên cùng một chip — rất phù hợp cho hệ thống nhúng.</p>

<h4>Hệ thống nhúng</h4>
<p><b>Hệ thống nhúng (embedded system)</b> là sự kết hợp giữa phần cứng và phần mềm được thiết kế để thực hiện một <b>chức năng chuyên dụng</b> (một nhiệm vụ cụ thể) bên trong một thiết bị lớn hơn. Nó thường dùng một vi xử lý hoặc vi điều khiển, nhận dữ liệu vào từ cảm biến hoặc nút bấm, và điều khiển các đầu ra.</p>
<table class="tbl"><tr><th>Hệ thống nhúng</th><th>Máy tính đa dụng</th></tr>
<tr><td>Thực hiện <b>một chức năng chuyên dụng</b></td><td>Thực hiện <b>nhiều chức năng khác nhau</b></td></tr>
<tr><td>Ví dụ: máy giặt, lò vi sóng, bộ điều khiển động cơ ô tô, báo động an ninh, sưởi trung tâm, đèn thông minh, máy bán hàng tự động, đèn giao thông</td><td>Ví dụ: máy tính để bàn, laptop</td></tr></table>
<table class="tbl"><tr><th>Ưu điểm của hệ thống nhúng</th><th>Nhược điểm</th></tr>
<tr><td><ul class="tight"><li>Nhỏ, nên lắp vừa bên trong thiết bị</li><li>Rẻ khi sản xuất hàng loạt</li><li>Tiêu thụ rất ít điện</li><li>Nhanh và đáng tin cậy ở một nhiệm vụ duy nhất</li><li>Thường có thể điều khiển từ xa (ví dụ lò nướng thông minh qua ứng dụng)</li></ul></td>
<td><ul class="tight"><li>Khó hoặc không thể nâng cấp</li><li>Khó sửa chữa — thường phải thay cả thiết bị</li><li>Nếu kết nối internet, có thể bị tấn công (hack)</li><li>Chỉ làm được một việc</li></ul></td></tr></table>
<div class="example"><b>Lò vi sóng hoạt động thế nào:</b> người dùng bấm nút (đầu vào) → vi xử lý chạy chương trình của nó (lưu trong ROM) → bật magnetron và đếm ngược thời gian (hiển thị trên màn hình, đầu ra) → khi thời gian về 0 thì tắt và kêu bíp.</div>
<div class="keywords"><b>Từ khóa:</b> instruction set, machine code, opcode, operand, microprocessor, microcontroller, integrated circuit, embedded system, dedicated function (chức năng chuyên dụng), general-purpose computer (máy tính đa dụng)</div>`
  }
});

Object.assign(window.VI.glossary, {
  "4.1a": [
    ["CPU", "Thành phần xử lý các lệnh và dữ liệu để có thể xuất ra kết quả"],
    ["Microprocessor", "Mạch tích hợp trên một chip duy nhất làm công việc của một CPU"],
    ["Integrated circuit", "Một mạch điện tử hoàn chỉnh được chế tạo trên một chip duy nhất"]
  ],
  "4.1b": [
    ["Control unit", "Giải mã các lệnh và gửi tín hiệu điều khiển để phối hợp hoạt động của máy tính"],
    ["ALU", "Thực hiện các phép tính và phép toán logic"],
    ["Program counter", "Giữ địa chỉ của lệnh kế tiếp sẽ được nạp"],
    ["Memory address register", "Giữ địa chỉ của vị trí nhớ sẽ được đọc hoặc ghi"],
    ["Memory data register", "Giữ dữ liệu hoặc lệnh vừa được đọc từ bộ nhớ, hoặc sắp được ghi vào bộ nhớ"],
    ["Current instruction register", "Giữ lệnh đang được giải mã và thực thi"],
    ["Accumulator", "Giữ kết quả các phép tính của ALU"],
    ["Address bus", "Truyền địa chỉ bộ nhớ từ CPU đến bộ nhớ (một chiều)"],
    ["Data bus", "Truyền dữ liệu và lệnh giữa CPU và bộ nhớ (hai chiều)"],
    ["Control bus", "Truyền các tín hiệu điều khiển như đọc và ghi (hai chiều)"],
    ["Von Neumann architecture", "Thiết kế trong đó chương trình và dữ liệu được lưu chung trong bộ nhớ"]
  ],
  "4.2a": [
    ["Fetch", "Giai đoạn lệnh kế tiếp được sao chép từ bộ nhớ vào CPU"],
    ["Decode", "Giai đoạn bộ điều khiển hiểu lệnh có nghĩa là gì"],
    ["Execute", "Giai đoạn lệnh được thực hiện"]
  ],
  "4.2b": [
    ["Clock speed", "Số chu kỳ mà CPU thực hiện được trong mỗi giây"],
    ["Core", "Một đơn vị xử lý độc lập bên trong CPU"],
    ["Cache", "Một lượng nhỏ bộ nhớ rất nhanh gần CPU, lưu các dữ liệu được dùng thường xuyên"],
    ["Overclocking", "Cho CPU chạy nhanh hơn tốc độ xung nhịp thiết kế"]
  ],
  "4.3a": [
    ["Instruction set", "Danh sách tất cả các lệnh mã máy mà một CPU có thể xử lý"],
    ["Opcode", "Phần của lệnh cho biết cần thực hiện thao tác nào"],
    ["Operand", "Phần của lệnh cho biết dữ liệu hoặc địa chỉ cần dùng"],
    ["Machine code", "Các lệnh ở dạng nhị phân mà CPU có thể thực thi trực tiếp"]
  ],
  "4.3b": [
    ["Embedded system", "Hệ thống máy tính nằm bên trong một thiết bị và thực hiện một chức năng chuyên dụng"],
    ["General-purpose computer", "Máy tính có thể thực hiện nhiều chức năng khác nhau"],
    ["Microcontroller", "Một chip nhỏ chứa bộ xử lý, bộ nhớ và các cổng nhập/xuất"]
  ]
});

Object.assign(window.VI.topics, {
  "4.4": {
    title: "Thiết bị nhập và thiết bị xuất",
    summary: "Thiết bị nhập đưa dữ liệu vào máy tính; thiết bị xuất hiển thị hoặc sử dụng kết quả. Bàn phím, chuột, micro và màn hình cảm ứng.",
    reading: `
<h4>Thiết bị nhập và thiết bị xuất</h4>
<p><b>Thiết bị nhập (input device)</b> là phần cứng cho phép <b>đưa dữ liệu vào máy tính</b> — nó chuyển thứ gì đó từ thế giới thực (phím bấm, chuyển động, âm thanh, ánh sáng) thành <b>dữ liệu số</b> mà máy tính có thể xử lý. Không có thiết bị nhập thì sẽ không có dữ liệu để xử lý.</p>
<p><b>Thiết bị xuất (output device)</b> nhận dữ liệu đã xử lý từ máy tính và biến nó thành dạng con người có thể hiểu hoặc sử dụng (hình ảnh, âm thanh, giấy in, chuyển động). Không có thiết bị xuất thì chúng ta không thể nhìn thấy hay dùng kết quả.</p>
<table class="tbl"><tr><th>Thiết bị nhập (theo syllabus)</th><th>Thiết bị xuất (theo syllabus)</th></tr>
<tr><td>máy quét mã vạch (barcode scanner), máy ảnh kỹ thuật số, bàn phím, micro, chuột quang, máy quét mã QR, màn hình cảm ứng (điện trở, điện dung, hồng ngoại), máy quét 2D và 3D</td><td>cơ cấu chấp hành (actuator), máy chiếu DLP, máy in phun, máy in laser, màn hình LED, máy chiếu LCD, màn hình LCD, loa, máy in 3D</td></tr></table>

<h4>Bàn phím (keyboard)</h4>
<p>Mỗi lần bấm phím sẽ làm kín một mạch điện dưới phím. Một chip trong bàn phím xác định phím nào được bấm và gửi <b>mã ký tự</b> của nó (ví dụ ASCII/Unicode) đến máy tính. Dùng để gõ văn bản và lệnh. Chậm khi nhập lượng dữ liệu lớn; có thể gây chấn thương do vận động lặp lại (RSI).</p>
<h4>Chuột quang (optical mouse)</h4>
<p>Một <b>đèn LED đỏ</b> chiếu sáng lên bề mặt; một <b>camera/cảm biến (CMOS)</b> nhỏ chụp hàng nghìn ảnh mỗi giây; một vi xử lý so sánh các ảnh để tính <b>hướng và tốc độ</b> di chuyển, từ đó di chuyển con trỏ. Không có bộ phận chuyển động nên ít bị vấn đề bụi bẩn; hoạt động kém trên kính hoặc bề mặt bóng.</p>
<h4>Micro (microphone)</h4>
<p>Âm thanh làm một <b>màng rung (diaphragm)</b> dao động; dao động đó làm một cuộn dây chuyển động gần nam châm (hoặc thay đổi một tụ điện) và tạo ra một <b>tín hiệu điện (tương tự)</b>. Một <b>ADC</b> chuyển tín hiệu này thành dữ liệu số bằng cách lấy mẫu. Dùng cho nhận dạng giọng nói, cuộc gọi video, ghi âm.</p>

<h4>Màn hình cảm ứng (touch screen)</h4>
<table class="tbl"><tr><th>Loại</th><th>Cách hoạt động</th><th>Ưu điểm</th><th>Nhược điểm</th></tr>
<tr><td><b>Điện trở (resistive)</b></td><td>Hai lớp mềm cách nhau một khe nhỏ. Khi ấn, lớp trên chạm vào lớp dưới và làm kín mạch điện; điểm tiếp xúc được tính ra.</td><td>Rẻ; dùng được khi đeo găng tay hoặc dùng bút cảm ứng</td><td>Cần ấn lực; khó nhìn dưới ánh nắng; dễ hỏng; thường không đa chạm</td></tr>
<tr><td><b>Điện dung (capacitive)</b></td><td>Một lớp dẫn điện giữ một điện trường. Ngón tay (dẫn điện) làm thay đổi <b>điện dung</b> tại điểm đó và các cảm biến tính ra vị trí.</td><td>Rất nhạy; đa chạm; kính bền; hình ảnh rõ</td><td>Không dùng được với găng tay thường hoặc bút không dẫn điện</td></tr>
<tr><td><b>Hồng ngoại (infra-red)</b></td><td>Một lưới các <b>tia hồng ngoại</b> và cảm biến quanh viền màn hình. Ngón tay <b>chặn các tia</b>; những tia bị chặn cho biết vị trí.</td><td>Dùng được với ngón tay, găng tay hoặc bất kỳ vật nào; đa chạm; tốt cho màn hình lớn</td><td>Đắt; có thể bị ảnh hưởng bởi ánh sáng mạnh hoặc bụi bẩn trên khung</td></tr></table>
<div class="tip"><b>Mẹo làm bài thi:</b> khi được hỏi "vì sao cần thiết bị nhập?" hãy nói rằng nó <b>chuyển dữ liệu thế giới thực thành dữ liệu số</b> để máy tính có thể xử lý.</div>
<div class="keywords"><b>Từ khóa:</b> input device, output device, keyboard, optical mouse, LED, CMOS sensor, microphone, diaphragm (màng rung), ADC, touch screen, resistive, capacitive, infra-red, multi-touch (đa chạm)</div>`
  },
  "4.5": {
    title: "Máy quét và máy ảnh",
    summary: "Máy quét mã vạch, máy quét mã QR, máy ảnh kỹ thuật số và máy quét 2D, 3D.",
    reading: `
<h4>Máy quét mã vạch (barcode scanner)</h4>
<p><b>Mã vạch (barcode)</b> là một dãy các vạch tối và sáng biểu diễn một con số (ví dụ mã sản phẩm).</p>
<ol><li>Máy quét chiếu một <b>tia laser hoặc ánh sáng LED màu đỏ</b> ngang qua mã vạch.</li>
<li><b>Các vạch tối phản xạ ít ánh sáng hơn</b> còn các khoảng trắng phản xạ nhiều hơn.</li>
<li><b>Các cảm biến (tế bào quang điện)</b> phát hiện mẫu ánh sáng phản xạ và chuyển nó thành nhị phân/một con số.</li>
<li><b>Chữ số kiểm tra (check digit)</b> được tính lại để đảm bảo mã vạch đã được đọc đúng.</li>
<li>Con số được tra trong cơ sở dữ liệu (ví dụ giá và mô tả sản phẩm; cập nhật hàng tồn kho).</li></ol>
<p>Dùng trong siêu thị, thư viện, kho hàng và hành lý sân bay. Nhanh và chính xác hơn việc gõ tay; nhưng mã vạch bị hỏng hoặc bẩn có thể không quét được.</p>
<h4>Máy quét mã QR (QR code scanner)</h4>
<p><b>Mã QR (quick response — phản hồi nhanh)</b> là một <b>ma trận 2D gồm các ô vuông tối và sáng</b>. Nó chứa được <b>nhiều dữ liệu</b> hơn mã vạch rất nhiều (hàng nghìn ký tự, như một URL, thông tin Wi-Fi hoặc thẻ lên máy bay). Ba ô vuông lớn ở các góc giúp máy quét tìm ra mã và hướng của nó, nên có thể đọc từ mọi góc.</p>
<ul><li>Camera điện thoại (hoặc máy quét) chụp ảnh mã; phần mềm phân tích mẫu các ô vuông và giải mã.</li>
<li>Ưu điểm: chứa nhiều dữ liệu hơn mã vạch; đọc được theo mọi hướng; vẫn hoạt động nếu bị hỏng một phần (sửa lỗi); không cần máy quét đặc biệt — camera smartphone nào cũng được.</li>
<li>Nhược điểm: mã QR độc hại có thể dẫn đến các trang web giả mạo (<b>"attagging"</b>); có nhiều định dạng khác nhau.</li></ul>
<h4>Máy ảnh kỹ thuật số (digital camera)</h4>
<ol><li>Ánh sáng đi qua <b>thấu kính (lens)</b> đến một <b>cảm biến hình ảnh (image sensor)</b> (CCD hoặc CMOS) gồm hàng triệu tế bào nhạy sáng — mỗi tế bào ứng với một điểm ảnh (pixel).</li>
<li>Mỗi tế bào đo lượng và màu của ánh sáng rồi chuyển thành tín hiệu điện.</li>
<li>Một vi xử lý chuyển các tín hiệu thành nhị phân và lưu ảnh (thường được nén thành JPEG) vào thẻ nhớ.</li></ol>
<p>Số điểm ảnh của cảm biến (ví dụ 12 megapixel) quyết định <b>độ phân giải (resolution)</b> tối đa.</p>
<h4>Máy quét 2D (2D scanner)</h4>
<p>Dùng để quét tài liệu phẳng và ảnh. Một nguồn sáng mạnh di chuyển dọc tài liệu; ánh sáng phản xạ được gương và thấu kính hướng vào một cảm biến (CCD), cảm biến này chuyển nó thành ảnh số. Phần mềm <b>OCR (nhận dạng ký tự quang học)</b> sau đó có thể biến ảnh chứa chữ thành văn bản chỉnh sửa được. Cũng được dùng ở sân bay để đọc hộ chiếu.</p>
<h4>Máy quét 3D (3D scanner)</h4>
<p>Dùng để quét các <b>vật thể rắn</b> nhằm tạo mô hình 3D kỹ thuật số. Laser, ánh sáng hoặc tia X được dùng để đo vật thể từ nhiều góc và ghi lại hình dạng, kích thước của nó dưới dạng nhiều điểm. Ứng dụng: máy chụp CT và MRI trong bệnh viện, quét các chi tiết để sao chép bằng máy in 3D, thiết kế chi giả, khảo cổ học.</p>
<div class="keywords"><b>Từ khóa:</b> barcode, laser, photoelectric cell (tế bào quang điện), reflection (phản xạ), check digit, QR code, 2D matrix (ma trận 2D), digital camera, image sensor, CCD, CMOS, megapixel, 2D scanner, OCR, 3D scanner, CT scan</div>`
  },
  "4.6": {
    title: "Màn hình, máy chiếu, cơ cấu chấp hành và loa",
    summary: "Màn hình LED và LCD, máy chiếu DLP và LCD, cơ cấu chấp hành và loa.",
    reading: `
<h4>Màn hình LCD</h4>
<p>Màn hình <b>LCD (liquid crystal display — màn hình tinh thể lỏng)</b> được tạo từ các điểm ảnh nhỏ bằng <b>tinh thể lỏng (liquid crystal)</b>. Các tinh thể lỏng <b>tự chúng không phát sáng</b>, nên màn hình cần một <b>đèn nền (backlight)</b> (ngày nay thường là LED). Mỗi điểm ảnh có các bộ lọc đỏ, lục và lam; các tinh thể xoay để chặn hoặc cho ánh sáng đi qua, tạo ra màu của từng điểm ảnh.</p>
<h4>Màn hình LED</h4>
<p>Trong một <b>màn hình LED</b> thực sự, mỗi điểm ảnh gồm các <b>điốt phát sáng (light-emitting diode)</b> nhỏ (đỏ, lục và lam) <b>tự tạo ra ánh sáng</b>. (Nhiều TV bán dưới tên "LED" thực ra là màn hình LCD với đèn nền LED. Màn hình <b>OLED</b> dùng LED hữu cơ, mỗi điểm ảnh tự phát sáng — chúng có thể mỏng và dẻo.)</p>
<table class="tbl"><tr><th>Đèn nền LED / màn hình LED — ưu điểm</th></tr>
<tr><td><ul class="tight"><li>Đạt độ sáng tối đa gần như ngay lập tức</li><li>Rất sáng, màu sắc sống động và độ tương phản cao hơn</li><li>Dùng <b>ít điện hơn</b> nhiều và tỏa ít nhiệt hơn so với đèn nền huỳnh quang (CCFL) cũ</li><li>Bền lâu; có thể làm màn hình rất mỏng</li></ul></td></tr></table>
<h4>Máy chiếu</h4>
<table class="tbl"><tr><th>Loại</th><th>Cách hoạt động</th><th>Ưu điểm</th><th>Nhược điểm</th></tr>
<tr><td><b>DLP (digital light processing — xử lý ánh sáng kỹ thuật số)</b></td><td>Dùng một chip có <b>hàng triệu gương siêu nhỏ (micromirror)</b>, mỗi gương ứng với một điểm ảnh. Mỗi gương nghiêng về phía hoặc ra xa nguồn sáng hàng nghìn lần mỗi giây để tạo điểm ảnh sáng hoặc tối. Một <b>bánh xe màu (colour wheel)</b> quay thêm màu sắc.</td><td>Độ tương phản cao, màu đen sâu; nhỏ và nhẹ hơn; hình ảnh sắc nét; đáng tin cậy, không có bộ lọc</td><td>Màu có thể kém sống động hơn; "hiệu ứng cầu vồng" với một số người xem; bánh xe màu có thể ồn</td></tr>
<tr><td><b>Máy chiếu LCD</b></td><td>Ánh sáng mạnh được tách thành đỏ, lục và lam rồi đi qua <b>ba tấm LCD</b>; các màu được ghép lại và chiếu qua một thấu kính.</td><td>Màu sáng hơn, chính xác và đậm hơn; hình ảnh sắc nét hơn; êm hơn</td><td>Độ tương phản thấp hơn (màu đen trông xám); thấy được các điểm ảnh ("hiệu ứng cửa lưới"); to hơn; bộ lọc cần được vệ sinh</td></tr></table>
<h4>Cơ cấu chấp hành (actuator)</h4>
<p><b>Cơ cấu chấp hành</b> là một thiết bị xuất <b>tạo ra chuyển động vật lý</b> khi nhận tín hiệu từ máy tính — ví dụ <b>động cơ (motor)</b>, <b>bơm (pump)</b>, <b>van (valve)</b>, <b>rơ-le (relay)</b> hoặc <b>nam châm điện (solenoid)</b>. Cơ cấu chấp hành được dùng trong các hệ thống điều khiển: mở cửa sổ nhà kính, bật máy sưởi, di chuyển cánh tay robot, khóa cửa. Tín hiệu số của máy tính thường được chuyển đổi bằng một DAC trước.</p>
<h4>Loa (speaker)</h4>
<ol><li>Dữ liệu âm thanh số được chuyển thành <b>tín hiệu điện tương tự</b> bằng một <b>DAC</b> (bộ chuyển đổi số sang tương tự) và được khuếch đại.</li>
<li>Dòng điện biến thiên chạy qua một <b>cuộn dây</b> gần một <b>nam châm vĩnh cửu</b>, tạo ra từ trường biến thiên.</li>
<li>Cuộn dây chuyển động tới lui, làm <b>màng loa (cone/diaphragm)</b> rung.</li>
<li>Các rung động tạo ra <b>sóng âm</b> trong không khí.</li></ol>
<div class="keywords"><b>Từ khóa:</b> LCD, liquid crystal, backlight, LED, OLED, pixel, contrast (độ tương phản), DLP, micromirror, colour wheel, LCD projector, actuator, motor, solenoid, relay, speaker, DAC, coil (cuộn dây), cone (màng loa)</div>`
  }
});

Object.assign(window.VI.glossary, {
  "4.4a": [
    ["Input device", "Phần cứng đưa dữ liệu vào máy tính bằng cách chuyển nó thành dữ liệu số"],
    ["Resistive touch screen", "Màn hình cảm ứng trong đó lực ấn đẩy hai lớp vào nhau"],
    ["Capacitive touch screen", "Màn hình cảm ứng trong đó ngón tay làm thay đổi điện tích tại một điểm"],
    ["Infra-red touch screen", "Màn hình cảm ứng trong đó ngón tay chặn một lưới các tia hồng ngoại"],
    ["Optical mouse", "Chuột dùng đèn LED và một cảm biến chụp ảnh để phát hiện chuyển động"]
  ],
  "4.4b": [
    ["Output device", "Phần cứng trình bày kết quả xử lý dưới dạng con người có thể sử dụng"]
  ],
  "4.5a": [
    ["Barcode scanner", "Đọc các vạch tối và sáng bằng cách phát hiện ánh sáng phản xạ"],
    ["QR code", "Ma trận hai chiều các ô vuông có thể chứa nhiều dữ liệu"],
    ["Image sensor", "Các tế bào nhạy sáng trong máy ảnh chuyển ánh sáng thành tín hiệu điện"],
    ["2D scanner", "Chuyển tài liệu phẳng thành ảnh số"],
    ["3D scanner", "Ghi lại hình dạng của một vật thể rắn để tạo mô hình 3D kỹ thuật số"],
    ["OCR", "Phần mềm biến ảnh chứa chữ thành văn bản chỉnh sửa được"]
  ],
  "4.6a": [
    ["LCD screen", "Màn hình tinh thể lỏng được chiếu sáng bằng đèn nền"],
    ["LED screen", "Màn hình trong đó mỗi điểm ảnh được tạo từ các điốt phát sáng"],
    ["DLP projector", "Máy chiếu dùng hàng triệu gương siêu nhỏ có thể nghiêng"],
    ["LCD projector", "Máy chiếu cho ánh sáng đi qua ba tấm LCD"],
    ["Backlight", "Nguồn sáng phía sau tấm LCD"]
  ],
  "4.6b": [
    ["Actuator", "Thiết bị xuất tạo ra chuyển động vật lý"],
    ["Speaker", "Thiết bị xuất biến tín hiệu điện thành sóng âm"],
    ["DAC", "Chuyển dữ liệu số thành tín hiệu tương tự"]
  ]
});
