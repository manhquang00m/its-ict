window.VI = window.VI || { topics: {}, objectives: {}, bank: {}, glossary: {}, ui: {} };

Object.assign(window.VI.objectives, {
  "4.7a": "Mô tả máy in phun (inkjet), máy in laser và máy in 3D. (Syllabus 3.2.2)",
  "4.8a": "Hiểu cảm biến (sensor) là gì và mỗi loại cảm biến thu thập loại dữ liệu nào. (Syllabus 3.2.3a)",
  "4.8b": "Hiểu khi nào dùng từng loại cảm biến và chọn được cảm biến phù hợp nhất cho một tình huống cho trước. (Syllabus 3.2.3b)",
  "4.9a": "Hiểu bộ nhớ chính (primary storage) là gì, vai trò của RAM và ROM, và vì sao máy tính cần cả hai. (Syllabus 3.3.1)",
  "4.9b": "Mô tả bộ nhớ ảo (virtual memory): được tạo ra và sử dụng như thế nào, và vì sao cần thiết. (Syllabus 3.3.4)",
  "4.10a": "Hiểu bộ nhớ phụ (secondary storage) là gì. (Syllabus 3.3.2)",
  "4.10b": "Mô tả cách hoạt động của thiết bị lưu trữ từ, quang và thể rắn (flash) và cho ví dụ về mỗi loại. (Syllabus 3.3.3)",
  "4.11a": "Hiểu lưu trữ đám mây (cloud storage) là gì. (Syllabus 3.3.5)",
  "4.11b": "Giải thích ưu điểm và nhược điểm của việc lưu dữ liệu trên đám mây so với lưu cục bộ. (Syllabus 3.3.6)"
});

Object.assign(window.VI.topics, {
  "4.7": {
    title: "Máy in: máy in phun, máy in laser và máy in 3D",
    summary: "Cách máy in phun, máy in laser và máy in 3D hoạt động, và loại máy in nào phù hợp với công việc nào.",
    reading: `
<h4>Máy in phun (inkjet printer)</h4>
<ol><li>Dữ liệu được gửi đến máy in và lưu trong <b>bộ đệm</b> của máy in (printer buffer).</li>
<li><b>Đầu in</b> (print head) di chuyển ngang qua tờ giấy, phun ra <b>những giọt mực lỏng rất nhỏ</b> qua các vòi phun (nozzle). Có hai phương pháp:
<ul class="tight"><li><b>Bọt khí nhiệt (thermal bubble)</b> – một bộ phận nung nóng tạo ra bọt mực đẩy giọt mực ra ngoài.</li><li><b>Áp điện (piezoelectric)</b> – một tinh thể rung khi có dòng điện chạy qua, ép giọt mực ra ngoài.</li></ul></li>
<li>Một động cơ bước (stepper motor) đẩy giấy lên từng dòng một và quá trình lặp lại.</li></ol>
<p><b>Phù hợp nhất cho:</b> in ít trang và in <b>ảnh màu</b> chất lượng cao tại nhà. Giá mua rẻ, nhưng hộp mực hết nhanh và đắt; in chậm hơn; mực có thể bị nhòe.</p>
<h4>Máy in laser (laser printer)</h4>
<ol><li>Cả trang được lưu vào <b>bộ nhớ</b> của máy in trước.</li>
<li>Một <b>trống in</b> (drum) quay được tích <b>điện dương</b>.</li>
<li>Tia <b>laser</b> quét ngang qua trống, <b>làm mất điện dương</b> ở một số vùng. Phần còn lại mang điện âm, khớp với chữ và hình ảnh — tạo thành một <b>ảnh tĩnh điện</b> của trang.</li>
<li>Trống được phủ <b>mực bột</b> (toner) mang điện dương. Mực chỉ bám vào những phần <b>mang điện âm</b> của trống.</li>
<li>Một <b>tờ giấy mang điện âm</b> được lăn qua trống, nên mực chuyển sang giấy.</li>
<li>Một <b>bộ sấy</b> (fuser – các trục lăn nóng) làm chảy mực để dính chặt vào giấy. Trống được khử điện, sẵn sàng cho trang tiếp theo.</li></ol>
<p><b>Phù hợp nhất cho:</b> in <b>số lượng lớn</b> nhanh chóng — văn phòng, trường học. Nhanh, êm, chữ sắc nét, mực bột dùng được lâu, chi phí mỗi trang thấp. Nhưng giá mua cao; máy in laser màu rất đắt; bụi mực có thể gây hại cho sức khỏe; tiêu thụ nhiều điện.</p>
<h4>Máy in 3D (3D printer)</h4>
<p><b>Máy in 3D</b> tạo ra một vật thể rắn từ một thiết kế số (làm bằng phần mềm <b>CAD</b> hoặc từ một bản quét 3D). Đây là <b>sản xuất bồi đắp (additive manufacturing)</b>: vật thể được tạo nên <b>từng lớp một</b>.</p>
<ul><li>Phần mềm cắt thiết kế thành các lớp ngang mỏng.</li>
<li>Vật liệu như nhựa (từ một đầu phun được nung nóng), bột kim loại, nhựa lỏng (resin) hoặc thậm chí thực phẩm được đắp lên hoặc làm cứng lại (bằng laser hoặc tia UV) từng lớp một.</li>
<li>Ứng dụng: mẫu thử, chi thể giả, chi tiết làm theo yêu cầu, cấy ghép nha khoa, mô hình, nội tạng nhân tạo (in sinh học).</li>
<li>Ưu điểm: làm được món đồ độc bản theo yêu cầu; tạo được hình dạng phức tạp; ít lãng phí vật liệu. Nhược điểm: chậm; vật liệu có thể đắt; có nguy cơ in các vật bị cấm hoặc vi phạm bản quyền.</li></ul>
<table class="tbl"><tr><th>Tình huống</th><th>Máy in phù hợp nhất</th></tr>
<tr><td>Một trường học in 500 bản tin</td><td>Laser</td></tr><tr><td>Một học sinh in vài tấm ảnh đi nghỉ tại nhà</td><td>Máy in phun</td></tr><tr><td>Một bệnh viện làm bàn tay giả theo yêu cầu</td><td>Máy in 3D</td></tr></table>
<div class="keywords"><b>Từ khóa:</b> inkjet, print head, nozzle, thermal bubble, piezoelectric, buffer, laser printer, drum, electrostatic charge, toner, fuser, 3D printer, additive manufacturing, CAD, layer</div>`
  },
  "4.8": {
    title: "Cảm biến (sensor)",
    summary: "Mười bốn loại cảm biến, chúng đo gì và cách chọn đúng loại.",
    reading: `
<h4>Cảm biến là gì?</h4>
<p><b>Cảm biến</b> (sensor) là một <b>thiết bị nhập</b> dùng để <b>đo một đại lượng vật lý</b> của môi trường (ví dụ nhiệt độ, ánh sáng, áp suất). Hầu hết cảm biến tạo ra tín hiệu <b>tương tự</b> (analogue), được bộ <b>ADC</b> chuyển thành tín hiệu số để bộ vi xử lý (microprocessor) xử lý. Cảm biến được dùng trong hệ thống <b>giám sát</b> (monitoring – ghi lại và hiển thị/cảnh báo) và hệ thống <b>điều khiển</b> (control – máy tính phản ứng bằng cách dùng cơ cấu chấp hành).</p>
<div class="tip"><b>Quan trọng:</b> cảm biến chỉ <b>gửi dữ liệu</b> — nó không tự quyết định gì và không tự bật thiết bị nào. <b>Bộ vi xử lý</b> so sánh dữ liệu với các giá trị đã lưu và quyết định cần làm gì.</div>
<table class="tbl"><tr><th>Cảm biến</th><th>Đo / phát hiện</th><th>Ví dụ ứng dụng</th></tr>
<tr><td><b>Acoustic</b> (âm thanh)</td><td>Âm thanh / mức độ ồn</td><td>Phát hiện kính vỡ trong chuông báo trộm; giám sát tiếng ồn; phát hiện rò rỉ trong đường ống</td></tr>
<tr><td><b>Accelerometer</b> (gia tốc)</td><td>Gia tốc, thay đổi tốc độ và hướng, độ nghiêng</td><td>Điện thoại xoay màn hình; túi khí trên ô tô; vòng đeo tay thể thao đếm bước chân</td></tr>
<tr><td><b>Flow</b> (lưu lượng)</td><td>Lưu lượng của chất lỏng hoặc chất khí</td><td>Đường ống nước; lượng nhiên liệu chảy trong động cơ; theo dõi hô hấp trong bệnh viện</td></tr>
<tr><td><b>Gas</b> (khí)</td><td>Nồng độ một loại khí, ví dụ O₂, CO₂, CO</td><td>Chuông báo khí carbon monoxide; nhà kính (CO₂); cảm biến oxy trong động cơ ô tô</td></tr>
<tr><td><b>Humidity</b> (độ ẩm không khí)</td><td>Lượng hơi nước trong không khí</td><td>Nhà kính; trạm thời tiết; điều hòa không khí; bảo tàng</td></tr>
<tr><td><b>Infra-red</b> (hồng ngoại)</td><td>Bức xạ hồng ngoại (nhiệt) / chùm tia hồng ngoại bị chắn</td><td>Báo động xâm nhập/chuyển động; cửa tự động; bộ thu của điều khiển TV</td></tr>
<tr><td><b>Level</b> (mức)</td><td>Mức đầy của bể hoặc bình chứa (mức chất lỏng)</td><td>Bình nhiên liệu; máy giặt; bể nước; cảnh báo lũ</td></tr>
<tr><td><b>Light</b> (ánh sáng)</td><td>Cường độ ánh sáng (độ sáng)</td><td>Đèn đường tự động; độ sáng màn hình điện thoại; nhà kính</td></tr>
<tr><td><b>Magnetic field</b> (từ trường)</td><td>Thay đổi của từ trường</td><td>Ứng dụng la bàn trên điện thoại; phát hiện cửa/cửa sổ mở; phanh chống bó cứng</td></tr>
<tr><td><b>Moisture</b> (độ ẩm vật liệu)</td><td>Lượng nước trong một vật liệu, ví dụ đất</td><td>Tưới cây tự động; phát hiện ẩm mốc trong tòa nhà</td></tr>
<tr><td><b>pH</b></td><td>Độ axit hoặc độ kiềm</td><td>Đất ở trang trại và nhà kính; bể bơi; nhà máy hóa chất; sông ngòi</td></tr>
<tr><td><b>Pressure</b> (áp suất)</td><td>Áp suất hoặc lực / trọng lượng</td><td>Thảm báo trộm; cân xe tải; áp suất lốp ô tô; màn hình cảm ứng</td></tr>
<tr><td><b>Proximity</b> (khoảng cách gần)</td><td>Vật thể ở gần đến mức nào (không cần chạm)</td><td>Cảm biến đỗ xe ô tô; tắt màn hình điện thoại khi áp vào tai</td></tr>
<tr><td><b>Temperature</b> (nhiệt độ)</td><td>Nhiệt độ</td><td>Hệ thống sưởi trung tâm; lò nướng; nhà kính; tủ lạnh; động cơ quá nhiệt</td></tr></table>
<h4>Hệ thống điều khiển dùng cảm biến hoạt động thế nào</h4>
<div class="example"><b>Điều khiển nhiệt độ nhà kính:</b> cảm biến <b>nhiệt độ</b> liên tục gửi số đo → ADC chuyển chúng sang dạng số → bộ vi xử lý so sánh mỗi số đo với khoảng giá trị đã lưu (ví dụ 20–26 °C) → nếu quá thấp, bộ vi xử lý gửi tín hiệu để cơ cấu chấp hành bật máy sưởi; nếu quá cao, một cơ cấu chấp hành mở cửa sổ → quá trình này lặp lại liên tục (vòng phản hồi – feedback loop).</div>
<div class="tip"><b>Chọn cảm biến:</b> hãy nêu tên cảm biến <b>và</b> nói nó đo gì trong tình huống đó. "Cảm biến <b>độ ẩm đất (moisture)</b>, để đo lượng nước trong đất nhằm chỉ tưới cây khi đất khô."</div>
<div class="keywords"><b>Từ khóa:</b> sensor, physical property, analogue, ADC, microprocessor, monitoring, control, feedback, actuator, stored value, acoustic, accelerometer, flow, gas, humidity, infra-red, level, light, magnetic field, moisture, pH, pressure, proximity, temperature</div>`
  },
  "4.9": {
    title: "Bộ nhớ chính: RAM và ROM",
    summary: "Bộ nhớ chính được CPU truy cập trực tiếp. RAM là bộ nhớ làm việc tạm thời; ROM chứa các lệnh khởi động.",
    reading: `
<h4>Bộ nhớ chính (primary storage)</h4>
<p><b>Bộ nhớ chính</b> (primary storage, main memory) là bộ nhớ mà <b>CPU truy cập trực tiếp</b>. Nó gồm <b>RAM</b> và <b>ROM</b>.</p>
<table class="tbl"><tr><th></th><th>RAM (random access memory – bộ nhớ truy cập ngẫu nhiên)</th><th>ROM (read only memory – bộ nhớ chỉ đọc)</th></tr>
<tr><td>Có khả biến không?</td><td><b>Khả biến (volatile)</b> — mất nội dung khi tắt nguồn điện</td><td><b>Không khả biến (non-volatile)</b> — giữ nội dung khi không có điện</td></tr>
<tr><td>Đọc / ghi</td><td>Có thể <b>đọc và ghi</b></td><td>Chỉ có thể <b>đọc</b> (thông thường không thay đổi được nội dung)</td></tr>
<tr><td>Lưu gì</td><td><b>Dữ liệu, chương trình và các phần của hệ điều hành đang được sử dụng</b></td><td><b>Các lệnh khởi động</b> (bootloader / phần sụn BIOS) cần để khởi động máy tính</td></tr>
<tr><td>Dung lượng</td><td>Lớn (ví dụ 8–32 GiB)</td><td>Nhỏ</td></tr></table>
<h4>Vì sao máy tính cần cả hai?</h4>
<ul><li>Cần <b>ROM</b> vì khi bật máy, RAM còn trống. Các lệnh để khởi động máy và nạp hệ điều hành phải được lưu ở nơi <b>không bị mất</b> khi tắt nguồn — đó là ROM.</li>
<li>Cần <b>RAM</b> vì các chương trình và dữ liệu đang dùng phải được lưu ở nơi CPU có thể <b>đọc và ghi nhanh</b> trong khi chúng chạy. ROM thì không ghi được.</li></ul>
<p>RAM càng nhiều thì càng giữ được nhiều chương trình và dữ liệu cùng lúc, nên máy chạy mượt hơn khi mở nhiều chương trình.</p>
<div class="tip"><b>Lỗi thường gặp:</b> RAM không phải nơi bạn "lưu" bài làm — việc lưu đưa nó vào <b>bộ nhớ phụ</b>, vì RAM bị xóa sạch khi mất điện.</div>
<h4>Bộ nhớ ảo (virtual memory)</h4>
<p>Khi <b>RAM đầy</b>, máy tính có thể dùng một phần của <b>bộ nhớ phụ</b> (ổ cứng hoặc SSD) như thể đó là RAM bổ sung. Đây là <b>bộ nhớ ảo</b>.</p>
<ol><li>Hệ điều hành dành riêng một vùng trên ổ cứng/SSD (tệp trang – page file / vùng hoán đổi – swap space).</li>
<li>Dữ liệu được chia thành các khối gọi là <b>trang (page)</b>.</li>
<li>Những trang <b>chưa cần dùng ngay</b> được chuyển từ RAM sang bộ nhớ ảo để giải phóng chỗ.</li>
<li>Khi một trang cần dùng lại, nó được <b>chuyển trở lại RAM</b> (hoán đổi với một trang khác).</li></ol>
<p><b>Vì sao cần thiết:</b> nó giúp máy không bị treo hoặc không mở được chương trình khi RAM đầy, và cho phép chạy những chương trình lớn hơn RAM.</p>
<p><b>Nhược điểm:</b> bộ nhớ phụ chậm hơn RAM rất nhiều. Nếu máy liên tục hoán đổi các trang qua lại, nó sẽ chậm đi nghiêm trọng (<b>disk thrashing</b>). Cách khắc phục thật sự là thêm RAM.</p>
<div class="keywords"><b>Từ khóa:</b> primary storage, main memory, RAM, ROM, volatile, non-volatile, bootloader, BIOS, firmware, virtual memory, page, swap, disk thrashing</div>`
  },
  "4.10": {
    title: "Bộ nhớ phụ: lưu trữ từ, quang và thể rắn",
    summary: "Cách ổ cứng, đĩa CD/DVD/Blu-ray và SSD/bộ nhớ flash lưu dữ liệu lâu dài.",
    reading: `
<h4>Bộ nhớ phụ (secondary storage)</h4>
<p><b>Bộ nhớ phụ</b> (secondary storage) <b>không được CPU truy cập trực tiếp</b>. Nó <b>không khả biến</b> (non-volatile), nên cần thiết để <b>lưu trữ lâu dài</b> dữ liệu, tệp, chương trình và hệ điều hành. Dữ liệu phải được nạp vào RAM trước khi CPU dùng được.</p>
<h4>Lưu trữ từ (magnetic) — ổ đĩa cứng (HDD)</h4>
<ul><li>Dữ liệu được lưu trên các <b>đĩa từ</b> (platter – đĩa quay bằng kim loại hoặc thủy tinh) phủ vật liệu từ tính.</li>
<li>Mỗi mặt đĩa được chia thành các <b>rãnh</b> (track – các vòng tròn) và <b>cung</b> (sector – các đoạn của rãnh).</li>
<li>Một <b>đầu đọc/ghi</b> (read/write head) gắn trên cần truyền động di chuyển ngang qua đĩa đang quay. Dữ liệu được ghi bằng một <b>nam châm điện</b> (electromagnet) từ hóa những vùng rất nhỏ theo một trong hai hướng (biểu diễn 1 và 0); khi đọc thì phát hiện các hướng từ này.</li>
<li>Ưu điểm: dung lượng lớn, chi phí mỗi GiB thấp, tuổi thọ dài. Nhược điểm: có bộ phận chuyển động — có thể hỏng nếu bị rơi; truy cập chậm hơn (độ trễ do chờ đĩa quay); ồn; nặng hơn; tốn điện hơn.</li></ul>
<h4>Lưu trữ quang (optical) — CD, DVD, Blu-ray</h4>
<ul><li>Một <b>tia laser</b> được dùng để <b>tạo và đọc các hố và mặt phẳng (pits and lands)</b> trên bề mặt đĩa đang quay. Dữ liệu được lưu trên một rãnh xoắn ốc duy nhất.</li>
<li>Khi đọc, ánh sáng laser phản xạ khác nhau từ hố và mặt phẳng; một cảm biến phát hiện sự thay đổi và chuyển thành các bit 1 và 0.</li>
<li><b>CD</b> (~700 MiB) dùng laser đỏ; <b>DVD</b> (~4.7 GiB) dùng laser đỏ với các hố nhỏ hơn và có thể hai lớp; <b>Blu-ray</b> (25–100 GiB) dùng <b>laser xanh tím</b> có bước sóng ngắn hơn, nên các hố nhỏ hơn và chứa được nhiều dữ liệu hơn.</li>
<li>Ưu điểm: rẻ, di động, tốt để phát hành phim/phần mềm. Nhược điểm: dung lượng thấp; dễ bị trầy xước; chậm; cần ổ đĩa quang.</li></ul>
<h4>Lưu trữ thể rắn (solid-state) — SSD, thẻ SD, USB flash</h4>
<ul><li>Dùng <b>bộ nhớ flash</b> <b>không có bộ phận chuyển động</b>. Được chế tạo bằng công nghệ <b>NAND hoặc NOR</b>.</li>
<li>Dữ liệu được lưu bằng các <b>transistor</b> đóng vai trò <b>cổng điều khiển (control gate)</b> và <b>cổng nổi (floating gate)</b>: các electron bị giữ trong cổng nổi (được bao quanh bởi lớp cách điện), nên điện tích — 0 hoặc 1 — vẫn còn ngay cả khi không có điện.</li>
<li>Ví dụ: <b>ổ thể rắn (SSD)</b>, <b>thẻ SD</b> (máy ảnh, điện thoại), <b>USB flash</b>.</li>
<li>Ưu điểm: truy cập <b>rất nhanh</b>; không có bộ phận chuyển động nên <b>bền hơn</b> (tốt cho laptop và điện thoại); im lặng; nhẹ; ít tốn điện và ít tỏa nhiệt. Nhược điểm: đắt hơn mỗi GiB; số lần ghi có hạn trước khi các ô nhớ bị hao mòn.</li></ul>
<table class="tbl"><tr><th>Tình huống</th><th>Lưu trữ phù hợp nhất</th><th>Vì sao</th></tr>
<tr><td>Một máy chủ lưu khối lượng lớn dữ liệu sao lưu với chi phí thấp</td><td>Từ (HDD)</td><td>Dung lượng lớn, chi phí mỗi GiB thấp</td></tr>
<tr><td>Một laptop mỏng mang theo mỗi ngày</td><td>Thể rắn (SSD)</td><td>Không bộ phận chuyển động, bền, nhanh, nhẹ, ít tốn điện</td></tr>
<tr><td>Bán một bộ phim ở cửa hàng</td><td>Quang (Blu-ray)</td><td>Sản xuất hàng loạt rẻ, dễ mang theo</td></tr>
<tr><td>Lưu ảnh trong máy ảnh kỹ thuật số</td><td>Thể rắn (thẻ SD)</td><td>Nhỏ, bền, không bộ phận chuyển động</td></tr></table>
<div class="keywords"><b>Từ khóa:</b> secondary storage, non-volatile, magnetic, hard disk drive, platter, track, sector, read/write head, electromagnet, optical, laser, pits and lands, CD, DVD, Blu-ray, solid-state, flash memory, NAND, NOR, control gate, floating gate, SSD, SD card, USB flash drive</div>`
  },
  "4.11": {
    title: "Lưu trữ đám mây (cloud storage)",
    summary: "Lưu dữ liệu từ xa trên các máy chủ được truy cập qua internet — và ưu, nhược điểm so với lưu trữ cục bộ.",
    reading: `
<h4>Lưu trữ đám mây là gì?</h4>
<p><b>Lưu trữ đám mây</b> (cloud storage) nghĩa là lưu dữ liệu trên các <b>máy chủ từ xa</b> thuộc sở hữu của nhà cung cấp dịch vụ đám mây, được truy cập qua <b>internet</b>, thay vì lưu <b>cục bộ</b> (locally) trên thiết bị của bạn. Ví dụ: Google Drive, OneDrive, iCloud, Dropbox.</p>
<ul><li>"Đám mây" không phải phép màu — cần có <b>máy chủ và thiết bị lưu trữ thật</b> (hàng nghìn ổ cứng và SSD trong các <b>trung tâm dữ liệu</b> – data centre khổng lồ) để lưu dữ liệu.</li>
<li>Dữ liệu thường được <b>sao chép (mirror)</b> sang nhiều máy chủ ở các nơi khác nhau, nên không bị mất nếu một máy chủ hỏng.</li></ul>
<p>Có ba loại: đám mây <b>công cộng</b> (public – nhà cung cấp dùng chung cho nhiều khách hàng), đám mây <b>riêng</b> (private – máy chủ của chính một công ty) và <b>lai</b> (hybrid – kết hợp cả hai).</p>
<h4>Lưu trữ đám mây so với lưu trữ cục bộ</h4>
<table class="tbl"><tr><th>Ưu điểm của lưu trữ đám mây</th><th>Nhược điểm của lưu trữ đám mây</th></tr>
<tr><td><ul class="tight"><li>Có thể <b>truy cập tệp từ bất cứ đâu</b>, trên mọi thiết bị, bất cứ lúc nào, miễn là có kết nối internet</li><li>Dễ dàng <b>chia sẻ và cộng tác</b> trên tệp với người khác</li><li>Không cần mua hay mang theo thiết bị lưu trữ riêng; dễ tăng dung lượng</li><li>Nhà cung cấp lo việc <b>sao lưu</b> và khôi phục dữ liệu — an toàn nếu thiết bị của bạn bị mất hoặc hỏng</li><li>Nhà cung cấp lo cập nhật bảo mật và bảo trì</li></ul></td>
<td><ul class="tight"><li><b>Cần kết nối internet</b> — không truy cập được khi ngoại tuyến hoặc khi kết nối chậm</li><li>Tải lên/tải xuống tệp lớn có thể chậm và tốn nhiều dữ liệu</li><li>Rủi ro về <b>bảo mật và quyền riêng tư</b> — dữ liệu có thể bị tấn công, và bạn phụ thuộc vào an ninh của nhà cung cấp</li><li>Phải <b>trả phí thuê bao</b> cho dung lượng lớn hơn</li><li>Mất quyền kiểm soát: nếu nhà cung cấp gặp sự cố hoặc phá sản, dữ liệu có thể không truy cập được hoặc bị mất</li><li>Dữ liệu có thể được lưu ở nước khác với luật pháp khác</li></ul></td></tr></table>
<div class="tip"><b>Mẹo làm bài thi:</b> luôn so sánh với lưu trữ <b>cục bộ</b>: "Với lưu trữ cục bộ trên ổ cứng, có thể mở tệp mà không cần kết nối internet, nhưng chỉ truy cập được trên đúng một thiết bị đó."</div>
<div class="keywords"><b>Từ khóa:</b> cloud storage, remote server, data centre, local storage, internet connection, backup, mirror, public cloud, private cloud, hybrid cloud, subscription, security, privacy</div>`
  }
});

Object.assign(window.VI.glossary, {
  "4.7a": [["Inkjet printer", "Máy in phun những giọt mực lỏng rất nhỏ từ đầu in"], ["Laser printer", "Máy in dùng tia laser, trống tích điện và mực bột để in"], ["3D printer", "Máy in tạo ra một vật thể rắn từng lớp một"], ["Toner", "Mực dạng bột dùng trong máy in laser"], ["Additive manufacturing", "Tạo ra vật thể bằng cách đắp thêm từng lớp vật liệu"], ["Fuser", "Các trục lăn nóng làm chảy mực bột để dính vào giấy"]],
  "4.8a": [["Sensor", "Thiết bị nhập đo một đại lượng vật lý"], ["Monitoring system", "Hệ thống ghi lại dữ liệu và đưa ra cảnh báo nhưng không thay đổi điều kiện"], ["Control system", "Hệ thống dùng dữ liệu cảm biến để thay đổi điều kiện bằng cơ cấu chấp hành"]],
  "4.9a": [["Primary storage", "Bộ nhớ mà CPU truy cập trực tiếp"], ["RAM", "Bộ nhớ khả biến chứa các chương trình và dữ liệu đang được sử dụng"], ["ROM", "Bộ nhớ không khả biến chứa các lệnh khởi động"], ["Volatile", "Mất nội dung khi tắt nguồn điện"], ["Non-volatile", "Giữ nội dung khi không có điện"]],
  "4.9b": [["Virtual memory", "Một phần của bộ nhớ phụ được dùng như RAM bổ sung khi RAM đầy"], ["Page", "Một khối dữ liệu được chuyển qua lại giữa RAM và bộ nhớ ảo"], ["Disk thrashing", "Hiện tượng máy chậm do liên tục hoán đổi các trang"]],
  "4.10a": [["Secondary storage", "Bộ nhớ không khả biến mà CPU không truy cập trực tiếp"]],
  "4.10b": [["Magnetic storage", "Lưu dữ liệu trên các đĩa được từ hóa, ví dụ ổ đĩa cứng"], ["Optical storage", "Dùng tia laser để đọc các hố và mặt phẳng, ví dụ CD, DVD, Blu-ray"], ["Solid-state storage", "Bộ nhớ flash không có bộ phận chuyển động, ví dụ SSD, thẻ SD"], ["Platter", "Đĩa quay bên trong ổ cứng"], ["Pits and lands", "Các hố nhỏ và vùng phẳng trên đĩa quang biểu diễn dữ liệu"], ["Floating gate", "Một transistor giữ các electron để lưu dữ liệu trong bộ nhớ flash"]],
  "4.11a": [["Cloud storage", "Lưu dữ liệu trên các máy chủ từ xa được truy cập qua internet"], ["Local storage", "Lưu dữ liệu trên thiết bị của chính người dùng"], ["Data centre", "Tòa nhà chứa đầy máy chủ và thiết bị lưu trữ"]]
});
