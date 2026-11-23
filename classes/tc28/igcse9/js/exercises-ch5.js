window.EXERCISES = window.EXERCISES || {};
Object.assign(window.EXERCISES, {

"5.1": [
  { id: "5.1-e1", kind: "short", marks: 2,
    q: { en: `<p>(a) Give one example of system software. [1]</p><p>(b) Give one example of application software. [1]</p>`,
         vi: `<p>(a) Nêu một ví dụ về phần mềm hệ thống. [1]</p><p>(b) Nêu một ví dụ về phần mềm ứng dụng. [1]</p>` },
    ms: { en: `<ul><li>(a) Any one from: operating system, utility software (antivirus, backup, defragmentation), device driver, compiler [1]</li><li>(b) Any one from: word processor, spreadsheet, web browser, game, photo editor, video player [1]</li></ul>`,
          vi: `<ul><li>(a) Một ví dụ bất kỳ trong: hệ điều hành, phần mềm tiện ích (diệt virus, sao lưu, chống phân mảnh), trình điều khiển thiết bị, trình biên dịch [1]</li><li>(b) Một ví dụ bất kỳ trong: trình soạn thảo văn bản, bảng tính, trình duyệt web, trò chơi, phần mềm chỉnh sửa ảnh, trình phát video [1]</li></ul>` } },
  { id: "5.1-e2", kind: "short", marks: 3,
    q: { en: `<p>(a) Describe what defragmentation software does. [2]</p><p>(b) Explain why defragmentation is not needed on a computer that uses an SSD. [1]</p>`,
         vi: `<p>(a) Mô tả phần mềm chống phân mảnh (defragmentation) làm gì. [2]</p><p>(b) Giải thích vì sao máy tính dùng SSD không cần chống phân mảnh. [1]</p>` },
    ms: { en: `<ul><li>(a) It rearranges the pieces (blocks) of files on the hard disk [1] so that each file is stored together / in consecutive blocks, making files faster to access [1]</li><li>(b) An SSD has no moving read/write head, so the position of a file does not affect the access time [1]</li></ul>`,
          vi: `<ul><li>(a) Nó sắp xếp lại các mảnh (khối) của tệp trên ổ cứng [1] để mỗi tệp được lưu liền nhau / trong các khối liên tiếp, nhờ đó truy cập tệp nhanh hơn [1]</li><li>(b) SSD không có đầu đọc/ghi chuyển động, nên vị trí của tệp không ảnh hưởng đến thời gian truy cập [1]</li></ul>` } },
  { id: "5.1-e3", kind: "apply", marks: 3,
    q: { en: `<p>Linh uses a laptop with a hard disk drive. Name the type of utility software that is most suitable in each situation.</p><ul><li>(a) She wants to be able to restore her coursework if the hard disk fails. [1]</li><li>(b) Her files open slowly because they are stored in many separate pieces on the disk. [1]</li><li>(c) She has downloaded a file that may contain a virus. [1]</li></ul>`,
         vi: `<p>Linh dùng một máy tính xách tay có ổ cứng. Hãy nêu tên loại phần mềm tiện ích phù hợp nhất trong mỗi tình huống.</p><ul><li>(a) Cô muốn có thể khôi phục bài tập của mình nếu ổ cứng bị hỏng. [1]</li><li>(b) Các tệp của cô mở chậm vì chúng được lưu thành nhiều mảnh rời nhau trên đĩa. [1]</li><li>(c) Cô vừa tải về một tệp có thể chứa virus. [1]</li></ul>` },
    ms: { en: `<ul><li>(a) Backup software [1]</li><li>(b) Defragmentation software [1]</li><li>(c) Antivirus software [1]</li></ul>`,
          vi: `<ul><li>(a) Phần mềm sao lưu (backup) [1]</li><li>(b) Phần mềm chống phân mảnh (defragmentation) [1]</li><li>(c) Phần mềm diệt virus (antivirus) [1]</li></ul>` } },
  { id: "5.1-e4", kind: "short", marks: 4,
    q: { en: `<p>For each event, state whether it generates a <b>hardware</b> interrupt or a <b>software</b> interrupt.</p><ul><li>(i) A mouse button is clicked. [1]</li><li>(ii) A program tries to divide a number by zero. [1]</li><li>(iii) A printer runs out of paper. [1]</li><li>(iv) Two programs try to use the same memory location. [1]</li></ul>`,
         vi: `<p>Với mỗi sự kiện, hãy nêu nó tạo ra ngắt <b>phần cứng</b> hay ngắt <b>phần mềm</b>.</p><ul><li>(i) Một nút chuột được nhấp. [1]</li><li>(ii) Một chương trình cố chia một số cho không. [1]</li><li>(iii) Máy in hết giấy. [1]</li><li>(iv) Hai chương trình cùng cố dùng một ô nhớ. [1]</li></ul>` },
    ms: { en: `<ul><li>(i) Hardware interrupt [1]</li><li>(ii) Software interrupt [1]</li><li>(iii) Hardware interrupt [1]</li><li>(iv) Software interrupt [1]</li></ul>`,
          vi: `<ul><li>(i) Ngắt phần cứng [1]</li><li>(ii) Ngắt phần mềm [1]</li><li>(iii) Ngắt phần cứng [1]</li><li>(iv) Ngắt phần mềm [1]</li></ul>` } },
  { id: "5.1-e5", kind: "trace", marks: 4,
    q: { en: `<p>The steps below describe how an interrupt is handled, but they are in the wrong order.</p><ul><li>A &ndash; The interrupt service routine (ISR) is run.</li><li>B &ndash; The saved state is restored and the original task continues.</li><li>C &ndash; The CPU checks for interrupts at the end of the fetch&ndash;decode&ndash;execute cycle.</li><li>D &ndash; A device sends an interrupt signal to the CPU.</li><li>E &ndash; The CPU saves the contents of its registers.</li></ul><p>Write the letters in the correct order. [4]</p>`,
         vi: `<p>Các bước dưới đây mô tả cách xử lý một ngắt, nhưng đang bị xếp sai thứ tự.</p><ul><li>A &ndash; Chương trình phục vụ ngắt (ISR) được chạy.</li><li>B &ndash; Trạng thái đã lưu được khôi phục và tác vụ ban đầu tiếp tục.</li><li>C &ndash; CPU kiểm tra ngắt vào cuối chu kỳ nạp&ndash;giải mã&ndash;thực thi.</li><li>D &ndash; Một thiết bị gửi tín hiệu ngắt đến CPU.</li><li>E &ndash; CPU lưu nội dung các thanh ghi của nó.</li></ul><p>Viết các chữ cái theo đúng thứ tự. [4]</p>` },
    hint: { en: `Start with whatever causes the interrupt, and finish with the original task carrying on.`, vi: `Bắt đầu từ điều gây ra ngắt, và kết thúc khi tác vụ ban đầu tiếp tục chạy.` },
    ms: { en: `<p>Correct order: <b>D, C, E, A, B</b></p><ul><li>D first, then C [1]</li><li>E third [1]</li><li>A fourth [1]</li><li>B last [1]</li></ul>`,
          vi: `<p>Thứ tự đúng: <b>D, C, E, A, B</b></p><ul><li>D đầu tiên, rồi đến C [1]</li><li>E thứ ba [1]</li><li>A thứ tư [1]</li><li>B cuối cùng [1]</li></ul>` } },
  { id: "5.1-e6", kind: "explain", marks: 3,
    q: { en: `<p>Explain why the CPU saves the state of the current task before it runs an interrupt service routine. [3]</p>`,
         vi: `<p>Giải thích vì sao CPU lưu trạng thái của tác vụ hiện tại trước khi chạy chương trình phục vụ ngắt. [3]</p>` },
    hint: { en: `Think about what is held in the registers, and what the ISR will do to them.`, vi: `Hãy nghĩ xem các thanh ghi đang giữ gì, và ISR sẽ làm gì với chúng.` },
    ms: { en: `<ul><li>The registers hold the data and the position (e.g. the next instruction) of the current task [1]</li><li>The ISR will use the registers itself, so their contents would be overwritten / lost [1]</li><li>When the ISR has finished, the saved state is restored so the task can carry on from exactly where it stopped [1]</li></ul>`,
          vi: `<ul><li>Các thanh ghi chứa dữ liệu và vị trí (ví dụ lệnh kế tiếp) của tác vụ hiện tại [1]</li><li>Bản thân ISR sẽ dùng các thanh ghi, nên nội dung của chúng sẽ bị ghi đè / mất [1]</li><li>Khi ISR chạy xong, trạng thái đã lưu được khôi phục để tác vụ có thể tiếp tục đúng chỗ đã dừng [1]</li></ul>` } },
  { id: "5.1-e7", kind: "apply", marks: 4,
    q: { en: `<p>A computer is running a video-editing program. A power-failure warning interrupt has a higher priority than a keyboard interrupt.</p><p>(a) Explain why interrupts are given priorities. [2]</p><p>(b) The CPU is running the ISR for a key press when the power-failure interrupt arrives. Describe what the CPU does. [2]</p>`,
         vi: `<p>Một máy tính đang chạy chương trình dựng video. Ngắt cảnh báo mất điện có mức ưu tiên cao hơn ngắt bàn phím.</p><p>(a) Giải thích vì sao các ngắt được gán mức ưu tiên. [2]</p><p>(b) CPU đang chạy ISR cho một lần nhấn phím thì ngắt mất điện đến. Mô tả CPU làm gì. [2]</p>` },
    ms: { en: `<ul><li>(a) More than one interrupt can happen at the same time [1]; priorities let the CPU deal with the most important / urgent interrupt first [1]</li><li>(b) The CPU saves the state of the current task / pauses the keyboard ISR [1]; it runs the power-failure ISR first, then returns to the paused task [1]</li></ul>`,
          vi: `<ul><li>(a) Có thể có nhiều hơn một ngắt xảy ra cùng lúc [1]; mức ưu tiên cho phép CPU xử lý ngắt quan trọng / khẩn cấp nhất trước [1]</li><li>(b) CPU lưu trạng thái của tác vụ hiện tại / tạm dừng ISR của bàn phím [1]; nó chạy ISR mất điện trước, rồi quay lại tác vụ đã tạm dừng [1]</li></ul>` } }
],

"5.2": [
  { id: "5.2-e1", kind: "short", marks: 2,
    q: { en: `<p>State <b>two</b> functions of an operating system. [2]</p>`,
         vi: `<p>Nêu <b>hai</b> chức năng của hệ điều hành. [2]</p>` },
    ms: { en: `<ul><li>Any two from: managing files; handling interrupts; providing an interface (GUI/CLI); managing peripherals and drivers; managing memory; managing multitasking; providing a platform for running applications; providing system security; managing user accounts [1 each, max 2]</li></ul>`,
          vi: `<ul><li>Hai ý bất kỳ trong: quản lý tệp; xử lý ngắt; cung cấp giao diện (GUI/CLI); quản lý thiết bị ngoại vi và trình điều khiển; quản lý bộ nhớ; quản lý đa nhiệm; cung cấp nền tảng để chạy ứng dụng; cung cấp bảo mật hệ thống; quản lý tài khoản người dùng [mỗi ý 1, tối đa 2]</li></ul>` } },
  { id: "5.2-e2", kind: "short", marks: 2,
    q: { en: `<p>The bootloader is stored in ROM. State why it is not stored in RAM. [2]</p>`,
         vi: `<p>Bootloader được lưu trong ROM. Nêu lý do vì sao nó không được lưu trong RAM. [2]</p>` },
    ms: { en: `<ul><li>RAM is volatile / loses its contents when the power is switched off [1]</li><li>ROM is non-volatile, so the bootloader is still there when the computer is switched on to start the computer and load the OS [1]</li></ul>`,
          vi: `<ul><li>RAM là bộ nhớ khả biến (volatile) / mất nội dung khi tắt nguồn [1]</li><li>ROM không mất dữ liệu khi tắt nguồn, nên bootloader vẫn còn đó khi bật máy để khởi động máy tính và nạp hệ điều hành [1]</li></ul>` } },
  { id: "5.2-e3", kind: "short", marks: 3,
    q: { en: `<p>Name the operating system function being described in each case.</p><ul><li>(a) Deciding which programs and data are held in RAM. [1]</li><li>(b) Allowing Ben to log in and see only his own files. [1]</li><li>(c) Running the correct routine when a key is pressed. [1]</li></ul>`,
         vi: `<p>Nêu tên chức năng của hệ điều hành được mô tả trong mỗi trường hợp.</p><ul><li>(a) Quyết định chương trình và dữ liệu nào được giữ trong RAM. [1]</li><li>(b) Cho phép Bình đăng nhập và chỉ thấy các tệp của riêng mình. [1]</li><li>(c) Chạy đúng chương trình con khi một phím được nhấn. [1]</li></ul>` },
    ms: { en: `<ul><li>(a) Managing memory [1]</li><li>(b) Managing user accounts [1]</li><li>(c) Handling interrupts [1]</li></ul>`,
          vi: `<ul><li>(a) Quản lý bộ nhớ [1]</li><li>(b) Quản lý tài khoản người dùng [1]</li><li>(c) Xử lý ngắt [1]</li></ul>` } },
  { id: "5.2-e4", kind: "explain", marks: 3,
    q: { en: `<p>A new printer is plugged into a computer. Explain why a device driver is needed. [3]</p>`,
         vi: `<p>Một máy in mới được cắm vào máy tính. Giải thích vì sao cần có trình điều khiển thiết bị (device driver). [3]</p>` },
    ms: { en: `<ul><li>A device driver is software that lets the operating system communicate with a specific hardware device [1]</li><li>It translates the OS's general commands (e.g. "print this page") into instructions the particular printer understands [1]</li><li>Without it the OS / applications would not be able to control the printer correctly [1]</li></ul>`,
          vi: `<ul><li>Trình điều khiển thiết bị là phần mềm cho phép hệ điều hành giao tiếp với một thiết bị phần cứng cụ thể [1]</li><li>Nó chuyển các lệnh chung của hệ điều hành (ví dụ "in trang này") thành các chỉ thị mà chiếc máy in cụ thể đó hiểu được [1]</li><li>Nếu không có nó, hệ điều hành / ứng dụng sẽ không điều khiển được máy in đúng cách [1]</li></ul>` } },
  { id: "5.2-e5", kind: "explain", marks: 4,
    q: { en: `<p>Compare a GUI and a CLI by giving <b>two</b> advantages of a GUI and <b>two</b> advantages of a CLI. [4]</p>`,
         vi: `<p>So sánh GUI và CLI bằng cách nêu <b>hai</b> ưu điểm của GUI và <b>hai</b> ưu điểm của CLI. [4]</p>` },
    ms: { en: `<ul><li>GUI (any two): easy to learn / no commands to memorise [1]; uses windows, icons and menus so it is easy to see what is available [1]; easier for beginners / can use a pointing device [1] (max 2)</li><li>CLI (any two): uses less memory and processing power [1]; gives the user more direct control / can do things a GUI does not offer [1]; can be quicker for an expert who knows the commands [1] (max 2)</li></ul>`,
          vi: `<ul><li>GUI (hai ý bất kỳ): dễ học / không phải nhớ lệnh [1]; dùng cửa sổ, biểu tượng và menu nên dễ thấy có những gì [1]; dễ hơn cho người mới / có thể dùng thiết bị trỏ [1] (tối đa 2)</li><li>CLI (hai ý bất kỳ): tốn ít bộ nhớ và sức xử lý hơn [1]; cho người dùng quyền điều khiển trực tiếp hơn / làm được những việc GUI không cung cấp [1]; có thể nhanh hơn với người thành thạo biết các lệnh [1] (tối đa 2)</li></ul>` } },
  { id: "5.2-e6", kind: "apply", marks: 4,
    q: { en: `<p>A student is typing a report while music plays and a document is printing. Describe how the operating system helps all three tasks to work at the same time. [4]</p>`,
         vi: `<p>Một học sinh đang gõ báo cáo trong khi nhạc đang phát và một tài liệu đang được in. Mô tả cách hệ điều hành giúp cả ba việc cùng hoạt động một lúc. [4]</p>` },
    hint: { en: `Link the scenario to multitasking, memory management and peripheral management.`, vi: `Hãy gắn tình huống với đa nhiệm, quản lý bộ nhớ và quản lý thiết bị ngoại vi.` },
    ms: { en: `<ul><li>Multitasking: the OS shares CPU time between the processes so they appear to run at the same time [1]</li><li>It handles the priority of each process / decides which gets the CPU next [1]</li><li>Memory management: each program is given its own part of RAM so they do not overwrite each other [1]</li><li>Peripheral management: it uses the printer driver and a print queue (buffer) to send the document to the printer [1]</li></ul>`,
          vi: `<ul><li>Đa nhiệm: hệ điều hành chia sẻ thời gian CPU giữa các tiến trình để chúng có vẻ chạy cùng một lúc [1]</li><li>Nó xử lý mức ưu tiên của từng tiến trình / quyết định tiến trình nào được dùng CPU tiếp theo [1]</li><li>Quản lý bộ nhớ: mỗi chương trình được cấp một phần RAM riêng để chúng không ghi đè lên nhau [1]</li><li>Quản lý thiết bị ngoại vi: nó dùng trình điều khiển máy in và hàng đợi in (bộ đệm) để gửi tài liệu đến máy in [1]</li></ul>` } },
  { id: "5.2-e7", kind: "explain", marks: 5,
    q: { en: `<p>Describe what happens, from the moment the computer is switched on, until a user can run a web browser. Refer to firmware, the operating system, RAM and hardware in your answer. [5]</p>`,
         vi: `<p>Mô tả những gì xảy ra, từ lúc bật máy tính cho đến khi người dùng có thể chạy trình duyệt web. Trong câu trả lời hãy nhắc đến phần sụn, hệ điều hành, RAM và phần cứng. [5]</p>` },
    hint: { en: `Work from the bottom layer upwards: hardware, firmware, OS, application.`, vi: `Đi từ lớp dưới cùng lên: phần cứng, phần sụn, hệ điều hành, ứng dụng.` },
    ms: { en: `<ul><li>The CPU (hardware) starts by running the bootloader, which is firmware stored in ROM [1]</li><li>The bootloader checks the hardware (power-on self-test) [1]</li><li>It loads the operating system from secondary storage into RAM [1]</li><li>The operating system then runs, managing the hardware and providing a platform / interface [1]</li><li>The browser (application software) is loaded into RAM and runs on the operating system, which provides the services it needs (e.g. memory, network, display) [1]</li></ul>`,
          vi: `<ul><li>CPU (phần cứng) bắt đầu bằng việc chạy bootloader, là phần sụn lưu trong ROM [1]</li><li>Bootloader kiểm tra phần cứng (tự kiểm tra khi bật nguồn) [1]</li><li>Nó nạp hệ điều hành từ bộ nhớ phụ vào RAM [1]</li><li>Hệ điều hành sau đó chạy, quản lý phần cứng và cung cấp nền tảng / giao diện [1]</li><li>Trình duyệt (phần mềm ứng dụng) được nạp vào RAM và chạy trên hệ điều hành, hệ điều hành cung cấp các dịch vụ nó cần (ví dụ bộ nhớ, mạng, màn hình) [1]</li></ul>` } }
],

"5.3": [
  { id: "5.3-e1", kind: "short", marks: 2,
    q: { en: `<p>State <b>two</b> differences between a high-level language and a low-level language. [2]</p>`,
         vi: `<p>Nêu <b>hai</b> điểm khác nhau giữa ngôn ngữ bậc cao và ngôn ngữ bậc thấp. [2]</p>` },
    ms: { en: `<ul><li>Any two from: high-level is easier to read / write / debug, low-level is harder [1]; high-level is machine independent (portable), low-level is machine dependent [1]; low-level can directly manipulate hardware (registers, memory), high-level cannot [1]; high-level is close to human language, low-level is close to machine code [1] (max 2)</li></ul>`,
          vi: `<ul><li>Hai ý bất kỳ trong: ngôn ngữ bậc cao dễ đọc / viết / gỡ lỗi hơn, ngôn ngữ bậc thấp khó hơn [1]; ngôn ngữ bậc cao không phụ thuộc máy (khả chuyển), ngôn ngữ bậc thấp phụ thuộc máy [1]; ngôn ngữ bậc thấp thao tác trực tiếp được với phần cứng (thanh ghi, bộ nhớ), ngôn ngữ bậc cao thì không [1]; ngôn ngữ bậc cao gần với ngôn ngữ con người, ngôn ngữ bậc thấp gần với mã máy [1] (tối đa 2)</li></ul>` } },
  { id: "5.3-e2", kind: "short", marks: 3,
    q: { en: `<p>(a) State what is meant by a <i>mnemonic</i> in assembly language. [1]</p><p>(b) Name the translator that is used for assembly language. [1]</p><p>(c) State what this translator produces. [1]</p>`,
         vi: `<p>(a) Nêu <i>mnemonic</i> trong hợp ngữ có nghĩa là gì. [1]</p><p>(b) Nêu tên trình dịch được dùng cho hợp ngữ. [1]</p><p>(c) Nêu trình dịch này tạo ra gì. [1]</p>` },
    ms: { en: `<ul><li>(a) A short code that stands for an instruction, e.g. LDA, ADD, STO [1]</li><li>(b) Assembler [1]</li><li>(c) Machine code [1]</li></ul>`,
          vi: `<ul><li>(a) Một mã ngắn thay cho một lệnh, ví dụ LDA, ADD, STO [1]</li><li>(b) Trình hợp dịch (assembler) [1]</li><li>(c) Mã máy [1]</li></ul>` } },
  { id: "5.3-e3", kind: "apply", marks: 4,
    q: { en: `<p>For each task, state whether a high-level or a low-level language is more suitable and give <b>one</b> reason.</p><ul><li>(a) A mobile game that must run on both Android and iOS phones. [2]</li><li>(b) A small program that controls specific registers in the chip of an embedded system. [2]</li></ul>`,
         vi: `<p>Với mỗi nhiệm vụ, hãy nêu ngôn ngữ bậc cao hay bậc thấp phù hợp hơn và đưa ra <b>một</b> lý do.</p><ul><li>(a) Một trò chơi trên điện thoại phải chạy được trên cả điện thoại Android và iOS. [2]</li><li>(b) Một chương trình nhỏ điều khiển các thanh ghi cụ thể trong chip của một hệ thống nhúng. [2]</li></ul>` },
    ms: { en: `<ul><li>(a) High-level [1]; it is machine independent / portable, so the same code can be translated to run on different devices (also: easier to write and debug) [1]</li><li>(b) Low-level [1]; it can directly manipulate the hardware such as specific registers and memory locations (also: efficient code that uses little memory) [1]</li></ul>`,
          vi: `<ul><li>(a) Bậc cao [1]; nó không phụ thuộc máy / khả chuyển, nên cùng một mã có thể được dịch để chạy trên các thiết bị khác nhau (hoặc: dễ viết và gỡ lỗi hơn) [1]</li><li>(b) Bậc thấp [1]; nó thao tác trực tiếp được với phần cứng như các thanh ghi và ô nhớ cụ thể (hoặc: mã hiệu quả, dùng ít bộ nhớ) [1]</li></ul>` } },
  { id: "5.3-e4", kind: "trace", marks: 4,
    q: { en: `<p>An assembly language program uses an accumulator (ACC). <code>LDA</code> loads a value into ACC, <code>ADD</code> adds a value to ACC and <code>STO</code> stores ACC in a memory address. The memory contents are shown.</p><table><tr><th>Address</th><th>20</th><th>21</th><th>22</th><th>23</th></tr><tr><td>Value</td><td>15</td><td>27</td><td>8</td><td>0</td></tr></table><pre>LDA 20
ADD 21
ADD 22
STO 23</pre><p>Give the value in ACC after each of the first three instructions, and the value stored at address 23 at the end. [4]</p>`,
         vi: `<p>Một chương trình hợp ngữ dùng thanh ghi tích lũy (ACC). <code>LDA</code> nạp một giá trị vào ACC, <code>ADD</code> cộng một giá trị vào ACC và <code>STO</code> lưu ACC vào một địa chỉ bộ nhớ. Nội dung bộ nhớ được cho dưới đây.</p><table><tr><th>Địa chỉ</th><th>20</th><th>21</th><th>22</th><th>23</th></tr><tr><td>Giá trị</td><td>15</td><td>27</td><td>8</td><td>0</td></tr></table><pre>LDA 20
ADD 21
ADD 22
STO 23</pre><p>Cho biết giá trị trong ACC sau mỗi lệnh trong ba lệnh đầu, và giá trị được lưu tại địa chỉ 23 ở cuối chương trình. [4]</p>` },
    hint: { en: `ADD adds the value at the given address to what is already in ACC.`, vi: `ADD cộng giá trị tại địa chỉ đã cho vào giá trị đang có trong ACC.` },
    ms: { en: `<table><tr><th>Instruction</th><th>ACC</th></tr><tr><td>LDA 20</td><td>15</td></tr><tr><td>ADD 21</td><td>42</td></tr><tr><td>ADD 22</td><td>50</td></tr></table><ul><li>After LDA 20: ACC = 15 [1]</li><li>After ADD 21: ACC = 15 + 27 = 42 [1]</li><li>After ADD 22: ACC = 42 + 8 = 50 [1]</li><li>STO 23 stores 50 at address 23 [1]</li></ul>`,
          vi: `<table><tr><th>Lệnh</th><th>ACC</th></tr><tr><td>LDA 20</td><td>15</td></tr><tr><td>ADD 21</td><td>42</td></tr><tr><td>ADD 22</td><td>50</td></tr></table><ul><li>Sau LDA 20: ACC = 15 [1]</li><li>Sau ADD 21: ACC = 15 + 27 = 42 [1]</li><li>Sau ADD 22: ACC = 42 + 8 = 50 [1]</li><li>STO 23 lưu 50 vào địa chỉ 23 [1]</li></ul>` } },
  { id: "5.3-e5", kind: "explain", marks: 4,
    q: { en: `<p>Describe how a compiler and an interpreter each translate a high-level program. [4]</p>`,
         vi: `<p>Mô tả cách trình biên dịch và trình thông dịch mỗi loại dịch một chương trình bậc cao. [4]</p>` },
    ms: { en: `<ul><li>Compiler: translates the whole program in one go / at once, before it is run [1]</li><li>It produces an executable file (machine code) that can be run without the compiler [1]</li><li>Interpreter: translates and executes the program one line at a time [1]</li><li>No executable file is produced / the program is translated again every time it is run [1]</li></ul>`,
          vi: `<ul><li>Trình biên dịch: dịch toàn bộ chương trình trong một lần / cùng một lúc, trước khi chạy [1]</li><li>Nó tạo ra một tệp thực thi (mã máy) có thể chạy mà không cần trình biên dịch [1]</li><li>Trình thông dịch: dịch và thực thi chương trình từng dòng một [1]</li><li>Không tạo ra tệp thực thi / chương trình được dịch lại mỗi lần chạy [1]</li></ul>` } },
  { id: "5.3-e6", kind: "explain", marks: 4,
    q: { en: `<p>Explain how a compiler and an interpreter differ in the way they report errors, and why this makes an interpreter useful while a program is being developed. [4]</p>`,
         vi: `<p>Giải thích trình biên dịch và trình thông dịch khác nhau thế nào trong cách báo lỗi, và vì sao điều này khiến trình thông dịch hữu ích khi một chương trình đang được phát triển. [4]</p>` },
    ms: { en: `<ul><li>A compiler produces an error report for the whole program after trying to translate it [1]</li><li>No executable is produced until all the errors are fixed [1]</li><li>An interpreter stops as soon as it finds an error and reports it (at that line) [1]</li><li>So the programmer can find, fix and re-run the line straight away / test the program part by part, which makes debugging easier [1]</li></ul>`,
          vi: `<ul><li>Trình biên dịch đưa ra báo cáo lỗi cho toàn bộ chương trình sau khi cố dịch nó [1]</li><li>Không có tệp thực thi nào được tạo ra cho đến khi mọi lỗi được sửa [1]</li><li>Trình thông dịch dừng ngay khi gặp lỗi và báo lỗi đó (ở dòng đó) [1]</li><li>Nên lập trình viên có thể tìm, sửa và chạy lại dòng đó ngay / kiểm thử chương trình từng phần, giúp gỡ lỗi dễ hơn [1]</li></ul>` } },
  { id: "5.3-e7", kind: "apply", marks: 5,
    q: { en: `<p>A software company is writing a spreadsheet program in a high-level language.</p><p>(a) State which type of translator the programmers should mainly use while they write and test the program, and give <b>one</b> reason. [2]</p><p>(b) State which type of translator should be used to produce the version that is sold to customers. Give <b>two</b> reasons. [3]</p>`,
         vi: `<p>Một công ty phần mềm đang viết một chương trình bảng tính bằng ngôn ngữ bậc cao.</p><p>(a) Nêu loại trình dịch mà các lập trình viên nên dùng chủ yếu trong lúc viết và kiểm thử chương trình, và đưa ra <b>một</b> lý do. [2]</p><p>(b) Nêu loại trình dịch nên dùng để tạo ra phiên bản bán cho khách hàng. Đưa ra <b>hai</b> lý do. [3]</p>` },
    ms: { en: `<ul><li>(a) Interpreter [1]; it stops at an error and reports it, so errors can be found and fixed line by line / no need to translate the whole program after each change [1]</li><li>(b) Compiler [1]; the executable runs faster because it does not have to be translated again each time [1]; customers do not receive the source code, so it cannot easily be copied or changed / customers do not need a translator installed [1]</li></ul>`,
          vi: `<ul><li>(a) Trình thông dịch [1]; nó dừng khi gặp lỗi và báo lỗi, nên có thể tìm và sửa lỗi từng dòng / không cần dịch cả chương trình sau mỗi lần thay đổi [1]</li><li>(b) Trình biên dịch [1]; tệp thực thi chạy nhanh hơn vì không phải dịch lại mỗi lần [1]; khách hàng không nhận được mã nguồn nên khó bị sao chép hoặc chỉnh sửa / khách hàng không cần cài sẵn trình dịch [1]</li></ul>` } },
  { id: "5.3-e8", kind: "explain", marks: 3,
    q: { en: `<p>A programmer says: "A program written in Python can run on many different types of computer, but a program written in assembly language usually cannot." Explain why this is true. [3]</p>`,
         vi: `<p>Một lập trình viên nói: "Chương trình viết bằng Python có thể chạy trên nhiều loại máy tính khác nhau, nhưng chương trình viết bằng hợp ngữ thường thì không." Giải thích vì sao điều này đúng. [3]</p>` },
    ms: { en: `<ul><li>Python is a high-level language, so it is machine independent / not tied to one type of CPU [1]</li><li>It can be translated (by a compiler or interpreter) for each type of computer [1]</li><li>Assembly language is a low-level language written for the instruction set of one type of CPU, so it is machine dependent [1]</li></ul>`,
          vi: `<ul><li>Python là ngôn ngữ bậc cao nên không phụ thuộc máy / không gắn với một loại CPU [1]</li><li>Nó có thể được dịch (bằng trình biên dịch hoặc trình thông dịch) cho từng loại máy tính [1]</li><li>Hợp ngữ là ngôn ngữ bậc thấp được viết cho tập lệnh của một loại CPU, nên phụ thuộc máy [1]</li></ul>` } }
],

"5.4": [
  { id: "5.4-e1", kind: "short", marks: 2,
    q: { en: `<p>(a) State what the letters IDE stand for. [1]</p><p>(b) Give one example of an IDE. [1]</p>`,
         vi: `<p>(a) Nêu các chữ cái IDE là viết tắt của gì. [1]</p><p>(b) Nêu một ví dụ về IDE. [1]</p>` },
    ms: { en: `<ul><li>(a) Integrated development environment [1]</li><li>(b) Any one from: IDLE, Thonny, Visual Studio, Eclipse, PyCharm, VS Code [1]</li></ul>`,
          vi: `<ul><li>(a) Môi trường phát triển tích hợp (integrated development environment) [1]</li><li>(b) Một ví dụ bất kỳ trong: IDLE, Thonny, Visual Studio, Eclipse, PyCharm, VS Code [1]</li></ul>` } },
  { id: "5.4-e2", kind: "short", marks: 3,
    q: { en: `<p>Name the IDE function that is described.</p><ul><li>(a) A place where the programmer types and edits the program code. [1]</li><li>(b) Shows where in the code an error is and explains what the error is. [1]</li><li>(c) Lets the program be run inside the IDE so its output can be seen. [1]</li></ul>`,
         vi: `<p>Nêu tên chức năng của IDE được mô tả.</p><ul><li>(a) Nơi lập trình viên gõ và sửa mã chương trình. [1]</li><li>(b) Chỉ ra lỗi nằm ở đâu trong mã và giải thích lỗi đó là gì. [1]</li><li>(c) Cho phép chạy chương trình ngay trong IDE để xem kết quả của nó. [1]</li></ul>` },
    ms: { en: `<ul><li>(a) Code editor [1]</li><li>(b) Error diagnostics [1]</li><li>(c) Run-time environment [1]</li></ul>`,
          vi: `<ul><li>(a) Trình soạn thảo mã (code editor) [1]</li><li>(b) Chẩn đoán lỗi (error diagnostics) [1]</li><li>(c) Môi trường chạy (run-time environment) [1]</li></ul>` } },
  { id: "5.4-e3", kind: "apply", marks: 4,
    q: { en: `<p>A student types the code below in an IDE. After typing <code>pr</code> the IDE suggests <code>print</code>, and later it underlines the word <code>prnt</code> on another line in red.</p><pre>prnt("Hello")</pre><p>(a) Name the IDE feature that suggested <code>print</code>. [1]</p><p>(b) Name the IDE feature that underlined <code>prnt</code>. [1]</p><p>(c) Describe how each of these features helps the student. [2]</p>`,
         vi: `<p>Một học sinh gõ đoạn mã dưới đây trong một IDE. Sau khi gõ <code>pr</code>, IDE gợi ý <code>print</code>, và sau đó nó gạch chân màu đỏ từ <code>prnt</code> ở một dòng khác.</p><pre>prnt("Hello")</pre><p>(a) Nêu tên chức năng của IDE đã gợi ý <code>print</code>. [1]</p><p>(b) Nêu tên chức năng của IDE đã gạch chân <code>prnt</code>. [1]</p><p>(c) Mô tả mỗi chức năng này giúp học sinh như thế nào. [2]</p>` },
    ms: { en: `<ul><li>(a) Auto-completion [1]</li><li>(b) Error diagnostics [1]</li><li>(c) Auto-completion saves typing time and reduces spelling mistakes [1]; error diagnostics shows where the error is so the student can find and correct it quickly [1]</li></ul>`,
          vi: `<ul><li>(a) Tự động hoàn thành (auto-completion) [1]</li><li>(b) Chẩn đoán lỗi (error diagnostics) [1]</li><li>(c) Auto-completion tiết kiệm thời gian gõ và giảm lỗi chính tả [1]; error diagnostics chỉ ra lỗi nằm ở đâu để học sinh tìm và sửa nhanh [1]</li></ul>` } },
  { id: "5.4-e4", kind: "explain", marks: 4,
    q: { en: `<p>Describe <b>two</b> functions of an IDE that make the program code easier to read. For each one, say how it helps the programmer. [4]</p>`,
         vi: `<p>Mô tả <b>hai</b> chức năng của IDE giúp mã chương trình dễ đọc hơn. Với mỗi chức năng, nêu nó giúp lập trình viên như thế nào. [4]</p>` },
    ms: { en: `<ul><li>Prettyprint / syntax highlighting: keywords, comments and strings are shown in different colours [1]; this makes the structure of the code clear and mistakes easier to spot [1]</li><li>Automatic indentation (prettyprint): lines inside loops and selections are indented [1]; so it is easy to see which statements belong to which block [1]</li><li>(Also accept: line numbers in the code editor – help to find a line that an error report refers to)</li></ul>`,
          vi: `<ul><li>Prettyprint / tô màu cú pháp: từ khóa, chú thích và chuỗi được hiển thị bằng các màu khác nhau [1]; điều này làm cấu trúc mã rõ ràng và dễ nhận ra lỗi hơn [1]</li><li>Tự động thụt lề (prettyprint): các dòng bên trong vòng lặp và cấu trúc rẽ nhánh được thụt vào [1]; nên dễ thấy câu lệnh nào thuộc khối nào [1]</li><li>(Cũng chấp nhận: số dòng trong trình soạn thảo mã – giúp tìm dòng mà báo cáo lỗi nhắc đến)</li></ul>` } },
  { id: "5.4-e5", kind: "apply", marks: 4,
    q: { en: `<p>A program should add up ten numbers that are input, but it always outputs the wrong total. Describe how <b>breakpoints</b>, <b>stepping</b> and <b>watching variables</b> in an IDE can help the programmer find the error. [4]</p>`,
         vi: `<p>Một chương trình phải cộng mười số được nhập vào, nhưng luôn xuất ra tổng sai. Mô tả cách <b>điểm dừng (breakpoint)</b>, <b>chạy từng bước (stepping)</b> và <b>theo dõi biến (watching variables)</b> trong IDE có thể giúp lập trình viên tìm ra lỗi. [4]</p>` },
    hint: { en: `Think about where you would pause the program and what you would look at once it has paused.`, vi: `Hãy nghĩ xem bạn sẽ tạm dừng chương trình ở đâu và sẽ nhìn vào cái gì khi nó đã dừng.` },
    ms: { en: `<ul><li>A breakpoint is set at a line (e.g. inside the loop) so the program pauses there [1]</li><li>Stepping runs the program one line at a time after the pause [1]</li><li>Watching variables shows the value of the total and the number input after each step [1]</li><li>The programmer can compare the values with what is expected and see the line where the total first becomes wrong [1]</li></ul>`,
          vi: `<ul><li>Điểm dừng được đặt ở một dòng (ví dụ bên trong vòng lặp) để chương trình tạm dừng tại đó [1]</li><li>Chạy từng bước thực thi chương trình từng dòng một sau khi dừng [1]</li><li>Theo dõi biến hiển thị giá trị của biến tổng và số vừa nhập sau mỗi bước [1]</li><li>Lập trình viên có thể so sánh các giá trị với kết quả mong đợi và thấy dòng mà tại đó tổng bắt đầu sai [1]</li></ul>` } },
  { id: "5.4-e6", kind: "explain", marks: 5,
    q: { en: `<p>A professional programmer could write code in a basic text editor and use a separate compiler. Explain why many programmers use an IDE instead. [5]</p>`,
         vi: `<p>Một lập trình viên chuyên nghiệp có thể viết mã trong một trình soạn thảo văn bản đơn giản và dùng một trình biên dịch riêng. Giải thích vì sao nhiều lập trình viên dùng IDE thay vào đó. [5]</p>` },
    hint: { en: `Give five different benefits and say how each saves time or reduces mistakes.`, vi: `Nêu năm lợi ích khác nhau và nói mỗi lợi ích tiết kiệm thời gian hay giảm lỗi như thế nào.` },
    ms: { en: `<ul><li>Everything (editor, translator, run-time environment, debugging tools) is in one place, so the programmer does not switch between programs [1]</li><li>Auto-completion / auto-correction speeds up typing and reduces spelling errors [1]</li><li>Prettyprint (colour-coding, indentation) makes the code easier to read and understand [1]</li><li>Error diagnostics shows where errors are and explains them, so they are fixed more quickly [1]</li><li>Debugging tools (breakpoints, stepping, watching variables) help to find logic errors; the program can be run and tested inside the IDE [1]</li></ul>`,
          vi: `<ul><li>Mọi thứ (trình soạn thảo, trình dịch, môi trường chạy, công cụ gỡ lỗi) nằm ở một nơi, nên lập trình viên không phải chuyển qua lại giữa các chương trình [1]</li><li>Auto-completion / auto-correction giúp gõ nhanh hơn và giảm lỗi chính tả [1]</li><li>Prettyprint (tô màu, thụt lề) làm mã dễ đọc và dễ hiểu hơn [1]</li><li>Error diagnostics chỉ ra lỗi ở đâu và giải thích chúng, nên lỗi được sửa nhanh hơn [1]</li><li>Các công cụ gỡ lỗi (điểm dừng, chạy từng bước, theo dõi biến) giúp tìm lỗi logic; chương trình có thể được chạy và kiểm thử ngay trong IDE [1]</li></ul>` } }
]
});

(function () {
  // Truth tables are computed here so every table in the mark schemes is correct by construction.
  const G = { AND: (a, b) => a & b, OR: (a, b) => a | b, NAND: (a, b) => (a & b) ? 0 : 1, NOR: (a, b) => (a | b) ? 0 : 1, XOR: (a, b) => a ^ b, NOT: a => a ? 0 : 1 };
  const combos = n => Array.from({ length: 1 << n }, (_, k) => Array.from({ length: n }, (_, i) => (k >> (n - 1 - i)) & 1));
  const tbl = (head, rows) => `<table class="tbl center tt"><tr>${head.map(h => `<th>${h}</th>`).join("")}</tr>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</table>`;
  const blank = "&nbsp;&nbsp;";
  const two = combos(2), three = combos(3);

  // 6.1-e3: NOR table
  const norBlank = tbl(["A", "B", "X"], two.map(([a, b]) => [a, b, blank]));
  const norFull = tbl(["A", "B", "X"], two.map(([a, b]) => [a, b, `<b>${G.NOR(a, b)}</b>`]));
  // 6.1-e4: identify three gates from output columns
  const idBlank = tbl(["A", "B", "P", "Q", "R"], two.map(([a, b]) => [a, b, G.NAND(a, b), G.XOR(a, b), G.OR(a, b)]));
  // 6.1-e7: A = 1, B = 0
  const gates5 = ["AND", "OR", "NAND", "NOR", "XOR"];
  const g5Blank = tbl(["Gate", "A", "B", "X"], gates5.map(g => [g, 1, 0, blank]));
  const g5Full = tbl(["Gate", "A", "B", "X"], gates5.map(g => [g, 1, 0, `<b>${G[g](1, 0)}</b>`]));
  // 6.1-e8: NAND for the machine guards
  const guardBlank = tbl(["G1", "G2", "X"], two.map(([a, b]) => [a, b, blank]));
  const guardFull = tbl(["G1", "G2", "X"], two.map(([a, b]) => [a, b, `<b>${G.NAND(a, b)}</b>`]));
  // 6.2-e1: X = A AND NOT B
  const e1Blank = tbl(["A", "B", "NOT B", "X"], two.map(([a, b]) => [a, b, blank, blank]));
  const e1Full = tbl(["A", "B", "NOT B", "X"], two.map(([a, b]) => [a, b, G.NOT(b), `<b>${G.AND(a, G.NOT(b))}</b>`]));
  // 6.2-e5: X = (A XOR B) NOR C
  const e5Blank = tbl(["A", "B", "C", "A XOR B", "X"], three.map(([a, b, c]) => [a, b, c, blank, blank]));
  const e5Full = tbl(["A", "B", "C", "A XOR B", "X"], three.map(([a, b, c]) => [a, b, c, G.XOR(a, b), `<b>${G.NOR(G.XOR(a, b), c)}</b>`]));
  // 6.2-e6: X = (NOT A AND B AND C) OR (A AND NOT B AND NOT C)
  const f6 = ([a, b, c]) => (G.NOT(a) & b & c) | (a & G.NOT(b) & G.NOT(c));
  const e6Table = tbl(["A", "B", "C", "X"], three.map(r => [...r, f6(r)]));
  // 6.2-e8: X = E AND (NOT S OR D)
  const f8 = ([e, s, d]) => e & (G.NOT(s) | d);
  const e8Blank = tbl(["E", "S", "D", "NOT S", "NOT S OR D", "X"], three.map(([e, s, d]) => [e, s, d, blank, blank, blank]));
  const e8Full = tbl(["E", "S", "D", "NOT S", "NOT S OR D", "X"], three.map(([e, s, d]) => [e, s, d, G.NOT(s), G.NOT(s) | d, `<b>${f8([e, s, d])}</b>`]));

  Object.assign(window.EXERCISES, {

"6.1": [
  { id: "6.1-e1", kind: "short", marks: 2,
    q: { en: `<p>(a) State the number of inputs of a NOT gate. [1]</p><p>(b) State the number of inputs of a NAND gate. [1]</p>`,
         vi: `<p>(a) Nêu số đầu vào của cổng NOT. [1]</p><p>(b) Nêu số đầu vào của cổng NAND. [1]</p>` },
    ms: { en: `<ul><li>(a) 1 (one) [1]</li><li>(b) 2 (two) [1]</li></ul>`,
          vi: `<ul><li>(a) 1 (một) [1]</li><li>(b) 2 (hai) [1]</li></ul>` } },
  { id: "6.1-e2", kind: "short", marks: 2,
    q: { en: `<p>Describe the output of an XOR gate. [2]</p>`,
         vi: `<p>Mô tả đầu ra của cổng XOR. [2]</p>` },
    ms: { en: `<ul><li>The output is 1 when the two inputs are different (one is 1 and the other is 0) [1]</li><li>The output is 0 when the two inputs are the same (both 0 or both 1) [1]</li></ul>`,
          vi: `<ul><li>Đầu ra bằng 1 khi hai đầu vào khác nhau (một đầu vào bằng 1 và đầu vào kia bằng 0) [1]</li><li>Đầu ra bằng 0 khi hai đầu vào giống nhau (cùng bằng 0 hoặc cùng bằng 1) [1]</li></ul>` } },
  { id: "6.1-e3", kind: "logic", marks: 2,
    q: { en: `<p>Complete the truth table for a NOR gate with inputs A and B and output X. [2]</p>${norBlank}`,
         vi: `<p>Hoàn thành bảng chân trị của cổng NOR có đầu vào A và B và đầu ra X. [2]</p>${norBlank}` },
    hint: { en: `NOR is OR followed by NOT: work out A OR B first, then invert it.`, vi: `NOR là OR rồi đến NOT: tính A OR B trước, rồi đảo kết quả.` },
    ms: { en: `${norFull}<ul><li>Rows 00 and 01 correct (1, 0) [1]</li><li>Rows 10 and 11 correct (0, 0) [1]</li></ul>`,
          vi: `${norFull}<ul><li>Hàng 00 và 01 đúng (1, 0) [1]</li><li>Hàng 10 và 11 đúng (0, 0) [1]</li></ul>` } },
  { id: "6.1-e4", kind: "logic", marks: 3,
    q: { en: `<p>The truth table shows the outputs of three different logic gates, P, Q and R, which all have the same inputs A and B. Each gate is one of AND, OR, NAND, NOR or XOR. Identify each gate.</p>${idBlank}<ul><li>P [1]</li><li>Q [1]</li><li>R [1]</li></ul>`,
         vi: `<p>Bảng chân trị cho thấy đầu ra của ba cổng logic khác nhau P, Q và R, đều có cùng đầu vào A và B. Mỗi cổng là một trong các cổng AND, OR, NAND, NOR hoặc XOR. Hãy xác định từng cổng.</p>${idBlank}<ul><li>P [1]</li><li>Q [1]</li><li>R [1]</li></ul>` },
    hint: { en: `Look at the output only when A = 1 and B = 1, and when A = 0 and B = 0.`, vi: `Hãy nhìn đầu ra ở các hàng A = 1, B = 1 và A = 0, B = 0.` },
    ms: { en: `<ul><li>P = NAND (1, 1, 1, 0) [1]</li><li>Q = XOR (0, 1, 1, 0) [1]</li><li>R = OR (0, 1, 1, 1) [1]</li></ul>`,
          vi: `<ul><li>P = NAND (1, 1, 1, 0) [1]</li><li>Q = XOR (0, 1, 1, 0) [1]</li><li>R = OR (0, 1, 1, 1) [1]</li></ul>` } },
  { id: "6.1-e5", kind: "apply", marks: 3,
    q: { en: `<p>Name the single logic gate that matches each statement.</p><ul><li>(a) A lift moves only if the door is closed <b>and</b> a floor button has been pressed. [1]</li><li>(b) A warning light comes on if <b>either</b> of two sensors detects smoke. [1]</li><li>(c) A night light is on when it is <b>not</b> daylight. [1]</li></ul>`,
         vi: `<p>Nêu tên cổng logic duy nhất phù hợp với mỗi phát biểu.</p><ul><li>(a) Thang máy chỉ chạy nếu cửa đã đóng <b>và</b> một nút tầng đã được nhấn. [1]</li><li>(b) Đèn cảnh báo sáng nếu <b>một trong hai</b> cảm biến phát hiện khói. [1]</li><li>(c) Đèn ngủ sáng khi trời <b>không</b> có ánh sáng ban ngày. [1]</li></ul>` },
    ms: { en: `<ul><li>(a) AND [1]</li><li>(b) OR [1]</li><li>(c) NOT [1]</li></ul>`,
          vi: `<ul><li>(a) AND [1]</li><li>(b) OR [1]</li><li>(c) NOT [1]</li></ul>` } },
  { id: "6.1-e6", kind: "explain", marks: 4,
    q: { en: `<p>(a) State what the small circle on the output of a logic gate symbol means. [1]</p><p>(b) Describe how the symbols for NAND and NOR are related to the symbols for AND and OR. [2]</p><p>(c) Describe how the XOR symbol differs from the OR symbol. [1]</p>`,
         vi: `<p>(a) Nêu vòng tròn nhỏ ở đầu ra của ký hiệu cổng logic có nghĩa là gì. [1]</p><p>(b) Mô tả ký hiệu của NAND và NOR liên quan thế nào đến ký hiệu của AND và OR. [2]</p><p>(c) Mô tả ký hiệu XOR khác ký hiệu OR ở điểm nào. [1]</p>` },
    ms: { en: `<ul><li>(a) The output is inverted (NOT) [1]</li><li>(b) NAND is the AND symbol with a small circle on the output [1]; NOR is the OR symbol with a small circle on the output [1]</li><li>(c) XOR has an extra curved line at the back (input side) of the OR shape [1]</li></ul>`,
          vi: `<ul><li>(a) Đầu ra bị đảo (NOT) [1]</li><li>(b) NAND là ký hiệu AND có thêm một vòng tròn nhỏ ở đầu ra [1]; NOR là ký hiệu OR có thêm một vòng tròn nhỏ ở đầu ra [1]</li><li>(c) XOR có thêm một đường cong ở phía sau (phía đầu vào) của hình dạng OR [1]</li></ul>` } },
  { id: "6.1-e7", kind: "logic", marks: 5,
    q: { en: `<p>Complete the table to show the output X of each gate when input A = 1 and input B = 0. [5]</p>${g5Blank}`,
         vi: `<p>Hoàn thành bảng để cho thấy đầu ra X của mỗi cổng khi đầu vào A = 1 và đầu vào B = 0. [5]</p>${g5Blank}` },
    ms: { en: `${g5Full}<ul><li>AND = 0 [1]</li><li>OR = 1 [1]</li><li>NAND = 1 [1]</li><li>NOR = 0 [1]</li><li>XOR = 1 [1]</li></ul>`,
          vi: `${g5Full}<ul><li>AND = 0 [1]</li><li>OR = 1 [1]</li><li>NAND = 1 [1]</li><li>NOR = 0 [1]</li><li>XOR = 1 [1]</li></ul>` } },
  { id: "6.1-e8", kind: "apply", marks: 3,
    q: { en: `<p>A machine has two safety guards. G1 = 1 and G2 = 1 mean that the guard is in place. An alarm (X = 1) must sound unless <b>both</b> guards are in place.</p><p>(a) Name the single logic gate that gives this behaviour. [1]</p><p>(b) Complete the truth table. [2]</p>${guardBlank}`,
         vi: `<p>Một chiếc máy có hai tấm chắn an toàn. G1 = 1 và G2 = 1 nghĩa là tấm chắn đã ở đúng vị trí. Chuông báo động (X = 1) phải kêu trừ khi <b>cả hai</b> tấm chắn đều ở đúng vị trí.</p><p>(a) Nêu tên cổng logic duy nhất cho hành vi này. [1]</p><p>(b) Hoàn thành bảng chân trị. [2]</p>${guardBlank}` },
    ms: { en: `<ul><li>(a) NAND [1]</li><li>(b) Outputs 1, 1, 1, 0: rows 00 and 01 correct [1]; rows 10 and 11 correct [1]</li></ul>${guardFull}`,
          vi: `<ul><li>(a) NAND [1]</li><li>(b) Đầu ra 1, 1, 1, 0: hàng 00 và 01 đúng [1]; hàng 10 và 11 đúng [1]</li></ul>${guardFull}` } }
],

"6.2": [
  { id: "6.2-e1", kind: "logic", marks: 3,
    q: { en: `<p>Complete the truth table for the logic expression <code>X = A AND NOT B</code>. [3]</p>${e1Blank}`,
         vi: `<p>Hoàn thành bảng chân trị cho biểu thức logic <code>X = A AND NOT B</code>. [3]</p>${e1Blank}` },
    ms: { en: `${e1Full}<ul><li>NOT B column correct (1, 0, 1, 0) [1]</li><li>X for rows 00 and 01 correct (0, 0) [1]</li><li>X for rows 10 and 11 correct (1, 0) [1]</li></ul>`,
          vi: `${e1Full}<ul><li>Cột NOT B đúng (1, 0, 1, 0) [1]</li><li>X ở hàng 00 và 01 đúng (0, 0) [1]</li><li>X ở hàng 10 và 11 đúng (1, 0) [1]</li></ul>` } },
  { id: "6.2-e2", kind: "short", marks: 2,
    q: { en: `<p>(a) State the number of rows needed in a truth table for a logic circuit with three inputs. [1]</p><p>(b) Give one reason for using working columns when completing a truth table. [1]</p>`,
         vi: `<p>(a) Nêu số hàng cần có trong bảng chân trị của một mạch logic có ba đầu vào. [1]</p><p>(b) Nêu một lý do nên dùng cột trung gian khi hoàn thành bảng chân trị. [1]</p>` },
    ms: { en: `<ul><li>(a) 8 [1]</li><li>(b) They show the output of each part of the expression, so mistakes are less likely / it is easier to check each step [1]</li></ul>`,
          vi: `<ul><li>(a) 8 [1]</li><li>(b) Chúng cho thấy đầu ra của từng phần trong biểu thức, nên ít nhầm lẫn hơn / dễ kiểm tra từng bước hơn [1]</li></ul>` } },
  { id: "6.2-e3", kind: "apply", marks: 3,
    q: { en: `<p>Write a logic expression for each statement.</p><ul><li>(a) A greenhouse heater (H) is on when the temperature is low (T = 1) and the window is not open (W = 1 means the window is open). [2]</li><li>(b) A security light (L) comes on if movement is detected (M = 1) or the manual switch is on (S = 1). [1]</li></ul>`,
         vi: `<p>Viết biểu thức logic cho mỗi phát biểu.</p><ul><li>(a) Máy sưởi nhà kính (H) bật khi nhiệt độ thấp (T = 1) và cửa sổ không mở (W = 1 nghĩa là cửa sổ đang mở). [2]</li><li>(b) Đèn an ninh (L) sáng nếu phát hiện chuyển động (M = 1) hoặc công tắc thủ công đang bật (S = 1). [1]</li></ul>` },
    ms: { en: `<ul><li>(a) <code>H = T AND NOT W</code>: T AND ... [1]; NOT W [1]</li><li>(b) <code>L = M OR S</code> [1]</li></ul>`,
          vi: `<ul><li>(a) <code>H = T AND NOT W</code>: T AND ... [1]; NOT W [1]</li><li>(b) <code>L = M OR S</code> [1]</li></ul>` } },
  { id: "6.2-e4", kind: "logic", marks: 3,
    q: { en: `<p>A logic circuit is described below. Inputs A and B go to a NOR gate. The output of the NOR gate and input C go to an XOR gate. The output of the XOR gate is X.</p><pre>A ---+
     | NOR ----+
B ---+         |
               | XOR ---- X
C -------------+</pre><p>Write the logic expression for this circuit. [3]</p>`,
         vi: `<p>Một mạch logic được mô tả dưới đây. Các đầu vào A và B đi vào một cổng NOR. Đầu ra của cổng NOR và đầu vào C đi vào một cổng XOR. Đầu ra của cổng XOR là X.</p><pre>A ---+
     | NOR ----+
B ---+         |
               | XOR ---- X
C -------------+</pre><p>Viết biểu thức logic cho mạch này. [3]</p>` },
    hint: { en: `Write the expression for the first gate in brackets, then feed it into the second gate.`, vi: `Viết biểu thức của cổng đầu tiên trong ngoặc, rồi đưa nó vào cổng thứ hai.` },
    ms: { en: `<p><code>X = (A NOR B) XOR C</code></p><ul><li>A NOR B [1]</li><li>... XOR C [1]</li><li>Brackets around A NOR B, and X = at the start [1]</li></ul>`,
          vi: `<p><code>X = (A NOR B) XOR C</code></p><ul><li>A NOR B [1]</li><li>... XOR C [1]</li><li>Dấu ngoặc quanh A NOR B, và có X = ở đầu [1]</li></ul>` } },
  { id: "6.2-e5", kind: "logic", marks: 4,
    q: { en: `<p>Complete the truth table for the logic expression <code>X = (A XOR B) NOR C</code>. [4]</p>${e5Blank}`,
         vi: `<p>Hoàn thành bảng chân trị cho biểu thức logic <code>X = (A XOR B) NOR C</code>. [4]</p>${e5Blank}` },
    hint: { en: `Fill the working column A XOR B first. Then NOR that column with C.`, vi: `Điền cột trung gian A XOR B trước. Sau đó lấy cột đó NOR với C.` },
    ms: { en: `${e5Full}<ul><li>Working column A XOR B, rows 000 to 011 correct [1]</li><li>Working column A XOR B, rows 100 to 111 correct [1]</li><li>X rows 000 to 011 correct (1, 0, 0, 0) [1]</li><li>X rows 100 to 111 correct (0, 0, 1, 0) [1]</li></ul>`,
          vi: `${e5Full}<ul><li>Cột trung gian A XOR B, các hàng 000 đến 011 đúng [1]</li><li>Cột trung gian A XOR B, các hàng 100 đến 111 đúng [1]</li><li>X các hàng 000 đến 011 đúng (1, 0, 0, 0) [1]</li><li>X các hàng 100 đến 111 đúng (0, 0, 1, 0) [1]</li></ul>` } },
  { id: "6.2-e6", kind: "logic", marks: 3,
    q: { en: `<p>Write a logic expression for the truth table below. [3]</p>${e6Table}`,
         vi: `<p>Viết biểu thức logic cho bảng chân trị dưới đây. [3]</p>${e6Table}` },
    hint: { en: `Only use the rows where X = 1. Use NOT for any input that is 0 in that row.`, vi: `Chỉ dùng các hàng có X = 1. Dùng NOT cho đầu vào nào bằng 0 trong hàng đó.` },
    ms: { en: `<p><code>X = (NOT A AND B AND C) OR (A AND NOT B AND NOT C)</code></p><ul><li>Row 011: NOT A AND B AND C [1]</li><li>Row 100: A AND NOT B AND NOT C [1]</li><li>The two terms joined with OR [1]</li></ul>`,
          vi: `<p><code>X = (NOT A AND B AND C) OR (A AND NOT B AND NOT C)</code></p><ul><li>Hàng 011: NOT A AND B AND C [1]</li><li>Hàng 100: A AND NOT B AND NOT C [1]</li><li>Hai số hạng được nối với nhau bằng OR [1]</li></ul>` } },
  { id: "6.2-e7", kind: "logic", marks: 4,
    q: { en: `<p>Describe a logic circuit for <code>X = NOT (A AND B) OR C</code>. For each gate, state its type and what is connected to its inputs. Do not simplify the expression. [4]</p>`,
         vi: `<p>Mô tả một mạch logic cho <code>X = NOT (A AND B) OR C</code>. Với mỗi cổng, nêu loại của nó và những gì được nối vào các đầu vào của nó. Không rút gọn biểu thức. [4]</p>` },
    hint: { en: `Work from the inside of the brackets outwards: AND first, then NOT, then OR.`, vi: `Làm từ trong ngoặc ra ngoài: AND trước, rồi NOT, rồi OR.` },
    ms: { en: `<pre>A ---+
     | AND ---- NOT ----+
B ---+                  |
                        | OR ---- X
C ----------------------+</pre><ul><li>An AND gate with inputs A and B [1]</li><li>A NOT gate connected to the output of the AND gate (a NAND gate in place of AND + NOT is also accepted) [1]</li><li>An OR gate with inputs from the NOT gate (or NAND) and from C [1]</li><li>The output of the OR gate is X [1]</li></ul>`,
          vi: `<pre>A ---+
     | AND ---- NOT ----+
B ---+                  |
                        | OR ---- X
C ----------------------+</pre><ul><li>Một cổng AND có đầu vào là A và B [1]</li><li>Một cổng NOT nối với đầu ra của cổng AND (cũng chấp nhận một cổng NAND thay cho AND + NOT) [1]</li><li>Một cổng OR có các đầu vào từ cổng NOT (hoặc NAND) và từ C [1]</li><li>Đầu ra của cổng OR là X [1]</li></ul>` } },
  { id: "6.2-e8", kind: "apply", marks: 6,
    q: { en: `<p>A car buzzer (X) sounds if the engine is on (E = 1) <b>and</b> either the driver's seat belt is not fastened (S = 0) <b>or</b> a door is open (D = 1).</p><p>(a) Write a logic expression for the buzzer. [3]</p><p>(b) Complete the truth table for your expression. [3]</p>${e8Blank}`,
         vi: `<p>Còi báo trong ô tô (X) kêu nếu động cơ đang chạy (E = 1) <b>và</b> dây an toàn của người lái chưa cài (S = 0) <b>hoặc</b> có một cửa đang mở (D = 1).</p><p>(a) Viết biểu thức logic cho còi báo. [3]</p><p>(b) Hoàn thành bảng chân trị cho biểu thức của bạn. [3]</p>${e8Blank}` },
    hint: { en: `"Seat belt not fastened" means S = 0, so it is NOT S. Use brackets so that the OR is worked out before the AND.`, vi: `"Dây an toàn chưa cài" nghĩa là S = 0, tức là NOT S. Dùng dấu ngoặc để phép OR được tính trước phép AND.` },
    ms: { en: `<ul><li>(a) <code>X = E AND (NOT S OR D)</code>: E AND ... [1]; NOT S [1]; (NOT S OR D) in brackets [1]</li><li>(b) Working columns NOT S and NOT S OR D correct [1]; X for rows 000 to 011 correct [1]; X for rows 100 to 111 correct [1]</li></ul>${e8Full}`,
          vi: `<ul><li>(a) <code>X = E AND (NOT S OR D)</code>: E AND ... [1]; NOT S [1]; (NOT S OR D) trong ngoặc [1]</li><li>(b) Các cột trung gian NOT S và NOT S OR D đúng [1]; X các hàng 000 đến 011 đúng [1]; X các hàng 100 đến 111 đúng [1]</li></ul>${e8Full}` } }
]
  });
})();
