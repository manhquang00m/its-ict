window.VI = window.VI || { topics: {}, objectives: {}, bank: {}, glossary: {}, ui: {} };
Object.assign(window.VI.objectives, {
  "3.1a": "Hiểu vòng đời phát triển chương trình: phân tích, thiết kế, lập trình và kiểm thử, cùng các công việc trong mỗi giai đoạn. (Syllabus 7.1)",
  "3.1b": "Hiểu rằng hệ thống gồm nhiều hệ thống con, biết phân rã một bài toán thành đầu vào, xử lý, đầu ra và lưu trữ, và dùng sơ đồ cấu trúc. (Syllabus 7.2)",
  "3.2a": "Dùng lưu đồ với các ký hiệu chuẩn để thiết kế và xây dựng lời giải cho một bài toán. (Syllabus 7.2c, 7.9)",
  "3.2b": "Giải thích mục đích của một thuật toán cho dưới dạng lưu đồ và mô tả các bước xử lý trong đó. (Syllabus 7.3)",
  "3.3a": "Dùng mã giả — phép gán, nhập/xuất, rẽ nhánh (IF, CASE) và lặp (FOR, WHILE, REPEAT) cùng các toán tử — để thiết kế lời giải. (Syllabus 7.2c, 7.9)",
  "3.3b": "Giải thích mục đích của một thuật toán cho dưới dạng mã giả và mô tả các bước xử lý trong đó. (Syllabus 7.3)",
  "3.4a": "Hiểu và sử dụng thuật toán tính tổng và đếm. (Syllabus 7.4)",
  "3.4b": "Hiểu và sử dụng thuật toán tìm giá trị lớn nhất, nhỏ nhất và trung bình. (Syllabus 7.4)",
  "3.4c": "Hiểu và sử dụng tìm kiếm tuần tự (linear search). (Syllabus 7.4)",
  "3.4d": "Hiểu và sử dụng sắp xếp nổi bọt (bubble sort). (Syllabus 7.4)",
  "3.5a": "Hiểu vì sao cần các kiểm tra tính hợp lệ: kiểm tra khoảng giá trị, độ dài, kiểu dữ liệu, sự hiện diện, định dạng và chữ số kiểm tra. (Syllabus 7.5a)",
  "3.5b": "Hiểu vì sao cần các kiểm tra xác minh: kiểm tra bằng mắt và kiểm tra nhập hai lần. (Syllabus 7.5b)",
  "3.6a": "Đề xuất và áp dụng dữ liệu kiểm thử phù hợp: bình thường, bất thường, cực biên và biên. (Syllabus 7.6)",
  "3.6b": "Hoàn thành bảng theo dõi (trace table) để ghi lại quá trình chạy thử bằng tay một thuật toán (biến, kết quả xuất, lời nhắc người dùng). (Syllabus 7.7)",
  "3.7a": "Xác định lỗi trong các thuật toán cho sẵn và đề xuất cách sửa. (Syllabus 7.8)",
  "3.7b": "Viết và chỉnh sửa thuật toán cho các bài toán cho trước bằng mã giả và lưu đồ, một cách chính xác. (Syllabus 7.9)"
});
Object.assign(window.VI.topics, {
"3.1": {
  title: "Vòng đời phát triển chương trình",
  summary: "Phân tích, thiết kế, lập trình và kiểm thử — và chia một bài toán lớn thành các hệ thống con nhỏ hơn.",
  reading: `
<h4>Bốn giai đoạn</h4>
<p><b>Vòng đời phát triển chương trình (program development life cycle – PDLC)</b> là chuỗi các giai đoạn được thực hiện khi tạo ra một chương trình.</p>
<table class="tbl"><tr><th>Giai đoạn</th><th>Công việc chính</th></tr>
<tr><td><b>1. Phân tích (Analysis)</b></td><td>Hiểu và <b>xác định bài toán</b> cùng các <b>yêu cầu</b> (chương trình phải làm gì). Dùng <b>trừu tượng hóa (abstraction)</b> — giữ lại chi tiết quan trọng, bỏ chi tiết không cần thiết — và <b>phân rã (decomposition)</b> — chia bài toán thành các phần nhỏ hơn.</td></tr>
<tr><td><b>2. Thiết kế (Design)</b></td><td>Lên kế hoạch chương trình sẽ hoạt động <i>như thế nào</i> bằng <b>phân rã</b>, <b>sơ đồ cấu trúc (structure diagram)</b>, <b>lưu đồ (flowchart)</b> và <b>mã giả (pseudocode)</b>.</td></tr>
<tr><td><b>3. Lập trình (Coding)</b></td><td>Viết <b>mã chương trình</b> bằng một ngôn ngữ lập trình, kèm <b>kiểm thử lặp (iterative testing)</b> — kiểm thử từng phần (mô-đun) ngay khi viết xong, sửa lỗi rồi kiểm thử lại.</td></tr>
<tr><td><b>4. Kiểm thử (Testing)</b></td><td>Kiểm thử toàn bộ chương trình bằng <b>dữ liệu kiểm thử</b> để xem nó có chạy đúng yêu cầu và không còn lỗi hay không.</td></tr></table>
<div class="tip"><b>Ví dụ về trừu tượng hóa:</b> bản đồ tàu điện ngầm chỉ hiển thị các ga và tuyến, không có đường phố hay tòa nhà — chỉ giữ những gì hành khách cần.</div>

<h4>Hệ thống và hệ thống con</h4>
<p>Mọi hệ thống máy tính đều gồm các <b>hệ thống con (sub-system)</b>, và mỗi hệ thống con lại gồm các hệ thống con nhỏ hơn. Ví dụ, một cửa hàng trực tuyến có các hệ thống con như tìm kiếm, giỏ hàng, thanh toán và giao hàng; riêng thanh toán lại có các hệ thống con để kiểm tra thẻ và in biên lai.</p>

<h4>Phân rã một bài toán</h4>
<p>Bất kỳ bài toán nào cũng có thể được chia thành các thành phần:</p>
<table class="tbl"><tr><th>Thành phần</th><th>Ví dụ: chương trình tính điểm trung bình của một học sinh</th></tr>
<tr><td><b>Đầu vào (Inputs)</b> – dữ liệu đưa vào</td><td>tên học sinh và năm điểm kiểm tra</td></tr>
<tr><td><b>Xử lý (Processes)</b> – việc làm với dữ liệu</td><td>cộng các điểm, chia cho 5, xác định xếp loại</td></tr>
<tr><td><b>Đầu ra (Outputs)</b> – kết quả tạo ra</td><td>điểm trung bình và xếp loại</td></tr>
<tr><td><b>Lưu trữ (Storage)</b> – dữ liệu cần giữ lại</td><td>các điểm được lưu vào tệp để dùng lần sau</td></tr></table>

<h4>Sơ đồ cấu trúc</h4>
<p><b>Sơ đồ cấu trúc</b> thể hiện một hệ thống được chia thành các hệ thống con theo dạng <b>phân cấp (hierarchy)</b>, từ mức trên cùng đi xuống. Mỗi ô có thể được chia nhỏ tiếp.</p>
<svg viewBox="0 0 560 170" class="diagram" role="img" aria-label="Structure diagram for an alarm app">
<rect x="200" y="8" width="160" height="40" rx="6" fill="#1b3a6b"/><text x="280" y="33" fill="#fff" font-size="14" font-weight="700" text-anchor="middle" font-family="Nunito">Alarm app</text>
<line x1="280" y1="48" x2="280" y2="66" stroke="#16213a" stroke-width="2"/><line x1="90" y1="66" x2="470" y2="66" stroke="#16213a" stroke-width="2"/>
${[[90,"Set alarm"],[280,"Check time"],[470,"Sound alarm"]].map(([x,t])=>`<line x1="${x}" y1="66" x2="${x}" y2="84" stroke="#16213a" stroke-width="2"/><rect x="${x-75}" y="84" width="150" height="36" rx="6" fill="#fff8e8" stroke="#16213a" stroke-width="2"/><text x="${x}" y="107" font-size="13" font-weight="700" text-anchor="middle" fill="#16213a" font-family="Nunito">${t}</text>`).join("")}
<line x1="470" y1="120" x2="470" y2="132" stroke="#16213a" stroke-width="2"/><line x1="410" y1="132" x2="530" y2="132" stroke="#16213a" stroke-width="2"/>
${[[410,"Play tone"],[530,"Snooze"]].map(([x,t])=>`<line x1="${x}" y1="132" x2="${x}" y2="140" stroke="#16213a" stroke-width="2"/><rect x="${x-52}" y="140" width="104" height="26" rx="5" fill="#eaf0fa" stroke="#16213a" stroke-width="1.5"/><text x="${x}" y="158" font-size="12" font-weight="700" text-anchor="middle" fill="#16213a" font-family="Nunito">${t}</text>`).join("")}
</svg>
<div class="tip">Phân rã giúp bài toán lớn dễ giải hơn: mỗi phần nhỏ có thể được thiết kế, lập trình và kiểm thử riêng, và nhiều lập trình viên có thể làm các phần khác nhau cùng lúc.</div>
<div class="keywords"><b>Từ khóa:</b> vòng đời phát triển chương trình (program development life cycle), phân tích (analysis), thiết kế (design), lập trình (coding), kiểm thử (testing), kiểm thử lặp (iterative testing), yêu cầu (requirements), trừu tượng hóa (abstraction), phân rã (decomposition), hệ thống con (sub-system), sơ đồ cấu trúc (structure diagram), đầu vào (inputs), xử lý (processes), đầu ra (outputs), lưu trữ (storage)</div>`
},
"3.2": {
  title: "Thuật toán và lưu đồ",
  summary: "Thuật toán là một tập các bước thực hiện. Lưu đồ thể hiện các bước đó bằng ký hiệu chuẩn.",
  reading: `
<h4>Thuật toán là gì?</h4>
<p><b>Thuật toán (algorithm)</b> là <b>một tập các chỉ dẫn từng bước</b> để giải một bài toán hoặc hoàn thành một nhiệm vụ. Thuật toán có thể được thể hiện bằng <b>lưu đồ (flowchart)</b> (sơ đồ) hoặc <b>mã giả (pseudocode)</b> (văn bản có cấu trúc) trước khi chuyển thành mã chương trình.</p>
<p>Mọi thuật toán đều được xây dựng từ ba <b>cấu trúc (construct)</b>:</p>
<ul><li><b>Tuần tự (Sequence)</b> – các bước được thực hiện lần lượt, theo thứ tự.</li>
<li><b>Rẽ nhánh (Selection)</b> – một quyết định: các bước khác nhau được thực hiện tùy theo điều kiện (Yes/No).</li>
<li><b>Lặp (Iteration)</b> – các bước được lặp lại (một vòng lặp).</li></ul>

<h4>Các ký hiệu trong lưu đồ</h4>
${window.FLOW ? window.FLOW.legend() : ""}

<h4>Ví dụ 1 – rẽ nhánh</h4>
<p>Lưu đồ này nhập điểm kiểm tra và quyết định học sinh có đạt hay không.</p>
${window.FLOW ? window.FLOW.selection({ input: "Mark", cond: "Mark >= 50?", yes: 'OUTPUT "Pass"', no: 'OUTPUT "Fail"' }) : ""}

<h4>Ví dụ 2 – lặp (một vòng lặp)</h4>
<p>Lưu đồ này nhập 5 số và xuất tổng của chúng. Mũi tên đi <b>ngược lên</b> ô quyết định tạo thành vòng lặp.</p>
${window.FLOW ? window.FLOW.loop({ init: "Total ← 0, Count ← 0", cond: "Count < 5?", body: [["io", "INPUT Number"], ["proc", "Total ← Total + Number"], ["proc", "Count ← Count + 1"]], out: "OUTPUT Total" }) : ""}

<h4>Giải thích mục đích của một thuật toán</h4>
<p>Trong bài thi, bạn có thể được cho một lưu đồ và yêu cầu <b>nêu mục đích</b> và <b>mô tả các bước xử lý</b>. Hãy chạy thử với vài giá trị mẫu:</p>
<ol><li>Xem các <b>đầu vào</b> — dữ liệu nào được đưa vào?</li><li>Đi theo từng mũi tên và từng quyết định với các giá trị mẫu của bạn.</li><li>Xem các <b>đầu ra</b> — kết quả tạo ra là gì?</li><li>Viết một câu rõ ràng: "Thuật toán nhập năm số và xuất tổng của chúng."</li></ol>
<div class="tip"><b>Quy tắc vẽ lưu đồ trong bài thi:</b> mỗi lưu đồ có một START và ít nhất một STOP; ô quyết định luôn có đúng hai lối ra gắn nhãn <b>Yes</b> và <b>No</b>; dùng đường nối có mũi tên; dùng điều kiện chính xác như <code>Mark >= 50</code>, không viết "điểm đủ cao".</div>
<div class="keywords"><b>Từ khóa:</b> thuật toán (algorithm), lưu đồ (flowchart), ký hiệu bắt đầu/kết thúc (terminator), nhập/xuất (input/output), xử lý (process), quyết định (decision), chương trình con (subroutine), đường nối (flow line), tuần tự (sequence), rẽ nhánh (selection), lặp (iteration), mục đích (purpose)</div>`
},
"3.3": {
  title: "Thuật toán và mã giả",
  summary: "Mã giả theo chuẩn Cambridge: phép gán, nhập/xuất, IF, CASE, FOR, WHILE và REPEAT.",
  reading: `
<p><b>Mã giả (pseudocode)</b> là cách viết thuật toán bằng tiếng Anh có cấu trúc, trông giống mã nhưng không theo quy tắc nghiêm ngặt của một ngôn ngữ lập trình cụ thể. Cambridge dùng phong cách dưới đây — từ khóa viết HOA, tên định danh viết kiểu MixedCase.</p>
<h4>Biến, hằng và phép gán</h4>
<pre class="code">DECLARE Total : INTEGER
DECLARE Name : STRING
CONSTANT VAT ← 0.2
Total ← 0                     // ← means "is assigned the value"
Total ← Total + 5</pre>
<p>Các kiểu dữ liệu: INTEGER, REAL, CHAR, STRING, BOOLEAN.</p>
<h4>Nhập và xuất</h4>
<pre class="code">OUTPUT "Enter your age"
INPUT Age
OUTPUT "You are ", Age, " years old"</pre>
<h4>Toán tử (operator)</h4>
<table class="tbl"><tr><th>Số học</th><th>Quan hệ (so sánh)</th><th>Logic</th></tr>
<tr><td>+ − * /<br>^ (lũy thừa)<br>MOD (số dư): 17 MOD 5 = 2<br>DIV (chia lấy phần nguyên): 17 DIV 5 = 3</td><td>= &nbsp; &lt;&gt; (khác)<br>&lt; &nbsp; &lt;=<br>&gt; &nbsp; &gt;=</td><td>AND<br>OR<br>NOT</td></tr></table>
<h4>Rẽ nhánh: IF và CASE</h4>
<pre class="code">IF Mark >= 70
  THEN
    OUTPUT "Merit"
  ELSE
    IF Mark >= 50
      THEN
        OUTPUT "Pass"
      ELSE
        OUTPUT "Fail"
    ENDIF
ENDIF

CASE OF Choice
  1 : OUTPUT "Start game"
  2 : OUTPUT "Load game"
  3 : OUTPUT "Quit"
  OTHERWISE OUTPUT "Invalid choice"
ENDCASE</pre>
<h4>Lặp: ba loại vòng lặp</h4>
<table class="tbl"><tr><th>Vòng lặp</th><th>Khi nào dùng</th><th>Ví dụ</th></tr>
<tr><td><b>FOR … TO … NEXT</b><br>lặp theo số lần (count-controlled)</td><td>Bạn biết <b>phải lặp bao nhiêu lần</b>.</td><td><pre class="code mini">FOR Count ← 1 TO 10
  OUTPUT Count * 2
NEXT Count</pre></td></tr>
<tr><td><b>WHILE … DO … ENDWHILE</b><br>kiểm tra điều kiện trước (pre-condition)</td><td>Điều kiện được kiểm tra <b>trước</b> mỗi vòng, nên vòng lặp có thể chạy <b>không lần nào</b>.</td><td><pre class="code mini">INPUT Number
WHILE Number <> 0 DO
  Total ← Total + Number
  INPUT Number
ENDWHILE</pre></td></tr>
<tr><td><b>REPEAT … UNTIL</b><br>kiểm tra điều kiện sau (post-condition)</td><td>Điều kiện được kiểm tra <b>sau</b> mỗi vòng, nên vòng lặp luôn chạy <b>ít nhất một lần</b>.</td><td><pre class="code mini">REPEAT
  OUTPUT "Enter PIN"
  INPUT PIN
UNTIL PIN = 1234</pre></td></tr></table>
<p>Vòng FOR có thể đếm theo bước nhảy: <code>FOR i ← 10 TO 0 STEP -2</code> cho ra 10, 8, 6, 4, 2, 0.</p>
<h4>Các hàm xử lý chuỗi và hàm thư viện hữu ích</h4>
<pre class="code">LENGTH("Hello")          → 5
UCASE("abc")             → "ABC"
LCASE("ABC")             → "abc"
SUBSTRING("Computer", 1, 3)  → "Com"   (start position, number of characters)
ROUND(3.14159, 2)        → 3.14
RANDOM()                 → a random number between 0 and 1</pre>
<h4>Giải thích mục đích của đoạn mã giả</h4>
<pre class="code">Count ← 0
FOR Index ← 1 TO 30
  INPUT Height
  IF Height > 1.5
    THEN
      Count ← Count + 1
  ENDIF
NEXT Index
OUTPUT Count</pre>
<p><b>Mục đích:</b> nhập 30 chiều cao và <b>đếm</b> xem có bao nhiêu chiều cao lớn hơn 1.5 m, rồi xuất số đếm đó.</p>
<div class="keywords"><b>Từ khóa:</b> mã giả (pseudocode), biến (variable), hằng (constant), phép gán (assignment, ←), INPUT, OUTPUT, IF, CASE, FOR, WHILE, REPEAT, lặp theo số lần (count-controlled), kiểm tra điều kiện trước (pre-condition), kiểm tra điều kiện sau (post-condition), MOD, DIV, AND, OR, NOT</div>`
},
"3.4": {
  title: "Các thuật toán chuẩn",
  summary: "Tính tổng, đếm, giá trị lớn nhất, nhỏ nhất, trung bình, tìm kiếm tuần tự và sắp xếp nổi bọt.",
  reading: `
<p>Một số thuật toán xuất hiện lặp đi lặp lại. Bạn phải biết <b>viết</b>, <b>theo dõi</b> và <b>giải thích</b> từng thuật toán sau. Các ví dụ dùng mảng (array) <code>Marks[1:10]</code> gồm 10 điểm.</p>
<h4>Tính tổng và đếm</h4>
<p><b>Tính tổng (totalling)</b> giữ một tổng chạy bằng cách cộng từng giá trị. <b>Đếm (counting)</b> cộng thêm 1 mỗi khi có sự việc xảy ra. Cả hai biến đều phải bắt đầu từ <b>0</b>.</p>
<pre class="code">Total ← 0
PassCount ← 0
FOR Index ← 1 TO 10
  Total ← Total + Marks[Index]          // totalling
  IF Marks[Index] >= 50
    THEN
      PassCount ← PassCount + 1         // counting
  ENDIF
NEXT Index</pre>
<h4>Lớn nhất, nhỏ nhất và trung bình</h4>
<pre class="code">Maximum ← Marks[1]          // start with the first value (or a very small number)
Minimum ← Marks[1]          // start with the first value (or a very large number)
Total ← 0
FOR Index ← 1 TO 10
  IF Marks[Index] > Maximum THEN Maximum ← Marks[Index] ENDIF
  IF Marks[Index] < Minimum THEN Minimum ← Marks[Index] ENDIF
  Total ← Total + Marks[Index]
NEXT Index
Average ← Total / 10</pre>
<div class="tip">Nếu bạn đặt Maximum ban đầu bằng 0 mà mọi giá trị đều âm thì kết quả sẽ sai — vì vậy bắt đầu bằng phần tử đầu tiên là an toàn nhất.</div>
<h4>Tìm kiếm tuần tự (linear search)</h4>
<p><b>Tìm kiếm tuần tự</b> kiểm tra từng phần tử <b>lần lượt, theo thứ tự</b>, cho đến khi tìm thấy hoặc hết danh sách. Nó dùng được với dữ liệu <b>chưa sắp xếp</b>.</p>
<pre class="code">INPUT SearchName
Found ← FALSE
Index ← 1
WHILE Found = FALSE AND Index <= 10 DO
  IF Names[Index] = SearchName
    THEN
      Found ← TRUE
    ELSE
      Index ← Index + 1
  ENDIF
ENDWHILE
IF Found = TRUE
  THEN OUTPUT SearchName, " found at position ", Index
  ELSE OUTPUT SearchName, " not found"
ENDIF</pre>
<h4>Sắp xếp nổi bọt (bubble sort)</h4>
<p><b>Sắp xếp nổi bọt</b> đưa một danh sách về đúng thứ tự. Nó <b>so sánh từng cặp phần tử liền kề</b> và <b>hoán đổi</b> chúng nếu sai thứ tự. Một lượt đi qua danh sách gọi là một <b>lượt (pass)</b>. Sau mỗi lượt, giá trị lớn nhất còn lại đã "nổi" về cuối. Thuật toán tiếp tục cho đến khi một lượt <b>không có hoán đổi nào</b>.</p>
<pre class="code">Top ← 9                                 // last pair to check
REPEAT
  Swap ← FALSE
  FOR Index ← 1 TO Top
    IF List[Index] > List[Index + 1]
      THEN
        Temp ← List[Index]              // swap using a temporary variable
        List[Index] ← List[Index + 1]
        List[Index + 1] ← Temp
        Swap ← TRUE
    ENDIF
  NEXT Index
  Top ← Top - 1
UNTIL Swap = FALSE OR Top = 0</pre>
<div class="example"><b>Một lượt trên [5, 2, 8, 1, 4]:</b> 5>2 hoán đổi → [2,5,8,1,4] · 5<8 không đổi · 8>1 hoán đổi → [2,5,1,8,4] · 8>4 hoán đổi → [2,5,1,4,<b>8</b>]. Số 8 giờ đã ở vị trí cuối cùng của nó.</div>
<div class="keywords"><b>Từ khóa:</b> tính tổng (totalling), đếm (counting), tổng chạy (running total), lớn nhất (maximum), nhỏ nhất (minimum), trung bình (average), tìm kiếm tuần tự (linear search), sắp xếp nổi bọt (bubble sort), lượt (pass), hoán đổi (swap), biến tạm (temporary variable), mảng (array), chỉ số (index)</div>`
},
"3.5": {
  title: "Kiểm tra tính hợp lệ và xác minh",
  summary: "Validation kiểm tra dữ liệu có hợp lý không; verification kiểm tra dữ liệu có được sao chép hoặc nhập đúng không.",
  reading: `
<h4>Kiểm tra tính hợp lệ (validation)</h4>
<p><b>Kiểm tra tính hợp lệ (validation)</b> là một <b>kiểm tra tự động</b> của máy tính để biết dữ liệu nhập vào có <b>hợp lý, chấp nhận được</b> hay không trước khi nhận dữ liệu đó. Nó <b>không thể</b> kiểm tra dữ liệu có <i>đúng</i> hay không — một ngày sinh hợp lệ vẫn có thể là ngày sinh sai!</p>
<table class="tbl"><tr><th>Kiểm tra</th><th>Kiểm tra điều gì</th><th>Ví dụ</th></tr>
<tr><td><b>Kiểm tra khoảng giá trị (range check)</b></td><td>Giá trị nằm giữa giới hạn dưới và giới hạn trên.</td><td>Điểm từ 0 đến 100</td></tr>
<tr><td><b>Kiểm tra độ dài (length check)</b></td><td>Dữ liệu có đúng số ký tự quy định, hoặc nằm trong độ dài tối thiểu/tối đa.</td><td>Mật khẩu có 8–20 ký tự; số điện thoại có đúng 10 chữ số</td></tr>
<tr><td><b>Kiểm tra kiểu dữ liệu (type check)</b></td><td>Dữ liệu đúng kiểu dữ liệu.</td><td>Tuổi phải là số nguyên (integer), không phải chữ "twelve"</td></tr>
<tr><td><b>Kiểm tra sự hiện diện (presence check)</b></td><td>Dữ liệu đã được nhập — trường không bị bỏ trống.</td><td>Địa chỉ email phải được điền</td></tr>
<tr><td><b>Kiểm tra định dạng (format check)</b></td><td>Các ký tự theo một mẫu quy định.</td><td>Ngày có dạng DD/MM/YYYY; mã học sinh dạng AB1234</td></tr>
<tr><td><b>Chữ số kiểm tra (check digit)</b></td><td>Chữ số cuối cùng, được tính từ các chữ số còn lại, phải khớp.</td><td>Mã ISBN và mã vạch</td></tr></table>
<pre class="code">REPEAT
  OUTPUT "Enter a mark from 0 to 100"
  INPUT Mark
  IF Mark < 0 OR Mark > 100
    THEN
      OUTPUT "Invalid – please re-enter"
  ENDIF
UNTIL Mark >= 0 AND Mark <= 100          // range check</pre>
<pre class="code">REPEAT
  INPUT Password
UNTIL LENGTH(Password) >= 8              // length check

REPEAT
  INPUT Name
UNTIL Name <> ""                         // presence check</pre>

<h4>Xác minh (verification)</h4>
<p><b>Xác minh (verification)</b> kiểm tra dữ liệu đã được <b>sao chép hoặc nhập chính xác</b> hay chưa — tức là khớp với bản gốc.</p>
<table class="tbl"><tr><th>Kiểm tra</th><th>Cách hoạt động</th></tr>
<tr><td><b>Kiểm tra bằng mắt (visual check)</b></td><td>Người dùng nhìn dữ liệu trên màn hình và so với tài liệu gốc (hoặc máy tính hiển thị dữ liệu và hỏi "Có đúng không?").</td></tr>
<tr><td><b>Kiểm tra nhập hai lần (double entry check)</b></td><td>Dữ liệu được nhập <b>hai lần</b> và máy tính so sánh hai lần nhập. Nếu không khớp, phải nhập lại. Ví dụ: "Xác nhận mật khẩu mới".</td></tr></table>
<div class="tip"><b>Validation</b> = có <b>hợp lý</b> không? (máy tính kiểm tra theo quy tắc) · <b>Verification</b> = có <b>đúng như ý định</b> không? (kiểm tra với bản gốc)</div>
<div class="keywords"><b>Từ khóa:</b> kiểm tra tính hợp lệ (validation), kiểm tra khoảng giá trị (range check), kiểm tra độ dài (length check), kiểm tra kiểu dữ liệu (type check), kiểm tra sự hiện diện (presence check), kiểm tra định dạng (format check), chữ số kiểm tra (check digit), xác minh (verification), kiểm tra bằng mắt (visual check), kiểm tra nhập hai lần (double entry check)</div>`
},
"3.6": {
  title: "Kiểm thử và bảng theo dõi",
  summary: "Dữ liệu kiểm thử bình thường, bất thường, cực biên và biên; chạy thử thuật toán bằng tay với bảng theo dõi (trace table).",
  reading: `
<h4>Dữ liệu kiểm thử</h4>
<p>Một chương trình phải được kiểm thử bằng nhiều loại dữ liệu khác nhau để chứng minh nó hoạt động đúng. Hãy hình dung một chương trình nhận điểm thi từ <b>0 đến 100</b>:</p>
<table class="tbl"><tr><th>Loại</th><th>Ý nghĩa</th><th>Ví dụ (0–100)</th><th>Kết quả mong đợi</th></tr>
<tr><td><b>Bình thường (Normal)</b></td><td>Dữ liệu hợp lý, <b>được chấp nhận</b>.</td><td>45, 72, 18</td><td>Được chấp nhận</td></tr>
<tr><td><b>Bất thường (Abnormal)</b> (sai)</td><td>Dữ liệu <b>phải bị từ chối</b> — sai kiểu hoặc nằm ngoài khoảng.</td><td>−20, 150, "ten"</td><td>Bị từ chối kèm thông báo</td></tr>
<tr><td><b>Cực biên (Extreme)</b></td><td>Các giá trị <b>lớn nhất và nhỏ nhất được chấp nhận</b>.</td><td>0 và 100</td><td>Được chấp nhận</td></tr>
<tr><td><b>Biên (Boundary)</b></td><td>Giá trị lớn nhất/nhỏ nhất được chấp nhận <b>và</b> giá trị ngay sát bên ngoài nó, giá trị này phải bị từ chối.</td><td>0 và −1 · 100 và 101</td><td>0, 100 được chấp nhận · −1, 101 bị từ chối</td></tr></table>
<div class="tip">Với khoảng số nguyên, các cặp biên là <b>(nhỏ nhất − 1, nhỏ nhất)</b> và <b>(lớn nhất, lớn nhất + 1)</b>.</div>

<h4>Bảng theo dõi (trace table)</h4>
<p><b>Bảng theo dõi (trace table)</b> ghi lại giá trị của mọi <b>biến</b>, mọi <b>kết quả xuất</b> và mọi <b>lời nhắc người dùng</b> ở từng bước của thuật toán. Làm tay từng bước như vậy gọi là <b>chạy thử bằng tay (dry run)</b>. Nó giúp tìm <b>lỗi logic (logic error)</b> và cho thấy thuật toán làm gì.</p>
<pre class="code">Total ← 0
FOR Count ← 1 TO 4
  INPUT Number
  IF Number > 10
    THEN
      Total ← Total + Number
  ENDIF
NEXT Count
OUTPUT Total</pre>
<p>Dữ liệu nhập: 12, 5, 20, 10</p>
<table class="tbl center"><tr><th>Count</th><th>Number</th><th>Total</th><th>OUTPUT</th></tr>
<tr><td></td><td></td><td>0</td><td></td></tr><tr><td>1</td><td>12</td><td>12</td><td></td></tr>
<tr><td>2</td><td>5</td><td></td><td></td></tr><tr><td>3</td><td>20</td><td>32</td><td></td></tr>
<tr><td>4</td><td>10</td><td></td><td></td></tr><tr><td></td><td></td><td></td><td>32</td></tr></table>
<p>Chỉ những số <b>lớn hơn</b> 10 mới được cộng, nên số 10 không được tính — bảng theo dõi giúp thấy điều này rất dễ.</p>
<div class="tip"><b>Quy tắc lập bảng theo dõi:</b> mỗi biến một cột, thêm một cột OUTPUT; chỉ ghi giá trị mới khi nó thay đổi; xuống một dòng mỗi lần; đọc mã từng dòng đúng như máy tính sẽ làm.</div>
<div class="keywords"><b>Từ khóa:</b> dữ liệu kiểm thử (test data), bình thường (normal), bất thường (abnormal), sai (erroneous), cực biên (extreme), biên (boundary), kết quả mong đợi (expected result), bảng theo dõi (trace table), chạy thử bằng tay (dry run), biến (variable), kết quả xuất (output), lỗi logic (logic error)</div>`
},
"3.7": {
  title: "Xây dựng và hoàn thiện thuật toán",
  summary: "Tìm và sửa lỗi trong thuật toán, rồi tự viết và chỉnh sửa thuật toán một cách chính xác.",
  reading: `
<h4>Tìm lỗi trong thuật toán</h4>
<p>Đề thi thường cho bạn một thuật toán có <b>lỗi</b> và yêu cầu tìm lỗi rồi đề xuất cách sửa. Hãy chú ý các lỗi phổ biến sau:</p>
<table class="tbl"><tr><th>Lỗi phổ biến</th><th>Sai</th><th>Đúng</th></tr>
<tr><td>Biến chưa được khởi tạo (hoặc giá trị ban đầu sai)</td><td><code>Total ← 1</code></td><td><code>Total ← 0</code></td></tr>
<tr><td>Toán tử so sánh sai</td><td><code>IF Mark > 50</code> (50 điểm phải đạt)</td><td><code>IF Mark >= 50</code></td></tr>
<tr><td>Vòng lặp chạy sai số lần</td><td><code>FOR i ← 1 TO 9</code> cho 10 phần tử</td><td><code>FOR i ← 1 TO 10</code></td></tr>
<tr><td>Biến đếm không được cập nhật / cập nhật sai</td><td><code>Count ← Count</code></td><td><code>Count ← Count + 1</code></td></tr>
<tr><td>Logic trong điều kiện sai</td><td><code>UNTIL Mark < 0 AND Mark > 100</code></td><td><code>UNTIL Mark >= 0 AND Mark <= 100</code></td></tr>
<tr><td>Xuất kết quả sai chỗ (bên trong vòng lặp)</td><td>OUTPUT Total mỗi vòng</td><td>OUTPUT Total sau NEXT</td></tr>
<tr><td>Tính trung bình bên trong vòng lặp hoặc chia cho sai số</td><td><code>Average ← Total / Count</code> trước khi vòng lặp kết thúc</td><td>sau vòng lặp</td></tr></table>
<div class="example"><b>Ví dụ:</b> thuật toán này phải xuất số lớn nhất trong 20 số.
<pre class="code mini">Largest ← 999
FOR Count ← 1 TO 20
  INPUT Number
  IF Number < Largest THEN Largest ← Number ENDIF
NEXT Count
OUTPUT Largest</pre>
<b>Các lỗi:</b> dòng 1 phải là <code>Largest ← -999</code> (hoặc là số đầu tiên); dòng 4 phải dùng <code>Number > Largest</code>.</div>

<h4>Viết và chỉnh sửa thuật toán</h4>
<ol><li><b>Đọc đề hai lần.</b> Gạch chân các đầu vào, các xử lý, các đầu ra và mọi giới hạn ("từ 1 đến 50", "cho đến khi nhập −1").</li>
<li>Chọn đúng <b>vòng lặp</b>: số lần cố định → FOR; lặp đến khi một điều kiện xảy ra → REPEAT hoặc WHILE.</li>
<li><b>Khởi tạo</b> các biến tổng và biến đếm trước vòng lặp.</li>
<li>Thêm <b>kiểm tra tính hợp lệ</b> nếu dữ liệu cần được kiểm tra.</li>
<li>Đặt <b>lệnh xuất</b> đúng chỗ và thêm thông báo hữu ích.</li>
<li><b>Chạy thử bằng tay</b> với bảng theo dõi để kiểm tra nó hoạt động đúng.</li></ol>
<div class="tip"><b>Cần chính xác:</b> <code>x > y</code> được chấp nhận nhưng "x lớn hơn y" thì không. Dùng tên biến có ý nghĩa như <code>TotalMark</code>, không dùng <code>t</code>.</div>
<div class="example"><b>Bài toán:</b> nhập nhiệt độ cho đến khi nhập −999, rồi xuất nhiệt độ trung bình.
<pre class="code mini">Total ← 0
Count ← 0
INPUT Temp
WHILE Temp <> -999 DO
  Total ← Total + Temp
  Count ← Count + 1
  INPUT Temp
ENDWHILE
IF Count > 0
  THEN OUTPUT "Average: ", Total / Count
ENDIF</pre></div>
<div class="keywords"><b>Từ khóa:</b> lỗi (error), sửa lỗi (correction), khởi tạo (initialise), lỗi logic (logic error), lỗi lệch một (off-by-one), điều kiện (condition), chỉnh sửa (amend), hoàn thiện (refine), chạy thử bằng tay (dry run), tên định danh có ý nghĩa (meaningful identifier), tính chính xác (precision)</div>`
}
});
Object.assign(window.VI.glossary, {
  "3.1a": [["Analysis", "Giai đoạn xác định bài toán và các yêu cầu"], ["Design", "Giai đoạn tạo ra sơ đồ cấu trúc, lưu đồ và mã giả"], ["Coding", "Giai đoạn viết mã chương trình và kiểm thử lặp từng phần"], ["Testing", "Giai đoạn kiểm thử chương trình bằng dữ liệu kiểm thử"], ["Abstraction", "Loại bỏ chi tiết không cần thiết để tập trung vào điều quan trọng"], ["Iterative testing", "Kiểm thử từng phần ngay khi viết xong, sửa lỗi rồi kiểm thử lại"]],
  "3.1b": [["Decomposition", "Chia một bài toán thành các phần nhỏ hơn"], ["Sub-system", "Một hệ thống nhỏ hơn là một phần của hệ thống lớn hơn"], ["Structure diagram", "Sơ đồ thể hiện một hệ thống được chia thành các hệ thống con theo dạng phân cấp"], ["Inputs", "Dữ liệu đi vào một hệ thống"], ["Outputs", "Kết quả mà một hệ thống tạo ra"]],
  "3.2a": [["Algorithm", "Một tập các chỉ dẫn từng bước để giải một bài toán"], ["Flowchart", "Sơ đồ thể hiện một thuật toán bằng các ký hiệu chuẩn"], ["Terminator", "Ký hiệu lưu đồ dùng cho START và STOP"], ["Decision", "Ký hiệu hình thoi trong lưu đồ, có hai lối ra Yes và No"], ["Sequence", "Các bước được thực hiện lần lượt theo thứ tự"], ["Selection", "Một quyết định chọn các bước nào sẽ được thực hiện"], ["Iteration", "Các bước được lặp lại"]],
  "3.3a": [["Pseudocode", "Tiếng Anh có cấu trúc dùng để mô tả một thuật toán"], ["Variable", "Vị trí lưu trữ có tên mà giá trị có thể thay đổi"], ["Constant", "Giá trị có tên không thay đổi trong lúc chương trình chạy"], ["Count-controlled loop", "Vòng lặp FOR lặp một số lần định trước"], ["Pre-condition loop", "Vòng lặp WHILE có điều kiện được kiểm tra trước mỗi lần lặp"], ["Post-condition loop", "Vòng lặp REPEAT có điều kiện được kiểm tra sau mỗi lần lặp"], ["MOD", "Toán tử cho ra số dư của một phép chia"], ["DIV", "Toán tử cho ra phần nguyên của một phép chia"]],
  "3.4a": [["Totalling", "Giữ một tổng chạy bằng cách cộng từng giá trị"], ["Counting", "Cộng thêm 1 mỗi khi có sự việc xảy ra"]],
  "3.4c": [["Linear search", "Kiểm tra từng phần tử lần lượt cho đến khi tìm thấy hoặc hết danh sách"]],
  "3.4d": [["Bubble sort", "Sắp xếp bằng cách so sánh các cặp liền kề và hoán đổi chúng nếu sai thứ tự"], ["Pass", "Một lượt đi qua toàn bộ danh sách trong sắp xếp nổi bọt"]],
  "3.5a": [["Validation", "Kiểm tra tự động xem dữ liệu có hợp lý, chấp nhận được hay không"], ["Range check", "Kiểm tra một giá trị nằm giữa giới hạn dưới và giới hạn trên"], ["Length check", "Kiểm tra số ký tự"], ["Type check", "Kiểm tra dữ liệu có đúng kiểu dữ liệu"], ["Presence check", "Kiểm tra dữ liệu đã được nhập"], ["Format check", "Kiểm tra dữ liệu có theo một mẫu quy định"]],
  "3.5b": [["Verification", "Kiểm tra dữ liệu đã được sao chép hoặc nhập chính xác"], ["Visual check", "So sánh dữ liệu trên màn hình với tài liệu gốc"], ["Double entry check", "Nhập dữ liệu hai lần rồi so sánh hai lần nhập"]],
  "3.6a": [["Normal data", "Dữ liệu hợp lý, phải được chấp nhận"], ["Abnormal data", "Dữ liệu phải bị từ chối"], ["Extreme data", "Các giá trị lớn nhất và nhỏ nhất được chấp nhận"], ["Boundary data", "Giá trị lớn nhất/nhỏ nhất được chấp nhận và giá trị ngay sát bên ngoài nó"]],
  "3.6b": [["Trace table", "Bảng ghi lại giá trị các biến và kết quả xuất ở từng bước của một thuật toán"], ["Dry run", "Chạy thử một thuật toán bằng tay mà không dùng máy tính"]],
  "3.7a": [["Logic error", "Lỗi khiến chương trình vẫn chạy nhưng cho kết quả sai"], ["Initialise", "Gán cho biến giá trị bắt đầu"]]
});
