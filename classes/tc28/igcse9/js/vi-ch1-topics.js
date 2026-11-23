/* Vietnamese content — Chapter 1 Data representation (topics, objectives, glossary) */
window.VI = window.VI || { topics: {}, objectives: {}, bank: {}, glossary: {}, ui: {} };

Object.assign(window.VI.objectives, {
  "1.1a": "Hiểu máy tính biểu diễn mọi dạng dữ liệu bằng nhị phân như thế nào và vì sao. (Syllabus 1.1.1)",
  "1.1b": "Hiểu hệ thập phân và hệ nhị phân, và chuyển đổi giữa số thập phân dương và số nhị phân dương (tối đa 16 bit). (Syllabus 1.1.2)",
  "1.1c": "Cộng hai số nguyên nhị phân dương 8 bit và hiểu khái niệm tràn số (overflow) cũng như nguyên nhân xảy ra. (Syllabus 1.1.4)",
  "1.2a": "Hiểu hệ thập lục phân và chuyển đổi giữa thập phân và thập lục phân, giữa thập lục phân và nhị phân. (Syllabus 1.1.2)",
  "1.2b": "Hiểu vì sao và bằng cách nào hệ thập lục phân là một cách biểu diễn dữ liệu có lợi. (Syllabus 1.1.3)",
  "1.3a": "Thực hiện dịch bit logic sang trái và sang phải (kể cả dịch nhiều vị trí) trên số nguyên dương 8 bit và hiểu tác dụng của phép dịch. (Syllabus 1.1.5)",
  "1.3b": "Dùng hệ số bù hai để biểu diễn số nguyên nhị phân 8 bit dương và âm. (Syllabus 1.1.6)",
  "1.4a": "Hiểu máy tính biểu diễn văn bản như thế nào và vì sao, cùng việc dùng các bộ ký tự như ASCII và Unicode. (Syllabus 1.2.1)",
  "1.5a": "Hiểu máy tính biểu diễn âm thanh như thế nào và vì sao, kể cả ảnh hưởng của tần số lấy mẫu và độ phân giải mẫu. (Syllabus 1.2.2)",
  "1.5b": "Tính dung lượng tệp âm thanh từ tần số lấy mẫu, độ phân giải mẫu và thời lượng bản ghi. (Syllabus 1.3.2)",
  "1.6a": "Hiểu máy tính biểu diễn hình ảnh như thế nào và vì sao, kể cả ảnh hưởng của độ phân giải và độ sâu màu. (Syllabus 1.2.3)",
  "1.6b": "Tính dung lượng tệp ảnh từ độ phân giải và độ sâu màu. (Syllabus 1.3.2)",
  "1.7a": "Hiểu cách đo dung lượng dữ liệu: bit, nibble, byte, KiB, MiB, GiB, TiB, PiB và EiB. (Syllabus 1.3.1)",
  "1.7b": "Hiểu mục đích và sự cần thiết của việc nén dữ liệu. (Syllabus 1.3.3)",
  "1.7c": "Hiểu cách nén tệp bằng phương pháp nén có mất dữ liệu và không mất dữ liệu, kể cả mã hóa độ dài chạy (RLE). (Syllabus 1.3.4)"
});

Object.assign(window.VI.topics, {
"1.1": {
  title: "Hệ số: hệ nhị phân",
  summary: "Vì sao máy tính dùng nhị phân, chuyển đổi giữa thập phân và nhị phân, phép cộng nhị phân và tràn số.",
  reading: `
<h4>Vì sao máy tính dùng nhị phân?</h4>
<p>Máy tính được tạo nên từ hàng tỉ công tắc điện tử siêu nhỏ gọi là <b>transistor</b>. Mỗi công tắc chỉ có hai trạng thái: <b>bật (1)</b> hoặc <b>tắt (0)</b>. Vì vậy mọi loại dữ liệu — số, văn bản, âm thanh, hình ảnh, video và lệnh của chương trình — đều phải được đổi sang <b>nhị phân</b> (các số 1 và 0) thì máy tính mới xử lý được.</p>
<ul><li>Dữ liệu được xử lý bằng các <b>cổng logic (logic gate)</b>, vốn chỉ làm việc với số 1 và 0.</li>
<li>Dữ liệu được lưu trong các <b>thanh ghi (register)</b> (bộ nhớ nhỏ, rất nhanh nằm trong CPU) dưới dạng một số bit cố định, ví dụ 8, 16 hoặc 32 bit.</li></ul>
<p>Một chữ số nhị phân gọi là một <b>bit</b>. 4 bit là một <b>nibble</b> và 8 bit là một <b>byte</b>.</p>

<h4>Các hệ cơ số</h4>
<table class="tbl"><tr><th>Hệ số</th><th>Cơ số</th><th>Chữ số sử dụng</th></tr>
<tr><td><b>Thập phân</b> (denary)</td><td>10</td><td>0 1 2 3 4 5 6 7 8 9</td></tr>
<tr><td><b>Nhị phân</b> (binary)</td><td>2</td><td>0 1</td></tr>
<tr><td><b>Thập lục phân</b> (hexadecimal)</td><td>16</td><td>0–9 và A–F (bài sau)</td></tr></table>
<p>Trong hệ thập phân, mỗi cột có giá trị gấp 10 lần cột bên phải nó (1, 10, 100…). Trong hệ nhị phân, mỗi cột có giá trị <b>gấp 2 lần</b> cột bên phải nó.</p>
<table class="tbl center"><tr><th>128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr></table>

<h4>Nhị phân → thập phân</h4>
<p>Cộng các giá trị vị trí của mọi cột có chữ số 1.</p>
<div class="example"><b>Ví dụ:</b> 01011001 = 64 + 16 + 8 + 1 = <b>89</b></div>
<p>Với số 16 bit, các giá trị vị trí cứ tiếp tục gấp đôi: 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, rồi 128 … 1.</p>

<h4>Thập phân → nhị phân</h4>
<p><b>Cách 1 – trừ dần các giá trị vị trí.</b> Bắt đầu từ bên trái. Nếu giá trị vị trí nhỏ hơn hoặc bằng số đang xét thì viết 1 rồi trừ đi; nếu không thì viết 0.</p>
<div class="example"><b>Ví dụ: 142</b><br>142 − 128 = 14 → 1 · 64 không → 0 · 32 không → 0 · 16 không → 0 · 14 − 8 = 6 → 1 · 6 − 4 = 2 → 1 · 2 − 2 = 0 → 1 · 1 không → 0<br>142 = <b>10001110</b></div>
<p><b>Cách 2 – chia cho 2.</b> Cứ chia tiếp cho 2 và ghi lại từng số dư. Đọc các số dư <b>từ dưới lên trên</b>.</p>
<pre class="code">142 ÷ 2 = 71 r 0
 71 ÷ 2 = 35 r 1
 35 ÷ 2 = 17 r 1
 17 ÷ 2 =  8 r 1
  8 ÷ 2 =  4 r 0
  4 ÷ 2 =  2 r 0
  2 ÷ 2 =  1 r 0
  1 ÷ 2 =  0 r 1     → read upwards: 10001110</pre>
<div class="tip"><b>Những điều nên nhớ:</b> số 8 bit lớn nhất là 11111111 = <b>255</b> (2⁸ − 1). Số 16 bit lớn nhất là <b>65 535</b> (2¹⁶ − 1). Với <i>n</i> bit bạn lưu được 2ⁿ giá trị khác nhau. Số nhị phân lẻ luôn kết thúc bằng 1.</div>

<h4>Cộng hai số nhị phân 8 bit</h4>
<table class="tbl"><tr><th>Phép cộng</th><th>Kết quả</th><th>Ghi</th><th>Nhớ</th></tr>
<tr><td>0 + 0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0 + 1</td><td>1</td><td>1</td><td>0</td></tr>
<tr><td>1 + 1</td><td>2 (là 10 trong nhị phân)</td><td>0</td><td>1</td></tr><tr><td>1 + 1 + 1</td><td>3 (là 11 trong nhị phân)</td><td>1</td><td>1</td></tr></table>
<p>Làm từ <b>phải sang trái</b>, nhớ sang cột kế tiếp, giống như cộng số thập phân.</p>
<pre class="code">  carry   1 1 1 1
          0 1 0 1 1 1 0 1   (93)
        + 0 0 1 1 0 1 1 1   (55)
          ---------------
          1 0 0 1 0 1 0 0   (148)</pre>

<h4>Tràn số (overflow)</h4>
<p>Một thanh ghi chỉ chứa được một số bit cố định. Nếu kết quả của phép cộng cần <b>nhiều bit hơn số bit của thanh ghi</b> thì xảy ra <b>lỗi tràn số (overflow error)</b>. Với thanh ghi 8 bit, điều này xảy ra khi kết quả <b>lớn hơn 255</b> — bit thứ 9 xuất hiện nhưng không còn chỗ để lưu, nên kết quả được lưu là sai.</p>
<pre class="code">   1 1 0 1 0 0 1 0   (210)
 + 0 1 1 0 0 1 1 0   (102)
 -----------------
 1 0 0 1 1 1 0 0 0   (312 needs 9 bits → overflow!)</pre>
<p>Thanh ghi chỉ giữ lại 00111000 (56), đây là kết quả sai. Mỗi máy tính hay thiết bị có một <b>giới hạn định sẵn</b> (ví dụ 16 bit), và lỗi tràn số xảy ra khi cần trả về một giá trị nằm ngoài giới hạn đó.</p>
<div class="keywords"><b>Từ khóa:</b> binary (nhị phân), bit, nibble, byte, denary (thập phân), base 2 (cơ số 2), base 10 (cơ số 10), place value (giá trị vị trí), register (thanh ghi), logic gate (cổng logic), carry (nhớ), overflow error (lỗi tràn số)</div>`
},
"1.2": {
  title: "Hệ thập lục phân",
  summary: "Cơ số 16: chuyển đổi giữa thập lục phân, thập phân và nhị phân, và nơi hệ này được dùng.",
  reading: `
<h4>Hệ thập lục phân là gì?</h4>
<p><b>Hệ thập lục phân (hexadecimal)</b>, gọi tắt là hex, là hệ số <b>cơ số 16</b>. Hệ này cần 16 chữ số khác nhau, nên sau 0–9 người ta dùng các chữ cái A–F.</p>
<table class="tbl center"><tr><th>Thập phân</th><td>0–9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr>
<tr><th>Hex</th><td>0–9</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td></tr>
<tr><th>Nhị phân</th><td>0000–1001</td><td>1010</td><td>1011</td><td>1100</td><td>1101</td><td>1110</td><td>1111</td></tr></table>
<p>Mỗi cột hex có giá trị <b>gấp 16 lần</b> cột bên phải nó: 4096 · 256 · 16 · 1.</p>

<h4>Hex → thập phân</h4>
<p>Nhân mỗi chữ số với giá trị vị trí của nó rồi cộng lại.</p>
<div class="example"><b>Ví dụ:</b> 2F = (2 × 16) + (15 × 1) = 32 + 15 = <b>47</b><br><b>Ví dụ:</b> 1A3 = (1 × 256) + (10 × 16) + (3 × 1) = 256 + 160 + 3 = <b>419</b></div>

<h4>Thập phân → hex</h4>
<p>Chia cho 16. Phần nguyên của thương là chữ số hàng 16 và số dư là chữ số hàng đơn vị (dùng chữ cái cho 10–15).</p>
<div class="example"><b>Ví dụ: 199</b> → 199 ÷ 16 = 12 dư 7 → 12 = C → <b>C7</b>.<br>Với số từ 256 trở lên, chia cho 256 trước rồi mới chia cho 16. Hoặc đổi sang nhị phân trước rồi mới đổi sang hex.</div>

<h4>Nhị phân ↔ hex (cách dễ nhất!)</h4>
<p>Một chữ số hex đúng bằng <b>4 bit (một nibble)</b>.</p>
<ul><li><b>Nhị phân → hex:</b> tách số nhị phân thành các nhóm 4 bit <b>bắt đầu từ bên phải</b> (thêm số 0 vào đầu nếu cần), rồi đổi từng nhóm.</li>
<li><b>Hex → nhị phân:</b> viết mỗi chữ số hex thành 4 bit.</li></ul>
<pre class="code">1011 0110 1110      →  B 6 E   (B6E)
   3    D    9      →  0011 1101 1001</pre>
<div class="tip"><b>Cẩn thận:</b> 110101 có 6 bit. Nhóm từ bên phải: 11 0101 → 0011 0101 → <b>35</b>. Nhóm từ bên trái sẽ cho kết quả sai.</div>

<h4>Vì sao dùng hệ thập lục phân?</h4>
<ul><li>Hex <b>ngắn</b> hơn nhiều so với nhị phân — một chữ số hex thay cho 4 bit — nên <b>con người dễ</b> đọc, viết và nhớ hơn.</li>
<li>Con người <b>ít nhầm lẫn hơn</b> khi chép hex so với chép những chuỗi dài toàn số 1 và 0.</li>
<li>Hex đổi qua lại với nhị phân rất dễ.</li></ul>
<p>Bản thân máy tính <b>không</b> dùng hex — nó vẫn làm việc bằng nhị phân. Hex chỉ là cách thân thiện hơn để con người <i>hiển thị</i> các giá trị nhị phân.</p>

<h4>Hex được dùng ở đâu?</h4>
<table class="tbl"><tr><th>Ứng dụng</th><th>Ví dụ</th></tr>
<tr><td><b>Địa chỉ MAC</b> (nhận dạng một thiết bị trên mạng)</td><td>00-1C-B3-4F-25-FE</td></tr>
<tr><td><b>Mã màu</b> trong HTML/CSS (giá trị đỏ, lục, lam)</td><td>#FF0000 = đỏ, #FFFFFF = trắng</td></tr>
<tr><td><b>Thông báo lỗi và bản sao bộ nhớ (memory dump)</b> (địa chỉ bộ nhớ)</td><td>Error at 0x00FF3A2C</td></tr>
<tr><td><b>Địa chỉ IPv6</b></td><td>2001:0db8:85a3::8a2e:0370:7334</td></tr>
<tr><td><b>Hợp ngữ / mã máy</b> và gỡ lỗi</td><td>LDA 3F</td></tr>
<tr><td><b>URL</b> (ký tự đặc biệt)</td><td>%20 = dấu cách</td></tr></table>
<div class="keywords"><b>Từ khóa:</b> hexadecimal (thập lục phân), base 16 (cơ số 16), nibble, MAC address (địa chỉ MAC), HTML colour code (mã màu HTML), memory dump, error code (mã lỗi), IPv6</div>`
},
"1.3": {
  title: "Dịch bit và số bù hai",
  summary: "Dịch bit logic là nhân hoặc chia cho lũy thừa của 2; số bù hai dùng để lưu số âm.",
  reading: `
<h4>Dịch bit logic</h4>
<p><b>Dịch bit logic (logical shift)</b> di chuyển mọi bit trong một thanh ghi đi một số vị trí sang <b>trái</b> hoặc sang <b>phải</b>.</p>
<ul><li>Các bit rơi ra khỏi đầu thanh ghi sẽ bị <b>mất</b>.</li>
<li>Các số <b>0</b> được đưa vào ở đầu đối diện.</li></ul>
<table class="tbl"><tr><th>Phép dịch</th><th>Tác dụng với số nguyên dương</th></tr>
<tr><td>Dịch <b>trái</b> 1 vị trí</td><td>× 2 (trái 2 vị trí = × 4, trái 3 vị trí = × 8 …)</td></tr>
<tr><td>Dịch <b>phải</b> 1 vị trí</td><td>÷ 2, phần dư bị mất (phải 2 vị trí = ÷ 4, phải 3 vị trí = ÷ 8 …)</td></tr></table>
<div class="example"><b>Dịch trái 2 vị trí:</b> 00010110 (22) → 01011000 (88) — tức là 22 × 4.<br>
<b>Dịch phải 3 vị trí:</b> 01101100 (108) → 00001101 (13) — 108 ÷ 8 = 13.5, phần .5 bị mất vì các bit 100 đã rơi ra khỏi bên phải.</div>
<h4>Khi phép dịch cho kết quả sai</h4>
<ul><li>Nếu một bit <b>1</b> bị đẩy ra khỏi bên <b>trái</b> (bit có trọng số lớn nhất bị mất) thì kết quả không còn bằng số đó × 2ⁿ — giống như tràn số. Ví dụ: 11000001 (193) dịch trái 1 → 10000010 (130), không phải 386.</li>
<li>Nếu một bit <b>1</b> bị đẩy ra khỏi bên <b>phải</b> (bit có trọng số nhỏ nhất bị mất) thì kết quả bị làm tròn xuống và mất độ chính xác.</li></ul>
<div class="tip"><b>Mẹo làm bài thi:</b> luôn viết đủ 8 bit trước và sau khi dịch, và nói rõ những bit nào đã bị mất.</div>

<h4>Số bù hai (two's complement): lưu số âm</h4>
<p>Trong <b>số bù hai (two's complement)</b>, bit ngoài cùng bên trái (bit có trọng số lớn nhất, MSB) có giá trị <b>âm</b> là <b>−128</b>. Các cột còn lại có giá trị dương như bình thường.</p>
<table class="tbl center"><tr><th>−128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th></tr></table>
<ul><li>Nếu MSB là <b>0</b> thì số đó dương. Nếu MSB là <b>1</b> thì số đó âm.</li>
<li>Một số bù hai 8 bit lưu được các giá trị từ <b>−128 đến +127</b>.</li></ul>
<h4>Số bù hai → thập phân</h4>
<div class="example">11010110 = −128 + 64 + 16 + 4 + 2 = <b>−42</b><br>01010110 = 64 + 16 + 4 + 2 = <b>+86</b></div>
<h4>Số thập phân âm → số bù hai</h4>
<ol><li>Viết số <b>dương</b> tương ứng dưới dạng nhị phân 8 bit.</li>
<li><b>Đảo</b> mọi bit (0 → 1, 1 → 0). Đây là số bù một (one's complement).</li>
<li><b>Cộng 1</b>.</li></ol>
<pre class="code">−37:   +37      = 0 0 1 0 0 1 0 1
       invert   = 1 1 0 1 1 0 1 0
       add 1    = 1 1 0 1 1 0 1 1   → check: −128+64+16+8+2+1 = −37 ✓</pre>
<p><b>Mẹo nhanh:</b> chép các bit từ bên phải sang cho đến hết bit 1 đầu tiên (kể cả bit 1 đó), rồi đảo tất cả các bit nằm bên trái nó.</p>
<p>Số <b>dương</b> trong số bù hai trông giống hệt trong nhị phân thông thường (MSB là 0), miễn là chúng không vượt quá 127.</p>
<div class="keywords"><b>Từ khóa:</b> logical shift (dịch bit logic), left shift (dịch trái), right shift (dịch phải), most significant bit (MSB, bit trọng số lớn nhất), least significant bit (LSB, bit trọng số nhỏ nhất), two's complement (số bù hai), invert (đảo bit), one's complement (số bù một), sign (dấu)</div>`
},
"1.4": {
  title: "Văn bản: ASCII và Unicode",
  summary: "Văn bản được lưu bằng các mã nhị phân lấy từ một bộ ký tự — ASCII hoặc Unicode.",
  reading: `
<h4>Vì sao văn bản cần mã</h4>
<p>Máy tính chỉ lưu được nhị phân, nên mỗi ký tự bạn gõ — chữ cái, chữ số, dấu câu, dấu cách và ký hiệu — đều được gán một <b>mã nhị phân</b> riêng. Danh sách đầy đủ các ký tự mà máy tính biểu diễn được, kèm mã của chúng, gọi là <b>bộ ký tự (character set)</b>. Khi bạn nhấn một phím, mã của ký tự đó được lưu và xử lý.</p>

<h4>ASCII</h4>
<p><b>American Standard Code for Information Interchange (ASCII)</b> là một trong những bộ ký tự đầu tiên.</p>
<ul><li>ASCII chuẩn dùng <b>7 bit</b> cho mỗi ký tự → 2⁷ = <b>128</b> ký tự (chữ cái tiếng Anh, chữ số, dấu câu và các mã điều khiển như xóa và xuống dòng).</li>
<li><b>ASCII mở rộng (Extended ASCII)</b> dùng <b>8 bit</b> → <b>256</b> ký tự (thêm một số ký hiệu và chữ có dấu).</li></ul>
<table class="tbl"><tr><th>Ký tự</th><th>Mã thập phân</th><th>Nhị phân (8 bit)</th></tr>
<tr><td>dấu cách</td><td>32</td><td>00100000</td></tr><tr><td>'0'</td><td>48</td><td>00110000</td></tr>
<tr><td>'A'</td><td>65</td><td>01000001</td></tr><tr><td>'B'</td><td>66</td><td>01000010</td></tr>
<tr><td>'a'</td><td>97</td><td>01100001</td></tr></table>
<div class="tip"><b>Quy luật cần nhớ:</b> các chữ cái xếp theo thứ tự, nên nếu 'A' = 65 thì 'E' = 69. Chữ thường luôn có mã <b>lớn hơn 32</b> so với chữ hoa tương ứng ('a' = 97). <i>Ký tự</i> '7' (mã 55) không giống với <i>số</i> 7.</div>

<h4>Unicode</h4>
<p>ASCII không biểu diễn được phần lớn ngôn ngữ trên thế giới (tiếng Trung, tiếng Ả Rập, tiếng Việt, tiếng Hindi…) hay biểu tượng cảm xúc. <b>Unicode</b> được tạo ra để biểu diễn <b>mọi ký tự của mọi ngôn ngữ</b>.</p>
<ul><li>Unicode dùng <b>tối đa 32 bit (4 byte)</b> cho mỗi ký tự, nên biểu diễn được hơn một triệu ký tự.</li>
<li>Unicode gồm nhiều ngôn ngữ, ký hiệu toán học và <b>emoji</b> 😀.</li>
<li>128 ký tự đầu tiên của Unicode <b>giống hệt ASCII</b>, nên Unicode tương thích ngược.</li></ul>

<h4>ASCII so với Unicode</h4>
<table class="tbl"><tr><th></th><th>ASCII</th><th>Unicode</th></tr>
<tr><td>Số bit mỗi ký tự</td><td>7 (mở rộng: 8)</td><td>Tối đa 32 (nhiều hơn ASCII)</td></tr>
<tr><td>Số ký tự</td><td>128 (mở rộng: 256)</td><td>Hơn 1 triệu</td></tr>
<tr><td>Ngôn ngữ</td><td>Chỉ tiếng Anh</td><td>Mọi ngôn ngữ trên thế giới + emoji</td></tr>
<tr><td>Dung lượng tệp văn bản</td><td>Nhỏ hơn</td><td>Lớn hơn (nhiều bit mỗi ký tự hơn)</td></tr></table>
<h4>Văn bản cần bao nhiêu dung lượng?</h4>
<p>Dung lượng (bit) = số ký tự × số bit mỗi ký tự. Ví dụ: "Hello World" có 11 ký tự (dấu cách cũng được tính!). Với ASCII 8 bit, đó là 11 × 8 = 88 bit = <b>11 byte</b>.</p>
<div class="keywords"><b>Từ khóa:</b> character set (bộ ký tự), ASCII, extended ASCII (ASCII mở rộng), Unicode, emoji, character code (mã ký tự), 7-bit, 8-bit, 32-bit</div>`
},
"1.5": {
  title: "Âm thanh",
  summary: "Lấy mẫu biến sóng âm tương tự thành nhị phân. Tần số lấy mẫu và độ phân giải mẫu ảnh hưởng đến chất lượng và dung lượng tệp.",
  reading: `
<h4>Từ sóng âm đến nhị phân</h4>
<p>Âm thanh là một <b>dao động</b> lan truyền trong không khí dưới dạng sóng. Âm thanh tự nhiên là <b>tương tự (analogue)</b> — nó biến đổi mượt mà và liên tục. Máy tính không lưu được một sóng liên tục, nên sóng phải được <b>lấy mẫu (sampled)</b> rồi chuyển thành nhị phân.</p>
<ol><li>Một <b>micro</b> biến dao động âm thanh thành tín hiệu điện (tương tự).</li>
<li>Một <b>bộ chuyển đổi tương tự sang số (analogue-to-digital converter, ADC)</b> đo <b>độ cao (biên độ)</b> của sóng tại những khoảng thời gian đều đặn. Mỗi lần đo là một <b>mẫu (sample)</b>.</li>
<li>Mỗi mẫu được lưu dưới dạng một số nhị phân.</li>
<li>Để phát lại, một bộ chuyển đổi số sang tương tự (DAC) và loa dựng lại sóng âm.</li></ol>
<svg viewBox="0 0 520 160" class="diagram" role="img" aria-label="Một sóng âm với các điểm lấy mẫu tại những khoảng đều nhau"><line x1="20" y1="80" x2="510" y2="80" stroke="#c9cfdd" stroke-width="1.5"/><path d="M20,80 C60,10 100,10 140,80 S220,150 260,80 S340,10 380,80 S460,150 500,80" fill="none" stroke="#1b3a6b" stroke-width="3"/>${[20,55,90,125,160,195,230,265,300,335,370,405,440,475].map(x=>{const t=(x-20)/240*Math.PI*2;const y=80-Math.sin(t)*52;return `<line x1="${x}" y1="80" x2="${x}" y2="${y.toFixed(1)}" stroke="#e3b341" stroke-width="3"/><circle cx="${x}" cy="${y.toFixed(1)}" r="4.5" fill="#a87908"/>`}).join("")}<text x="20" y="155" font-size="13" fill="#4c5873" font-family="Nunito">Mỗi thanh vàng = một mẫu (biên độ được đo tại những khoảng đều nhau)</text></svg>

<h4>Tần số lấy mẫu và độ phân giải mẫu</h4>
<table class="tbl"><tr><th>Thuật ngữ</th><th>Ý nghĩa</th><th>Khi tăng lên</th></tr>
<tr><td><b>Tần số lấy mẫu (sample rate)</b></td><td>Số mẫu lấy <b>mỗi giây</b>, đo bằng hertz (Hz). Chất lượng CD = 44 100 Hz.</td><td>Sóng được đo thường xuyên hơn, nên bản ghi <b>chính xác hơn</b> và <b>tệp lớn hơn</b>.</td></tr>
<tr><td><b>Độ phân giải mẫu (sample resolution)</b> (còn gọi là độ sâu bit, bit depth)</td><td>Số <b>bit dùng để lưu mỗi mẫu</b>, ví dụ 8, 16 hoặc 24 bit.</td><td>Mỗi biên độ được lưu chính xác hơn (nhiều giá trị khả dĩ hơn: 2ⁿ), nên bản ghi <b>chính xác hơn</b> và <b>tệp lớn hơn</b>.</td></tr></table>
<div class="tip">Cả hai thay đổi đều cải thiện <b>độ chính xác/chất lượng</b> nhưng làm <b>tăng dung lượng tệp</b>. Đây là sự đánh đổi bạn phải giải thích được trong bài thi.</div>

<h4>Tính dung lượng tệp âm thanh</h4>
<pre class="code">file size (bits) = sample rate × sample resolution × length (seconds)
                   × number of channels (1 = mono, 2 = stereo)</pre>
<p>Sau đó đổi đơn vị: ÷ 8 → byte, ÷ 1024 → KiB, ÷ 1024 → MiB. Luôn dùng <b>1024</b>, không dùng 1000.</p>
<div class="example"><b>Ví dụ:</b> một bản ghi mono dài 10 giây, tần số lấy mẫu 8000 Hz, độ phân giải 8 bit.<br>
8000 × 8 × 10 = 640 000 bit<br>640 000 ÷ 8 = 80 000 byte<br>80 000 ÷ 1024 = <b>78.125 KiB</b></div>
<div class="example"><b>Ví dụ:</b> một bản nhạc dài 2 phút ở 44 100 Hz, 16 bit, mono.<br>44 100 × 16 × 120 = 84 672 000 bit ÷ 8 = 10 584 000 byte ÷ 1024 = 10 335.9 KiB ÷ 1024 ≈ <b>10.09 MiB</b></div>
<p>Nhớ đổi phút ra <b>giây</b> trước. Nếu đề bài không nhắc đến stereo thì coi như chỉ có một kênh.</p>
<div class="keywords"><b>Từ khóa:</b> analogue (tương tự), digital (số), sound wave (sóng âm), amplitude (biên độ), sampling (lấy mẫu), sample (mẫu), sample rate (tần số lấy mẫu), hertz (Hz), sample resolution (độ phân giải mẫu), bit depth, ADC, mono, stereo, file size (dung lượng tệp)</div>`
},
"1.6": {
  title: "Hình ảnh",
  summary: "Ảnh bitmap là một lưới các điểm ảnh. Độ phân giải và độ sâu màu ảnh hưởng đến chất lượng và dung lượng tệp.",
  reading: `
<h4>Điểm ảnh (pixel)</h4>
<p>Ảnh bitmap được tạo từ một lưới các chấm nhỏ gọi là <b>điểm ảnh (pixel)</b> (picture element). Mỗi điểm ảnh có một màu, và màu đó được lưu dưới dạng một <b>số nhị phân</b>.</p>
<svg viewBox="0 0 340 120" class="diagram" role="img" aria-label="Ảnh 1 bit hình mặt cười và dãy nhị phân dùng để lưu nó">${(()=>{const g=["00111100","01000010","10100101","10000001","10100101","10011001","01000010","00111100"];let s="";g.forEach((r,y)=>[...r].forEach((b,x)=>{s+=`<rect x="${10+x*13}" y="${6+y*13}" width="12" height="12" fill="${b==="1"?"#1b3a6b":"#fff"}" stroke="#c9cfdd"/>`}));g.forEach((r,y)=>{s+=`<text x="140" y="${16+y*13}" font-size="12" font-family="JetBrains Mono, monospace" fill="#16213a">${r}</text>`});return s+`<text x="230" y="60" font-size="12" fill="#4c5873" font-family="Nunito">1 = xanh navy</text><text x="230" y="78" font-size="12" fill="#4c5873" font-family="Nunito">0 = trắng</text>`})()}</svg>

<h4>Độ phân giải (resolution)</h4>
<p><b>Độ phân giải</b> là <b>số điểm ảnh</b> của bức ảnh, thường viết dưới dạng <b>rộng × cao</b>, ví dụ 1920 × 1080.</p>
<ul><li>Độ phân giải cao hơn → nhiều điểm ảnh hơn → nhiều chi tiết hơn, ảnh sắc nét hơn, <b>tệp lớn hơn</b>.</li>
<li>Độ phân giải thấp hơn → ảnh bị <b>vỡ hạt (pixelated)</b> (nhìn thấy các ô vuông) khi phóng to, nhưng tệp nhỏ hơn.</li></ul>

<h4>Độ sâu màu (colour depth)</h4>
<p><b>Độ sâu màu</b> là <b>số bit dùng để biểu diễn màu của mỗi điểm ảnh</b>.</p>
<table class="tbl"><tr><th>Độ sâu màu</th><th>Số màu (2ⁿ)</th></tr>
<tr><td>1 bit</td><td>2 (ví dụ đen và trắng)</td></tr><tr><td>2 bit</td><td>4</td></tr><tr><td>4 bit</td><td>16</td></tr>
<tr><td>8 bit</td><td>256</td></tr><tr><td>16 bit</td><td>65 536</td></tr><tr><td>24 bit ("true colour", màu thực)</td><td>16 777 216 (≈ 16,7 triệu)</td></tr></table>
<ul><li>Độ sâu màu cao hơn → nhiều màu hơn, ảnh chân thực hơn, <b>tệp lớn hơn</b>.</li></ul>

<h4>Tính dung lượng tệp ảnh</h4>
<pre class="code">file size (bits) = width (pixels) × height (pixels) × colour depth (bits)</pre>
<div class="example"><b>Ví dụ:</b> một ảnh 800 × 600 có độ sâu màu 24 bit.<br>800 × 600 × 24 = 11 520 000 bit<br>÷ 8 = 1 440 000 byte<br>÷ 1024 = 1406.25 KiB<br>÷ 1024 ≈ <b>1.37 MiB</b></div>
<div class="example"><b>Ví dụ:</b> độ sâu màu 6 bit hiển thị được bao nhiêu màu? 2⁶ = <b>64</b> màu.</div>
<div class="tip"><b>Mẹo làm bài thi:</b> "dung lượng tệp và chất lượng ảnh tăng khi độ phân giải và độ sâu màu tăng." Hãy học thuộc câu này! Hãy ghi đáp án theo <b>đơn vị mà đề bài yêu cầu</b>.</div>
<p><i>Mở rộng:</i> các tệp ảnh thực tế thường lớn hơn một chút so với kết quả tính toán vì tệp còn lưu <b>siêu dữ liệu (metadata)</b> (chiều rộng, chiều cao, độ sâu màu, ngày chụp…). <b>Đồ họa vector (vector graphics)</b> thì khác: chúng lưu các hình dạng dưới dạng công thức toán học, nên có thể phóng to mà không bị vỡ hạt (dùng cho logo).</p>
<div class="keywords"><b>Từ khóa:</b> pixel (điểm ảnh), bitmap, resolution (độ phân giải), colour depth (độ sâu màu), bits per pixel (bit mỗi điểm ảnh), pixelated (vỡ hạt), file size (dung lượng tệp), metadata (siêu dữ liệu)</div>`
},
"1.7": {
  title: "Lưu trữ dữ liệu và nén",
  summary: "Các đơn vị lưu trữ từ bit đến exbibyte (dùng 1024), vì sao phải nén tệp, nén có mất dữ liệu và không mất dữ liệu, và RLE.",
  reading: `
<h4>Đo dung lượng lưu trữ</h4>
<table class="tbl"><tr><th>Đơn vị</th><th>Bằng</th></tr>
<tr><td><b>bit</b></td><td>một số 1 hoặc 0</td></tr><tr><td><b>nibble</b></td><td>4 bit</td></tr><tr><td><b>byte</b></td><td>8 bit</td></tr>
<tr><td><b>kibibyte (KiB)</b></td><td>1024 byte</td></tr><tr><td><b>mebibyte (MiB)</b></td><td>1024 KiB</td></tr>
<tr><td><b>gibibyte (GiB)</b></td><td>1024 MiB</td></tr><tr><td><b>tebibyte (TiB)</b></td><td>1024 GiB</td></tr>
<tr><td><b>pebibyte (PiB)</b></td><td>1024 TiB</td></tr><tr><td><b>exbibyte (EiB)</b></td><td>1024 PiB</td></tr></table>
<p>Để đổi sang đơn vị <b>lớn hơn</b>, hãy <b>chia</b> (bit ÷ 8 → byte, rồi ÷ 1024 cho mỗi bậc). Để đổi sang đơn vị <b>nhỏ hơn</b>, hãy <b>nhân</b>.</p>
<div class="example"><b>Ví dụ:</b> 3 MiB = 3 × 1024 = 3072 KiB · 4096 KiB = 4096 ÷ 1024 = 4 MiB · 2 KiB = 2 × 1024 × 8 = 16 384 bit</div>
<div class="tip">Trong các bài tính của IGCSE luôn dùng <b>1024</b>, không bao giờ dùng 1000. (Nhà sản xuất ổ cứng dùng 1000, vì vậy ổ "500 GB" hiện trên máy tính ít dung lượng hơn.)</div>

<h4>Vì sao phải nén tệp?</h4>
<p><b>Nén (compression)</b> làm giảm <b>kích thước tệp</b>. Điều này có nghĩa là:</p>
<ul><li>cần <b>ít dung lượng lưu trữ hơn</b> trên thiết bị hoặc máy chủ;</li>
<li>cần <b>ít băng thông (bandwidth) hơn</b> để gửi qua mạng;</li>
<li><b>thời gian truyền ngắn hơn</b> — tệp tải lên, tải xuống và phát trực tuyến nhanh hơn;</li>
<li>có thể giảm chi phí (lưu trữ đám mây, gói dữ liệu) và giúp đáp ứng giới hạn dung lượng tệp đính kèm email.</li></ul>

<h4>Nén có mất dữ liệu (lossy)</h4>
<p>Nén <b>có mất dữ liệu (lossy)</b> làm giảm dung lượng tệp bằng cách <b>loại bỏ vĩnh viễn một phần dữ liệu</b>. Tệp gốc <b>không thể</b> được dựng lại chính xác.</p>
<ul><li>Hình ảnh: giảm <b>độ phân giải</b> hoặc <b>độ sâu màu</b>; JPEG loại bỏ những chi tiết mà mắt người khó nhận ra.</li>
<li>Âm thanh: giảm <b>tần số lấy mẫu</b> hoặc <b>độ phân giải mẫu</b>; MP3 dùng <b>perceptual music shaping (định hình nhạc theo cảm nhận)</b> để loại bỏ những âm thanh tai người không nghe được hoặc bị âm lớn hơn át đi.</li>
<li>Ví dụ: JPEG, MP3, MP4. Tiết kiệm dung lượng nhiều, chất lượng giảm đôi chút.</li></ul>

<h4>Nén không mất dữ liệu (lossless)</h4>
<p>Nén <b>không mất dữ liệu (lossless)</b> làm giảm dung lượng tệp <b>mà không mất vĩnh viễn bất kỳ dữ liệu nào</b>. Tệp gốc có thể được dựng lại <b>chính xác</b>. Cách này cần thiết cho văn bản, mã chương trình, bảng tính và ảnh y khoa, nơi mất dù chỉ một bit cũng gây hậu quả. Ví dụ: PNG, GIF, ZIP, FLAC.</p>
<h4>Mã hóa độ dài chạy (run-length encoding, RLE)</h4>
<p><b>RLE</b> là một phương pháp nén không mất dữ liệu. Nó thay một <b>chuỗi (run)</b> dữ liệu giống nhau lặp lại bằng <b>một bản sao của dữ liệu đó kèm số lần lặp</b>.</p>
<pre class="code">Text:   AAAAABBBCCCCCCCCD   →  5A 3B 8C 1D     (17 characters → 8)
Pixels: W W W W W W B B W W W W   →  6W 2B 4W</pre>
<p>RLE hiệu quả nhất khi dữ liệu có <b>những chuỗi lặp dài</b> (ví dụ ảnh đơn giản có những mảng lớn cùng một màu). RLE <b>không hiệu quả</b> khi dữ liệu thay đổi liên tục: "ABCD" thành "1A1B1C1D", tức là <b>lớn hơn</b> bản gốc!</p>
<table class="tbl"><tr><th></th><th>Có mất dữ liệu</th><th>Không mất dữ liệu</th></tr>
<tr><td>Có loại bỏ dữ liệu?</td><td>Có, vĩnh viễn</td><td>Không</td></tr><tr><td>Khôi phục được bản gốc?</td><td>Không</td><td>Có, chính xác</td></tr>
<tr><td>Mức giảm dung lượng</td><td>Lớn hơn</td><td>Nhỏ hơn</td></tr><tr><td>Dùng cho</td><td>Ảnh chụp, nhạc, video phát trực tuyến</td><td>Văn bản, mã chương trình, bảng tính, ảnh chụp y khoa</td></tr></table>
<div class="keywords"><b>Từ khóa:</b> bit, nibble, byte, kibibyte, mebibyte, gibibyte, tebibyte, pebibyte, exbibyte, compression (nén), bandwidth (băng thông), lossy (nén có mất dữ liệu), lossless (nén không mất dữ liệu), run-length encoding (RLE), perceptual music shaping</div>`
}
});

Object.assign(window.VI.glossary, {
  "1.1a": [["Bit", "Một chữ số nhị phân, 0 hoặc 1"], ["Nibble", "Một nhóm 4 bit"], ["Byte", "Một nhóm 8 bit"], ["Register", "Một vị trí nhớ nhỏ, rất nhanh nằm trong CPU"], ["Logic gate", "Linh kiện điện tử xử lý các đầu vào nhị phân để cho ra một đầu ra nhị phân"], ["Transistor", "Một công tắc điện tử siêu nhỏ, hoặc bật hoặc tắt"]],
  "1.1b": [["Denary", "Hệ số cơ số 10"], ["Binary", "Hệ số cơ số 2"], ["Place value", "Giá trị của một cột trong một hệ số"], ["Most significant bit", "Bit ngoài cùng bên trái, có giá trị vị trí lớn nhất"], ["Least significant bit", "Bit ngoài cùng bên phải, có giá trị vị trí là 1"]],
  "1.1c": [["Overflow error", "Khi kết quả cần nhiều bit hơn số bit mà thanh ghi chứa được"], ["Carry", "Số 1 được chuyển sang cột kế tiếp khi cộng"], ["Register limit", "Số bit tối đa định sẵn mà một thiết bị có thể lưu"]],
  "1.2a": [["Hexadecimal", "Hệ số cơ số 16 dùng 0–9 và A–F"], ["Nibble", "4 bit, đúng bằng một chữ số thập lục phân"]],
  "1.2b": [["MAC address", "Địa chỉ thập lục phân duy nhất gán cho một card giao tiếp mạng"], ["HTML colour code", "Mã thập lục phân như #FF0000 quy định giá trị đỏ, lục và lam"], ["Memory dump", "Bản hiển thị nội dung các vị trí nhớ, thường ở dạng thập lục phân"], ["IPv6 address", "Địa chỉ Internet được viết thành các nhóm chữ số thập lục phân"]],
  "1.3a": [["Logical left shift", "Dịch mọi bit sang trái; mỗi vị trí dịch nhân số nguyên dương với 2"], ["Logical right shift", "Dịch mọi bit sang phải; mỗi vị trí dịch chia số nguyên dương cho 2"], ["Multiple shift", "Dịch các bit nhiều hơn một vị trí cùng lúc"]],
  "1.3b": [["Two's complement", "Hệ nhị phân trong đó bit trọng số lớn nhất có giá trị âm, dùng để lưu số âm"], ["Sign bit", "Bit trọng số lớn nhất, cho biết một số bù hai là âm hay không"], ["One's complement", "Kết quả khi đảo mọi bit"]],
  "1.4a": [["Character set", "Danh sách các ký tự máy tính biểu diễn được, mỗi ký tự có một mã nhị phân riêng"], ["ASCII", "Bộ ký tự 7 bit gồm 128 ký tự"], ["Extended ASCII", "Bộ ký tự 8 bit gồm 256 ký tự"], ["Unicode", "Bộ ký tự dùng tối đa 32 bit, bao phủ mọi ngôn ngữ và emoji"], ["Character code", "Số duy nhất đại diện cho một ký tự"]],
  "1.5a": [["Sampling", "Đo biên độ của sóng âm tại những khoảng đều đặn"], ["Sample rate", "Số mẫu lấy mỗi giây"], ["Sample resolution", "Số bit dùng để lưu mỗi mẫu"], ["Amplitude", "Độ cao của sóng âm"], ["Analogue", "Dữ liệu biến đổi liên tục và mượt mà"], ["ADC", "Thiết bị chuyển tín hiệu tương tự thành dữ liệu số"]],
  "1.5b": [["Hertz", "Đơn vị đo số mẫu (hoặc số chu kỳ) mỗi giây"], ["Mono", "Âm thanh ghi trên một kênh"], ["Stereo", "Âm thanh ghi trên hai kênh"]],
  "1.6a": [["Pixel", "Phần tử nhỏ nhất của ảnh bitmap"], ["Resolution", "Số điểm ảnh của một bức ảnh"], ["Colour depth", "Số bit dùng để biểu diễn màu của mỗi điểm ảnh"], ["Bitmap", "Ảnh được tạo thành từ một lưới các điểm ảnh"], ["Metadata", "Dữ liệu về một tệp, như chiều rộng, chiều cao và độ sâu màu của ảnh"], ["Pixelated", "Khi ảnh phóng to hiện rõ các điểm ảnh hình vuông"]],
  "1.6b": [["Image file size", "Chiều rộng × chiều cao × độ sâu màu, tính bằng bit"]],
  "1.7a": [["Kibibyte (KiB)", "1024 byte"], ["Mebibyte (MiB)", "1024 kibibyte"], ["Gibibyte (GiB)", "1024 mebibyte"], ["Tebibyte (TiB)", "1024 gibibyte"], ["Pebibyte (PiB)", "1024 tebibyte"], ["Exbibyte (EiB)", "1024 pebibyte"]],
  "1.7b": [["Compression", "Làm giảm kích thước của một tệp"], ["Bandwidth", "Lượng dữ liệu có thể gửi trong một khoảng thời gian nhất định"], ["Transmission time", "Thời gian cần để gửi một tệp qua mạng"]],
  "1.7c": [["Lossy compression", "Nén làm mất vĩnh viễn một phần dữ liệu"], ["Lossless compression", "Nén làm giảm dung lượng tệp mà không mất vĩnh viễn dữ liệu"], ["Run-length encoding", "Phương pháp nén không mất dữ liệu, lưu một chuỗi dữ liệu lặp lại thành một giá trị và một số đếm"], ["Perceptual music shaping", "Loại bỏ những âm thanh tai người không nghe được hoặc bị âm khác át đi"]]
});
