window.EXERCISES = window.EXERCISES || {};

Object.assign(window.EXERCISES, {
  "4.1": [
    { id: "4.1-e1", kind: "short", marks: 2,
      q: { en: `<p>State what the letters <b>CPU</b> stand for and give one job that the CPU does. <b>[2]</b></p>`,
           vi: `<p>Nêu <b>CPU</b> là viết tắt của cụm từ nào và cho biết một việc mà CPU làm. <b>[2]</b></p>` },
      ms: { en: `<ul><li>Central processing unit [1]</li><li>Any one: processes instructions / carries out (executes) program instructions / processes data that is input so the result can be output [1]</li></ul>`,
            vi: `<ul><li>Central processing unit (bộ xử lý trung tâm) [1]</li><li>Một trong các ý: xử lý các lệnh / thực thi các lệnh của chương trình / xử lý dữ liệu được nhập vào để xuất ra kết quả [1]</li></ul>` }
    },
    { id: "4.1-e2", kind: "short", marks: 3,
      q: { en: `<p>Name the register that holds each of the following.</p><ol><li>The address of the next instruction to be fetched <b>[1]</b></li><li>The instruction that is currently being decoded and executed <b>[1]</b></li><li>The result of a calculation carried out by the ALU <b>[1]</b></li></ol>`,
           vi: `<p>Gọi tên thanh ghi giữ từng nội dung sau.</p><ol><li>Địa chỉ của lệnh kế tiếp sẽ được nạp <b>[1]</b></li><li>Lệnh đang được giải mã và thực thi <b>[1]</b></li><li>Kết quả của một phép tính do ALU thực hiện <b>[1]</b></li></ol>` },
      ms: { en: `<ul><li>Program counter (PC) [1]</li><li>Current instruction register (CIR) [1]</li><li>Accumulator (ACC) [1]</li></ul>`,
            vi: `<ul><li>Bộ đếm chương trình (PC) [1]</li><li>Thanh ghi lệnh hiện hành (CIR) [1]</li><li>Thanh ghi tích lũy (ACC) [1]</li></ul>` }
    },
    { id: "4.1-e3", kind: "short", marks: 3,
      q: { en: `<p>Complete the table by writing what each bus carries and whether it is one way or two way.</p><table><tr><th>Bus</th><th>Carries</th><th>Direction</th></tr><tr><td>Address bus</td><td>…</td><td>…</td></tr><tr><td>Data bus</td><td>…</td><td>…</td></tr><tr><td>Control bus</td><td>…</td><td>…</td></tr></table><p><b>[3]</b></p>`,
           vi: `<p>Hoàn thành bảng bằng cách ghi mỗi bus truyền gì và nó là một chiều hay hai chiều.</p><table><tr><th>Bus</th><th>Truyền gì</th><th>Chiều truyền</th></tr><tr><td>Bus địa chỉ</td><td>…</td><td>…</td></tr><tr><td>Bus dữ liệu</td><td>…</td><td>…</td></tr><tr><td>Bus điều khiển</td><td>…</td><td>…</td></tr></table><p><b>[3]</b></p>` },
      ms: { en: `<ul><li>Address bus: memory addresses (from the MAR to memory); one way [1]</li><li>Data bus: data and instructions (between the MDR and memory); two way [1]</li><li>Control bus: control signals such as read, write, clock, interrupt; two way [1]</li></ul>`,
            vi: `<ul><li>Bus địa chỉ: địa chỉ bộ nhớ (từ MAR đến bộ nhớ); một chiều [1]</li><li>Bus dữ liệu: dữ liệu và lệnh (giữa MDR và bộ nhớ); hai chiều [1]</li><li>Bus điều khiển: các tín hiệu điều khiển như đọc, ghi, xung nhịp, ngắt; hai chiều [1]</li></ul>` }
    },
    { id: "4.1-e4", kind: "explain", marks: 3,
      q: { en: `<p>Explain why the address bus carries signals in one direction only, but the data bus carries signals in both directions. <b>[3]</b></p>`,
           vi: `<p>Giải thích vì sao bus địa chỉ chỉ truyền tín hiệu theo một chiều, còn bus dữ liệu truyền tín hiệu theo cả hai chiều. <b>[3]</b></p>` },
      hint: { en: `Think about who needs to tell whom what.`, vi: `Hãy nghĩ xem ai cần nói cho ai biết điều gì.` },
      ms: { en: `<ul><li>The CPU sends the address of the memory location it wants to memory [1]</li><li>Memory never needs to send an address back to the CPU, so the address bus is one way (CPU → memory) [1]</li><li>Data/instructions must travel both from memory to the CPU (read) and from the CPU to memory (write), so the data bus is two way [1]</li></ul>`,
            vi: `<ul><li>CPU gửi địa chỉ của vị trí nhớ mà nó muốn truy cập đến bộ nhớ [1]</li><li>Bộ nhớ không bao giờ cần gửi địa chỉ ngược lại cho CPU, nên bus địa chỉ là một chiều (CPU → bộ nhớ) [1]</li><li>Dữ liệu/lệnh phải đi cả từ bộ nhớ đến CPU (đọc) lẫn từ CPU đến bộ nhớ (ghi), nên bus dữ liệu là hai chiều [1]</li></ul>` }
    },
    { id: "4.1-e5", kind: "explain", marks: 4,
      q: { en: `<p>A computer uses Von Neumann architecture.</p><ol><li>Describe what is meant by a <i>stored program</i> computer. <b>[2]</b></li><li>Describe the purpose of the control unit and of the ALU. <b>[2]</b></li></ol>`,
           vi: `<p>Một máy tính dùng kiến trúc Von Neumann.</p><ol><li>Mô tả máy tính theo kiểu <i>chương trình lưu trữ</i> (stored program) nghĩa là gì. <b>[2]</b></li><li>Mô tả mục đích của bộ điều khiển và của ALU. <b>[2]</b></li></ol>` },
      ms: { en: `<ul><li>Programs and data are stored together in the same memory (RAM) [1]</li><li>Instructions are fetched from memory one at a time and executed in sequence [1]</li><li>Control unit: decodes instructions and sends control signals to coordinate the other components [1]</li><li>ALU: carries out calculations and logical operations [1]</li></ul>`,
            vi: `<ul><li>Chương trình và dữ liệu được lưu chung trong cùng một bộ nhớ (RAM) [1]</li><li>Các lệnh được nạp từ bộ nhớ từng lệnh một và thực thi theo thứ tự [1]</li><li>Bộ điều khiển: giải mã các lệnh và gửi tín hiệu điều khiển để phối hợp các thành phần khác [1]</li><li>ALU: thực hiện các phép tính và phép toán logic [1]</li></ul>` }
    },
    { id: "4.1-e6", kind: "apply", marks: 4,
      q: { en: `<p>The program counter contains the value <code>150</code>. The CPU is about to fetch the instruction stored at address 150.</p><ol><li>State the value that is stored in the MAR after the PC is copied to the MAR. <b>[1]</b></li><li>Name the bus that carries this address to memory. <b>[1]</b></li><li>Name the bus that carries the instruction from memory back to the MDR. <b>[1]</b></li><li>State the value in the PC at the end of the fetch stage. <b>[1]</b></li></ol>`,
           vi: `<p>Bộ đếm chương trình chứa giá trị <code>150</code>. CPU sắp nạp lệnh được lưu tại địa chỉ 150.</p><ol><li>Nêu giá trị được lưu trong MAR sau khi PC được sao chép sang MAR. <b>[1]</b></li><li>Gọi tên bus truyền địa chỉ này đến bộ nhớ. <b>[1]</b></li><li>Gọi tên bus truyền lệnh từ bộ nhớ trở lại MDR. <b>[1]</b></li><li>Nêu giá trị trong PC khi kết thúc giai đoạn nạp. <b>[1]</b></li></ol>` },
      ms: { en: `<ul><li>150 [1]</li><li>Address bus [1]</li><li>Data bus [1]</li><li>151 (the PC is incremented by 1 to point to the next instruction) [1]</li></ul>`,
            vi: `<ul><li>150 [1]</li><li>Bus địa chỉ [1]</li><li>Bus dữ liệu [1]</li><li>151 (PC được tăng thêm 1 để trỏ đến lệnh kế tiếp) [1]</li></ul>` }
    },
    { id: "4.1-e7", kind: "explain", marks: 3,
      q: { en: `<p>A smartphone contains a microprocessor.</p><ol><li>State what is meant by a <i>microprocessor</i>. <b>[2]</b></li><li>Give one other type of device that contains a microprocessor. <b>[1]</b></li></ol>`,
           vi: `<p>Một chiếc smartphone có chứa một vi xử lý.</p><ol><li>Nêu <i>vi xử lý</i> (microprocessor) nghĩa là gì. <b>[2]</b></li><li>Cho một loại thiết bị khác có chứa vi xử lý. <b>[1]</b></li></ol>` },
      ms: { en: `<ul><li>An integrated circuit on a single chip [1]</li><li>that contains/does the job of a CPU [1]</li><li>Any one: PC / laptop / games console / washing machine / other suitable device [1]</li></ul>`,
            vi: `<ul><li>Một mạch tích hợp trên một chip duy nhất [1]</li><li>có chứa/làm công việc của một CPU [1]</li><li>Một trong các ý: máy tính cá nhân / laptop / máy chơi game / máy giặt / thiết bị phù hợp khác [1]</li></ul>` }
    }
  ],

  "4.2": [
    { id: "4.2-e1", kind: "short", marks: 2,
      q: { en: `<p>During the fetch stage, state the name of the register that the address in the PC is first copied to, and state what happens to the PC at the end of the fetch stage. <b>[2]</b></p>`,
           vi: `<p>Trong giai đoạn nạp, nêu tên thanh ghi mà địa chỉ trong PC được sao chép sang đầu tiên, và nêu điều gì xảy ra với PC khi kết thúc giai đoạn nạp. <b>[2]</b></p>` },
      ms: { en: `<ul><li>Memory address register (MAR) [1]</li><li>The PC is incremented (by 1) so it points to the next instruction [1]</li></ul>`,
            vi: `<ul><li>Thanh ghi địa chỉ bộ nhớ (MAR) [1]</li><li>PC được tăng lên (thêm 1) để trỏ đến lệnh kế tiếp [1]</li></ul>` }
    },
    { id: "4.2-e2", kind: "calc", marks: 2,
      q: { en: `<p>A CPU has a clock speed of 2.5 GHz.</p><ol><li>State how many clock cycles it carries out in one second. <b>[1]</b></li><li>Calculate how many clock cycles it carries out in 0.002 seconds. <b>[1]</b></li></ol>`,
           vi: `<p>Một CPU có tốc độ xung nhịp 2.5 GHz.</p><ol><li>Nêu số chu kỳ xung nhịp mà nó thực hiện trong một giây. <b>[1]</b></li><li>Tính số chu kỳ xung nhịp mà nó thực hiện trong 0.002 giây. <b>[1]</b></li></ol>` },
      hint: { en: `1 GHz = 1 000 000 000 cycles per second.`, vi: `1 GHz = 1 000 000 000 chu kỳ mỗi giây.` },
      ms: { en: `<ul><li>2.5 × 1 000 000 000 = 2500000000 cycles per second [1]</li><li>2500000000 × 0.002 = 5000000 cycles [1]</li></ul>`,
            vi: `<ul><li>2.5 × 1 000 000 000 = 2500000000 chu kỳ mỗi giây [1]</li><li>2500000000 × 0.002 = 5000000 chu kỳ [1]</li></ul>` }
    },
    { id: "4.2-e3", kind: "trace", marks: 4,
      q: { en: `<p>Memory address <code>40</code> contains the instruction <code>LDA 90</code>. The PC holds <code>40</code> and the MAR, MDR and CIR are empty. The CPU now carries out the whole fetch stage.</p><p>State the contents of each register when the fetch stage has finished.</p><table><tr><th>Register</th><th>Contents</th></tr><tr><td>PC</td><td>…</td></tr><tr><td>MAR</td><td>…</td></tr><tr><td>MDR</td><td>…</td></tr><tr><td>CIR</td><td>…</td></tr></table><p><b>[4]</b></p>`,
           vi: `<p>Địa chỉ bộ nhớ <code>40</code> chứa lệnh <code>LDA 90</code>. PC giữ giá trị <code>40</code> còn MAR, MDR và CIR đang trống. Bây giờ CPU thực hiện toàn bộ giai đoạn nạp.</p><p>Nêu nội dung của từng thanh ghi khi giai đoạn nạp kết thúc.</p><table><tr><th>Thanh ghi</th><th>Nội dung</th></tr><tr><td>PC</td><td>…</td></tr><tr><td>MAR</td><td>…</td></tr><tr><td>MDR</td><td>…</td></tr><tr><td>CIR</td><td>…</td></tr></table><p><b>[4]</b></p>` },
      hint: { en: `PC → MAR → memory → MDR → CIR, then PC + 1.`, vi: `PC → MAR → bộ nhớ → MDR → CIR, rồi PC + 1.` },
      ms: { en: `<ul><li>PC = 41 (incremented after the address 40 was copied out) [1]</li><li>MAR = 40 [1]</li><li>MDR = LDA 90 [1]</li><li>CIR = LDA 90 (copied from the MDR) [1]</li></ul>`,
            vi: `<ul><li>PC = 41 (được tăng lên sau khi địa chỉ 40 đã được sao chép đi) [1]</li><li>MAR = 40 [1]</li><li>MDR = LDA 90 [1]</li><li>CIR = LDA 90 (được sao chép từ MDR) [1]</li></ul>` }
    },
    { id: "4.2-e4", kind: "explain", marks: 3,
      q: { en: `<p>A computer manufacturer says that a quad-core processor is always four times faster than a single-core processor.</p><p>Explain why this statement is not always true. <b>[3]</b></p>`,
           vi: `<p>Một nhà sản xuất máy tính cho rằng bộ xử lý quad-core luôn nhanh gấp bốn lần bộ xử lý một nhân.</p><p>Giải thích vì sao nhận định này không phải lúc nào cũng đúng. <b>[3]</b></p>` },
      ms: { en: `<ul><li>A core is an independent processing unit that can process instructions at the same time as other cores [1]</li><li>The software has to be written so that it can use several cores at once; otherwise the extra cores are not used [1]</li><li>The cores have to communicate/share data with each other, which takes time [1]</li></ul>`,
            vi: `<ul><li>Nhân là một đơn vị xử lý độc lập, có thể xử lý lệnh cùng lúc với các nhân khác [1]</li><li>Phần mềm phải được viết để có thể dùng nhiều nhân cùng lúc; nếu không thì các nhân thêm vào không được dùng đến [1]</li><li>Các nhân phải trao đổi/chia sẻ dữ liệu với nhau, việc này tốn thời gian [1]</li></ul>` }
    },
    { id: "4.2-e5", kind: "explain", marks: 3,
      q: { en: `<p>Describe what <i>cache</i> is and explain how a larger cache can improve the performance of a CPU. <b>[3]</b></p>`,
           vi: `<p>Mô tả <i>bộ nhớ đệm (cache)</i> là gì và giải thích cache lớn hơn có thể cải thiện hiệu năng của CPU như thế nào. <b>[3]</b></p>` },
      ms: { en: `<ul><li>A small amount of very fast memory inside or very close to the CPU [1]</li><li>It stores frequently used data and instructions [1]</li><li>It is much faster to access than RAM, so a larger cache means the CPU waits less for data and more of it can be found there [1]</li></ul>`,
            vi: `<ul><li>Một lượng nhỏ bộ nhớ rất nhanh nằm bên trong hoặc rất gần CPU [1]</li><li>Nó lưu các dữ liệu và lệnh được dùng thường xuyên [1]</li><li>Truy cập cache nhanh hơn RAM rất nhiều, nên cache lớn hơn nghĩa là CPU chờ dữ liệu ít hơn và tìm thấy được nhiều dữ liệu ở đó hơn [1]</li></ul>` }
    },
    { id: "4.2-e6", kind: "apply", marks: 4,
      q: { en: `<p>A video editor is choosing between two computers. The editing software is designed to use several cores.</p><table><tr><th></th><th>Computer A</th><th>Computer B</th></tr><tr><td>Clock speed</td><td>3.6 GHz</td><td>2.8 GHz</td></tr><tr><td>Number of cores</td><td>2</td><td>8</td></tr><tr><td>Cache</td><td>4 MiB</td><td>16 MiB</td></tr></table><p>Recommend which computer will probably perform better and justify your answer. <b>[4]</b></p>`,
           vi: `<p>Một người dựng video đang chọn giữa hai máy tính. Phần mềm dựng video được thiết kế để dùng nhiều nhân.</p><table><tr><th></th><th>Máy A</th><th>Máy B</th></tr><tr><td>Tốc độ xung nhịp</td><td>3.6 GHz</td><td>2.8 GHz</td></tr><tr><td>Số nhân</td><td>2</td><td>8</td></tr><tr><td>Cache</td><td>4 MiB</td><td>16 MiB</td></tr></table><p>Đề xuất máy nào có khả năng hoạt động tốt hơn và giải thích lựa chọn của bạn. <b>[4]</b></p>` },
      ms: { en: `<ul><li>Computer B [1]</li><li>It has more cores (8 compared with 2), so it can process more instructions at the same time, and this software can use them [1]</li><li>It has a larger cache, so more frequently used data and instructions can be fetched faster than from RAM [1]</li><li>Computer A has a higher clock speed (more cycles per second) but it is outweighed by having only two cores and a small cache [1]</li></ul>`,
            vi: `<ul><li>Máy B [1]</li><li>Nó có nhiều nhân hơn (8 so với 2), nên xử lý được nhiều lệnh hơn cùng một lúc, và phần mềm này dùng được các nhân đó [1]</li><li>Nó có cache lớn hơn, nên nhiều dữ liệu và lệnh dùng thường xuyên được nạp nhanh hơn so với từ RAM [1]</li><li>Máy A có tốc độ xung nhịp cao hơn (nhiều chu kỳ hơn mỗi giây) nhưng lợi thế đó bị lấn át do chỉ có hai nhân và cache nhỏ [1]</li></ul>` }
    },
    { id: "4.2-e7", kind: "explain", marks: 4,
      q: { en: `<p>Describe what happens during the <b>decode</b> stage and the <b>execute</b> stage of the fetch–decode–execute cycle. <b>[4]</b></p>`,
           vi: `<p>Mô tả điều gì xảy ra trong giai đoạn <b>giải mã</b> và giai đoạn <b>thực thi</b> của chu trình nạp–giải mã–thực thi. <b>[4]</b></p>` },
      ms: { en: `<ul><li>Decode: the control unit decodes the instruction held in the CIR [1]</li><li>It works out what the instruction means using the instruction set [1]</li><li>Execute: the instruction is carried out, with the CU sending control signals [1]</li><li>The ALU may do a calculation and store the result in the accumulator, or data may be read from/written to memory using the MAR and MDR [1]</li></ul>`,
            vi: `<ul><li>Giải mã: bộ điều khiển giải mã lệnh đang nằm trong CIR [1]</li><li>Nó hiểu lệnh có nghĩa là gì dựa vào tập lệnh [1]</li><li>Thực thi: lệnh được thực hiện, trong đó CU gửi các tín hiệu điều khiển [1]</li><li>ALU có thể thực hiện một phép tính và lưu kết quả vào thanh ghi tích lũy, hoặc dữ liệu có thể được đọc từ/ghi vào bộ nhớ thông qua MAR và MDR [1]</li></ul>` }
    }
  ],

  "4.3": [
    { id: "4.3-e1", kind: "short", marks: 2,
      q: { en: `<p>State what is meant by an <i>instruction set</i> and state the form in which the instructions are stored. <b>[2]</b></p>`,
           vi: `<p>Nêu <i>tập lệnh</i> (instruction set) nghĩa là gì và nêu dạng mà các lệnh được lưu trữ. <b>[2]</b></p>` },
      ms: { en: `<ul><li>The list of all the commands/instructions that a CPU can process [1]</li><li>Machine code (binary) [1]</li></ul>`,
            vi: `<ul><li>Danh sách tất cả các lệnh mà một CPU có thể xử lý [1]</li><li>Mã máy (nhị phân) [1]</li></ul>` }
    },
    { id: "4.3-e2", kind: "short", marks: 2,
      q: { en: `<p>Give two examples of embedded systems that could be found in a home. <b>[2]</b></p>`,
           vi: `<p>Cho hai ví dụ về hệ thống nhúng có thể có trong một ngôi nhà. <b>[2]</b></p>` },
      ms: { en: `<ul><li>Any two from: washing machine, microwave oven, central heating controller, security alarm, smart lighting, smart oven/thermostat [2]</li></ul>`,
            vi: `<ul><li>Hai ví dụ bất kỳ trong: máy giặt, lò vi sóng, bộ điều khiển sưởi trung tâm, báo động an ninh, đèn thông minh, lò nướng/bộ điều nhiệt thông minh [2]</li></ul>` }
    },
    { id: "4.3-e3", kind: "explain", marks: 3,
      q: { en: `<p>A machine-code instruction is written as:</p><pre>ADD 21</pre><ol><li>Identify the opcode. <b>[1]</b></li><li>Identify the operand. <b>[1]</b></li><li>State what the operand represents. <b>[1]</b></li></ol>`,
           vi: `<p>Một lệnh mã máy được viết như sau:</p><pre>ADD 21</pre><ol><li>Xác định opcode. <b>[1]</b></li><li>Xác định toán hạng (operand). <b>[1]</b></li><li>Nêu toán hạng đại diện cho điều gì. <b>[1]</b></li></ol>` },
      ms: { en: `<ul><li>Opcode = ADD (the operation to carry out) [1]</li><li>Operand = 21 [1]</li><li>The data, or the address of the data, that the operation uses (here, the value at address 21) [1]</li></ul>`,
            vi: `<ul><li>Opcode = ADD (thao tác cần thực hiện) [1]</li><li>Toán hạng = 21 [1]</li><li>Dữ liệu, hoặc địa chỉ của dữ liệu, mà thao tác sử dụng (ở đây là giá trị tại địa chỉ 21) [1]</li></ul>` }
    },
    { id: "4.3-e4", kind: "explain", marks: 3,
      q: { en: `<p>A program was compiled to run on a phone that uses an ARM processor. It will not run on a PC that uses an x86 processor.</p><p>Explain why. <b>[3]</b></p>`,
           vi: `<p>Một chương trình được biên dịch để chạy trên điện thoại dùng bộ xử lý ARM. Nó không chạy được trên máy tính cá nhân dùng bộ xử lý x86.</p><p>Giải thích vì sao. <b>[3]</b></p>` },
      ms: { en: `<ul><li>Different families of CPU have different instruction sets [1]</li><li>The machine-code instructions in the program are not in the x86 instruction set, so the CPU cannot decode/understand them [1]</li><li>The program would need to be recompiled/translated for the other type of CPU [1]</li></ul>`,
            vi: `<ul><li>Các họ CPU khác nhau có tập lệnh khác nhau [1]</li><li>Các lệnh mã máy trong chương trình không nằm trong tập lệnh x86, nên CPU không thể giải mã/hiểu chúng [1]</li><li>Chương trình cần được biên dịch lại/dịch sang cho loại CPU kia [1]</li></ul>` }
    },
    { id: "4.3-e5", kind: "apply", marks: 4,
      q: { en: `<p>A microwave oven contains an embedded system. Describe how the system works, referring to its <b>input</b>, <b>processing</b> and <b>output</b>. <b>[4]</b></p>`,
           vi: `<p>Một lò vi sóng có chứa một hệ thống nhúng. Mô tả hệ thống hoạt động như thế nào, nhắc đến <b>đầu vào</b>, <b>xử lý</b> và <b>đầu ra</b> của nó. <b>[4]</b></p>` },
      ms: { en: `<ul><li>Input: the user presses buttons to set the time/power [1]</li><li>Processing: the microprocessor runs the program stored in ROM [1]</li><li>Output: it switches the magnetron on and shows the countdown on the display [1]</li><li>When the time reaches 0 it switches the magnetron off and beeps [1]</li></ul>`,
            vi: `<ul><li>Đầu vào: người dùng bấm nút để đặt thời gian/công suất [1]</li><li>Xử lý: vi xử lý chạy chương trình được lưu trong ROM [1]</li><li>Đầu ra: nó bật magnetron và hiển thị đếm ngược trên màn hình [1]</li><li>Khi thời gian về 0 nó tắt magnetron và kêu bíp [1]</li></ul>` }
    },
    { id: "4.3-e6", kind: "explain", marks: 4,
      q: { en: `<p>Give <b>two</b> advantages and <b>two</b> disadvantages of using an embedded system in a washing machine instead of a general-purpose computer. <b>[4]</b></p>`,
           vi: `<p>Cho <b>hai</b> ưu điểm và <b>hai</b> nhược điểm của việc dùng hệ thống nhúng trong máy giặt thay vì máy tính đa dụng. <b>[4]</b></p>` },
      ms: { en: `<ul><li>Advantages (any two): small enough to fit inside the machine; cheap to mass-produce; uses very little power; fast and reliable at its one task [2]</li><li>Disadvantages (any two): difficult or impossible to upgrade; hard to repair (often the whole unit is replaced); can only do one job; could be hacked if connected to the internet [2]</li></ul>`,
            vi: `<ul><li>Ưu điểm (hai ý bất kỳ): đủ nhỏ để lắp bên trong máy; rẻ khi sản xuất hàng loạt; tiêu thụ rất ít điện; nhanh và đáng tin cậy ở nhiệm vụ duy nhất của nó [2]</li><li>Nhược điểm (hai ý bất kỳ): khó hoặc không thể nâng cấp; khó sửa chữa (thường phải thay cả thiết bị); chỉ làm được một việc; có thể bị tấn công nếu kết nối internet [2]</li></ul>` }
    },
    { id: "4.3-e7", kind: "apply", marks: 4,
      q: { en: `<p>For each device, state whether it is an embedded system or a general-purpose computer.</p><ol><li>A laptop <b>[1]</b></li><li>A car's engine management system <b>[1]</b></li><li>A set of traffic lights <b>[1]</b></li><li>A desktop PC <b>[1]</b></li></ol>`,
           vi: `<p>Với mỗi thiết bị, nêu nó là hệ thống nhúng hay máy tính đa dụng.</p><ol><li>Một laptop <b>[1]</b></li><li>Hệ thống quản lý động cơ của ô tô <b>[1]</b></li><li>Một bộ đèn giao thông <b>[1]</b></li><li>Một máy tính để bàn <b>[1]</b></li></ol>` },
      ms: { en: `<ul><li>Laptop: general-purpose computer [1]</li><li>Engine management system: embedded system [1]</li><li>Traffic lights: embedded system [1]</li><li>Desktop PC: general-purpose computer [1]</li></ul>`,
            vi: `<ul><li>Laptop: máy tính đa dụng [1]</li><li>Hệ thống quản lý động cơ: hệ thống nhúng [1]</li><li>Đèn giao thông: hệ thống nhúng [1]</li><li>Máy tính để bàn: máy tính đa dụng [1]</li></ul>` }
    }
  ],

  "4.4": [
    { id: "4.4-e1", kind: "short", marks: 2,
      q: { en: `<p>Define the term <i>input device</i>. <b>[2]</b></p>`,
           vi: `<p>Định nghĩa thuật ngữ <i>thiết bị nhập</i> (input device). <b>[2]</b></p>` },
      ms: { en: `<ul><li>Hardware that allows data to be entered into a computer [1]</li><li>It converts real-world data (e.g. key presses, movement, sound) into digital data the computer can process [1]</li></ul>`,
            vi: `<ul><li>Phần cứng cho phép đưa dữ liệu vào máy tính [1]</li><li>Nó chuyển dữ liệu thế giới thực (ví dụ phím bấm, chuyển động, âm thanh) thành dữ liệu số mà máy tính có thể xử lý [1]</li></ul>` }
    },
    { id: "4.4-e2", kind: "short", marks: 2,
      q: { en: `<p>State whether each device is an input device or an output device.</p><ol><li>Microphone <b>[1]</b></li><li>Speaker <b>[1]</b></li></ol>`,
           vi: `<p>Nêu mỗi thiết bị là thiết bị nhập hay thiết bị xuất.</p><ol><li>Micro <b>[1]</b></li><li>Loa <b>[1]</b></li></ol>` },
      ms: { en: `<ul><li>Microphone: input device [1]</li><li>Speaker: output device [1]</li></ul>`,
            vi: `<ul><li>Micro: thiết bị nhập [1]</li><li>Loa: thiết bị xuất [1]</li></ul>` }
    },
    { id: "4.4-e3", kind: "explain", marks: 3,
      q: { en: `<p>Describe how an optical mouse detects that it has been moved. <b>[3]</b></p>`,
           vi: `<p>Mô tả chuột quang phát hiện rằng nó đã được di chuyển như thế nào. <b>[3]</b></p>` },
      ms: { en: `<ul><li>An LED shines light onto the surface under the mouse [1]</li><li>A sensor/camera takes thousands of images of the surface every second [1]</li><li>A microprocessor compares the images to work out the direction and speed of movement, which moves the pointer [1]</li></ul>`,
            vi: `<ul><li>Một đèn LED chiếu ánh sáng lên bề mặt bên dưới chuột [1]</li><li>Một cảm biến/camera chụp hàng nghìn ảnh của bề mặt mỗi giây [1]</li><li>Một vi xử lý so sánh các ảnh để tính hướng và tốc độ di chuyển, từ đó di chuyển con trỏ [1]</li></ul>` }
    },
    { id: "4.4-e4", kind: "explain", marks: 3,
      q: { en: `<p>Describe how a keyboard sends a key press to the computer. <b>[3]</b></p>`,
           vi: `<p>Mô tả bàn phím gửi một lần bấm phím đến máy tính như thế nào. <b>[3]</b></p>` },
      ms: { en: `<ul><li>Pressing a key completes a circuit under that key [1]</li><li>A chip in the keyboard works out which key was pressed [1]</li><li>It sends the character code (e.g. ASCII/Unicode) of that key to the computer [1]</li></ul>`,
            vi: `<ul><li>Bấm phím làm kín một mạch điện dưới phím đó [1]</li><li>Một chip trong bàn phím xác định phím nào đã được bấm [1]</li><li>Nó gửi mã ký tự (ví dụ ASCII/Unicode) của phím đó đến máy tính [1]</li></ul>` }
    },
    { id: "4.4-e5", kind: "explain", marks: 3,
      q: { en: `<p>Describe how a capacitive touch screen works out where a finger has touched the screen. <b>[3]</b></p>`,
           vi: `<p>Mô tả màn hình cảm ứng điện dung xác định vị trí ngón tay chạm vào màn hình như thế nào. <b>[3]</b></p>` },
      ms: { en: `<ul><li>A conductive layer of the screen holds an electric field [1]</li><li>A finger conducts electricity, so touching the screen changes the capacitance at that point [1]</li><li>Sensors detect the change and work out the position of the touch [1]</li></ul>`,
            vi: `<ul><li>Một lớp dẫn điện của màn hình giữ một điện trường [1]</li><li>Ngón tay dẫn điện, nên khi chạm vào màn hình sẽ làm thay đổi điện dung tại điểm đó [1]</li><li>Các cảm biến phát hiện sự thay đổi và tính ra vị trí chạm [1]</li></ul>` }
    },
    { id: "4.4-e6", kind: "explain", marks: 3,
      q: { en: `<p>A microphone produces an electrical signal when someone speaks. Explain why the computer needs an ADC to process this signal. <b>[3]</b></p>`,
           vi: `<p>Micro tạo ra một tín hiệu điện khi có người nói. Giải thích vì sao máy tính cần một ADC để xử lý tín hiệu này. <b>[3]</b></p>` },
      ms: { en: `<ul><li>The signal from the microphone is analogue [1]</li><li>A computer can only process digital (binary) data [1]</li><li>The ADC samples the analogue signal and converts it into digital data [1]</li></ul>`,
            vi: `<ul><li>Tín hiệu từ micro là tín hiệu tương tự [1]</li><li>Máy tính chỉ xử lý được dữ liệu số (nhị phân) [1]</li><li>ADC lấy mẫu tín hiệu tương tự và chuyển nó thành dữ liệu số [1]</li></ul>` }
    },
    { id: "4.4-e7", kind: "apply", marks: 6,
      q: { en: `<p>For each situation, name the most suitable type of touch screen (resistive, capacitive or infra-red) and give a reason.</p><ol><li>A tablet used by builders on a site who wear thick work gloves <b>[2]</b></li><li>A smartphone where users want to pinch and zoom quickly <b>[2]</b></li><li>A very large interactive display in a school hall <b>[2]</b></li></ol>`,
           vi: `<p>Với mỗi tình huống, gọi tên loại màn hình cảm ứng phù hợp nhất (điện trở, điện dung hoặc hồng ngoại) và nêu một lý do.</p><ol><li>Một máy tính bảng dùng bởi thợ xây trên công trường, họ đeo găng tay dày <b>[2]</b></li><li>Một smartphone mà người dùng muốn chụm và phóng to nhanh <b>[2]</b></li><li>Một màn hình tương tác rất lớn trong hội trường trường học <b>[2]</b></li></ol>` },
      ms: { en: `<ul><li>Resistive [1] because it works by pressure, so it works with gloves or a stylus (and is cheap) [1]</li><li>Capacitive [1] because it is very responsive and supports multi-touch [1]</li><li>Infra-red [1] because it works well on large screens and with any object [1]</li></ul>`,
            vi: `<ul><li>Điện trở [1] vì nó hoạt động bằng lực ấn, nên dùng được khi đeo găng tay hoặc dùng bút cảm ứng (và rẻ) [1]</li><li>Điện dung [1] vì nó rất nhạy và hỗ trợ đa chạm [1]</li><li>Hồng ngoại [1] vì nó hoạt động tốt trên màn hình lớn và với bất kỳ vật nào [1]</li></ul>` }
    }
  ],

  "4.5": [
    { id: "4.5-e1", kind: "short", marks: 2,
      q: { en: `<p>State two places where barcode scanners are commonly used. <b>[2]</b></p>`,
           vi: `<p>Nêu hai nơi thường dùng máy quét mã vạch. <b>[2]</b></p>` },
      ms: { en: `<ul><li>Any two: supermarkets/shops, libraries, warehouses, airport baggage handling [2]</li></ul>`,
            vi: `<ul><li>Hai nơi bất kỳ: siêu thị/cửa hàng, thư viện, kho hàng, xử lý hành lý ở sân bay [2]</li></ul>` }
    },
    { id: "4.5-e2", kind: "explain", marks: 4,
      q: { en: `<p>Describe how a barcode scanner reads a barcode and finds the price of a product. <b>[4]</b></p>`,
           vi: `<p>Mô tả máy quét mã vạch đọc mã vạch và tìm giá của một sản phẩm như thế nào. <b>[4]</b></p>` },
      ms: { en: `<ul><li>A red laser/LED light is shone across the barcode [1]</li><li>Dark lines reflect less light than the white spaces [1]</li><li>Sensors detect the pattern of reflected light and convert it into a number (binary) [1]</li><li>The number is looked up in a database to find the product's price and details [1]</li></ul>`,
            vi: `<ul><li>Một tia laser/ánh sáng LED màu đỏ được chiếu ngang qua mã vạch [1]</li><li>Các vạch tối phản xạ ít ánh sáng hơn các khoảng trắng [1]</li><li>Các cảm biến phát hiện mẫu ánh sáng phản xạ và chuyển nó thành một con số (nhị phân) [1]</li><li>Con số được tra trong cơ sở dữ liệu để tìm giá và thông tin của sản phẩm [1]</li></ul>` }
    },
    { id: "4.5-e3", kind: "explain", marks: 2,
      q: { en: `<p>Explain why a barcode scanner recalculates the check digit after a scan. <b>[2]</b></p>`,
           vi: `<p>Giải thích vì sao máy quét mã vạch tính lại chữ số kiểm tra sau khi quét. <b>[2]</b></p>` },
      ms: { en: `<ul><li>The check digit is recalculated from the other digits and compared with the one that was scanned [1]</li><li>If they do not match, the barcode was read incorrectly, so it must be rescanned [1]</li></ul>`,
            vi: `<ul><li>Chữ số kiểm tra được tính lại từ các chữ số còn lại và so sánh với chữ số vừa quét được [1]</li><li>Nếu chúng không khớp, mã vạch đã bị đọc sai, nên phải quét lại [1]</li></ul>` }
    },
    { id: "4.5-e4", kind: "apply", marks: 4,
      q: { en: `<p>A museum wants visitors to point their own phones at a label next to each exhibit and see a web page about it.</p><ol><li>Suggest whether a barcode or a QR code is more suitable, and give <b>two</b> reasons. <b>[3]</b></li><li>State <b>one</b> security risk of QR codes. <b>[1]</b></li></ol>`,
           vi: `<p>Một bảo tàng muốn khách tham quan dùng điện thoại của chính mình hướng vào nhãn cạnh mỗi hiện vật để xem một trang web về nó.</p><ol><li>Đề xuất nên dùng mã vạch hay mã QR, và nêu <b>hai</b> lý do. <b>[3]</b></li><li>Nêu <b>một</b> rủi ro bảo mật của mã QR. <b>[1]</b></li></ol>` },
      ms: { en: `<ul><li>QR code [1]</li><li>Reasons (any two): it can store much more data than a barcode, such as a web address [1]; it can be read from any angle [1]; it can be scanned with any smartphone camera, so no special scanner is needed; it still works if partly damaged (error correction)</li><li>Risk: a malicious QR code could link to a fake website [1]</li></ul>`,
            vi: `<ul><li>Mã QR [1]</li><li>Lý do (hai ý bất kỳ): nó chứa được nhiều dữ liệu hơn mã vạch rất nhiều, ví dụ một địa chỉ web [1]; có thể đọc từ mọi góc [1]; quét được bằng camera smartphone nào cũng được nên không cần máy quét đặc biệt; vẫn hoạt động nếu bị hỏng một phần (sửa lỗi)</li><li>Rủi ro: một mã QR độc hại có thể dẫn đến một trang web giả mạo [1]</li></ul>` }
    },
    { id: "4.5-e5", kind: "explain", marks: 4,
      q: { en: `<p>Describe how a digital camera captures an image and stores it. <b>[4]</b></p>`,
           vi: `<p>Mô tả máy ảnh kỹ thuật số ghi lại một bức ảnh và lưu nó như thế nào. <b>[4]</b></p>` },
      ms: { en: `<ul><li>Light passes through the lens onto the image sensor (CCD or CMOS) [1]</li><li>The sensor is made of millions of light-sensitive cells, one per pixel [1]</li><li>Each cell measures the amount and colour of light and converts it into an electrical signal [1]</li><li>A microprocessor converts the signals into binary and stores the image (often compressed, e.g. as a JPEG) on a memory card [1]</li></ul>`,
            vi: `<ul><li>Ánh sáng đi qua thấu kính đến cảm biến hình ảnh (CCD hoặc CMOS) [1]</li><li>Cảm biến gồm hàng triệu tế bào nhạy sáng, mỗi tế bào ứng với một điểm ảnh [1]</li><li>Mỗi tế bào đo lượng và màu của ánh sáng rồi chuyển thành tín hiệu điện [1]</li><li>Một vi xử lý chuyển các tín hiệu thành nhị phân và lưu ảnh (thường được nén, ví dụ thành JPEG) vào thẻ nhớ [1]</li></ul>` }
    },
    { id: "4.5-e6", kind: "calc", marks: 3,
      q: { en: `<p>The image sensor of a digital camera has 4000 pixels across and 3000 pixels down.</p><ol><li>Calculate the total number of pixels. <b>[1]</b></li><li>Give this as a number of megapixels. <b>[1]</b></li><li>State which feature of the camera decides the maximum resolution of its images. <b>[1]</b></li></ol>`,
           vi: `<p>Cảm biến hình ảnh của một máy ảnh kỹ thuật số có 4000 điểm ảnh theo chiều ngang và 3000 điểm ảnh theo chiều dọc.</p><ol><li>Tính tổng số điểm ảnh. <b>[1]</b></li><li>Cho kết quả này theo đơn vị megapixel. <b>[1]</b></li><li>Nêu đặc điểm nào của máy ảnh quyết định độ phân giải tối đa của ảnh. <b>[1]</b></li></ol>` },
      hint: { en: `1 megapixel = 1 000 000 pixels.`, vi: `1 megapixel = 1 000 000 điểm ảnh.` },
      ms: { en: `<ul><li>4000 × 3000 = 12000000 pixels [1]</li><li>12000000 ÷ 1000000 = 12 megapixels [1]</li><li>The number of pixels (light-sensitive cells) on the image sensor [1]</li></ul>`,
            vi: `<ul><li>4000 × 3000 = 12000000 điểm ảnh [1]</li><li>12000000 ÷ 1000000 = 12 megapixel [1]</li><li>Số điểm ảnh (tế bào nhạy sáng) trên cảm biến hình ảnh [1]</li></ul>` }
    },
    { id: "4.5-e7", kind: "apply", marks: 4,
      q: { en: `<p>Choose the most suitable device (2D scanner or 3D scanner) for each task and give a reason.</p><ol><li>Turning a printed paper contract into text that can be edited on a computer <b>[2]</b></li><li>Measuring a broken plastic bracket so that a copy can be made on a 3D printer <b>[2]</b></li></ol>`,
           vi: `<p>Chọn thiết bị phù hợp nhất (máy quét 2D hoặc máy quét 3D) cho mỗi công việc và nêu lý do.</p><ol><li>Biến một hợp đồng in trên giấy thành văn bản có thể chỉnh sửa trên máy tính <b>[2]</b></li><li>Đo một giá đỡ bằng nhựa bị gãy để có thể làm bản sao bằng máy in 3D <b>[2]</b></li></ol>` },
      ms: { en: `<ul><li>2D scanner [1], because the contract is a flat document; OCR software can then turn the scanned image of the text into editable text [1]</li><li>3D scanner [1], because it captures the shape and dimensions of a solid object from many angles to make a 3D digital model [1]</li></ul>`,
            vi: `<ul><li>Máy quét 2D [1], vì hợp đồng là tài liệu phẳng; phần mềm OCR sau đó có thể biến ảnh quét chứa chữ thành văn bản chỉnh sửa được [1]</li><li>Máy quét 3D [1], vì nó ghi lại hình dạng và kích thước của một vật thể rắn từ nhiều góc để tạo mô hình 3D kỹ thuật số [1]</li></ul>` }
    }
  ],

  "4.6": [
    { id: "4.6-e1", kind: "short", marks: 2,
      q: { en: `<p>State what the abbreviations <b>LCD</b> and <b>LED</b> stand for. <b>[2]</b></p>`,
           vi: `<p>Nêu các chữ viết tắt <b>LCD</b> và <b>LED</b> là viết tắt của cụm từ nào. <b>[2]</b></p>` },
      ms: { en: `<ul><li>LCD: liquid crystal display [1]</li><li>LED: light emitting diode [1]</li></ul>`,
            vi: `<ul><li>LCD: liquid crystal display (màn hình tinh thể lỏng) [1]</li><li>LED: light emitting diode (điốt phát sáng) [1]</li></ul>` }
    },
    { id: "4.6-e2", kind: "explain", marks: 2,
      q: { en: `<p>Explain why an LCD screen needs a backlight. <b>[2]</b></p>`,
           vi: `<p>Giải thích vì sao màn hình LCD cần đèn nền. <b>[2]</b></p>` },
      ms: { en: `<ul><li>The liquid crystals do not produce any light themselves [1]</li><li>The backlight (usually LEDs) shines through the crystals and colour filters so that the pixels can be seen [1]</li></ul>`,
            vi: `<ul><li>Các tinh thể lỏng tự chúng không phát ra ánh sáng [1]</li><li>Đèn nền (thường là LED) chiếu xuyên qua các tinh thể và bộ lọc màu để có thể nhìn thấy các điểm ảnh [1]</li></ul>` }
    },
    { id: "4.6-e3", kind: "explain", marks: 3,
      q: { en: `<p>Give <b>three</b> advantages of using LEDs for the backlight of a screen instead of older fluorescent (CCFL) lamps. <b>[3]</b></p>`,
           vi: `<p>Cho <b>ba</b> ưu điểm của việc dùng LED làm đèn nền cho màn hình thay vì đèn huỳnh quang (CCFL) cũ. <b>[3]</b></p>` },
      ms: { en: `<ul><li>Any three: reach full brightness almost immediately; very bright, vivid colours and higher contrast; use much less power; produce less heat; last a long time; allow very thin screens [3]</li></ul>`,
            vi: `<ul><li>Ba ý bất kỳ: đạt độ sáng tối đa gần như ngay lập tức; rất sáng, màu sắc sống động và độ tương phản cao hơn; dùng ít điện hơn nhiều; tỏa ít nhiệt hơn; bền lâu; cho phép làm màn hình rất mỏng [3]</li></ul>` }
    },
    { id: "4.6-e4", kind: "explain", marks: 4,
      q: { en: `<p>Describe how a DLP projector produces an image. <b>[4]</b></p>`,
           vi: `<p>Mô tả máy chiếu DLP tạo ra hình ảnh như thế nào. <b>[4]</b></p>` },
      ms: { en: `<ul><li>It uses a chip containing millions of tiny micromirrors [1]</li><li>Each mirror represents one pixel [1]</li><li>Each mirror tilts towards or away from the light thousands of times a second to make a light or dark pixel [1]</li><li>A spinning colour wheel adds the colours [1]</li></ul>`,
            vi: `<ul><li>Nó dùng một chip chứa hàng triệu gương siêu nhỏ [1]</li><li>Mỗi gương ứng với một điểm ảnh [1]</li><li>Mỗi gương nghiêng về phía hoặc ra xa nguồn sáng hàng nghìn lần mỗi giây để tạo điểm ảnh sáng hoặc tối [1]</li><li>Một bánh xe màu quay thêm màu sắc [1]</li></ul>` }
    },
    { id: "4.6-e5", kind: "apply", marks: 4,
      q: { en: `<p>Choose DLP or LCD projector for each situation and justify your choice.</p><ol><li>A small, light projector that is carried between classrooms and needs deep blacks for showing films <b>[2]</b></li><li>A projector for a bright room that needs bright, accurate and saturated colours <b>[2]</b></li></ol>`,
           vi: `<p>Chọn máy chiếu DLP hoặc LCD cho mỗi tình huống và giải thích lựa chọn của bạn.</p><ol><li>Một máy chiếu nhỏ, nhẹ được mang giữa các phòng học và cần màu đen sâu để chiếu phim <b>[2]</b></li><li>Một máy chiếu cho phòng sáng cần màu sáng, chính xác và đậm <b>[2]</b></li></ol>` },
      ms: { en: `<ul><li>DLP projector [1], because it is smaller and lighter and gives high contrast/deep blacks [1]</li><li>LCD projector [1], because it gives brighter, more accurate and more saturated colours [1]</li></ul>`,
            vi: `<ul><li>Máy chiếu DLP [1], vì nó nhỏ và nhẹ hơn, đồng thời cho độ tương phản cao/màu đen sâu [1]</li><li>Máy chiếu LCD [1], vì nó cho màu sáng hơn, chính xác hơn và đậm hơn [1]</li></ul>` }
    },
    { id: "4.6-e6", kind: "short", marks: 2,
      q: { en: `<p>State what an actuator is and give one example. <b>[2]</b></p>`,
           vi: `<p>Nêu cơ cấu chấp hành (actuator) là gì và cho một ví dụ. <b>[2]</b></p>` },
      ms: { en: `<ul><li>An output device that creates physical movement when it receives a signal from a computer [1]</li><li>Any one: motor, pump, valve, relay, solenoid [1]</li></ul>`,
            vi: `<ul><li>Một thiết bị xuất tạo ra chuyển động vật lý khi nhận tín hiệu từ máy tính [1]</li><li>Một ví dụ bất kỳ: động cơ, bơm, van, rơ-le, nam châm điện (solenoid) [1]</li></ul>` }
    },
    { id: "4.6-e7", kind: "explain", marks: 4,
      q: { en: `<p>Describe how a speaker turns digital sound data into sound. <b>[4]</b></p>`,
           vi: `<p>Mô tả loa biến dữ liệu âm thanh số thành âm thanh như thế nào. <b>[4]</b></p>` },
      ms: { en: `<ul><li>A DAC converts the digital sound data into an analogue electrical signal (which is then amplified) [1]</li><li>The changing current flows through a coil of wire near a permanent magnet [1]</li><li>This makes the coil move in and out, so the cone vibrates [1]</li><li>The vibrations create sound waves in the air [1]</li></ul>`,
            vi: `<ul><li>Một DAC chuyển dữ liệu âm thanh số thành tín hiệu điện tương tự (sau đó được khuếch đại) [1]</li><li>Dòng điện biến thiên chạy qua một cuộn dây gần một nam châm vĩnh cửu [1]</li><li>Điều này làm cuộn dây chuyển động tới lui, nên màng loa rung [1]</li><li>Các rung động tạo ra sóng âm trong không khí [1]</li></ul>` }
    },
    { id: "4.6-e8", kind: "apply", marks: 3,
      q: { en: `<p>A greenhouse has a control system that opens a window when the temperature rises above 28 °C. Describe the role of each of these parts in the system.</p><ol><li>Temperature sensor <b>[1]</b></li><li>Microprocessor <b>[1]</b></li><li>Actuator <b>[1]</b></li></ol>`,
           vi: `<p>Một nhà kính có hệ thống điều khiển mở cửa sổ khi nhiệt độ tăng trên 28 °C. Mô tả vai trò của từng bộ phận sau trong hệ thống.</p><ol><li>Cảm biến nhiệt độ <b>[1]</b></li><li>Vi xử lý <b>[1]</b></li><li>Cơ cấu chấp hành <b>[1]</b></li></ol>` },
      ms: { en: `<ul><li>Sensor: measures the temperature in the greenhouse and sends the data to the microprocessor [1]</li><li>Microprocessor: compares the temperature with 28 °C and decides whether to open the window [1]</li><li>Actuator (e.g. a motor): physically opens the window when it receives the signal [1]</li></ul>`,
            vi: `<ul><li>Cảm biến: đo nhiệt độ trong nhà kính và gửi dữ liệu đến vi xử lý [1]</li><li>Vi xử lý: so sánh nhiệt độ với 28 °C và quyết định có mở cửa sổ hay không [1]</li><li>Cơ cấu chấp hành (ví dụ động cơ): thực sự mở cửa sổ khi nhận được tín hiệu [1]</li></ul>` }
    }
  ]
});
