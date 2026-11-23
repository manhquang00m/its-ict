/* Exercises — Chapter 3 Algorithm design & problem-solving (EN + VI). All trace tables were verified by running the logic. */
window.EXERCISES = window.EXERCISES || {};
(function () {
  // Builds an HTML table: h = header cells, rows = array of arrays of cells
  const T = (h, rows) => '<table class="tbl center"><tr>' + h.map(x => `<th>${x}</th>`).join("") + "</tr>" + rows.map(r => "<tr>" + r.map(c => `<td>${c}</td>`).join("") + "</tr>").join("") + "</table>";
  // Flowchart described as a table of numbered boxes
  const FC = (head, rows) => T(head, rows);

  Object.assign(window.EXERCISES, {

"3.1": [
  { id: "3.1-e1", kind: "short", marks: 2,
    q: { en: `<p>State the four stages of the program development life cycle, in the correct order. [2]</p>`,
         vi: `<p>Nêu bốn giai đoạn của vòng đời phát triển chương trình, theo đúng thứ tự. [2]</p>` },
    ms: { en: `<ul><li>All four stages named: analysis, design, coding, testing [1]</li><li>Stages are in the correct order: analysis → design → coding → testing [1]</li></ul>`,
          vi: `<ul><li>Nêu đủ bốn giai đoạn: phân tích (analysis), thiết kế (design), lập trình (coding), kiểm thử (testing) [1]</li><li>Đúng thứ tự: phân tích → thiết kế → lập trình → kiểm thử [1]</li></ul>` } },
  { id: "3.1-e2", kind: "short", marks: 2,
    q: { en: `<p>Define the term <b>abstraction</b> and give one example. [2]</p>`,
         vi: `<p>Định nghĩa thuật ngữ <b>trừu tượng hóa (abstraction)</b> và cho một ví dụ. [2]</p>` },
    ms: { en: `<ul><li>Removing/hiding unnecessary detail and keeping only the details that are important for solving the problem [1]</li><li>A suitable example, e.g. a metro map that shows stations and lines but not streets or buildings [1]</li></ul>`,
          vi: `<ul><li>Loại bỏ/ẩn các chi tiết không cần thiết và chỉ giữ lại những chi tiết quan trọng để giải bài toán [1]</li><li>Một ví dụ phù hợp, chẳng hạn bản đồ tàu điện ngầm chỉ hiển thị các ga và tuyến mà không có đường phố hay tòa nhà [1]</li></ul>` } },
  { id: "3.1-e3", kind: "short", marks: 2,
    q: { en: `<p>Describe what is meant by <b>decomposition</b>. [2]</p>`,
         vi: `<p>Mô tả ý nghĩa của <b>phân rã (decomposition)</b>. [2]</p>` },
    ms: { en: `<ul><li>Breaking a problem (or system) down into smaller parts / sub-problems / sub-systems [1]</li><li>Each smaller part can be solved, designed, coded or tested separately (and may be broken down further) [1]</li></ul>`,
          vi: `<ul><li>Chia một bài toán (hoặc hệ thống) thành các phần nhỏ hơn / bài toán con / hệ thống con [1]</li><li>Mỗi phần nhỏ có thể được giải, thiết kế, lập trình hoặc kiểm thử riêng (và có thể được chia nhỏ tiếp) [1]</li></ul>` } },
  { id: "3.1-e4", kind: "apply", marks: 4,
    q: { en: `<p>A school canteen wants a program that lets a student choose items from a menu, works out the total cost, shows a receipt on the screen and saves each day's orders in a file.</p><p>Give <b>one</b> suitable example of each part of this problem. [4]</p>${T(["Part", "Example"], [["Input", ""], ["Process", ""], ["Output", ""], ["Storage", ""]])}`,
         vi: `<p>Một căng-tin trường muốn có chương trình cho phép học sinh chọn món từ thực đơn, tính tổng tiền, hiển thị hóa đơn trên màn hình và lưu các đơn hàng của mỗi ngày vào một tệp.</p><p>Hãy cho <b>một</b> ví dụ phù hợp cho mỗi thành phần của bài toán này. [4]</p>${T(["Thành phần", "Ví dụ"], [["Đầu vào", ""], ["Xử lý", ""], ["Đầu ra", ""], ["Lưu trữ", ""]])}` },
    ms: { en: `<ul><li>Input: the items the student chooses (e.g. the menu choice or quantity) [1]</li><li>Process: adding up the prices of the chosen items / calculating the total cost [1]</li><li>Output: the receipt (items and total cost) shown on the screen [1]</li><li>Storage: the day's orders saved in a file [1]</li></ul>`,
          vi: `<ul><li>Đầu vào: các món học sinh chọn (ví dụ lựa chọn trong thực đơn hoặc số lượng) [1]</li><li>Xử lý: cộng giá các món đã chọn / tính tổng tiền [1]</li><li>Đầu ra: hóa đơn (các món và tổng tiền) hiển thị trên màn hình [1]</li><li>Lưu trữ: các đơn hàng trong ngày được lưu vào một tệp [1]</li></ul>` } },
  { id: "3.1-e5", kind: "apply", marks: 4,
    q: { en: `<p>A quiz app is made of three sub-systems: <i>Choose topic</i>, <i>Ask questions</i> and <i>Show score</i>. The <i>Ask questions</i> sub-system is split into two smaller sub-systems: <i>Display question</i> and <i>Check answer</i>.</p><p>Describe how you would draw the structure diagram for the quiz app. [4]</p>`,
         vi: `<p>Một ứng dụng đố vui gồm ba hệ thống con: <i>Choose topic</i>, <i>Ask questions</i> và <i>Show score</i>. Hệ thống con <i>Ask questions</i> được chia thành hai hệ thống con nhỏ hơn: <i>Display question</i> và <i>Check answer</i>.</p><p>Hãy mô tả cách vẽ sơ đồ cấu trúc cho ứng dụng đố vui này. [4]</p>` },
    hint: { en: `A structure diagram is a hierarchy: the whole system at the top, sub-systems below it.`, vi: `Sơ đồ cấu trúc là một hệ phân cấp: toàn bộ hệ thống ở trên cùng, các hệ thống con ở bên dưới.` },
    ms: { en: `<ul><li>One box at the top labelled with the whole system (Quiz app) [1]</li><li>A second level with three boxes: Choose topic, Ask questions, Show score, joined to the top box by lines [1]</li><li>A third level with two boxes, Display question and Check answer, joined below Ask questions only [1]</li><li>Hierarchical layout: boxes joined by lines from top to bottom, with each box labelled clearly [1]</li></ul>`,
          vi: `<ul><li>Một ô ở trên cùng ghi tên toàn bộ hệ thống (Quiz app) [1]</li><li>Tầng thứ hai có ba ô: Choose topic, Ask questions, Show score, nối với ô trên cùng bằng các đường nối [1]</li><li>Tầng thứ ba có hai ô, Display question và Check answer, chỉ nối bên dưới Ask questions [1]</li><li>Bố cục phân cấp: các ô được nối bằng đường từ trên xuống dưới, mỗi ô có nhãn rõ ràng [1]</li></ul>` } },
  { id: "3.1-e6", kind: "explain", marks: 4,
    q: { en: `<p>A team of five programmers is going to build a large computer game. Explain <b>two</b> benefits of decomposing the game into smaller parts before the work begins. [4]</p>`,
         vi: `<p>Một nhóm năm lập trình viên sắp xây dựng một trò chơi máy tính lớn. Hãy giải thích <b>hai</b> lợi ích của việc phân rã trò chơi thành các phần nhỏ hơn trước khi bắt đầu làm. [4]</p>` },
    ms: { en: `<ul><li>Benefit 1: different programmers can work on different parts at the same time [1] so the game is finished more quickly [1]</li><li>Benefit 2: each small part is easier to design, code and test on its own [1] so errors are easier to find and fix [1]</li><li>(Accept other valid benefits, e.g. a part can be re-used or replaced without rewriting the whole game.)</li></ul>`,
          vi: `<ul><li>Lợi ích 1: các lập trình viên khác nhau có thể làm các phần khác nhau cùng lúc [1] nên trò chơi hoàn thành nhanh hơn [1]</li><li>Lợi ích 2: mỗi phần nhỏ dễ thiết kế, lập trình và kiểm thử riêng [1] nên dễ tìm và sửa lỗi hơn [1]</li><li>(Chấp nhận các lợi ích hợp lý khác, ví dụ một phần có thể được dùng lại hoặc thay thế mà không phải viết lại cả trò chơi.)</li></ul>` } },
  { id: "3.1-e7", kind: "explain", marks: 3,
    q: { en: `<p>A student says: "I will skip the design stage and start writing code straight away, because that saves time." Explain why this is poor advice. [3]</p>`,
         vi: `<p>Một học sinh nói: "Mình sẽ bỏ qua giai đoạn thiết kế và bắt đầu viết mã ngay, vì như vậy tiết kiệm thời gian." Hãy giải thích vì sao đây là lời khuyên không tốt. [3]</p>` },
    ms: { en: `<ul><li>Design (structure diagrams, flowcharts, pseudocode) plans how the program will work before any code is written [1]</li><li>Without a plan the program may be badly organised or miss some of the requirements, so it has to be rewritten [1]</li><li>Errors in the logic are cheaper/easier to find in the design than after the code has been written, so time is lost, not saved [1]</li></ul>`,
          vi: `<ul><li>Thiết kế (sơ đồ cấu trúc, lưu đồ, mã giả) lên kế hoạch cách chương trình hoạt động trước khi viết bất kỳ dòng mã nào [1]</li><li>Không có kế hoạch, chương trình có thể được tổ chức kém hoặc thiếu một số yêu cầu, nên phải viết lại [1]</li><li>Lỗi logic dễ và rẻ để phát hiện ở bước thiết kế hơn là sau khi đã viết mã, nên thực tế mất thêm thời gian chứ không tiết kiệm [1]</li></ul>` } }
],

"3.2": [
  { id: "3.2-e1", kind: "short", marks: 3,
    q: { en: `<p>State the name of the flowchart symbol used for each of the following. [3]</p><ol><li>START and STOP</li><li>A decision such as <code>Age >= 18?</code></li><li><code>INPUT Number</code></li></ol>`,
         vi: `<p>Nêu tên ký hiệu lưu đồ dùng cho mỗi trường hợp sau. [3]</p><ol><li>START và STOP</li><li>Một quyết định như <code>Age >= 18?</code></li><li><code>INPUT Number</code></li></ol>` },
    ms: { en: `<ul><li>START and STOP: terminator (rounded rectangle) [1]</li><li>Decision: diamond [1]</li><li>INPUT: parallelogram (also used for OUTPUT) [1]</li></ul>`,
          vi: `<ul><li>START và STOP: ký hiệu bắt đầu/kết thúc (terminator, hình chữ nhật bo tròn) [1]</li><li>Quyết định: hình thoi [1]</li><li>INPUT: hình bình hành (cũng dùng cho OUTPUT) [1]</li></ul>` } },
  { id: "3.2-e2", kind: "short", marks: 2,
    q: { en: `<p>State <b>two</b> rules that must be followed when drawing a decision box in a flowchart. [2]</p>`,
         vi: `<p>Nêu <b>hai</b> quy tắc phải tuân theo khi vẽ ô quyết định trong lưu đồ. [2]</p>` },
    ms: { en: `<ul><li>It has exactly two exits [1]</li><li>The exits are labelled Yes and No [1]</li><li>(Also accept: the condition is written precisely, e.g. <code>Mark >= 50?</code> — maximum 2 marks.)</li></ul>`,
          vi: `<ul><li>Có đúng hai lối ra [1]</li><li>Các lối ra được gắn nhãn Yes và No [1]</li><li>(Cũng chấp nhận: điều kiện được viết chính xác, ví dụ <code>Mark >= 50?</code> — tối đa 2 điểm.)</li></ul>` } },
  { id: "3.2-e3", kind: "trace", marks: 3,
    q: { en: `<p>The flowchart below is described box by box.</p>${FC(["Box", "Symbol", "Text", "Goes to"], [["1", "Terminator", "START", "2"], ["2", "Parallelogram", "INPUT A", "3"], ["3", "Parallelogram", "INPUT B", "4"], ["4", "Diamond", "A > B?", "Yes: 5 / No: 6"], ["5", "Parallelogram", "OUTPUT A", "7"], ["6", "Parallelogram", "OUTPUT B", "7"], ["7", "Terminator", "STOP", "–"]])}<ol><li>State the output when A = 7 and B = 12. [1]</li><li>State the output when A = 15 and B = 9. [1]</li><li>State the purpose of the flowchart. [1]</li></ol>`,
         vi: `<p>Lưu đồ dưới đây được mô tả theo từng ô.</p>${FC(["Ô", "Ký hiệu", "Nội dung", "Đi tới"], [["1", "Terminator", "START", "2"], ["2", "Hình bình hành", "INPUT A", "3"], ["3", "Hình bình hành", "INPUT B", "4"], ["4", "Hình thoi", "A > B?", "Yes: 5 / No: 6"], ["5", "Hình bình hành", "OUTPUT A", "7"], ["6", "Hình bình hành", "OUTPUT B", "7"], ["7", "Terminator", "STOP", "–"]])}<ol><li>Nêu kết quả xuất khi A = 7 và B = 12. [1]</li><li>Nêu kết quả xuất khi A = 15 và B = 9. [1]</li><li>Nêu mục đích của lưu đồ. [1]</li></ol>` },
    ms: { en: `<ul><li>A = 7, B = 12: 7 > 12 is No, so box 6 outputs <b>12</b> [1]</li><li>A = 15, B = 9: 15 > 9 is Yes, so box 5 outputs <b>15</b> [1]</li><li>Purpose: inputs two numbers and outputs the larger one [1]</li></ul>`,
          vi: `<ul><li>A = 7, B = 12: 7 > 12 là No, nên ô 6 xuất <b>12</b> [1]</li><li>A = 15, B = 9: 15 > 9 là Yes, nên ô 5 xuất <b>15</b> [1]</li><li>Mục đích: nhập hai số và xuất số lớn hơn [1]</li></ul>` } },
  { id: "3.2-e4", kind: "trace", marks: 4,
    q: { en: `<p>This flowchart is described box by box.</p>${FC(["Box", "Symbol", "Text", "Goes to"], [["1", "Terminator", "START", "2"], ["2", "Rectangle", "Count ← 0, Total ← 0", "3"], ["3", "Diamond", "Count < 4?", "Yes: 4 / No: 7"], ["4", "Parallelogram", "INPUT Num", "5"], ["5", "Rectangle", "Total ← Total + Num", "6"], ["6", "Rectangle", "Count ← Count + 1", "3"], ["7", "Rectangle", "Average ← Total / 4", "8"], ["8", "Parallelogram", "OUTPUT Average", "9"], ["9", "Terminator", "STOP", "–"]])}<p>The numbers input are 6, 10, 3, 9. Complete the trace table. Each row shows the values at the end of one pass round the loop. [4]</p>${T(["Count", "Num", "Total", "Average", "OUTPUT"], [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]])}`,
         vi: `<p>Lưu đồ này được mô tả theo từng ô.</p>${FC(["Ô", "Ký hiệu", "Nội dung", "Đi tới"], [["1", "Terminator", "START", "2"], ["2", "Hình chữ nhật", "Count ← 0, Total ← 0", "3"], ["3", "Hình thoi", "Count < 4?", "Yes: 4 / No: 7"], ["4", "Hình bình hành", "INPUT Num", "5"], ["5", "Hình chữ nhật", "Total ← Total + Num", "6"], ["6", "Hình chữ nhật", "Count ← Count + 1", "3"], ["7", "Hình chữ nhật", "Average ← Total / 4", "8"], ["8", "Hình bình hành", "OUTPUT Average", "9"], ["9", "Terminator", "STOP", "–"]])}<p>Các số được nhập là 6, 10, 3, 9. Hoàn thành bảng theo dõi. Mỗi dòng cho biết các giá trị ở cuối một lần đi qua vòng lặp. [4]</p>${T(["Count", "Num", "Total", "Average", "OUTPUT"], [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]])}` },
    hint: { en: `Row 1 holds the starting values from box 2. Then one row for each pass round the loop, then a final row for boxes 7 and 8.`, vi: `Dòng 1 là các giá trị ban đầu từ ô 2. Sau đó mỗi lần đi qua vòng lặp một dòng, rồi một dòng cuối cho ô 7 và 8.` },
    ms: { en: `${T(["Count", "Num", "Total", "Average", "OUTPUT"], [["0", "", "0", "", ""], ["1", "6", "6", "", ""], ["2", "10", "16", "", ""], ["3", "3", "19", "", ""], ["4", "9", "28", "", ""], ["", "", "", "7", "7"]])}<ul><li>Count column: 0, 1, 2, 3, 4 [1]</li><li>Num column: 6, 10, 3, 9 [1]</li><li>Total column: 0, 6, 16, 19, 28 [1]</li><li>Average = 28 / 4 = 7 and OUTPUT 7 [1]</li></ul>`,
          vi: `${T(["Count", "Num", "Total", "Average", "OUTPUT"], [["0", "", "0", "", ""], ["1", "6", "6", "", ""], ["2", "10", "16", "", ""], ["3", "3", "19", "", ""], ["4", "9", "28", "", ""], ["", "", "", "7", "7"]])}<ul><li>Cột Count: 0, 1, 2, 3, 4 [1]</li><li>Cột Num: 6, 10, 3, 9 [1]</li><li>Cột Total: 0, 6, 16, 19, 28 [1]</li><li>Average = 28 / 4 = 7 và OUTPUT 7 [1]</li></ul>` } },
  { id: "3.2-e5", kind: "apply", marks: 5,
    q: { en: `<p>A theme park only lets a visitor onto a ride if their height is at least 1.2 m. Describe the flowchart that inputs a height and outputs a message saying whether the visitor can go on the ride. Give the symbol used for each box. [5]</p>`,
         vi: `<p>Một công viên giải trí chỉ cho khách lên trò chơi nếu chiều cao của họ ít nhất là 1.2 m. Hãy mô tả lưu đồ nhập một chiều cao và xuất thông báo cho biết khách có được lên trò chơi hay không. Nêu ký hiệu dùng cho mỗi ô. [5]</p>` },
    ms: { en: `<ul><li>START terminator at the top [1]</li><li>Parallelogram: INPUT Height [1]</li><li>Diamond: <code>Height >= 1.2?</code> (precise condition) [1]</li><li>Yes exit leads to a parallelogram OUTPUT "Allowed"; No exit leads to a parallelogram OUTPUT "Too short" [1]</li><li>Both paths join and end at a STOP terminator; all boxes joined by flow lines with arrows [1]</li></ul>`,
          vi: `<ul><li>Ký hiệu terminator START ở trên cùng [1]</li><li>Hình bình hành: INPUT Height [1]</li><li>Hình thoi: <code>Height >= 1.2?</code> (điều kiện chính xác) [1]</li><li>Lối ra Yes dẫn đến hình bình hành OUTPUT "Allowed"; lối ra No dẫn đến hình bình hành OUTPUT "Too short" [1]</li><li>Cả hai nhánh nhập lại và kết thúc ở terminator STOP; mọi ô nối với nhau bằng đường nối có mũi tên [1]</li></ul>` } },
  { id: "3.2-e6", kind: "apply", marks: 5,
    q: { en: `<p>Describe a flowchart that keeps inputting numbers until the number 0 is entered, and then outputs how many numbers were entered (not counting the 0). Give the symbol used for each box. [5]</p>`,
         vi: `<p>Hãy mô tả một lưu đồ liên tục nhập các số cho đến khi nhập số 0, rồi xuất ra đã nhập bao nhiêu số (không tính số 0). Nêu ký hiệu dùng cho mỗi ô. [5]</p>` },
    hint: { en: `Input the first number before the loop, so the decision box has something to test.`, vi: `Hãy nhập số đầu tiên trước vòng lặp để ô quyết định có giá trị để kiểm tra.` },
    ms: { en: `<ul><li>START and STOP terminators; Count ← 0 in a rectangle [1]</li><li>Parallelogram: INPUT Num (before the loop) [1]</li><li>Diamond: <code>Num <> 0?</code> [1]</li><li>Yes: rectangle <code>Count ← Count + 1</code>, then parallelogram INPUT Num, then a flow line going back up to the diamond (the loop) [1]</li><li>No: parallelogram OUTPUT Count, then STOP [1]</li></ul>`,
          vi: `<ul><li>Terminator START và STOP; Count ← 0 trong hình chữ nhật [1]</li><li>Hình bình hành: INPUT Num (trước vòng lặp) [1]</li><li>Hình thoi: <code>Num <> 0?</code> [1]</li><li>Yes: hình chữ nhật <code>Count ← Count + 1</code>, rồi hình bình hành INPUT Num, rồi một đường nối quay ngược lên hình thoi (vòng lặp) [1]</li><li>No: hình bình hành OUTPUT Count, rồi STOP [1]</li></ul>` } },
  { id: "3.2-e7", kind: "explain", marks: 4,
    q: { en: `<p>This flowchart is described box by box.</p>${FC(["Box", "Symbol", "Text", "Goes to"], [["1", "Terminator", "START", "2"], ["2", "Rectangle", "N ← 1, Count ← 0", "3"], ["3", "Diamond", "Count < 5?", "Yes: 4 / No: 6"], ["4", "Rectangle", "N ← N * 2", "5"], ["5", "Rectangle", "Count ← Count + 1", "3"], ["6", "Parallelogram", "OUTPUT N", "7"], ["7", "Terminator", "STOP", "–"]])}<p>State the value that is output and describe the purpose of the flowchart. [4]</p>`,
         vi: `<p>Lưu đồ này được mô tả theo từng ô.</p>${FC(["Ô", "Ký hiệu", "Nội dung", "Đi tới"], [["1", "Terminator", "START", "2"], ["2", "Hình chữ nhật", "N ← 1, Count ← 0", "3"], ["3", "Hình thoi", "Count < 5?", "Yes: 4 / No: 6"], ["4", "Hình chữ nhật", "N ← N * 2", "5"], ["5", "Hình chữ nhật", "Count ← Count + 1", "3"], ["6", "Hình bình hành", "OUTPUT N", "7"], ["7", "Terminator", "STOP", "–"]])}<p>Nêu giá trị được xuất ra và mô tả mục đích của lưu đồ. [4]</p>` },
    hint: { en: `Dry-run it: write down N and Count each time round the loop.`, vi: `Hãy chạy thử bằng tay: ghi lại N và Count sau mỗi vòng lặp.` },
    ms: { en: `<ul><li>Output: <b>32</b> [1]</li><li>The loop runs 5 times (Count goes 0 → 5) [1]</li><li>N is doubled each time: 1 → 2 → 4 → 8 → 16 → 32 [1]</li><li>Purpose: calculates (and outputs) 2 to the power 5, i.e. 2 multiplied by itself 5 times [1]</li></ul>`,
          vi: `<ul><li>Kết quả xuất: <b>32</b> [1]</li><li>Vòng lặp chạy 5 lần (Count tăng từ 0 đến 5) [1]</li><li>N được nhân đôi mỗi lần: 1 → 2 → 4 → 8 → 16 → 32 [1]</li><li>Mục đích: tính (và xuất) 2 lũy thừa 5, tức là 2 nhân với chính nó 5 lần [1]</li></ul>` } }
],

"3.3": [
  { id: "3.3-e1", kind: "short", marks: 3,
    q: { en: `<p>State the value of each expression. [3]</p><ol><li><code>23 MOD 6</code></li><li><code>23 DIV 6</code></li><li><code>2 ^ 4</code></li></ol>`,
         vi: `<p>Nêu giá trị của mỗi biểu thức. [3]</p><ol><li><code>23 MOD 6</code></li><li><code>23 DIV 6</code></li><li><code>2 ^ 4</code></li></ol>` },
    ms: { en: `<ul><li><code>23 MOD 6</code> = 5 (23 = 3 × 6 + 5) [1]</li><li><code>23 DIV 6</code> = 3 [1]</li><li><code>2 ^ 4</code> = 16 [1]</li></ul>`,
          vi: `<ul><li><code>23 MOD 6</code> = 5 (23 = 3 × 6 + 5) [1]</li><li><code>23 DIV 6</code> = 3 [1]</li><li><code>2 ^ 4</code> = 16 [1]</li></ul>` } },
  { id: "3.3-e2", kind: "short", marks: 2,
    q: { en: `<p>State which type of loop (FOR, WHILE or REPEAT) is the most suitable for each task. [2]</p><ol><li>Output a message exactly 12 times.</li><li>Ask for a code word at least once, and keep asking until it is correct.</li></ol>`,
         vi: `<p>Nêu loại vòng lặp (FOR, WHILE hay REPEAT) phù hợp nhất cho mỗi nhiệm vụ. [2]</p><ol><li>Xuất một thông báo đúng 12 lần.</li><li>Hỏi mã từ khóa ít nhất một lần, và tiếp tục hỏi cho đến khi nhập đúng.</li></ol>` },
    ms: { en: `<ul><li>FOR … TO … NEXT (count-controlled, number of repeats known) [1]</li><li>REPEAT … UNTIL (post-condition, always runs at least once) [1]</li></ul>`,
          vi: `<ul><li>FOR … TO … NEXT (lặp theo số lần, biết trước số lần lặp) [1]</li><li>REPEAT … UNTIL (kiểm tra điều kiện sau, luôn chạy ít nhất một lần) [1]</li></ul>` } },
  { id: "3.3-e3", kind: "short", marks: 3,
    q: { en: `<p>State the value returned by each function call. [3]</p><ol><li><code>LENGTH("Cambridge")</code></li><li><code>UCASE("igcse")</code></li><li><code>SUBSTRING("Cambridge", 4, 3)</code></li></ol>`,
         vi: `<p>Nêu giá trị được trả về bởi mỗi lời gọi hàm. [3]</p><ol><li><code>LENGTH("Cambridge")</code></li><li><code>UCASE("igcse")</code></li><li><code>SUBSTRING("Cambridge", 4, 3)</code></li></ol>` },
    hint: { en: `SUBSTRING(text, start position, number of characters) — the first character is position 1.`, vi: `SUBSTRING(text, vị trí bắt đầu, số ký tự) — ký tự đầu tiên ở vị trí 1.` },
    ms: { en: `<ul><li><code>LENGTH("Cambridge")</code> = 9 [1]</li><li><code>UCASE("igcse")</code> = "IGCSE" [1]</li><li><code>SUBSTRING("Cambridge", 4, 3)</code> = "bri" (characters 4, 5, 6) [1]</li></ul>`,
          vi: `<ul><li><code>LENGTH("Cambridge")</code> = 9 [1]</li><li><code>UCASE("igcse")</code> = "IGCSE" [1]</li><li><code>SUBSTRING("Cambridge", 4, 3)</code> = "bri" (các ký tự 4, 5, 6) [1]</li></ul>` } },
  { id: "3.3-e4", kind: "trace", marks: 4,
    q: { en: `<p>Complete the trace table for this algorithm. [4]</p><pre>Total ← 0
FOR i ← 10 TO 0 STEP -2
  IF i MOD 4 = 0
    THEN
      Total ← Total + i
  ENDIF
NEXT i
OUTPUT Total</pre>${T(["i", "i MOD 4", "Total", "OUTPUT"], [["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]])}`,
         vi: `<p>Hoàn thành bảng theo dõi cho thuật toán này. [4]</p><pre>Total ← 0
FOR i ← 10 TO 0 STEP -2
  IF i MOD 4 = 0
    THEN
      Total ← Total + i
  ENDIF
NEXT i
OUTPUT Total</pre>${T(["i", "i MOD 4", "Total", "OUTPUT"], [["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]])}` },
    hint: { en: `The loop counts 10, 8, 6, 4, 2, 0. Only add i to Total when i MOD 4 is 0.`, vi: `Vòng lặp đếm 10, 8, 6, 4, 2, 0. Chỉ cộng i vào Total khi i MOD 4 bằng 0.` },
    ms: { en: `${T(["i", "i MOD 4", "Total", "OUTPUT"], [["", "", "0", ""], ["10", "2", "0", ""], ["8", "0", "8", ""], ["6", "2", "8", ""], ["4", "0", "12", ""], ["2", "2", "12", ""], ["0", "0", "12", "12"]])}<ul><li>i column: 10, 8, 6, 4, 2, 0 [1]</li><li>i MOD 4 column: 2, 0, 2, 0, 2, 0 [1]</li><li>Total column: 0, 0, 8, 8, 12, 12, 12 [1]</li><li>OUTPUT: 12 [1]</li></ul>`,
          vi: `${T(["i", "i MOD 4", "Total", "OUTPUT"], [["", "", "0", ""], ["10", "2", "0", ""], ["8", "0", "8", ""], ["6", "2", "8", ""], ["4", "0", "12", ""], ["2", "2", "12", ""], ["0", "0", "12", "12"]])}<ul><li>Cột i: 10, 8, 6, 4, 2, 0 [1]</li><li>Cột i MOD 4: 2, 0, 2, 0, 2, 0 [1]</li><li>Cột Total: 0, 0, 8, 8, 12, 12, 12 [1]</li><li>OUTPUT: 12 [1]</li></ul>` } },
  { id: "3.3-e5", kind: "code", marks: 5,
    q: { en: `<p>A shop adds 20% VAT to the price of goods. Write pseudocode that stores the VAT rate as a constant, inputs the price of one item and the quantity bought, calculates the total cost including VAT and outputs it with a suitable message. [5]</p>`,
         vi: `<p>Một cửa hàng cộng thêm 20% thuế VAT vào giá hàng hóa. Hãy viết mã giả lưu mức thuế VAT dưới dạng hằng, nhập giá của một món hàng và số lượng mua, tính tổng tiền đã gồm VAT rồi xuất kết quả kèm một thông báo phù hợp. [5]</p>` },
    ms: { en: `<pre>DECLARE Price : REAL
DECLARE Quantity : INTEGER
DECLARE Total : REAL
CONSTANT VAT ← 0.2
OUTPUT "Enter the price"
INPUT Price
OUTPUT "Enter the quantity"
INPUT Quantity
Total ← Price * Quantity * (1 + VAT)
OUTPUT "Total cost: ", Total</pre><ul><li>Variables declared and VAT declared as a CONSTANT with the value 0.2 [1]</li><li>Both values input, with a prompt [1]</li><li>Correct calculation: price × quantity × 1.2 [1]</li><li>Assignment uses ← and meaningful identifiers are used [1]</li><li>OUTPUT with a message and the total [1]</li></ul>`,
          vi: `<pre>DECLARE Price : REAL
DECLARE Quantity : INTEGER
DECLARE Total : REAL
CONSTANT VAT ← 0.2
OUTPUT "Enter the price"
INPUT Price
OUTPUT "Enter the quantity"
INPUT Quantity
Total ← Price * Quantity * (1 + VAT)
OUTPUT "Total cost: ", Total</pre><ul><li>Các biến được khai báo và VAT được khai báo là CONSTANT có giá trị 0.2 [1]</li><li>Nhập cả hai giá trị, kèm lời nhắc [1]</li><li>Tính đúng: giá × số lượng × 1.2 [1]</li><li>Phép gán dùng ← và dùng tên định danh có ý nghĩa [1]</li><li>OUTPUT có thông báo và tổng tiền [1]</li></ul>` } },
  { id: "3.3-e6", kind: "code", marks: 6,
    q: { en: `<p>A program asks the user for a code word. The correct code word is "Falcon". Write pseudocode, using a REPEAT … UNTIL loop, that keeps asking until the correct code word is entered, counts the number of attempts, and then outputs the number of attempts. [6]</p>`,
         vi: `<p>Một chương trình hỏi người dùng một từ khóa. Từ khóa đúng là "Falcon". Hãy viết mã giả, dùng vòng lặp REPEAT … UNTIL, để liên tục hỏi cho đến khi nhập đúng từ khóa, đếm số lần thử, rồi xuất số lần thử. [6]</p>` },
    hint: { en: `Set the counter to 0 before the loop. The count goes up once per time round the loop.`, vi: `Đặt biến đếm bằng 0 trước vòng lặp. Biến đếm tăng một lần mỗi vòng lặp.` },
    ms: { en: `<pre>DECLARE Attempts : INTEGER
DECLARE CodeWord : STRING
Attempts ← 0
REPEAT
  OUTPUT "Enter the code word"
  INPUT CodeWord
  Attempts ← Attempts + 1
UNTIL CodeWord = "Falcon"
OUTPUT "Correct after ", Attempts, " attempt(s)"</pre><ul><li><code>Attempts ← 0</code> before the loop [1]</li><li>REPEAT … UNTIL structure used [1]</li><li>INPUT inside the loop (with a prompt) [1]</li><li><code>Attempts ← Attempts + 1</code> inside the loop [1]</li><li>Condition <code>CodeWord = "Falcon"</code> [1]</li><li>OUTPUT of Attempts after the loop [1]</li></ul>`,
          vi: `<pre>DECLARE Attempts : INTEGER
DECLARE CodeWord : STRING
Attempts ← 0
REPEAT
  OUTPUT "Enter the code word"
  INPUT CodeWord
  Attempts ← Attempts + 1
UNTIL CodeWord = "Falcon"
OUTPUT "Correct after ", Attempts, " attempt(s)"</pre><ul><li><code>Attempts ← 0</code> trước vòng lặp [1]</li><li>Dùng cấu trúc REPEAT … UNTIL [1]</li><li>INPUT bên trong vòng lặp (có lời nhắc) [1]</li><li><code>Attempts ← Attempts + 1</code> bên trong vòng lặp [1]</li><li>Điều kiện <code>CodeWord = "Falcon"</code> [1]</li><li>OUTPUT Attempts sau vòng lặp [1]</li></ul>` } },
  { id: "3.3-e7", kind: "explain", marks: 4,
    q: { en: `<pre>Result ← 0
INPUT Number
WHILE Number > 0 DO
  Result ← Result + (Number MOD 10)
  Number ← Number DIV 10
ENDWHILE
OUTPUT Result</pre><ol><li>State the value output when the input is 4736. [1]</li><li>State the purpose of the algorithm. [1]</li><li>Describe the job of <code>Number MOD 10</code> and of <code>Number DIV 10</code> in the loop. [2]</li></ol>`,
         vi: `<pre>Result ← 0
INPUT Number
WHILE Number > 0 DO
  Result ← Result + (Number MOD 10)
  Number ← Number DIV 10
ENDWHILE
OUTPUT Result</pre><ol><li>Nêu giá trị được xuất ra khi dữ liệu nhập là 4736. [1]</li><li>Nêu mục đích của thuật toán. [1]</li><li>Mô tả vai trò của <code>Number MOD 10</code> và của <code>Number DIV 10</code> trong vòng lặp. [2]</li></ol>` },
    hint: { en: `Try 4736: 4736 MOD 10 is 6; 4736 DIV 10 is 473.`, vi: `Thử với 4736: 4736 MOD 10 là 6; 4736 DIV 10 là 473.` },
    ms: { en: `<ul><li>Output <b>20</b> (6 + 3 + 7 + 4) [1]</li><li>Purpose: outputs the sum of the digits of a whole number [1]</li><li><code>Number MOD 10</code> gives the last (right-most) digit, which is added to Result [1]</li><li><code>Number DIV 10</code> removes the last digit, so the loop ends when Number reaches 0 [1]</li></ul>`,
          vi: `<ul><li>Kết quả xuất <b>20</b> (6 + 3 + 7 + 4) [1]</li><li>Mục đích: xuất tổng các chữ số của một số nguyên [1]</li><li><code>Number MOD 10</code> cho chữ số cuối (ngoài cùng bên phải), được cộng vào Result [1]</li><li><code>Number DIV 10</code> loại bỏ chữ số cuối, nên vòng lặp kết thúc khi Number về 0 [1]</li></ul>` } }
],

"3.4": [
  { id: "3.4-e1", kind: "short", marks: 2,
    q: { en: `<p>A program uses the variables <code>Total</code> and <code>Count</code> to add up and count values in a loop. State the value both variables should be given before the loop starts, and explain why. [2]</p>`,
         vi: `<p>Một chương trình dùng các biến <code>Total</code> và <code>Count</code> để cộng và đếm các giá trị trong một vòng lặp. Hãy nêu giá trị cần gán cho cả hai biến trước khi vòng lặp bắt đầu, và giải thích vì sao. [2]</p>` },
    ms: { en: `<ul><li>Both are set to 0 (initialised) [1]</li><li>Otherwise the old/unknown value would be included, so the total or count would be wrong [1]</li></ul>`,
          vi: `<ul><li>Cả hai được gán bằng 0 (khởi tạo) [1]</li><li>Nếu không, giá trị cũ/không xác định sẽ bị tính vào, nên tổng hoặc số đếm sẽ sai [1]</li></ul>` } },
  { id: "3.4-e2", kind: "trace", marks: 4,
    q: { en: `<p>Complete the trace table for this algorithm. The marks input are 45, 62, 50, 38, 71. [4]</p><pre>Total ← 0
PassCount ← 0
FOR Index ← 1 TO 5
  INPUT Mark
  Total ← Total + Mark
  IF Mark >= 50
    THEN
      PassCount ← PassCount + 1
  ENDIF
NEXT Index
OUTPUT Total, PassCount</pre>${T(["Index", "Mark", "Total", "PassCount", "OUTPUT"], [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]])}`,
         vi: `<p>Hoàn thành bảng theo dõi cho thuật toán này. Các điểm được nhập là 45, 62, 50, 38, 71. [4]</p><pre>Total ← 0
PassCount ← 0
FOR Index ← 1 TO 5
  INPUT Mark
  Total ← Total + Mark
  IF Mark >= 50
    THEN
      PassCount ← PassCount + 1
  ENDIF
NEXT Index
OUTPUT Total, PassCount</pre>${T(["Index", "Mark", "Total", "PassCount", "OUTPUT"], [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]])}` },
    ms: { en: `${T(["Index", "Mark", "Total", "PassCount", "OUTPUT"], [["", "", "0", "0", ""], ["1", "45", "45", "0", ""], ["2", "62", "107", "1", ""], ["3", "50", "157", "2", ""], ["4", "38", "195", "2", ""], ["5", "71", "266", "3", ""], ["", "", "", "", "266, 3"]])}<ul><li>Starting values Total 0 and PassCount 0 [1]</li><li>Index and Mark columns correct (1–5 and the five marks) [1]</li><li>Total column: 45, 107, 157, 195, 266 [1]</li><li>PassCount column: 0, 1, 2, 2, 3 and OUTPUT 266, 3 [1]</li></ul>`,
          vi: `${T(["Index", "Mark", "Total", "PassCount", "OUTPUT"], [["", "", "0", "0", ""], ["1", "45", "45", "0", ""], ["2", "62", "107", "1", ""], ["3", "50", "157", "2", ""], ["4", "38", "195", "2", ""], ["5", "71", "266", "3", ""], ["", "", "", "", "266, 3"]])}<ul><li>Giá trị ban đầu Total 0 và PassCount 0 [1]</li><li>Cột Index và Mark đúng (1–5 và năm điểm) [1]</li><li>Cột Total: 45, 107, 157, 195, 266 [1]</li><li>Cột PassCount: 0, 1, 2, 2, 3 và OUTPUT 266, 3 [1]</li></ul>` } },
  { id: "3.4-e3", kind: "trace", marks: 5,
    q: { en: `<p>The array <code>Temp</code> holds the values 14, 9, 21, 17, 11 (Temp[1] to Temp[5]). Complete the trace table. [5]</p><pre>Maximum ← Temp[1]
Minimum ← Temp[1]
FOR Index ← 2 TO 5
  IF Temp[Index] > Maximum THEN Maximum ← Temp[Index] ENDIF
  IF Temp[Index] < Minimum THEN Minimum ← Temp[Index] ENDIF
NEXT Index
OUTPUT Maximum, Minimum</pre>${T(["Index", "Temp[Index]", "Maximum", "Minimum", "OUTPUT"], [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]])}`,
         vi: `<p>Mảng <code>Temp</code> chứa các giá trị 14, 9, 21, 17, 11 (Temp[1] đến Temp[5]). Hoàn thành bảng theo dõi. [5]</p><pre>Maximum ← Temp[1]
Minimum ← Temp[1]
FOR Index ← 2 TO 5
  IF Temp[Index] > Maximum THEN Maximum ← Temp[Index] ENDIF
  IF Temp[Index] < Minimum THEN Minimum ← Temp[Index] ENDIF
NEXT Index
OUTPUT Maximum, Minimum</pre>${T(["Index", "Temp[Index]", "Maximum", "Minimum", "OUTPUT"], [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]])}` },
    hint: { en: `The first row shows the starting values. After that, only change Maximum or Minimum when the new value beats it.`, vi: `Dòng đầu cho thấy các giá trị ban đầu. Sau đó chỉ đổi Maximum hoặc Minimum khi giá trị mới vượt qua nó.` },
    ms: { en: `${T(["Index", "Temp[Index]", "Maximum", "Minimum", "OUTPUT"], [["", "", "14", "14", ""], ["2", "9", "14", "9", ""], ["3", "21", "21", "9", ""], ["4", "17", "21", "9", ""], ["5", "11", "21", "9", ""], ["", "", "", "", "21, 9"]])}<ul><li>Starting row: Maximum 14 and Minimum 14 [1]</li><li>Index 2 to 5 with the values 9, 21, 17, 11 [1]</li><li>Maximum column: 14, 14, 21, 21, 21 [1]</li><li>Minimum column: 14, 9, 9, 9, 9 [1]</li><li>OUTPUT 21, 9 [1]</li></ul>`,
          vi: `${T(["Index", "Temp[Index]", "Maximum", "Minimum", "OUTPUT"], [["", "", "14", "14", ""], ["2", "9", "14", "9", ""], ["3", "21", "21", "9", ""], ["4", "17", "21", "9", ""], ["5", "11", "21", "9", ""], ["", "", "", "", "21, 9"]])}<ul><li>Dòng đầu: Maximum 14 và Minimum 14 [1]</li><li>Index từ 2 đến 5 với các giá trị 9, 21, 17, 11 [1]</li><li>Cột Maximum: 14, 14, 21, 21, 21 [1]</li><li>Cột Minimum: 14, 9, 9, 9, 9 [1]</li><li>OUTPUT 21, 9 [1]</li></ul>` } },
  { id: "3.4-e4", kind: "calc", marks: 4,
    q: { en: `<p>A bubble sort is used to sort the list <code>[7, 3, 9, 2, 5]</code> into ascending order.</p><ol><li>Write down the list after each of the four comparisons in the first pass. [2]</li><li>State how many swaps were made in the first pass. [1]</li><li>Write down the list at the end of the second pass. [1]</li></ol>`,
         vi: `<p>Dùng sắp xếp nổi bọt để sắp xếp danh sách <code>[7, 3, 9, 2, 5]</code> theo thứ tự tăng dần.</p><ol><li>Viết ra danh sách sau mỗi trong bốn phép so sánh của lượt đầu tiên. [2]</li><li>Nêu số lần hoán đổi đã thực hiện trong lượt đầu tiên. [1]</li><li>Viết ra danh sách ở cuối lượt thứ hai. [1]</li></ol>` },
    hint: { en: `Compare positions 1 and 2, then 2 and 3, then 3 and 4, then 4 and 5. Swap only if the left value is bigger.`, vi: `So sánh vị trí 1 và 2, rồi 2 và 3, rồi 3 và 4, rồi 4 và 5. Chỉ hoán đổi nếu giá trị bên trái lớn hơn.` },
    ms: { en: `<ul><li>7 > 3 swap → [3, 7, 9, 2, 5]; 7 < 9 no swap → [3, 7, 9, 2, 5] [1]</li><li>9 > 2 swap → [3, 7, 2, 9, 5]; 9 > 5 swap → [3, 7, 2, 5, 9] [1]</li><li>3 swaps in the first pass [1]</li><li>Second pass: 3 < 7 no swap; 7 > 2 swap; 7 > 5 swap → <b>[3, 2, 5, 7, 9]</b> [1]</li></ul>`,
          vi: `<ul><li>7 > 3 hoán đổi → [3, 7, 9, 2, 5]; 7 < 9 không đổi → [3, 7, 9, 2, 5] [1]</li><li>9 > 2 hoán đổi → [3, 7, 2, 9, 5]; 9 > 5 hoán đổi → [3, 7, 2, 5, 9] [1]</li><li>3 lần hoán đổi trong lượt đầu tiên [1]</li><li>Lượt thứ hai: 3 < 7 không đổi; 7 > 2 hoán đổi; 7 > 5 hoán đổi → <b>[3, 2, 5, 7, 9]</b> [1]</li></ul>` } },
  { id: "3.4-e5", kind: "apply", marks: 4,
    q: { en: `<p>The array <code>Names</code> holds <code>["Ana", "Ben", "Cho", "Dan", "Eli", "Fay"]</code> in positions 1 to 6. The linear search algorithm from the reading is used to look for a name.</p><ol><li>The name searched for is "Eli". State the position at which it is found and how many names are compared. [2]</li><li>The name searched for is "Gus". State how many names are compared and what is output. [2]</li></ol>`,
         vi: `<p>Mảng <code>Names</code> chứa <code>["Ana", "Ben", "Cho", "Dan", "Eli", "Fay"]</code> ở các vị trí từ 1 đến 6. Thuật toán tìm kiếm tuần tự trong bài đọc được dùng để tìm một tên.</p><ol><li>Tên cần tìm là "Eli". Nêu vị trí tìm thấy và số tên đã được so sánh. [2]</li><li>Tên cần tìm là "Gus". Nêu số tên đã được so sánh và kết quả xuất ra. [2]</li></ol>` },
    ms: { en: `<ul><li>"Eli" is found at position 5 [1] after 5 comparisons (Ana, Ben, Cho, Dan, Eli) [1]</li><li>"Gus": all 6 names are compared [1]</li><li>Output: Gus not found [1]</li></ul>`,
          vi: `<ul><li>"Eli" được tìm thấy ở vị trí 5 [1] sau 5 lần so sánh (Ana, Ben, Cho, Dan, Eli) [1]</li><li>"Gus": cả 6 tên đều được so sánh [1]</li><li>Kết quả xuất: Gus not found [1]</li></ul>` } },
  { id: "3.4-e6", kind: "explain", marks: 3,
    q: { en: `<p>A student writes these two lines to swap the values of the variables <code>NumA</code> and <code>NumB</code>, where <code>NumA</code> is 8 and <code>NumB</code> is 3.</p><pre>NumA ← NumB
NumB ← NumA</pre><p>State the values of NumA and NumB after these lines and explain what has gone wrong. [3]</p>`,
         vi: `<p>Một học sinh viết hai dòng sau để hoán đổi giá trị của các biến <code>NumA</code> và <code>NumB</code>, trong đó <code>NumA</code> là 8 và <code>NumB</code> là 3.</p><pre>NumA ← NumB
NumB ← NumA</pre><p>Nêu giá trị của NumA và NumB sau hai dòng này và giải thích điều gì đã sai. [3]</p>` },
    ms: { en: `<ul><li>Both NumA and NumB are 3 [1]</li><li>The first line overwrites the 8, so the original value of NumA is lost [1]</li><li>Fix: store NumA in a temporary variable first (<code>Temp ← NumA</code>), then <code>NumA ← NumB</code>, then <code>NumB ← Temp</code> [1]</li></ul>`,
          vi: `<ul><li>Cả NumA và NumB đều bằng 3 [1]</li><li>Dòng đầu ghi đè lên số 8, nên giá trị ban đầu của NumA bị mất [1]</li><li>Cách sửa: lưu NumA vào một biến tạm trước (<code>Temp ← NumA</code>), rồi <code>NumA ← NumB</code>, rồi <code>NumB ← Temp</code> [1]</li></ul>` } },
  { id: "3.4-e7", kind: "code", marks: 6,
    q: { en: `<p>The array <code>Scores[1:25]</code> holds 25 test scores. Write pseudocode that uses a linear search to find the position of the first score equal to 100. The program must output the position, or the message "No full marks" if there is no score of 100. [6]</p>`,
         vi: `<p>Mảng <code>Scores[1:25]</code> chứa 25 điểm kiểm tra. Hãy viết mã giả dùng tìm kiếm tuần tự để tìm vị trí của điểm đầu tiên bằng 100. Chương trình phải xuất vị trí đó, hoặc thông báo "No full marks" nếu không có điểm 100 nào. [6]</p>` },
    hint: { en: `Use a Boolean variable such as Found, and stop the loop as soon as it is TRUE or the end of the array is reached.`, vi: `Dùng một biến Boolean như Found, và dừng vòng lặp ngay khi nó là TRUE hoặc khi đến cuối mảng.` },
    ms: { en: `<pre>Found ← FALSE
Index ← 1
WHILE Found = FALSE AND Index <= 25 DO
  IF Scores[Index] = 100
    THEN
      Found ← TRUE
    ELSE
      Index ← Index + 1
  ENDIF
ENDWHILE
IF Found = TRUE
  THEN OUTPUT "First full marks at position ", Index
  ELSE OUTPUT "No full marks"
ENDIF</pre><ul><li>Found (or similar) and Index initialised before the loop [1]</li><li>Loop that checks both "not found yet" and "Index <= 25" [1]</li><li>Correct comparison <code>Scores[Index] = 100</code> [1]</li><li>Found set to TRUE (so the loop stops) when it matches [1]</li><li>Index increased only when there is no match / each time round the loop without going out of range [1]</li><li>After the loop, outputs the position if found, otherwise the message [1]</li><li>(Any correct equivalent solution, e.g. a FOR loop with an exit flag, scores full marks.)</li></ul>`,
          vi: `<pre>Found ← FALSE
Index ← 1
WHILE Found = FALSE AND Index <= 25 DO
  IF Scores[Index] = 100
    THEN
      Found ← TRUE
    ELSE
      Index ← Index + 1
  ENDIF
ENDWHILE
IF Found = TRUE
  THEN OUTPUT "First full marks at position ", Index
  ELSE OUTPUT "No full marks"
ENDIF</pre><ul><li>Found (hoặc biến tương tự) và Index được khởi tạo trước vòng lặp [1]</li><li>Vòng lặp kiểm tra cả "chưa tìm thấy" và "Index <= 25" [1]</li><li>So sánh đúng <code>Scores[Index] = 100</code> [1]</li><li>Found được gán TRUE (để vòng lặp dừng) khi khớp [1]</li><li>Index chỉ tăng khi không khớp / mỗi vòng lặp mà không vượt quá phạm vi [1]</li><li>Sau vòng lặp, xuất vị trí nếu tìm thấy, ngược lại xuất thông báo [1]</li><li>(Mọi lời giải đúng tương đương, ví dụ vòng FOR kèm cờ thoát, đều được đủ điểm.)</li></ul>` } }
],

"3.5": [
  { id: "3.5-e1", kind: "short", marks: 3,
    q: { en: `<p>Name the validation check that is the most suitable for each of the following. [3]</p><ol><li>An age must be between 11 and 16.</li><li>A password must have at least 8 characters.</li><li>The email address field must not be left empty.</li></ol>`,
         vi: `<p>Nêu tên kiểm tra tính hợp lệ phù hợp nhất cho mỗi trường hợp sau. [3]</p><ol><li>Tuổi phải nằm trong khoảng từ 11 đến 16.</li><li>Mật khẩu phải có ít nhất 8 ký tự.</li><li>Trường địa chỉ email không được để trống.</li></ol>` },
    ms: { en: `<ul><li>Range check [1]</li><li>Length check [1]</li><li>Presence check [1]</li></ul>`,
          vi: `<ul><li>Kiểm tra khoảng giá trị (range check) [1]</li><li>Kiểm tra độ dài (length check) [1]</li><li>Kiểm tra sự hiện diện (presence check) [1]</li></ul>` } },
  { id: "3.5-e2", kind: "apply", marks: 4,
    q: { en: `<p>Choose the most suitable validation check for each situation. [4]</p><ol><li>A phone number must have exactly 10 digits.</li><li>A date must be entered in the form DD/MM/YYYY.</li><li>The number of tickets must be a whole number, not text.</li><li>The last digit of a book's barcode must agree with a value calculated from the other digits.</li></ol>`,
         vi: `<p>Chọn kiểm tra tính hợp lệ phù hợp nhất cho mỗi tình huống. [4]</p><ol><li>Số điện thoại phải có đúng 10 chữ số.</li><li>Một ngày phải được nhập theo dạng DD/MM/YYYY.</li><li>Số vé phải là số nguyên, không phải chữ.</li><li>Chữ số cuối của mã vạch một cuốn sách phải khớp với giá trị tính từ các chữ số còn lại.</li></ol>` },
    ms: { en: `<ul><li>Length check [1]</li><li>Format check [1]</li><li>Type check [1]</li><li>Check digit [1]</li></ul>`,
          vi: `<ul><li>Kiểm tra độ dài (length check) [1]</li><li>Kiểm tra định dạng (format check) [1]</li><li>Kiểm tra kiểu dữ liệu (type check) [1]</li><li>Chữ số kiểm tra (check digit) [1]</li></ul>` } },
  { id: "3.5-e3", kind: "explain", marks: 2,
    q: { en: `<p>A user enters their age as 15 when it is really 51. The program accepts it. Explain why validation did not stop this. [2]</p>`,
         vi: `<p>Một người dùng nhập tuổi là 15 trong khi thực tế là 51. Chương trình chấp nhận giá trị này. Hãy giải thích vì sao kiểm tra tính hợp lệ không ngăn được điều này. [2]</p>` },
    ms: { en: `<ul><li>Validation only checks that data is sensible/reasonable (e.g. within a range) [1]</li><li>15 is a reasonable age, so it passes the checks; validation cannot tell that it is not the correct value [1]</li></ul>`,
          vi: `<ul><li>Kiểm tra tính hợp lệ chỉ kiểm tra dữ liệu có hợp lý, chấp nhận được hay không (ví dụ nằm trong một khoảng) [1]</li><li>15 là một độ tuổi hợp lý nên vượt qua các kiểm tra; kiểm tra tính hợp lệ không biết được đó không phải giá trị đúng [1]</li></ul>` } },
  { id: "3.5-e4", kind: "explain", marks: 4,
    q: { en: `<p>Name <b>two</b> methods of verification and describe how each one works. [4]</p>`,
         vi: `<p>Nêu tên <b>hai</b> phương pháp xác minh và mô tả cách hoạt động của từng phương pháp. [4]</p>` },
    ms: { en: `<ul><li>Visual check [1]: the user looks at the data on the screen and compares it with the original document (or confirms "Is this correct?") [1]</li><li>Double entry check [1]: the data is entered twice and the computer compares the two entries; if they differ, the data must be entered again [1]</li></ul>`,
          vi: `<ul><li>Kiểm tra bằng mắt (visual check) [1]: người dùng nhìn dữ liệu trên màn hình và so với tài liệu gốc (hoặc xác nhận "Có đúng không?") [1]</li><li>Kiểm tra nhập hai lần (double entry check) [1]: dữ liệu được nhập hai lần và máy tính so sánh hai lần nhập; nếu khác nhau thì phải nhập lại [1]</li></ul>` } },
  { id: "3.5-e5", kind: "code", marks: 4,
    q: { en: `<p>A username must be between 6 and 12 characters long. Write pseudocode, using a REPEAT … UNTIL loop and the function <code>LENGTH</code>, that keeps asking for a username until a valid one is entered and shows an error message each time an invalid one is entered. [4]</p>`,
         vi: `<p>Tên đăng nhập phải dài từ 6 đến 12 ký tự. Hãy viết mã giả, dùng vòng lặp REPEAT … UNTIL và hàm <code>LENGTH</code>, để liên tục hỏi tên đăng nhập cho đến khi nhập hợp lệ và hiển thị thông báo lỗi mỗi khi nhập không hợp lệ. [4]</p>` },
    ms: { en: `<pre>REPEAT
  OUTPUT "Enter a username (6 to 12 characters)"
  INPUT Username
  IF LENGTH(Username) < 6 OR LENGTH(Username) > 12
    THEN
      OUTPUT "Invalid length – please re-enter"
  ENDIF
UNTIL LENGTH(Username) >= 6 AND LENGTH(Username) <= 12</pre><ul><li>REPEAT … UNTIL structure with INPUT (and a prompt) inside the loop [1]</li><li>LENGTH(Username) used [1]</li><li>Correct condition for the loop to end: &gt;= 6 AND &lt;= 12 [1]</li><li>Error message displayed for invalid input (using OR in the IF) [1]</li></ul>`,
          vi: `<pre>REPEAT
  OUTPUT "Enter a username (6 to 12 characters)"
  INPUT Username
  IF LENGTH(Username) < 6 OR LENGTH(Username) > 12
    THEN
      OUTPUT "Invalid length – please re-enter"
  ENDIF
UNTIL LENGTH(Username) >= 6 AND LENGTH(Username) <= 12</pre><ul><li>Cấu trúc REPEAT … UNTIL với INPUT (và lời nhắc) bên trong vòng lặp [1]</li><li>Dùng LENGTH(Username) [1]</li><li>Điều kiện kết thúc vòng lặp đúng: &gt;= 6 AND &lt;= 12 [1]</li><li>Hiển thị thông báo lỗi khi nhập không hợp lệ (dùng OR trong IF) [1]</li></ul>` } },
  { id: "3.5-e6", kind: "trace", marks: 4,
    q: { en: `<p>Complete the trace table for this algorithm. The user enters 0, then 51, then 20. [4]</p><pre>REPEAT
  OUTPUT "Enter a quantity (1 to 50)"
  INPUT Quantity
  IF Quantity < 1 OR Quantity > 50
    THEN
      OUTPUT "Invalid"
  ENDIF
UNTIL Quantity >= 1 AND Quantity <= 50
OUTPUT "Accepted: ", Quantity</pre>${T(["Quantity", "OUTPUT"], [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]])}`,
         vi: `<p>Hoàn thành bảng theo dõi cho thuật toán này. Người dùng nhập 0, rồi 51, rồi 20. [4]</p><pre>REPEAT
  OUTPUT "Enter a quantity (1 to 50)"
  INPUT Quantity
  IF Quantity < 1 OR Quantity > 50
    THEN
      OUTPUT "Invalid"
  ENDIF
UNTIL Quantity >= 1 AND Quantity <= 50
OUTPUT "Accepted: ", Quantity</pre>${T(["Quantity", "OUTPUT"], [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]])}` },
    hint: { en: `The prompt is output at the start of every pass round the loop.`, vi: `Lời nhắc được xuất ở đầu mỗi lần đi qua vòng lặp.` },
    ms: { en: `${T(["Quantity", "OUTPUT"], [["", "Enter a quantity (1 to 50)"], ["0", "Invalid"], ["", "Enter a quantity (1 to 50)"], ["51", "Invalid"], ["", "Enter a quantity (1 to 50)"], ["20", ""], ["", "Accepted: 20"]])}<ul><li>The prompt is output three times (once per pass) [1]</li><li>Quantity values 0, 51, 20 in order [1]</li><li>"Invalid" output exactly twice (after 0 and after 51), not after 20 [1]</li><li>Final output "Accepted: 20" [1]</li></ul>`,
          vi: `${T(["Quantity", "OUTPUT"], [["", "Enter a quantity (1 to 50)"], ["0", "Invalid"], ["", "Enter a quantity (1 to 50)"], ["51", "Invalid"], ["", "Enter a quantity (1 to 50)"], ["20", ""], ["", "Accepted: 20"]])}<ul><li>Lời nhắc được xuất ba lần (mỗi lần đi qua vòng lặp một lần) [1]</li><li>Các giá trị Quantity 0, 51, 20 theo thứ tự [1]</li><li>"Invalid" được xuất đúng hai lần (sau 0 và sau 51), không xuất sau 20 [1]</li><li>Kết quả cuối "Accepted: 20" [1]</li></ul>` } },
  { id: "3.5-e7", kind: "calc", marks: 5,
    q: { en: `<p>A shop uses a simple check digit scheme: add the first four digits of a code, then the check digit is the remainder when the sum is divided by 10 (<code>Sum MOD 10</code>). The check digit is added as the fifth digit.</p><ol><li>Calculate the check digit for the code 4719. [2]</li><li>A user types the code 47193. State whether the check digit scheme accepts it and show your working. [2]</li><li>Give one type of mistake in typing that this scheme would <b>not</b> detect. [1]</li></ol>`,
         vi: `<p>Một cửa hàng dùng sơ đồ chữ số kiểm tra đơn giản: cộng bốn chữ số đầu của một mã, rồi chữ số kiểm tra là số dư khi chia tổng cho 10 (<code>Sum MOD 10</code>). Chữ số kiểm tra được thêm vào làm chữ số thứ năm.</p><ol><li>Tính chữ số kiểm tra cho mã 4719. [2]</li><li>Một người dùng gõ mã 47193. Nêu sơ đồ chữ số kiểm tra có chấp nhận mã này không và trình bày cách tính. [2]</li><li>Nêu một loại lỗi gõ mà sơ đồ này <b>không</b> phát hiện được. [1]</li></ol>` },
    hint: { en: `Add 4 + 7 + 1 + 9 first.`, vi: `Hãy cộng 4 + 7 + 1 + 9 trước.` },
    ms: { en: `<ul><li>Sum = 4 + 7 + 1 + 9 = 21 [1]</li><li>21 MOD 10 = <b>1</b>, so the check digit is 1 (full code 47191) [1]</li><li>For 47193 the first four digits still give a check digit of 1, but the fifth digit typed is 3 [1]</li><li>1 ≠ 3, so the code is rejected as invalid [1]</li><li>Any valid answer, e.g. two digits swapped (transposition) such as 74191 gives the same sum, so it is accepted even though it is wrong [1]</li></ul>`,
          vi: `<ul><li>Tổng = 4 + 7 + 1 + 9 = 21 [1]</li><li>21 MOD 10 = <b>1</b>, nên chữ số kiểm tra là 1 (mã đầy đủ 47191) [1]</li><li>Với 47193, bốn chữ số đầu vẫn cho chữ số kiểm tra là 1, nhưng chữ số thứ năm được gõ là 3 [1]</li><li>1 ≠ 3, nên mã bị từ chối là không hợp lệ [1]</li><li>Mọi đáp án hợp lý, ví dụ hai chữ số bị đổi chỗ (hoán vị) như 74191 cho cùng tổng, nên được chấp nhận dù sai [1]</li></ul>` } }
],

"3.6": [
  { id: "3.6-e1", kind: "short", marks: 4,
    q: { en: `<p>A program accepts a whole-number age from 5 to 18. For each type of test data, give one example. [4]</p><ol><li>Normal</li><li>Abnormal</li><li>Extreme</li><li>Boundary</li></ol>`,
         vi: `<p>Một chương trình nhận tuổi là số nguyên từ 5 đến 18. Với mỗi loại dữ liệu kiểm thử, hãy cho một ví dụ. [4]</p><ol><li>Bình thường</li><li>Bất thường</li><li>Cực biên</li><li>Biên</li></ol>` },
    ms: { en: `<ul><li>Normal: any whole number from 5 to 18, e.g. 12 [1]</li><li>Abnormal: data that must be rejected, e.g. −3, 40 or "ten" [1]</li><li>Extreme: the smallest or largest accepted value, i.e. 5 or 18 [1]</li><li>Boundary: a value on the limit together with the value just outside it, e.g. 4 and 5, or 18 and 19 [1]</li></ul>`,
          vi: `<ul><li>Bình thường: bất kỳ số nguyên nào từ 5 đến 18, ví dụ 12 [1]</li><li>Bất thường: dữ liệu phải bị từ chối, ví dụ −3, 40 hoặc "ten" [1]</li><li>Cực biên: giá trị nhỏ nhất hoặc lớn nhất được chấp nhận, tức 5 hoặc 18 [1]</li><li>Biên: một giá trị nằm trên giới hạn cùng với giá trị ngay sát bên ngoài nó, ví dụ 4 và 5, hoặc 18 và 19 [1]</li></ul>` } },
  { id: "3.6-e2", kind: "apply", marks: 6,
    q: { en: `<p>A cinema booking program accepts a number of tickets from 1 to 10 (whole numbers only).</p><ol><li>Give the two <b>extreme</b> values that should be used as test data. [2]</li><li>Give the two values that are just <b>outside</b> the range and are used as boundary test data. [2]</li><li>Give one example of abnormal test data that is of a different data type. [1]</li><li>State the expected result when the test data is 0. [1]</li></ol>`,
         vi: `<p>Một chương trình đặt vé xem phim nhận số vé từ 1 đến 10 (chỉ số nguyên).</p><ol><li>Nêu hai giá trị <b>cực biên</b> cần dùng làm dữ liệu kiểm thử. [2]</li><li>Nêu hai giá trị nằm ngay <b>ngoài</b> khoảng và được dùng làm dữ liệu kiểm thử biên. [2]</li><li>Cho một ví dụ về dữ liệu kiểm thử bất thường thuộc kiểu dữ liệu khác. [1]</li><li>Nêu kết quả mong đợi khi dữ liệu kiểm thử là 0. [1]</li></ol>` },
    ms: { en: `<ul><li>Extreme: 1 [1] and 10 [1]</li><li>Just outside the range: 0 [1] and 11 [1]</li><li>Abnormal of a different type, e.g. "two" or 2.5 [1]</li><li>0 is rejected (an error message is shown) [1]</li></ul>`,
          vi: `<ul><li>Cực biên: 1 [1] và 10 [1]</li><li>Ngay ngoài khoảng: 0 [1] và 11 [1]</li><li>Bất thường thuộc kiểu khác, ví dụ "two" hoặc 2.5 [1]</li><li>0 bị từ chối (hiển thị thông báo lỗi) [1]</li></ul>` } },
  { id: "3.6-e3", kind: "trace", marks: 4,
    q: { en: `<p>Complete the trace table for this algorithm. The numbers input are 7, 4, 10, 3. [4]</p><pre>Total ← 0
Evens ← 0
FOR Count ← 1 TO 4
  INPUT Number
  IF Number MOD 2 = 0
    THEN
      Total ← Total + Number
      Evens ← Evens + 1
  ENDIF
NEXT Count
OUTPUT Total, Evens</pre>${T(["Count", "Number", "Total", "Evens", "OUTPUT"], [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]])}`,
         vi: `<p>Hoàn thành bảng theo dõi cho thuật toán này. Các số được nhập là 7, 4, 10, 3. [4]</p><pre>Total ← 0
Evens ← 0
FOR Count ← 1 TO 4
  INPUT Number
  IF Number MOD 2 = 0
    THEN
      Total ← Total + Number
      Evens ← Evens + 1
  ENDIF
NEXT Count
OUTPUT Total, Evens</pre>${T(["Count", "Number", "Total", "Evens", "OUTPUT"], [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]])}` },
    ms: { en: `${T(["Count", "Number", "Total", "Evens", "OUTPUT"], [["", "", "0", "0", ""], ["1", "7", "0", "0", ""], ["2", "4", "4", "1", ""], ["3", "10", "14", "2", ""], ["4", "3", "14", "2", ""], ["", "", "", "", "14, 2"]])}<ul><li>Starting values Total 0, Evens 0 [1]</li><li>Count 1–4 and Number 7, 4, 10, 3 [1]</li><li>Total: 0, 4, 14, 14 and Evens: 0, 1, 2, 2 (7 and 3 are odd, so no change) [1]</li><li>OUTPUT 14, 2 [1]</li></ul>`,
          vi: `${T(["Count", "Number", "Total", "Evens", "OUTPUT"], [["", "", "0", "0", ""], ["1", "7", "0", "0", ""], ["2", "4", "4", "1", ""], ["3", "10", "14", "2", ""], ["4", "3", "14", "2", ""], ["", "", "", "", "14, 2"]])}<ul><li>Giá trị ban đầu Total 0, Evens 0 [1]</li><li>Count 1–4 và Number 7, 4, 10, 3 [1]</li><li>Total: 0, 4, 14, 14 và Evens: 0, 1, 2, 2 (7 và 3 là số lẻ nên không đổi) [1]</li><li>OUTPUT 14, 2 [1]</li></ul>` } },
  { id: "3.6-e4", kind: "trace", marks: 5,
    q: { en: `<p>Complete the trace table for this algorithm. [5]</p><pre>Num ← 20
Steps ← 0
WHILE Num > 1 DO
  IF Num MOD 2 = 0
    THEN
      Num ← Num DIV 2
    ELSE
      Num ← Num * 3 + 1
  ENDIF
  Steps ← Steps + 1
ENDWHILE
OUTPUT Steps</pre>${T(["Num", "Steps", "OUTPUT"], [["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]])}`,
         vi: `<p>Hoàn thành bảng theo dõi cho thuật toán này. [5]</p><pre>Num ← 20
Steps ← 0
WHILE Num > 1 DO
  IF Num MOD 2 = 0
    THEN
      Num ← Num DIV 2
    ELSE
      Num ← Num * 3 + 1
  ENDIF
  Steps ← Steps + 1
ENDWHILE
OUTPUT Steps</pre>${T(["Num", "Steps", "OUTPUT"], [["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]])}` },
    hint: { en: `If Num is even, halve it; if it is odd, multiply by 3 and add 1. Stop when Num is 1.`, vi: `Nếu Num chẵn thì chia đôi; nếu lẻ thì nhân 3 rồi cộng 1. Dừng khi Num bằng 1.` },
    ms: { en: `${T(["Num", "Steps", "OUTPUT"], [["20", "0", ""], ["10", "1", ""], ["5", "2", ""], ["16", "3", ""], ["8", "4", ""], ["4", "5", ""], ["2", "6", ""], ["1", "7", ""], ["", "", "7"]])}<ul><li>Starting row Num 20, Steps 0 [1]</li><li>Num sequence 10, 5, 16 [1]</li><li>Num sequence 8, 4, 2, 1 [1]</li><li>Steps column counts 1 to 7 [1]</li><li>The loop ends when Num is 1 and 7 is output [1]</li></ul>`,
          vi: `${T(["Num", "Steps", "OUTPUT"], [["20", "0", ""], ["10", "1", ""], ["5", "2", ""], ["16", "3", ""], ["8", "4", ""], ["4", "5", ""], ["2", "6", ""], ["1", "7", ""], ["", "", "7"]])}<ul><li>Dòng đầu Num 20, Steps 0 [1]</li><li>Dãy Num: 10, 5, 16 [1]</li><li>Dãy Num: 8, 4, 2, 1 [1]</li><li>Cột Steps đếm từ 1 đến 7 [1]</li><li>Vòng lặp kết thúc khi Num bằng 1 và xuất 7 [1]</li></ul>` } },
  { id: "3.6-e5", kind: "trace", marks: 4,
    q: { en: `<p>Complete the trace table for this algorithm, including the user prompts. The user enters 9, then 5. [4]</p><pre>Attempts ← 0
REPEAT
  OUTPUT "Enter code"
  INPUT Code
  Attempts ← Attempts + 1
UNTIL Code = 5 OR Attempts = 3
OUTPUT Attempts</pre>${T(["Attempts", "Code", "OUTPUT"], [["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]])}`,
         vi: `<p>Hoàn thành bảng theo dõi cho thuật toán này, kể cả các lời nhắc người dùng. Người dùng nhập 9, rồi 5. [4]</p><pre>Attempts ← 0
REPEAT
  OUTPUT "Enter code"
  INPUT Code
  Attempts ← Attempts + 1
UNTIL Code = 5 OR Attempts = 3
OUTPUT Attempts</pre>${T(["Attempts", "Code", "OUTPUT"], [["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]])}` },
    ms: { en: `${T(["Attempts", "Code", "OUTPUT"], [["0", "", ""], ["", "", "Enter code"], ["1", "9", ""], ["", "", "Enter code"], ["2", "5", ""], ["", "", "2"]])}<ul><li>"Enter code" shown twice, once at the start of each pass [1]</li><li>Code values 9 then 5 [1]</li><li>Attempts values 0, 1, 2 [1]</li><li>The loop ends because Code = 5; final OUTPUT is 2 [1]</li></ul>`,
          vi: `${T(["Attempts", "Code", "OUTPUT"], [["0", "", ""], ["", "", "Enter code"], ["1", "9", ""], ["", "", "Enter code"], ["2", "5", ""], ["", "", "2"]])}<ul><li>"Enter code" xuất hai lần, mỗi lần ở đầu một lượt lặp [1]</li><li>Các giá trị Code: 9 rồi 5 [1]</li><li>Các giá trị Attempts: 0, 1, 2 [1]</li><li>Vòng lặp kết thúc vì Code = 5; OUTPUT cuối là 2 [1]</li></ul>` } },
  { id: "3.6-e6", kind: "explain", marks: 3,
    q: { en: `<p>A programmer tests a mark-entry program (accepts 0 to 100) using only normal data such as 40, 55 and 72. Explain why this is not enough testing. [3]</p>`,
         vi: `<p>Một lập trình viên kiểm thử chương trình nhập điểm (chấp nhận 0 đến 100) chỉ bằng dữ liệu bình thường như 40, 55 và 72. Hãy giải thích vì sao như vậy là chưa đủ. [3]</p>` },
    ms: { en: `<ul><li>Normal data only shows that valid data is accepted; it does not show that invalid data is rejected (abnormal data is needed) [1]</li><li>Extreme/boundary data (0, 100, −1, 101) is needed to check the limits, e.g. a wrong operator such as &gt; instead of &gt;= would not be found [1]</li><li>Errors/crashes with unexpected input (e.g. text) could remain, causing the program to fail when it is used [1]</li></ul>`,
          vi: `<ul><li>Chỉ dùng dữ liệu bình thường mới cho thấy dữ liệu hợp lệ được chấp nhận; chưa cho thấy dữ liệu không hợp lệ bị từ chối (cần dữ liệu bất thường) [1]</li><li>Cần dữ liệu cực biên/biên (0, 100, −1, 101) để kiểm tra các giới hạn, ví dụ toán tử sai như &gt; thay vì &gt;= sẽ không bị phát hiện [1]</li><li>Lỗi/sự cố với dữ liệu nhập bất ngờ (ví dụ chữ) có thể vẫn còn, khiến chương trình hỏng khi được sử dụng [1]</li></ul>` } },
  { id: "3.6-e7", kind: "apply", marks: 4,
    q: { en: `<p>This algorithm should output "Pass" for a mark of 50 or more.</p><pre>INPUT Mark
IF Mark > 50
  THEN OUTPUT "Pass"
  ELSE OUTPUT "Fail"
ENDIF</pre><ol><li>Which one of the test values 20, 49, 50, 51 and 80 would show up the error? [1]</li><li>State the expected output and the actual output for that value. [2]</li><li>State the type of test data that this value is. [1]</li></ol>`,
         vi: `<p>Thuật toán này phải xuất "Pass" với điểm từ 50 trở lên.</p><pre>INPUT Mark
IF Mark > 50
  THEN OUTPUT "Pass"
  ELSE OUTPUT "Fail"
ENDIF</pre><ol><li>Trong các giá trị kiểm thử 20, 49, 50, 51 và 80, giá trị nào làm lộ lỗi? [1]</li><li>Nêu kết quả mong đợi và kết quả thực tế với giá trị đó. [2]</li><li>Nêu giá trị này thuộc loại dữ liệu kiểm thử nào. [1]</li></ol>` },
    ms: { en: `<ul><li>The value 50 [1]</li><li>Expected output: Pass [1]; actual output: Fail, because 50 > 50 is false [1]</li><li>Boundary data (it is on the limit between Fail and Pass) [1]</li><li>(Correction: <code>IF Mark >= 50</code>.)</li></ul>`,
          vi: `<ul><li>Giá trị 50 [1]</li><li>Kết quả mong đợi: Pass [1]; kết quả thực tế: Fail, vì 50 > 50 là sai [1]</li><li>Dữ liệu biên (nằm đúng trên giới hạn giữa Fail và Pass) [1]</li><li>(Cách sửa: <code>IF Mark >= 50</code>.)</li></ul>` } }
],

"3.7": [
  { id: "3.7-e1", kind: "short", marks: 3,
    q: { en: `<p>Give <b>three</b> different types of error that are often found in algorithms. [3]</p>`,
         vi: `<p>Nêu <b>ba</b> loại lỗi khác nhau thường gặp trong các thuật toán. [3]</p>` },
    ms: { en: `<ul><li>Any three from: variable not initialised / wrong starting value; wrong comparison operator (e.g. &gt; instead of &gt;=); loop runs the wrong number of times; counter not updated; wrong logic in a condition (AND/OR); OUTPUT in the wrong place (e.g. inside the loop); average calculated in the wrong place or divided by the wrong number [3]</li></ul>`,
          vi: `<ul><li>Ba ý bất kỳ trong: biến chưa được khởi tạo / giá trị ban đầu sai; toán tử so sánh sai (ví dụ &gt; thay vì &gt;=); vòng lặp chạy sai số lần; biến đếm không được cập nhật; logic điều kiện sai (AND/OR); OUTPUT sai chỗ (ví dụ bên trong vòng lặp); tính trung bình sai chỗ hoặc chia cho sai số [3]</li></ul>` } },
  { id: "3.7-e2", kind: "code", marks: 4,
    q: { en: `<p>This algorithm should output the total of 8 marks.</p><pre>Total ← 1
FOR Count ← 1 TO 7
  INPUT Mark
  Total ← Total + Mark
NEXT Count
OUTPUT Total</pre><p>Identify the two errors and write the correct line for each. [4]</p>`,
         vi: `<p>Thuật toán này phải xuất tổng của 8 điểm.</p><pre>Total ← 1
FOR Count ← 1 TO 7
  INPUT Mark
  Total ← Total + Mark
NEXT Count
OUTPUT Total</pre><p>Xác định hai lỗi và viết dòng đúng cho mỗi lỗi. [4]</p>` },
    ms: { en: `<ul><li>Error 1: Total is initialised to 1, so the total is 1 too big [1]; correct line: <code>Total ← 0</code> [1]</li><li>Error 2: the loop only runs 7 times, not 8 [1]; correct line: <code>FOR Count ← 1 TO 8</code> [1]</li></ul>`,
          vi: `<ul><li>Lỗi 1: Total được khởi tạo bằng 1, nên tổng lớn hơn đúng 1 [1]; dòng đúng: <code>Total ← 0</code> [1]</li><li>Lỗi 2: vòng lặp chỉ chạy 7 lần, không phải 8 [1]; dòng đúng: <code>FOR Count ← 1 TO 8</code> [1]</li></ul>` } },
  { id: "3.7-e3", kind: "code", marks: 6,
    q: { en: `<p>This algorithm should input numbers until 0 is entered and then output their average. It has <b>three</b> errors.</p><pre>Total ← 0
Count ← 0
INPUT Number
WHILE Number = 0 DO
  Total ← Total + Number
  INPUT Number
ENDWHILE
Average ← Total / Count
OUTPUT Average</pre><p>Identify each error and say how to correct it. [6]</p>`,
         vi: `<p>Thuật toán này phải nhập các số cho đến khi nhập 0 rồi xuất giá trị trung bình của chúng. Nó có <b>ba</b> lỗi.</p><pre>Total ← 0
Count ← 0
INPUT Number
WHILE Number = 0 DO
  Total ← Total + Number
  INPUT Number
ENDWHILE
Average ← Total / Count
OUTPUT Average</pre><p>Xác định từng lỗi và nêu cách sửa. [6]</p>` },
    ms: { en: `<ul><li>Error 1: the loop condition is wrong — the loop would not run for non-zero numbers [1]; change to <code>WHILE Number <> 0 DO</code> [1]</li><li>Error 2: Count is never increased, so it stays 0 [1]; add <code>Count ← Count + 1</code> inside the loop [1]</li><li>Error 3: if the first number is 0, Count is 0 and the division <code>Total / Count</code> fails (divide by zero) [1]; check <code>IF Count > 0</code> before calculating and outputting the average [1]</li></ul>`,
          vi: `<ul><li>Lỗi 1: điều kiện vòng lặp sai — vòng lặp sẽ không chạy với các số khác 0 [1]; sửa thành <code>WHILE Number <> 0 DO</code> [1]</li><li>Lỗi 2: Count không bao giờ được tăng nên luôn bằng 0 [1]; thêm <code>Count ← Count + 1</code> bên trong vòng lặp [1]</li><li>Lỗi 3: nếu số đầu tiên là 0 thì Count bằng 0 và phép chia <code>Total / Count</code> bị lỗi (chia cho không) [1]; kiểm tra <code>IF Count > 0</code> trước khi tính và xuất giá trị trung bình [1]</li></ul>` } },
  { id: "3.7-e4", kind: "trace", marks: 4,
    q: { en: `<p>This algorithm should output the largest of three numbers. The numbers input are −5, −2, −9.</p><pre>Largest ← 0
FOR Count ← 1 TO 3
  INPUT Number
  IF Number > Largest THEN Largest ← Number ENDIF
NEXT Count
OUTPUT Largest</pre><ol><li>Complete the trace table. [2]</li><li>Explain why the output is wrong and how to correct the algorithm. [2]</li></ol>${T(["Count", "Number", "Largest", "OUTPUT"], [["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]])}`,
         vi: `<p>Thuật toán này phải xuất số lớn nhất trong ba số. Các số được nhập là −5, −2, −9.</p><pre>Largest ← 0
FOR Count ← 1 TO 3
  INPUT Number
  IF Number > Largest THEN Largest ← Number ENDIF
NEXT Count
OUTPUT Largest</pre><ol><li>Hoàn thành bảng theo dõi. [2]</li><li>Giải thích vì sao kết quả xuất sai và cách sửa thuật toán. [2]</li></ol>${T(["Count", "Number", "Largest", "OUTPUT"], [["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]])}` },
    ms: { en: `${T(["Count", "Number", "Largest", "OUTPUT"], [["", "", "0", ""], ["1", "-5", "0", ""], ["2", "-2", "0", ""], ["3", "-9", "0", ""], ["", "", "", "0"]])}<ul><li>Trace table: Number column −5, −2, −9 and Largest stays 0 [1]</li><li>OUTPUT is 0 [1]</li><li>Error: Largest starts at 0, which is bigger than every input, so it is never replaced (the correct answer is −2) [1]</li><li>Fix: set <code>Largest ← -999</code> (a very small number) or start with the first number input [1]</li></ul>`,
          vi: `${T(["Count", "Number", "Largest", "OUTPUT"], [["", "", "0", ""], ["1", "-5", "0", ""], ["2", "-2", "0", ""], ["3", "-9", "0", ""], ["", "", "", "0"]])}<ul><li>Bảng theo dõi: cột Number là −5, −2, −9 và Largest giữ nguyên 0 [1]</li><li>OUTPUT là 0 [1]</li><li>Lỗi: Largest bắt đầu bằng 0, lớn hơn mọi số được nhập nên không bao giờ bị thay thế (đáp án đúng là −2) [1]</li><li>Cách sửa: đặt <code>Largest ← -999</code> (một số rất nhỏ) hoặc bắt đầu bằng số đầu tiên được nhập [1]</li></ul>` } },
  { id: "3.7-e5", kind: "explain", marks: 4,
    q: { en: `<p>Explain <b>two</b> reasons why an algorithm should use meaningful identifiers (such as <code>TotalMark</code>) and precise conditions (such as <code>Mark >= 50</code>) rather than shortened names and descriptions in words. [4]</p>`,
         vi: `<p>Hãy giải thích <b>hai</b> lý do vì sao một thuật toán nên dùng tên định danh có ý nghĩa (như <code>TotalMark</code>) và điều kiện chính xác (như <code>Mark >= 50</code>) thay vì tên viết tắt và mô tả bằng lời. [4]</p>` },
    ms: { en: `<ul><li>Reason 1: meaningful names make the algorithm easier to read and understand [1] so other people (and the author later) can follow it and correct or amend it [1]</li><li>Reason 2: precise conditions leave no doubt about what is being tested [1] so the algorithm can be turned straight into code and dry-run without guessing; "is big enough" cannot be tested [1]</li></ul>`,
          vi: `<ul><li>Lý do 1: tên có ý nghĩa giúp thuật toán dễ đọc, dễ hiểu hơn [1] nên người khác (và chính tác giả về sau) có thể theo dõi, sửa hoặc chỉnh sửa nó [1]</li><li>Lý do 2: điều kiện chính xác không để lại nghi ngờ về điều đang được kiểm tra [1] nên thuật toán có thể chuyển thẳng thành mã và chạy thử bằng tay mà không phải đoán; "đủ lớn" thì không thể kiểm tra được [1]</li></ul>` } },
  { id: "3.7-e6", kind: "code", marks: 4,
    q: { en: `<p>This algorithm inputs temperatures until −999 is entered, then outputs the average.</p><pre>Total ← 0
Count ← 0
INPUT Temp
WHILE Temp <> -999 DO
  Total ← Total + Temp
  Count ← Count + 1
  INPUT Temp
ENDWHILE
IF Count > 0
  THEN OUTPUT "Average: ", Total / Count
ENDIF</pre><p>Amend the algorithm so that it also outputs the highest temperature entered. Write the complete amended pseudocode. [4]</p>`,
         vi: `<p>Thuật toán này nhập nhiệt độ cho đến khi nhập −999, rồi xuất nhiệt độ trung bình.</p><pre>Total ← 0
Count ← 0
INPUT Temp
WHILE Temp <> -999 DO
  Total ← Total + Temp
  Count ← Count + 1
  INPUT Temp
ENDWHILE
IF Count > 0
  THEN OUTPUT "Average: ", Total / Count
ENDIF</pre><p>Hãy chỉnh sửa thuật toán để nó xuất thêm nhiệt độ cao nhất đã nhập. Viết toàn bộ mã giả sau khi chỉnh sửa. [4]</p>` },
    hint: { en: `You need a new variable that is set before the loop and compared with each new temperature inside the loop.`, vi: `Bạn cần một biến mới được gán trước vòng lặp và so sánh với từng nhiệt độ mới bên trong vòng lặp.` },
    ms: { en: `<pre>Total ← 0
Count ← 0
INPUT Temp
Highest ← Temp
WHILE Temp <> -999 DO
  IF Temp > Highest THEN Highest ← Temp ENDIF
  Total ← Total + Temp
  Count ← Count + 1
  INPUT Temp
ENDWHILE
IF Count > 0
  THEN
    OUTPUT "Average: ", Total / Count
    OUTPUT "Highest: ", Highest
ENDIF</pre><ul><li>A new variable (e.g. Highest) is given a starting value before the loop (the first temperature, or a very low number such as −998) [1]</li><li>Inside the loop, <code>IF Temp > Highest THEN Highest ← Temp</code> [1]</li><li>The comparison is done for every temperature but not for the −999 that ends the input [1]</li><li>Highest is output after the loop (inside the IF Count > 0 or equivalent) [1]</li></ul>`,
          vi: `<pre>Total ← 0
Count ← 0
INPUT Temp
Highest ← Temp
WHILE Temp <> -999 DO
  IF Temp > Highest THEN Highest ← Temp ENDIF
  Total ← Total + Temp
  Count ← Count + 1
  INPUT Temp
ENDWHILE
IF Count > 0
  THEN
    OUTPUT "Average: ", Total / Count
    OUTPUT "Highest: ", Highest
ENDIF</pre><ul><li>Một biến mới (ví dụ Highest) được gán giá trị ban đầu trước vòng lặp (nhiệt độ đầu tiên, hoặc một số rất thấp như −998) [1]</li><li>Bên trong vòng lặp có <code>IF Temp > Highest THEN Highest ← Temp</code> [1]</li><li>Phép so sánh được thực hiện cho mọi nhiệt độ nhưng không cho số −999 dùng để kết thúc việc nhập [1]</li><li>Highest được xuất sau vòng lặp (bên trong IF Count > 0 hoặc tương đương) [1]</li></ul>` } },
  { id: "3.7-e7", kind: "code", marks: 6,
    q: { en: `<p>A teacher enters 10 test marks. Each mark must be between 0 and 100 inclusive and must be re-entered if it is not. Write pseudocode that validates each mark and then outputs the total, the average and the highest of the 10 marks. [6]</p>`,
         vi: `<p>Một giáo viên nhập 10 điểm kiểm tra. Mỗi điểm phải nằm từ 0 đến 100 (gồm cả hai đầu) và phải nhập lại nếu không đúng. Hãy viết mã giả kiểm tra tính hợp lệ của từng điểm rồi xuất tổng, trung bình và điểm cao nhất của 10 điểm. [6]</p>` },
    hint: { en: `Put a REPEAT … UNTIL validation loop inside a FOR loop. Calculate the average after the FOR loop.`, vi: `Đặt vòng kiểm tra REPEAT … UNTIL bên trong vòng FOR. Tính trung bình sau vòng FOR.` },
    ms: { en: `<pre>Total ← 0
Highest ← 0
FOR Count ← 1 TO 10
  REPEAT
    OUTPUT "Enter a mark from 0 to 100"
    INPUT Mark
    IF Mark < 0 OR Mark > 100
      THEN OUTPUT "Invalid – please re-enter"
    ENDIF
  UNTIL Mark >= 0 AND Mark <= 100
  Total ← Total + Mark
  IF Mark > Highest THEN Highest ← Mark ENDIF
NEXT Count
Average ← Total / 10
OUTPUT "Total: ", Total
OUTPUT "Average: ", Average
OUTPUT "Highest: ", Highest</pre><ul><li>Total and Highest initialised before the loop (Highest ← 0 is fine because marks are not negative) [1]</li><li>FOR loop that runs exactly 10 times [1]</li><li>Validation loop with the correct range logic (OR to reject, AND to accept) and an error message [1]</li><li><code>Total ← Total + Mark</code> inside the loop, after validation [1]</li><li>Highest updated using <code>Mark > Highest</code> [1]</li><li>Average calculated (Total / 10) and all three results output after the loop [1]</li></ul>`,
          vi: `<pre>Total ← 0
Highest ← 0
FOR Count ← 1 TO 10
  REPEAT
    OUTPUT "Enter a mark from 0 to 100"
    INPUT Mark
    IF Mark < 0 OR Mark > 100
      THEN OUTPUT "Invalid – please re-enter"
    ENDIF
  UNTIL Mark >= 0 AND Mark <= 100
  Total ← Total + Mark
  IF Mark > Highest THEN Highest ← Mark ENDIF
NEXT Count
Average ← Total / 10
OUTPUT "Total: ", Total
OUTPUT "Average: ", Average
OUTPUT "Highest: ", Highest</pre><ul><li>Total và Highest được khởi tạo trước vòng lặp (Highest ← 0 là được vì điểm không âm) [1]</li><li>Vòng FOR chạy đúng 10 lần [1]</li><li>Vòng kiểm tra tính hợp lệ với logic khoảng giá trị đúng (OR để từ chối, AND để chấp nhận) và có thông báo lỗi [1]</li><li><code>Total ← Total + Mark</code> bên trong vòng lặp, sau khi kiểm tra [1]</li><li>Highest được cập nhật bằng <code>Mark > Highest</code> [1]</li><li>Tính trung bình (Total / 10) và xuất cả ba kết quả sau vòng lặp [1]</li></ul>` } }
]
  });
})();
