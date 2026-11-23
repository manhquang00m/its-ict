/* Exercises — Chapter 1 Data representation (English + Vietnamese) */
window.EXERCISES = window.EXERCISES || {};

Object.assign(window.EXERCISES, {
  "1.1": [
    { id: "1.1-e1", kind: "short", marks: 2,
      q: {
        en: `<p>(a) State the name given to a group of 4 bits. [1]</p><p>(b) Give one reason why computers use binary to represent data. [1]</p>`,
        vi: `<p>(a) Nêu tên gọi của một nhóm 4 bit. [1]</p><p>(b) Nêu một lý do vì sao máy tính dùng nhị phân để biểu diễn dữ liệu. [1]</p>`
      },
      ms: {
        en: `<ul><li>(a) Nibble [1]</li><li>(b) Computers are made of transistors/switches that have only two states (on = 1, off = 0), so all data must be stored as 1s and 0s [1]</li></ul>`,
        vi: `<ul><li>(a) Nibble [1]</li><li>(b) Máy tính được tạo từ các transistor/công tắc chỉ có hai trạng thái (bật = 1, tắt = 0), nên mọi dữ liệu phải được lưu dưới dạng các số 1 và 0 [1]</li></ul>`
      }
    },
    { id: "1.1-e2", kind: "calc", marks: 2,
      q: {
        en: `<p>Convert the 8-bit binary number <code>10110101</code> to denary. Show your working. [2]</p>`,
        vi: `<p>Đổi số nhị phân 8 bit <code>10110101</code> sang thập phân. Trình bày cách làm. [2]</p>`
      },
      hint: { en: `Write the place values 128, 64, 32, 16, 8, 4, 2, 1 above the bits and add the columns that hold a 1.`, vi: `Viết các giá trị vị trí 128, 64, 32, 16, 8, 4, 2, 1 phía trên các bit rồi cộng các cột có chữ số 1.` },
      ms: {
        en: `<ul><li>Columns with a 1: 128 + 32 + 16 + 4 + 1 [1]</li><li>Answer = <b>181</b> [1]</li></ul>`,
        vi: `<ul><li>Các cột có chữ số 1: 128 + 32 + 16 + 4 + 1 [1]</li><li>Đáp án = <b>181</b> [1]</li></ul>`
      }
    },
    { id: "1.1-e3", kind: "calc", marks: 3,
      q: {
        en: `<p>Convert the denary number 203 to an 8-bit binary number. Show your working. [3]</p>`,
        vi: `<p>Đổi số thập phân 203 sang số nhị phân 8 bit. Trình bày cách làm. [3]</p>`
      },
      hint: { en: `Subtract place values from the left: does 128 fit into 203? What is left?`, vi: `Trừ dần các giá trị vị trí từ bên trái: 128 có nằm trong 203 không? Còn lại bao nhiêu?` },
      ms: {
        en: `<ul><li>Correct use of place values or repeated division by 2 [1]</li><li>203 = 128 + 64 + 8 + 2 + 1 (203 − 128 = 75, 75 − 64 = 11, 11 − 8 = 3, 3 − 2 = 1, 1 − 1 = 0) [1]</li><li>Answer = <b>11001011</b> [1]</li></ul>`,
        vi: `<ul><li>Dùng đúng giá trị vị trí hoặc chia liên tiếp cho 2 [1]</li><li>203 = 128 + 64 + 8 + 2 + 1 (203 − 128 = 75, 75 − 64 = 11, 11 − 8 = 3, 3 − 2 = 1, 1 − 1 = 0) [1]</li><li>Đáp án = <b>11001011</b> [1]</li></ul>`
      }
    },
    { id: "1.1-e4", kind: "calc", marks: 2,
      q: {
        en: `<p>A 16-bit register holds the binary number <code>0000 0010 1000 0001</code>. Calculate its denary value. [2]</p>`,
        vi: `<p>Một thanh ghi 16 bit chứa số nhị phân <code>0000 0010 1000 0001</code>. Tính giá trị thập phân của nó. [2]</p>`
      },
      hint: { en: `The place values of the 16-bit number continue 256, 512, 1024 … to the left of 128.`, vi: `Giá trị vị trí của số 16 bit tiếp tục là 256, 512, 1024 … về bên trái cột 128.` },
      ms: {
        en: `<ul><li>Columns with a 1 are 512, 128 and 1 [1]</li><li>512 + 128 + 1 = <b>641</b> [1]</li></ul>`,
        vi: `<ul><li>Các cột có chữ số 1 là 512, 128 và 1 [1]</li><li>512 + 128 + 1 = <b>641</b> [1]</li></ul>`
      }
    },
    { id: "1.1-e5", kind: "calc", marks: 3,
      q: {
        en: `<p>Add the two 8-bit binary numbers below. Show the carries.</p><pre>  0 1 1 0 1 0 1 1
+ 0 0 1 1 1 1 0 1</pre><p>Give your answer in binary and check it by writing the denary values of the two numbers and their sum. [3]</p>`,
        vi: `<p>Cộng hai số nhị phân 8 bit dưới đây. Ghi rõ các số nhớ.</p><pre>  0 1 1 0 1 0 1 1
+ 0 0 1 1 1 1 0 1</pre><p>Ghi đáp án dưới dạng nhị phân và kiểm tra lại bằng cách viết giá trị thập phân của hai số và của tổng. [3]</p>`
      },
      ms: {
        en: `<ul><li>Adding from right to left with carries (a carry of 1 comes out of every column from bit 0 to bit 6) [1]</li><li>Answer = <b>10101000</b> [1]</li><li>Check: 107 + 61 = 168 and 10101000 = 128 + 32 + 8 = 168 [1]</li></ul>`,
        vi: `<ul><li>Cộng từ phải sang trái có nhớ (mỗi cột từ bit 0 đến bit 6 đều nhớ 1 sang cột kế tiếp) [1]</li><li>Đáp án = <b>10101000</b> [1]</li><li>Kiểm tra: 107 + 61 = 168 và 10101000 = 128 + 32 + 8 = 168 [1]</li></ul>`
      }
    },
    { id: "1.1-e6", kind: "explain", marks: 3,
      q: {
        en: `<p>A student says: "The largest number that can be stored in an 8-bit register is 256."</p><p>Explain why the student is wrong and state the correct largest value. [3]</p>`,
        vi: `<p>Một học sinh nói: "Số lớn nhất có thể lưu trong thanh ghi 8 bit là 256."</p><p>Giải thích vì sao học sinh đó sai và nêu giá trị lớn nhất đúng. [3]</p>`
      },
      hint: { en: `With 8 bits there are 2⁸ different patterns, but one of them is 00000000.`, vi: `Với 8 bit có 2⁸ tổ hợp khác nhau, nhưng một trong số đó là 00000000.` },
      ms: {
        en: `<ul><li>8 bits can store 2⁸ = 256 different values [1]</li><li>The values start at 0 (00000000), so they run from 0 to 255 [1]</li><li>The largest value is 255 (11111111) [1]</li></ul>`,
        vi: `<ul><li>8 bit lưu được 2⁸ = 256 giá trị khác nhau [1]</li><li>Các giá trị bắt đầu từ 0 (00000000), nên chạy từ 0 đến 255 [1]</li><li>Giá trị lớn nhất là 255 (11111111) [1]</li></ul>`
      }
    },
    { id: "1.1-e7", kind: "calc", marks: 4,
      q: {
        en: `<p>Two 8-bit binary numbers are added in an 8-bit register:</p><pre>  1 0 0 1 0 1 1 0
+ 0 1 1 1 1 0 0 0</pre><p>(a) Work out the 9-bit result of the addition. [1]</p><p>(b) State what happens in the register and give the value that is actually stored. [2]</p><p>(c) Name this type of error. [1]</p>`,
        vi: `<p>Hai số nhị phân 8 bit được cộng trong một thanh ghi 8 bit:</p><pre>  1 0 0 1 0 1 1 0
+ 0 1 1 1 1 0 0 0</pre><p>(a) Tính kết quả 9 bit của phép cộng. [1]</p><p>(b) Nêu điều gì xảy ra trong thanh ghi và cho biết giá trị thực sự được lưu. [2]</p><p>(c) Gọi tên kiểu lỗi này. [1]</p>`
      },
      hint: { en: `Convert both numbers to denary first (150 and 120) to see if the sum is bigger than 255.`, vi: `Hãy đổi cả hai số sang thập phân trước (150 và 120) để xem tổng có lớn hơn 255 không.` },
      ms: {
        en: `<ul><li>(a) 100001110 (150 + 120 = 270) [1]</li><li>(b) The answer needs 9 bits but the register only holds 8, so the extra (left-most) bit is lost [1]; the value stored is 00001110 (14) [1]</li><li>(c) Overflow error [1]</li></ul>`,
        vi: `<ul><li>(a) 100001110 (150 + 120 = 270) [1]</li><li>(b) Kết quả cần 9 bit nhưng thanh ghi chỉ chứa 8 bit, nên bit thừa (ngoài cùng bên trái) bị mất [1]; giá trị được lưu là 00001110 (14) [1]</li><li>(c) Lỗi tràn số (overflow error) [1]</li></ul>`
      }
    },
    { id: "1.1-e8", kind: "apply", marks: 3,
      q: {
        en: `<p>A game stores the player's score in an 8-bit register. The score is currently 240 and the player earns 25 more points.</p><p>(a) Explain what goes wrong when the program adds the points. [2]</p><p>(b) Suggest one change the programmer could make to stop this from happening. [1]</p>`,
        vi: `<p>Một trò chơi lưu điểm số của người chơi trong một thanh ghi 8 bit. Điểm hiện tại là 240 và người chơi được cộng thêm 25 điểm.</p><p>(a) Giải thích điều gì sai khi chương trình cộng điểm. [2]</p><p>(b) Đề xuất một thay đổi mà lập trình viên có thể thực hiện để tránh điều này. [1]</p>`
      },
      ms: {
        en: `<ul><li>(a) 240 + 25 = 265, which is greater than 255 (the largest 8-bit value) so an overflow error occurs [1]; only the lower 8 bits are kept, so the register would hold 9 instead of 265 [1]</li><li>(b) Store the score in a bigger register, e.g. 16 bits (which can hold up to 65 535) [1]</li></ul>`,
        vi: `<ul><li>(a) 240 + 25 = 265, lớn hơn 255 (giá trị 8 bit lớn nhất) nên xảy ra lỗi tràn số [1]; chỉ 8 bit thấp được giữ lại, nên thanh ghi sẽ chứa 9 thay vì 265 [1]</li><li>(b) Lưu điểm số trong thanh ghi lớn hơn, ví dụ 16 bit (chứa được đến 65 535) [1]</li></ul>`
      }
    }
  ],

  "1.2": [
    { id: "1.2-e1", kind: "short", marks: 2,
      q: {
        en: `<p>Give the hexadecimal digit that represents each denary value.</p><p>(a) 11 [1]</p><p>(b) 14 [1]</p>`,
        vi: `<p>Nêu chữ số thập lục phân biểu diễn mỗi giá trị thập phân sau.</p><p>(a) 11 [1]</p><p>(b) 14 [1]</p>`
      },
      ms: {
        en: `<ul><li>(a) B [1]</li><li>(b) E [1]</li></ul>`,
        vi: `<ul><li>(a) B [1]</li><li>(b) E [1]</li></ul>`
      }
    },
    { id: "1.2-e2", kind: "calc", marks: 2,
      q: {
        en: `<p>Convert the hexadecimal number <code>3C</code> to denary. Show your working. [2]</p>`,
        vi: `<p>Đổi số thập lục phân <code>3C</code> sang thập phân. Trình bày cách làm. [2]</p>`
      },
      hint: { en: `The left digit is worth 16 each; C stands for 12.`, vi: `Chữ số bên trái có giá trị 16 mỗi đơn vị; C là 12.` },
      ms: {
        en: `<ul><li>(3 × 16) + (12 × 1) = 48 + 12 [1]</li><li>Answer = <b>60</b> [1]</li></ul>`,
        vi: `<ul><li>(3 × 16) + (12 × 1) = 48 + 12 [1]</li><li>Đáp án = <b>60</b> [1]</li></ul>`
      }
    },
    { id: "1.2-e3", kind: "calc", marks: 2,
      q: {
        en: `<p>Convert the denary number 218 to hexadecimal. Show your working. [2]</p>`,
        vi: `<p>Đổi số thập phân 218 sang thập lục phân. Trình bày cách làm. [2]</p>`
      },
      hint: { en: `Divide by 16. The whole-number part is the first digit, the remainder is the second.`, vi: `Chia cho 16. Phần nguyên là chữ số thứ nhất, số dư là chữ số thứ hai.` },
      ms: {
        en: `<ul><li>218 ÷ 16 = 13 remainder 10, and 13 = D, 10 = A [1]</li><li>Answer = <b>DA</b> [1]</li></ul>`,
        vi: `<ul><li>218 ÷ 16 = 13 dư 10, và 13 = D, 10 = A [1]</li><li>Đáp án = <b>DA</b> [1]</li></ul>`
      }
    },
    { id: "1.2-e4", kind: "calc", marks: 2,
      q: {
        en: `<p>Convert the binary number <code>10111100</code> to hexadecimal. [2]</p>`,
        vi: `<p>Đổi số nhị phân <code>10111100</code> sang thập lục phân. [2]</p>`
      },
      ms: {
        en: `<ul><li>Split into nibbles: 1011 and 1100 [1]</li><li>1011 = B and 1100 = C, so the answer is <b>BC</b> [1]</li></ul>`,
        vi: `<ul><li>Tách thành các nibble: 1011 và 1100 [1]</li><li>1011 = B và 1100 = C, nên đáp án là <b>BC</b> [1]</li></ul>`
      }
    },
    { id: "1.2-e5", kind: "calc", marks: 2,
      q: {
        en: `<p>Convert the hexadecimal number <code>7E</code> to an 8-bit binary number. [2]</p>`,
        vi: `<p>Đổi số thập lục phân <code>7E</code> sang số nhị phân 8 bit. [2]</p>`
      },
      ms: {
        en: `<ul><li>7 = 0111 and E (14) = 1110 [1]</li><li>Answer = <b>01111110</b> [1]</li></ul>`,
        vi: `<ul><li>7 = 0111 và E (14) = 1110 [1]</li><li>Đáp án = <b>01111110</b> [1]</li></ul>`
      }
    },
    { id: "1.2-e6", kind: "calc", marks: 3,
      q: {
        en: `<p>Convert the 10-bit binary number <code>1101011101</code> to hexadecimal. Show how you grouped the bits. [3]</p>`,
        vi: `<p>Đổi số nhị phân 10 bit <code>1101011101</code> sang thập lục phân. Cho thấy cách bạn nhóm các bit. [3]</p>`
      },
      hint: { en: `Group in fours starting from the right. The left-most group will have fewer than 4 bits, so add 0s at the front.`, vi: `Nhóm từng 4 bit bắt đầu từ bên phải. Nhóm ngoài cùng bên trái sẽ có ít hơn 4 bit, nên thêm số 0 vào đầu.` },
      ms: {
        en: `<ul><li>Grouped from the right: 11 0101 1101 [1]</li><li>Padded with 0s at the front: 0011 0101 1101 [1]</li><li>Answer = <b>35D</b> [1]</li></ul>`,
        vi: `<ul><li>Nhóm từ bên phải: 11 0101 1101 [1]</li><li>Thêm số 0 vào đầu: 0011 0101 1101 [1]</li><li>Đáp án = <b>35D</b> [1]</li></ul>`
      }
    },
    { id: "1.2-e7", kind: "explain", marks: 3,
      q: {
        en: `<p>Programmers often show memory addresses in hexadecimal rather than in binary.</p><p>Describe <b>two</b> reasons why. Also state whether the computer itself processes data in hexadecimal. [3]</p>`,
        vi: `<p>Lập trình viên thường hiển thị địa chỉ bộ nhớ bằng thập lục phân thay vì nhị phân.</p><p>Mô tả <b>hai</b> lý do vì sao. Đồng thời nêu máy tính có tự xử lý dữ liệu bằng thập lục phân hay không. [3]</p>`
      },
      ms: {
        en: `<ul><li>Hex is much shorter than binary (one hex digit replaces 4 bits) so it is easier to read/write/remember [1]</li><li>Fewer digits to copy means people make fewer mistakes [1]</li><li>No – the computer still works in binary; hex is only used by humans to display binary values [1]</li></ul>`,
        vi: `<ul><li>Hex ngắn hơn nhiều so với nhị phân (một chữ số hex thay cho 4 bit) nên dễ đọc/viết/nhớ hơn [1]</li><li>Ít chữ số cần chép hơn nên con người ít mắc lỗi hơn [1]</li><li>Không – máy tính vẫn làm việc bằng nhị phân; hex chỉ được con người dùng để hiển thị các giá trị nhị phân [1]</li></ul>`
      }
    },
    { id: "1.2-e8", kind: "apply", marks: 4,
      q: {
        en: `<p>A web page uses the HTML colour code <code>#1F8A4C</code>. The code is made of three pairs of hexadecimal digits for red, green and blue.</p><p>(a) State the pair of digits for each colour. [1]</p><p>(b) Convert the green value to denary. [2]</p><p>(c) Give the 8-bit binary for the blue value. [1]</p>`,
        vi: `<p>Một trang web dùng mã màu HTML <code>#1F8A4C</code>. Mã này gồm ba cặp chữ số thập lục phân cho màu đỏ, lục và lam.</p><p>(a) Nêu cặp chữ số của từng màu. [1]</p><p>(b) Đổi giá trị màu lục sang thập phân. [2]</p><p>(c) Cho biết số nhị phân 8 bit của giá trị màu lam. [1]</p>`
      },
      ms: {
        en: `<ul><li>(a) Red = 1F, green = 8A, blue = 4C [1]</li><li>(b) 8A = (8 × 16) + 10 [1] = <b>138</b> [1]</li><li>(c) 4C = 0100 1100 so <b>01001100</b> [1]</li></ul>`,
        vi: `<ul><li>(a) Đỏ = 1F, lục = 8A, lam = 4C [1]</li><li>(b) 8A = (8 × 16) + 10 [1] = <b>138</b> [1]</li><li>(c) 4C = 0100 1100 nên <b>01001100</b> [1]</li></ul>`
      }
    }
  ]
});

Object.assign(window.EXERCISES, {
  "1.3": [
    { id: "1.3-e1", kind: "short", marks: 2,
      q: {
        en: `<p>(a) State the effect of a logical left shift of 3 places on a positive binary integer. [1]</p><p>(b) State what is shifted in at the right-hand end of the register. [1]</p>`,
        vi: `<p>(a) Nêu tác dụng của phép dịch bit logic sang trái 3 vị trí lên một số nguyên nhị phân dương. [1]</p><p>(b) Nêu cái gì được đưa vào ở đầu bên phải của thanh ghi. [1]</p>`
      },
      ms: {
        en: `<ul><li>(a) The number is multiplied by 8 (2³) [1]</li><li>(b) Zeros (0s) [1]</li></ul>`,
        vi: `<ul><li>(a) Số đó được nhân với 8 (2³) [1]</li><li>(b) Các số 0 [1]</li></ul>`
      }
    },
    { id: "1.3-e2", kind: "calc", marks: 2,
      q: {
        en: `<p>The 8-bit register below holds <code>00001101</code> (denary 13). Show the contents of the register after a logical left shift of 2 places, and give its denary value. [2]</p>`,
        vi: `<p>Thanh ghi 8 bit dưới đây chứa <code>00001101</code> (thập phân 13). Cho biết nội dung thanh ghi sau khi dịch bit logic sang trái 2 vị trí, và giá trị thập phân của nó. [2]</p>`
      },
      ms: {
        en: `<ul><li><b>00110100</b> [1]</li><li>Denary value = <b>52</b> (13 × 4) [1]</li></ul>`,
        vi: `<ul><li><b>00110100</b> [1]</li><li>Giá trị thập phân = <b>52</b> (13 × 4) [1]</li></ul>`
      }
    },
    { id: "1.3-e3", kind: "calc", marks: 3,
      q: {
        en: `<p>The register holds <code>10110100</code> (denary 180). A logical right shift of 3 places is performed.</p><p>(a) Write the contents of the register after the shift. [1]</p><p>(b) State the bits that were lost. [1]</p><p>(c) Give the denary value of the result and explain why it is not exactly 180 ÷ 8. [1]</p>`,
        vi: `<p>Thanh ghi chứa <code>10110100</code> (thập phân 180). Thực hiện dịch bit logic sang phải 3 vị trí.</p><p>(a) Viết nội dung thanh ghi sau khi dịch. [1]</p><p>(b) Nêu các bit đã bị mất. [1]</p><p>(c) Cho biết giá trị thập phân của kết quả và giải thích vì sao nó không đúng bằng 180 ÷ 8. [1]</p>`
      },
      ms: {
        en: `<ul><li>(a) <b>00010110</b> [1]</li><li>(b) 100 (the three right-most bits fell off the end) [1]</li><li>(c) 22; 180 ÷ 8 = 22.5 but the .5 (remainder) is lost with the bits that fell off [1]</li></ul>`,
        vi: `<ul><li>(a) <b>00010110</b> [1]</li><li>(b) 100 (ba bit ngoài cùng bên phải đã rơi ra khỏi thanh ghi) [1]</li><li>(c) 22; 180 ÷ 8 = 22.5 nhưng phần .5 (phần dư) bị mất cùng các bit đã rơi ra [1]</li></ul>`
      }
    },
    { id: "1.3-e4", kind: "explain", marks: 3,
      q: {
        en: `<p>The register holds <code>01101001</code> (denary 105). A logical left shift of 2 places is performed.</p><p>(a) Write the contents of the register after the shift. [1]</p><p>(b) The correct answer to 105 × 4 is 420. Explain why the register does not hold the value 420. [2]</p>`,
        vi: `<p>Thanh ghi chứa <code>01101001</code> (thập phân 105). Thực hiện dịch bit logic sang trái 2 vị trí.</p><p>(a) Viết nội dung thanh ghi sau khi dịch. [1]</p><p>(b) Kết quả đúng của 105 × 4 là 420. Giải thích vì sao thanh ghi không chứa giá trị 420. [2]</p>`
      },
      ms: {
        en: `<ul><li>(a) <b>10100100</b> (denary 164) [1]</li><li>(b) 420 is greater than 255, so it needs more than 8 bits [1]; a 1 was shifted off the left-hand (most significant) end and lost, so the result is wrong (like an overflow) [1]</li></ul>`,
        vi: `<ul><li>(a) <b>10100100</b> (thập phân 164) [1]</li><li>(b) 420 lớn hơn 255 nên cần nhiều hơn 8 bit [1]; một bit 1 đã bị đẩy ra khỏi đầu bên trái (bit trọng số lớn nhất) và bị mất, nên kết quả sai (giống như tràn số) [1]</li></ul>`
      }
    },
    { id: "1.3-e5", kind: "calc", marks: 3,
      q: {
        en: `<p>Represent the denary number −45 as an 8-bit two's complement binary number. Show each step of your working. [3]</p>`,
        vi: `<p>Biểu diễn số thập phân −45 dưới dạng số bù hai 8 bit. Trình bày từng bước làm. [3]</p>`
      },
      hint: { en: `Write +45 in binary first, then invert every bit, then add 1.`, vi: `Viết +45 dưới dạng nhị phân trước, rồi đảo mọi bit, rồi cộng 1.` },
      ms: {
        en: `<ul><li>+45 = 00101101 [1]</li><li>Invert all the bits: 11010010 [1]</li><li>Add 1: <b>11010011</b> [1] (check: −128 + 64 + 16 + 2 + 1 = −45)</li></ul>`,
        vi: `<ul><li>+45 = 00101101 [1]</li><li>Đảo tất cả các bit: 11010010 [1]</li><li>Cộng 1: <b>11010011</b> [1] (kiểm tra: −128 + 64 + 16 + 2 + 1 = −45)</li></ul>`
      }
    },
    { id: "1.3-e6", kind: "calc", marks: 3,
      q: {
        en: `<p>The 8-bit two's complement number <code>10011100</code> is stored in a register. Calculate its denary value. Show your working. [3]</p>`,
        vi: `<p>Số bù hai 8 bit <code>10011100</code> được lưu trong một thanh ghi. Tính giá trị thập phân của nó. Trình bày cách làm. [3]</p>`
      },
      hint: { en: `The left-most bit is worth −128, not +128.`, vi: `Bit ngoài cùng bên trái có giá trị −128, không phải +128.` },
      ms: {
        en: `<ul><li>The most significant bit is 1, so the number is negative and has a value of −128 [1]</li><li>The other 1s are 16 + 8 + 4 = 28 [1]</li><li>−128 + 28 = <b>−100</b> [1]</li></ul>`,
        vi: `<ul><li>Bit có trọng số lớn nhất là 1, nên số này âm và có giá trị −128 [1]</li><li>Các bit 1 còn lại là 16 + 8 + 4 = 28 [1]</li><li>−128 + 28 = <b>−100</b> [1]</li></ul>`
      }
    },
    { id: "1.3-e7", kind: "explain", marks: 3,
      q: {
        en: `<p>(a) State the range of denary values that can be stored in an 8-bit two's complement number. [1]</p><p>(b) Explain why the value +200 cannot be stored in this format. [2]</p>`,
        vi: `<p>(a) Nêu dải giá trị thập phân có thể lưu trong một số bù hai 8 bit. [1]</p><p>(b) Giải thích vì sao không thể lưu giá trị +200 theo định dạng này. [2]</p>`
      },
      ms: {
        en: `<ul><li>(a) −128 to +127 [1]</li><li>(b) The most significant bit is used for the negative value (−128), so the largest positive number is 01111111 = 127 [1]; 200 is greater than 127 (200 would need a 1 in the sign bit and would then be read as a negative number) [1]</li></ul>`,
        vi: `<ul><li>(a) −128 đến +127 [1]</li><li>(b) Bit trọng số lớn nhất dùng cho giá trị âm (−128), nên số dương lớn nhất là 01111111 = 127 [1]; 200 lớn hơn 127 (200 sẽ cần bit 1 ở bit dấu và khi đó bị hiểu thành một số âm) [1]</li></ul>`
      }
    },
    { id: "1.3-e8", kind: "apply", marks: 3,
      q: {
        en: `<p>A programmer wants to multiply the positive number 25 (<code>00011001</code>) by 8 using only a logical shift in an 8-bit register.</p><p>(a) State the direction and number of places of the shift. [1]</p><p>(b) Write the binary result. [1]</p><p>(c) Give the denary value of the result. [1]</p>`,
        vi: `<p>Một lập trình viên muốn nhân số dương 25 (<code>00011001</code>) với 8 chỉ bằng phép dịch bit logic trong thanh ghi 8 bit.</p><p>(a) Nêu hướng dịch và số vị trí dịch. [1]</p><p>(b) Viết kết quả nhị phân. [1]</p><p>(c) Cho biết giá trị thập phân của kết quả. [1]</p>`
      },
      hint: { en: `8 = 2³. Check that no 1 is lost off the left-hand end.`, vi: `8 = 2³. Hãy kiểm tra không có bit 1 nào bị mất ở đầu bên trái.` },
      ms: {
        en: `<ul><li>(a) Left shift by 3 places [1]</li><li>(b) <b>11001000</b> (the bits shifted off the left are 000, so nothing is lost) [1]</li><li>(c) <b>200</b> (25 × 8) [1]</li></ul>`,
        vi: `<ul><li>(a) Dịch trái 3 vị trí [1]</li><li>(b) <b>11001000</b> (các bit bị đẩy ra bên trái là 000 nên không mất gì) [1]</li><li>(c) <b>200</b> (25 × 8) [1]</li></ul>`
      }
    }
  ],

  "1.4": [
    { id: "1.4-e1", kind: "short", marks: 2,
      q: {
        en: `<p>(a) State what is meant by a <i>character set</i>. [1]</p><p>(b) State the number of different characters that 7-bit ASCII can represent. [1]</p>`,
        vi: `<p>(a) Nêu <i>bộ ký tự</i> (character set) có nghĩa là gì. [1]</p><p>(b) Nêu số ký tự khác nhau mà ASCII 7 bit có thể biểu diễn. [1]</p>`
      },
      ms: {
        en: `<ul><li>(a) A list of all the characters a computer can represent, each with its own unique binary code [1]</li><li>(b) 128 (2⁷) [1]</li></ul>`,
        vi: `<ul><li>(a) Danh sách tất cả các ký tự mà máy tính biểu diễn được, mỗi ký tự có một mã nhị phân riêng [1]</li><li>(b) 128 (2⁷) [1]</li></ul>`
      }
    },
    { id: "1.4-e2", kind: "calc", marks: 3,
      q: {
        en: `<p>In ASCII the capital letter 'A' has the denary code 65 and the lowercase letter 'a' has the code 97.</p><p>(a) Give the ASCII denary code for 'H'. [1]</p><p>(b) Give the 8-bit binary code for 'H'. [1]</p><p>(c) Give the ASCII denary code for 'h'. [1]</p>`,
        vi: `<p>Trong ASCII, chữ hoa 'A' có mã thập phân 65 và chữ thường 'a' có mã 97.</p><p>(a) Cho biết mã thập phân ASCII của 'H'. [1]</p><p>(b) Cho biết mã nhị phân 8 bit của 'H'. [1]</p><p>(c) Cho biết mã thập phân ASCII của 'h'. [1]</p>`
      },
      hint: { en: `'H' is the 8th letter, so count 7 along from 'A'. A lowercase letter is 32 more than its capital.`, vi: `'H' là chữ cái thứ 8, nên đếm thêm 7 từ 'A'. Chữ thường lớn hơn chữ hoa tương ứng 32.` },
      ms: {
        en: `<ul><li>(a) 65 + 7 = <b>72</b> [1]</li><li>(b) 72 = 64 + 8 so <b>01001000</b> [1]</li><li>(c) 72 + 32 = <b>104</b> [1]</li></ul>`,
        vi: `<ul><li>(a) 65 + 7 = <b>72</b> [1]</li><li>(b) 72 = 64 + 8 nên <b>01001000</b> [1]</li><li>(c) 72 + 32 = <b>104</b> [1]</li></ul>`
      }
    },
    { id: "1.4-e3", kind: "calc", marks: 3,
      q: {
        en: `<p>The binary codes <code>01000011 01000001 01010100</code> are 8-bit ASCII codes for three capital letters. Use the fact that 'A' = 65 to decode them. Show the denary value of each code and write the word. [3]</p>`,
        vi: `<p>Các mã nhị phân <code>01000011 01000001 01010100</code> là mã ASCII 8 bit của ba chữ hoa. Dùng thông tin 'A' = 65 để giải mã. Cho biết giá trị thập phân của từng mã và viết ra từ đó. [3]</p>`
      },
      ms: {
        en: `<ul><li>01000011 = 67 (A + 2) so C [1]</li><li>01000001 = 65 so A, and 01010100 = 84 (A + 19) so T [1]</li><li>The word is <b>CAT</b> [1]</li></ul>`,
        vi: `<ul><li>01000011 = 67 (A + 2) nên là C [1]</li><li>01000001 = 65 nên là A, và 01010100 = 84 (A + 19) nên là T [1]</li><li>Từ đó là <b>CAT</b> [1]</li></ul>`
      }
    },
    { id: "1.4-e4", kind: "explain", marks: 3,
      q: {
        en: `<p>Unicode was introduced to replace ASCII for many uses.</p><p>Explain why Unicode was needed and describe one drawback of using it. [3]</p>`,
        vi: `<p>Unicode ra đời để thay thế ASCII trong nhiều trường hợp.</p><p>Giải thích vì sao cần Unicode và mô tả một nhược điểm khi dùng nó. [3]</p>`
      },
      ms: {
        en: `<ul><li>ASCII only has 128 (or 256 for extended ASCII) characters [1]</li><li>It cannot represent the characters of many world languages (e.g. Chinese, Arabic, Vietnamese) or emojis, but Unicode uses up to 32 bits per character so it can [1]</li><li>Drawback: Unicode uses more bits per character, so text files are larger / need more storage [1]</li></ul>`,
        vi: `<ul><li>ASCII chỉ có 128 ký tự (hoặc 256 với ASCII mở rộng) [1]</li><li>Nó không biểu diễn được ký tự của nhiều ngôn ngữ trên thế giới (ví dụ tiếng Trung, tiếng Ả Rập, tiếng Việt) hay emoji, còn Unicode dùng tối đa 32 bit cho mỗi ký tự nên làm được [1]</li><li>Nhược điểm: Unicode dùng nhiều bit hơn cho mỗi ký tự, nên tệp văn bản lớn hơn / cần nhiều dung lượng hơn [1]</li></ul>`
      }
    },
    { id: "1.4-e5", kind: "short", marks: 2,
      q: {
        en: `<p>Give <b>one</b> advantage of ASCII over Unicode and <b>one</b> advantage of Unicode over ASCII. [2]</p>`,
        vi: `<p>Nêu <b>một</b> ưu điểm của ASCII so với Unicode và <b>một</b> ưu điểm của Unicode so với ASCII. [2]</p>`
      },
      ms: {
        en: `<ul><li>ASCII: fewer bits per character, so files are smaller [1]</li><li>Unicode: can represent characters from all languages and emojis [1]</li></ul>`,
        vi: `<ul><li>ASCII: ít bit hơn cho mỗi ký tự nên tệp nhỏ hơn [1]</li><li>Unicode: biểu diễn được ký tự của mọi ngôn ngữ và emoji [1]</li></ul>`
      }
    },
    { id: "1.4-e6", kind: "explain", marks: 2,
      q: {
        en: `<p>The character '3' is stored in ASCII as <code>00110011</code>. The denary number 3 is stored as <code>00000011</code>.</p><p>Explain why these two binary patterns are different. [2]</p>`,
        vi: `<p>Ký tự '3' được lưu trong ASCII là <code>00110011</code>. Số thập phân 3 được lưu là <code>00000011</code>.</p><p>Giải thích vì sao hai dãy nhị phân này khác nhau. [2]</p>`
      },
      ms: {
        en: `<ul><li>00110011 is the character code for the <i>character</i> '3' (51 in ASCII), used for text that is displayed [1]</li><li>00000011 is the binary value of the <i>number</i> 3, used in calculations [1]</li></ul>`,
        vi: `<ul><li>00110011 là mã của <i>ký tự</i> '3' (51 trong ASCII), dùng cho văn bản hiển thị [1]</li><li>00000011 là giá trị nhị phân của <i>số</i> 3, dùng trong tính toán [1]</li></ul>`
      }
    },
    { id: "1.4-e7", kind: "calc", marks: 3,
      q: {
        en: `<p>The message <code>Good morning!</code> is stored as text. Spaces and punctuation count as characters.</p><p>(a) State the number of characters in the message. [1]</p><p>(b) Calculate the size in bits if 8-bit ASCII is used. [1]</p><p>(c) Calculate the size in bits if every character uses 32 bits (Unicode). [1]</p>`,
        vi: `<p>Thông điệp <code>Good morning!</code> được lưu dưới dạng văn bản. Dấu cách và dấu câu cũng tính là ký tự.</p><p>(a) Nêu số ký tự của thông điệp. [1]</p><p>(b) Tính dung lượng bằng bit nếu dùng ASCII 8 bit. [1]</p><p>(c) Tính dung lượng bằng bit nếu mỗi ký tự dùng 32 bit (Unicode). [1]</p>`
      },
      ms: {
        en: `<ul><li>(a) 4 + 1 + 7 + 1 = <b>13</b> characters [1]</li><li>(b) 13 × 8 = <b>104</b> bits (13 bytes) [1]</li><li>(c) 13 × 32 = <b>416</b> bits (52 bytes) [1]</li></ul>`,
        vi: `<ul><li>(a) 4 + 1 + 7 + 1 = <b>13</b> ký tự [1]</li><li>(b) 13 × 8 = <b>104</b> bit (13 byte) [1]</li><li>(c) 13 × 32 = <b>416</b> bit (52 byte) [1]</li></ul>`
      }
    },
    { id: "1.4-e8", kind: "apply", marks: 4,
      q: {
        en: `<p>A company is writing a messaging app that will be used by people in Vietnam, Japan and Brazil. Users will send text and emojis.</p><p>(a) State which character set the app should use. [1]</p><p>(b) Justify your choice. [2]</p><p>(c) State the effect of your choice on the size of each message. [1]</p>`,
        vi: `<p>Một công ty đang viết ứng dụng nhắn tin cho người dùng ở Việt Nam, Nhật Bản và Brazil. Người dùng sẽ gửi văn bản và emoji.</p><p>(a) Nêu ứng dụng nên dùng bộ ký tự nào. [1]</p><p>(b) Biện minh cho lựa chọn của bạn. [2]</p><p>(c) Nêu ảnh hưởng của lựa chọn đó lên dung lượng của mỗi tin nhắn. [1]</p>`
      },
      ms: {
        en: `<ul><li>(a) Unicode [1]</li><li>(b) It can represent characters from all world languages (including accented letters) [1]; and it includes emojis, which ASCII cannot represent [1]</li><li>(c) Each character uses more bits (up to 32), so messages are larger than in ASCII [1]</li></ul>`,
        vi: `<ul><li>(a) Unicode [1]</li><li>(b) Nó biểu diễn được ký tự của mọi ngôn ngữ trên thế giới (kể cả chữ có dấu) [1]; và có cả emoji, thứ mà ASCII không biểu diễn được [1]</li><li>(c) Mỗi ký tự dùng nhiều bit hơn (tối đa 32), nên tin nhắn lớn hơn so với dùng ASCII [1]</li></ul>`
      }
    }
  ]
});

Object.assign(window.EXERCISES, {
  "1.5": [
    { id: "1.5-e1", kind: "short", marks: 2,
      q: {
        en: `<p>(a) State what is meant by the <i>sample rate</i> of a sound recording. [1]</p><p>(b) State the unit used to measure sample rate. [1]</p>`,
        vi: `<p>(a) Nêu <i>tần số lấy mẫu</i> (sample rate) của một bản ghi âm có nghĩa là gì. [1]</p><p>(b) Nêu đơn vị dùng để đo tần số lấy mẫu. [1]</p>`
      },
      ms: {
        en: `<ul><li>(a) The number of samples (amplitude measurements) taken per second [1]</li><li>(b) Hertz (Hz) [1]</li></ul>`,
        vi: `<ul><li>(a) Số mẫu (số lần đo biên độ) được lấy trong mỗi giây [1]</li><li>(b) Hertz (Hz) [1]</li></ul>`
      }
    },
    { id: "1.5-e2", kind: "short", marks: 2,
      q: {
        en: `<p>(a) State what is meant by the <i>sample resolution</i>. [1]</p><p>(b) State the effect on the file size of increasing the sample resolution. [1]</p>`,
        vi: `<p>(a) Nêu <i>độ phân giải mẫu</i> (sample resolution) có nghĩa là gì. [1]</p><p>(b) Nêu ảnh hưởng lên dung lượng tệp khi tăng độ phân giải mẫu. [1]</p>`
      },
      ms: {
        en: `<ul><li>(a) The number of bits used to store each sample [1]</li><li>(b) The file size increases [1]</li></ul>`,
        vi: `<ul><li>(a) Số bit dùng để lưu mỗi mẫu [1]</li><li>(b) Dung lượng tệp tăng [1]</li></ul>`
      }
    },
    { id: "1.5-e3", kind: "explain", marks: 4,
      q: {
        en: `<p>Describe how a sound from a singer is converted into binary data so that a computer can store it. [4]</p>`,
        vi: `<p>Mô tả cách âm thanh từ giọng hát của một ca sĩ được chuyển thành dữ liệu nhị phân để máy tính lưu trữ. [4]</p>`
      },
      hint: { en: `Think about the microphone, the ADC, what is measured and how often.`, vi: `Hãy nghĩ đến micro, ADC, đại lượng nào được đo và đo thường xuyên đến mức nào.` },
      ms: {
        en: `<ul><li>A microphone converts the sound vibrations into an analogue electrical signal [1]</li><li>An analogue-to-digital converter (ADC) measures the amplitude (height) of the wave [1]</li><li>The measurements (samples) are taken at regular time intervals [1]</li><li>Each sample is stored as a binary number [1]</li></ul>`,
        vi: `<ul><li>Một micro biến dao động âm thanh thành tín hiệu điện tương tự [1]</li><li>Bộ chuyển đổi tương tự sang số (ADC) đo biên độ (độ cao) của sóng [1]</li><li>Các phép đo (mẫu) được thực hiện tại những khoảng thời gian đều đặn [1]</li><li>Mỗi mẫu được lưu dưới dạng một số nhị phân [1]</li></ul>`
      }
    },
    { id: "1.5-e4", kind: "calc", marks: 3,
      q: {
        en: `<p>A mono sound clip lasts 5 seconds. It is recorded with a sample rate of 8000 Hz and a sample resolution of 8 bits.</p><p>Calculate the file size in KiB. Show your working. [3]</p>`,
        vi: `<p>Một đoạn âm thanh mono dài 5 giây. Nó được ghi với tần số lấy mẫu 8000 Hz và độ phân giải mẫu 8 bit.</p><p>Tính dung lượng tệp bằng KiB. Trình bày cách làm. [3]</p>`
      },
      hint: { en: `bits = sample rate × resolution × seconds; then ÷ 8 and ÷ 1024.`, vi: `bit = tần số lấy mẫu × độ phân giải × số giây; rồi ÷ 8 và ÷ 1024.` },
      ms: {
        en: `<ul><li>8000 × 8 × 5 = 320 000 bits [1]</li><li>320 000 ÷ 8 = 40 000 bytes [1]</li><li>40 000 ÷ 1024 = <b>39.0625 KiB</b> [1]</li></ul>`,
        vi: `<ul><li>8000 × 8 × 5 = 320 000 bit [1]</li><li>320 000 ÷ 8 = 40 000 byte [1]</li><li>40 000 ÷ 1024 = <b>39.0625 KiB</b> [1]</li></ul>`
      }
    },
    { id: "1.5-e5", kind: "explain", marks: 4,
      q: {
        en: `<p>A sound engineer increases both the sample rate and the sample resolution of a recording.</p><p>Explain the effect of these changes on the quality of the recording and on its file size. [4]</p>`,
        vi: `<p>Một kỹ sư âm thanh tăng cả tần số lấy mẫu lẫn độ phân giải mẫu của một bản ghi.</p><p>Giải thích ảnh hưởng của những thay đổi này lên chất lượng bản ghi và dung lượng tệp. [4]</p>`
      },
      ms: {
        en: `<ul><li>A higher sample rate means more samples are taken each second [1], so the digital wave is closer to / more accurate than the original sound [1]</li><li>A higher sample resolution means each sample is stored using more bits, so the amplitude is stored more precisely [1]</li><li>Both changes make the file size larger [1]</li></ul>`,
        vi: `<ul><li>Tần số lấy mẫu cao hơn nghĩa là mỗi giây lấy nhiều mẫu hơn [1], nên sóng số gần với / chính xác hơn so với âm thanh gốc [1]</li><li>Độ phân giải mẫu cao hơn nghĩa là mỗi mẫu được lưu bằng nhiều bit hơn, nên biên độ được lưu chính xác hơn [1]</li><li>Cả hai thay đổi đều làm dung lượng tệp lớn hơn [1]</li></ul>`
      }
    },
    { id: "1.5-e6", kind: "calc", marks: 3,
      q: {
        en: `<p>A mono recording lasts 6 seconds and uses a sample resolution of 16 bits. Its file size is 480 000 bytes.</p><p>Calculate the sample rate in Hz. Show your working. [3]</p>`,
        vi: `<p>Một bản ghi mono dài 6 giây và dùng độ phân giải mẫu 16 bit. Dung lượng tệp là 480 000 byte.</p><p>Tính tần số lấy mẫu bằng Hz. Trình bày cách làm. [3]</p>`
      },
      hint: { en: `Work backwards: change bytes to bits, then divide by the resolution and the length.`, vi: `Làm ngược lại: đổi byte sang bit, rồi chia cho độ phân giải và thời lượng.` },
      ms: {
        en: `<ul><li>480 000 × 8 = 3 840 000 bits [1]</li><li>Sample rate = bits ÷ (resolution × seconds) = 3 840 000 ÷ (16 × 6) [1]</li><li>= <b>40 000 Hz</b> [1]</li></ul>`,
        vi: `<ul><li>480 000 × 8 = 3 840 000 bit [1]</li><li>Tần số lấy mẫu = bit ÷ (độ phân giải × số giây) = 3 840 000 ÷ (16 × 6) [1]</li><li>= <b>40 000 Hz</b> [1]</li></ul>`
      }
    },
    { id: "1.5-e7", kind: "calc", marks: 4,
      q: {
        en: `<p>A stereo recording (2 channels) lasts 30 seconds. The sample rate is 22 050 Hz and the sample resolution is 16 bits.</p><p>Calculate the file size in MiB, correct to 2 decimal places. Show your working. [4]</p>`,
        vi: `<p>Một bản ghi stereo (2 kênh) dài 30 giây. Tần số lấy mẫu là 22 050 Hz và độ phân giải mẫu là 16 bit.</p><p>Tính dung lượng tệp bằng MiB, làm tròn đến 2 chữ số thập phân. Trình bày cách làm. [4]</p>`
      },
      hint: { en: `Multiply by 2 for the two channels.`, vi: `Nhân với 2 vì có hai kênh.` },
      ms: {
        en: `<ul><li>22 050 × 16 × 30 × 2 = 21 168 000 bits [1]</li><li>÷ 8 = 2 646 000 bytes [1]</li><li>÷ 1024 = 2583.98 KiB [1]</li><li>÷ 1024 = <b>2.52 MiB</b> [1]</li></ul>`,
        vi: `<ul><li>22 050 × 16 × 30 × 2 = 21 168 000 bit [1]</li><li>÷ 8 = 2 646 000 byte [1]</li><li>÷ 1024 = 2583.98 KiB [1]</li><li>÷ 1024 = <b>2.52 MiB</b> [1]</li></ul>`
      }
    },
    { id: "1.5-e8", kind: "apply", marks: 5,
      q: {
        en: `<p>A podcaster records a 10-minute mono episode with a sample rate of 44 100 Hz and a sample resolution of 16 bits. The email service allows attachments of up to 25 MiB.</p><p>(a) Calculate the file size in MiB, correct to 2 decimal places. Show your working. [3]</p><p>(b) State whether the file can be sent as an email attachment. Give a reason. [1]</p><p>(c) Give one way the podcaster could reduce the file size. [1]</p>`,
        vi: `<p>Một người làm podcast ghi một tập mono dài 10 phút với tần số lấy mẫu 44 100 Hz và độ phân giải mẫu 16 bit. Dịch vụ email cho phép tệp đính kèm tối đa 25 MiB.</p><p>(a) Tính dung lượng tệp bằng MiB, làm tròn đến 2 chữ số thập phân. Trình bày cách làm. [3]</p><p>(b) Nêu tệp có thể gửi dưới dạng đính kèm email hay không. Đưa ra lý do. [1]</p><p>(c) Nêu một cách để người làm podcast giảm dung lượng tệp. [1]</p>`
      },
      hint: { en: `10 minutes = 600 seconds.`, vi: `10 phút = 600 giây.` },
      ms: {
        en: `<ul><li>(a) 44 100 × 16 × 600 = 423 360 000 bits [1]; ÷ 8 = 52 920 000 bytes [1]; ÷ 1024 ÷ 1024 = <b>50.47 MiB</b> [1]</li><li>(b) No, because 50.47 MiB is greater than the 25 MiB limit [1]</li><li>(c) Any one: reduce the sample rate / reduce the sample resolution / compress the file (e.g. MP3) / shorten the recording [1]</li></ul>`,
        vi: `<ul><li>(a) 44 100 × 16 × 600 = 423 360 000 bit [1]; ÷ 8 = 52 920 000 byte [1]; ÷ 1024 ÷ 1024 = <b>50.47 MiB</b> [1]</li><li>(b) Không, vì 50.47 MiB lớn hơn giới hạn 25 MiB [1]</li><li>(c) Một trong các cách: giảm tần số lấy mẫu / giảm độ phân giải mẫu / nén tệp (ví dụ MP3) / rút ngắn bản ghi [1]</li></ul>`
      }
    }
  ],

  "1.6": [
    { id: "1.6-e1", kind: "short", marks: 2,
      q: {
        en: `<p>(a) State what a pixel is. [1]</p><p>(b) State what is meant by the <i>resolution</i> of an image. [1]</p>`,
        vi: `<p>(a) Nêu điểm ảnh (pixel) là gì. [1]</p><p>(b) Nêu <i>độ phân giải</i> của một bức ảnh có nghĩa là gì. [1]</p>`
      },
      ms: {
        en: `<ul><li>(a) The smallest element of a bitmap image / one dot of a single colour [1]</li><li>(b) The number of pixels in the image (width × height) [1]</li></ul>`,
        vi: `<ul><li>(a) Phần tử nhỏ nhất của ảnh bitmap / một chấm có một màu duy nhất [1]</li><li>(b) Số điểm ảnh của bức ảnh (rộng × cao) [1]</li></ul>`
      }
    },
    { id: "1.6-e2", kind: "calc", marks: 2,
      q: {
        en: `<p>(a) State the number of different colours that can be shown with a colour depth of 5 bits. [1]</p><p>(b) State the smallest colour depth (in bits) needed to show 100 different colours. [1]</p>`,
        vi: `<p>(a) Nêu số màu khác nhau có thể hiển thị với độ sâu màu 5 bit. [1]</p><p>(b) Nêu độ sâu màu nhỏ nhất (tính bằng bit) cần để hiển thị 100 màu khác nhau. [1]</p>`
      },
      hint: { en: `n bits give 2ⁿ colours. Try 6 bits, then 7 bits.`, vi: `n bit cho 2ⁿ màu. Thử 6 bit rồi 7 bit.` },
      ms: {
        en: `<ul><li>(a) 2⁵ = <b>32</b> colours [1]</li><li>(b) 6 bits gives only 64 colours (too few) but 7 bits gives 128 colours, so <b>7 bits</b> [1]</li></ul>`,
        vi: `<ul><li>(a) 2⁵ = <b>32</b> màu [1]</li><li>(b) 6 bit chỉ cho 64 màu (quá ít) nhưng 7 bit cho 128 màu, nên cần <b>7 bit</b> [1]</li></ul>`
      }
    },
    { id: "1.6-e3", kind: "calc", marks: 3,
      q: {
        en: `<p>A bitmap image is 640 pixels wide and 480 pixels high. It has a colour depth of 8 bits.</p><p>Calculate the file size in KiB. Show your working. [3]</p>`,
        vi: `<p>Một ảnh bitmap rộng 640 điểm ảnh và cao 480 điểm ảnh. Độ sâu màu là 8 bit.</p><p>Tính dung lượng tệp bằng KiB. Trình bày cách làm. [3]</p>`
      },
      ms: {
        en: `<ul><li>640 × 480 × 8 = 2 457 600 bits [1]</li><li>2 457 600 ÷ 8 = 307 200 bytes [1]</li><li>307 200 ÷ 1024 = <b>300 KiB</b> [1]</li></ul>`,
        vi: `<ul><li>640 × 480 × 8 = 2 457 600 bit [1]</li><li>2 457 600 ÷ 8 = 307 200 byte [1]</li><li>307 200 ÷ 1024 = <b>300 KiB</b> [1]</li></ul>`
      }
    },
    { id: "1.6-e4", kind: "explain", marks: 3,
      q: {
        en: `<p>A photographer increases the resolution and the colour depth of the photographs her camera takes.</p><p>Describe the effect on the image quality and on the file size. [3]</p>`,
        vi: `<p>Một nhiếp ảnh gia tăng độ phân giải và độ sâu màu của những bức ảnh mà máy ảnh của cô ấy chụp.</p><p>Mô tả ảnh hưởng lên chất lượng ảnh và dung lượng tệp. [3]</p>`
      },
      ms: {
        en: `<ul><li>Higher resolution means more pixels, so the image has more detail / is sharper [1]</li><li>Higher colour depth means more bits per pixel, so more colours can be shown / the image is more realistic [1]</li><li>Both changes increase the file size [1]</li></ul>`,
        vi: `<ul><li>Độ phân giải cao hơn nghĩa là nhiều điểm ảnh hơn, nên ảnh có nhiều chi tiết hơn / sắc nét hơn [1]</li><li>Độ sâu màu cao hơn nghĩa là nhiều bit hơn cho mỗi điểm ảnh, nên hiển thị được nhiều màu hơn / ảnh chân thực hơn [1]</li><li>Cả hai thay đổi đều làm tăng dung lượng tệp [1]</li></ul>`
      }
    },
    { id: "1.6-e5", kind: "explain", marks: 3,
      q: {
        en: `<p>A small, low-resolution picture is enlarged to fill a whole screen. It looks blocky.</p><p>(a) State the word used to describe this effect. [1]</p><p>(b) Explain why it happens. [2]</p>`,
        vi: `<p>Một bức ảnh nhỏ, độ phân giải thấp được phóng to cho đầy cả màn hình. Nó trông bị vỡ thành từng khối.</p><p>(a) Nêu thuật ngữ dùng để mô tả hiện tượng này. [1]</p><p>(b) Giải thích vì sao nó xảy ra. [2]</p>`
      },
      ms: {
        en: `<ul><li>(a) Pixelated [1]</li><li>(b) The image has only a small number of pixels [1]; when it is enlarged each pixel becomes bigger, so the individual squares can be seen [1]</li></ul>`,
        vi: `<ul><li>(a) Vỡ hạt (pixelated) [1]</li><li>(b) Ảnh chỉ có một số ít điểm ảnh [1]; khi phóng to, mỗi điểm ảnh trở nên lớn hơn nên có thể nhìn thấy từng ô vuông riêng lẻ [1]</li></ul>`
      }
    },
    { id: "1.6-e6", kind: "calc", marks: 3,
      q: {
        en: `<p>A 16 × 16 pixel icon uses a colour depth of 1 bit.</p><p>(a) Calculate the file size in bits and in bytes. [2]</p><p>(b) The colour depth is changed to 4 bits. Calculate the new file size in bytes. [1]</p>`,
        vi: `<p>Một biểu tượng 16 × 16 điểm ảnh dùng độ sâu màu 1 bit.</p><p>(a) Tính dung lượng tệp bằng bit và bằng byte. [2]</p><p>(b) Độ sâu màu được đổi thành 4 bit. Tính dung lượng tệp mới bằng byte. [1]</p>`
      },
      ms: {
        en: `<ul><li>(a) 16 × 16 × 1 = 256 bits [1]; 256 ÷ 8 = 32 bytes [1]</li><li>(b) 16 × 16 × 4 = 1024 bits = <b>128 bytes</b> [1]</li></ul>`,
        vi: `<ul><li>(a) 16 × 16 × 1 = 256 bit [1]; 256 ÷ 8 = 32 byte [1]</li><li>(b) 16 × 16 × 4 = 1024 bit = <b>128 byte</b> [1]</li></ul>`
      }
    },
    { id: "1.6-e7", kind: "calc", marks: 4,
      q: {
        en: `<p>A full-HD image is 1920 pixels wide and 1080 pixels high with a colour depth of 24 bits.</p><p>Calculate the file size in MiB, correct to 2 decimal places. Show your working. [4]</p>`,
        vi: `<p>Một ảnh full-HD rộng 1920 điểm ảnh và cao 1080 điểm ảnh với độ sâu màu 24 bit.</p><p>Tính dung lượng tệp bằng MiB, làm tròn đến 2 chữ số thập phân. Trình bày cách làm. [4]</p>`
      },
      ms: {
        en: `<ul><li>1920 × 1080 × 24 = 49 766 400 bits [1]</li><li>÷ 8 = 6 220 800 bytes [1]</li><li>÷ 1024 = 6075 KiB [1]</li><li>÷ 1024 = <b>5.93 MiB</b> [1]</li></ul>`,
        vi: `<ul><li>1920 × 1080 × 24 = 49 766 400 bit [1]</li><li>÷ 8 = 6 220 800 byte [1]</li><li>÷ 1024 = 6075 KiB [1]</li><li>÷ 1024 = <b>5.93 MiB</b> [1]</li></ul>`
      }
    },
    { id: "1.6-e8", kind: "apply", marks: 4,
      q: {
        en: `<p>A web designer must choose between two images.</p><table><tr><th>Image</th><th>Resolution</th><th>Colour depth</th></tr><tr><td>A</td><td>800 × 600</td><td>24 bits</td></tr><tr><td>B</td><td>1600 × 1200</td><td>8 bits</td></tr></table><p>(a) Calculate the file size of each image in bits. [2]</p><p>(b) State which image has the larger file size and by how many bits. [1]</p><p>(c) State which image can show more colours. [1]</p>`,
        vi: `<p>Một nhà thiết kế web phải chọn giữa hai bức ảnh.</p><table><tr><th>Ảnh</th><th>Độ phân giải</th><th>Độ sâu màu</th></tr><tr><td>A</td><td>800 × 600</td><td>24 bit</td></tr><tr><td>B</td><td>1600 × 1200</td><td>8 bit</td></tr></table><p>(a) Tính dung lượng tệp của mỗi ảnh bằng bit. [2]</p><p>(b) Nêu ảnh nào có dung lượng tệp lớn hơn và lớn hơn bao nhiêu bit. [1]</p><p>(c) Nêu ảnh nào hiển thị được nhiều màu hơn. [1]</p>`
      },
      ms: {
        en: `<ul><li>(a) A: 800 × 600 × 24 = 11 520 000 bits [1]; B: 1600 × 1200 × 8 = 15 360 000 bits [1]</li><li>(b) Image B is larger, by 15 360 000 − 11 520 000 = 3 840 000 bits [1]</li><li>(c) Image A (2²⁴ = 16 777 216 colours compared with 2⁸ = 256 colours) [1]</li></ul>`,
        vi: `<ul><li>(a) A: 800 × 600 × 24 = 11 520 000 bit [1]; B: 1600 × 1200 × 8 = 15 360 000 bit [1]</li><li>(b) Ảnh B lớn hơn, hơn 15 360 000 − 11 520 000 = 3 840 000 bit [1]</li><li>(c) Ảnh A (2²⁴ = 16 777 216 màu so với 2⁸ = 256 màu) [1]</li></ul>`
      }
    }
  ],

  "1.7": [
    { id: "1.7-e1", kind: "short", marks: 2,
      q: {
        en: `<p>(a) State the number of bits in a nibble. [1]</p><p>(b) State the number of bytes in one kibibyte (KiB). [1]</p>`,
        vi: `<p>(a) Nêu số bit trong một nibble. [1]</p><p>(b) Nêu số byte trong một kibibyte (KiB). [1]</p>`
      },
      ms: {
        en: `<ul><li>(a) 4 [1]</li><li>(b) 1024 [1]</li></ul>`,
        vi: `<ul><li>(a) 4 [1]</li><li>(b) 1024 [1]</li></ul>`
      }
    },
    { id: "1.7-e2", kind: "calc", marks: 2,
      q: {
        en: `<p>(a) Convert 5 MiB to KiB. [1]</p><p>(b) Convert 3 KiB to bits. [1]</p>`,
        vi: `<p>(a) Đổi 5 MiB sang KiB. [1]</p><p>(b) Đổi 3 KiB sang bit. [1]</p>`
      },
      ms: {
        en: `<ul><li>(a) 5 × 1024 = <b>5120 KiB</b> [1]</li><li>(b) 3 × 1024 × 8 = <b>24 576 bits</b> [1]</li></ul>`,
        vi: `<ul><li>(a) 5 × 1024 = <b>5120 KiB</b> [1]</li><li>(b) 3 × 1024 × 8 = <b>24 576 bit</b> [1]</li></ul>`
      }
    },
    { id: "1.7-e3", kind: "calc", marks: 3,
      q: {
        en: `<p>Complete the conversions.</p><p>(a) 2560 KiB = ? MiB [1]</p><p>(b) 12 288 bytes = ? KiB [1]</p><p>(c) 3 GiB = ? MiB [1]</p>`,
        vi: `<p>Hoàn thành các phép đổi đơn vị.</p><p>(a) 2560 KiB = ? MiB [1]</p><p>(b) 12 288 byte = ? KiB [1]</p><p>(c) 3 GiB = ? MiB [1]</p>`
      },
      hint: { en: `Going to a bigger unit means divide; going to a smaller unit means multiply.`, vi: `Đổi sang đơn vị lớn hơn thì chia; đổi sang đơn vị nhỏ hơn thì nhân.` },
      ms: {
        en: `<ul><li>(a) 2560 ÷ 1024 = <b>2.5 MiB</b> [1]</li><li>(b) 12 288 ÷ 1024 = <b>12 KiB</b> [1]</li><li>(c) 3 × 1024 = <b>3072 MiB</b> [1]</li></ul>`,
        vi: `<ul><li>(a) 2560 ÷ 1024 = <b>2.5 MiB</b> [1]</li><li>(b) 12 288 ÷ 1024 = <b>12 KiB</b> [1]</li><li>(c) 3 × 1024 = <b>3072 MiB</b> [1]</li></ul>`
      }
    },
    { id: "1.7-e4", kind: "explain", marks: 3,
      q: {
        en: `<p>Give <b>three</b> benefits of compressing a file before sending it over the internet. [3]</p>`,
        vi: `<p>Nêu <b>ba</b> lợi ích của việc nén một tệp trước khi gửi qua Internet. [3]</p>`
      },
      ms: {
        en: `<ul><li>Less bandwidth is needed to send the file [1]</li><li>The file is sent / uploaded / downloaded faster (shorter transmission time) [1]</li><li>Less storage space is needed (on the sender's and receiver's devices or servers) [1]</li><li>Other acceptable points: lower costs, helps to stay within email attachment limits (any three points, 1 mark each)</li></ul>`,
        vi: `<ul><li>Cần ít băng thông hơn để gửi tệp [1]</li><li>Tệp được gửi / tải lên / tải xuống nhanh hơn (thời gian truyền ngắn hơn) [1]</li><li>Cần ít dung lượng lưu trữ hơn (trên thiết bị hoặc máy chủ của người gửi và người nhận) [1]</li><li>Các ý khác được chấp nhận: chi phí thấp hơn, giúp nằm trong giới hạn tệp đính kèm email (chọn ba ý bất kỳ, mỗi ý 1 điểm)</li></ul>`
      }
    },
    { id: "1.7-e5", kind: "short", marks: 2,
      q: {
        en: `<p>State <b>one</b> difference between lossy and lossless compression. [2]</p>`,
        vi: `<p>Nêu <b>một</b> điểm khác nhau giữa nén có mất dữ liệu và nén không mất dữ liệu. [2]</p>`
      },
      ms: {
        en: `<ul><li>Lossy compression permanently removes some data [1]</li><li>Lossless compression does not remove any data, so the original file can be rebuilt exactly [1]</li></ul>`,
        vi: `<ul><li>Nén có mất dữ liệu loại bỏ vĩnh viễn một phần dữ liệu [1]</li><li>Nén không mất dữ liệu không loại bỏ dữ liệu nào, nên tệp gốc có thể được dựng lại chính xác [1]</li></ul>`
      }
    },
    { id: "1.7-e6", kind: "apply", marks: 3,
      q: {
        en: `<p>One row of pixels in an image is shown below (W = white, B = black).</p><pre>WWWWBBBWWWWWWBW</pre><p>(a) Show how run-length encoding (RLE) would store this row. [2]</p><p>(b) State how many characters the original row has and how many the encoded row has. [1]</p>`,
        vi: `<p>Một hàng điểm ảnh của một bức ảnh được cho dưới đây (W = trắng, B = đen).</p><pre>WWWWBBBWWWWWWBW</pre><p>(a) Cho biết mã hóa độ dài chạy (RLE) sẽ lưu hàng này như thế nào. [2]</p><p>(b) Nêu số ký tự của hàng gốc và số ký tự của hàng đã mã hóa. [1]</p>`
      },
      hint: { en: `Split the row into runs of the same letter, then write each as a count followed by the letter.`, vi: `Tách hàng thành các chuỗi cùng một chữ cái, rồi viết mỗi chuỗi là số đếm kèm chữ cái.` },
      ms: {
        en: `<ul><li>(a) Runs identified: WWWW, BBB, WWWWWW, B, W [1]; encoded as <b>4W 3B 6W 1B 1W</b> [1]</li><li>(b) Original: 15 characters; encoded: 10 characters (5 counts + 5 letters) [1]</li></ul>`,
        vi: `<ul><li>(a) Các chuỗi xác định được: WWWW, BBB, WWWWWW, B, W [1]; mã hóa thành <b>4W 3B 6W 1B 1W</b> [1]</li><li>(b) Hàng gốc: 15 ký tự; hàng mã hóa: 10 ký tự (5 số đếm + 5 chữ cái) [1]</li></ul>`
      }
    },
    { id: "1.7-e7", kind: "apply", marks: 4,
      q: {
        en: `<p>(a) Decode the RLE data <code>3A 5B 2C 1D</code>. [1]</p><p>(b) Encode the text <code>ABCDEF</code> using RLE. [1]</p><p>(c) Explain why RLE is not a good method for compressing the text in part (b). [2]</p>`,
        vi: `<p>(a) Giải mã dữ liệu RLE <code>3A 5B 2C 1D</code>. [1]</p><p>(b) Mã hóa văn bản <code>ABCDEF</code> bằng RLE. [1]</p><p>(c) Giải thích vì sao RLE không phải là phương pháp tốt để nén văn bản ở phần (b). [2]</p>`
      },
      ms: {
        en: `<ul><li>(a) <b>AAABBBBBCCD</b> [1]</li><li>(b) <b>1A1B1C1D1E1F</b> [1]</li><li>(c) There are no runs of repeated characters [1]; so the encoded data (12 characters) is larger than the original (6 characters) [1]</li></ul>`,
        vi: `<ul><li>(a) <b>AAABBBBBCCD</b> [1]</li><li>(b) <b>1A1B1C1D1E1F</b> [1]</li><li>(c) Không có chuỗi ký tự lặp lại nào [1]; nên dữ liệu đã mã hóa (12 ký tự) lớn hơn bản gốc (6 ký tự) [1]</li></ul>`
      }
    },
    { id: "1.7-e8", kind: "apply", marks: 4,
      q: {
        en: `<p>For each file below, state whether lossy or lossless compression should be used and give a reason.</p><p>(a) A holiday photograph to be shared on social media. [2]</p><p>(b) A spreadsheet of a company's accounts. [2]</p>`,
        vi: `<p>Với mỗi tệp dưới đây, hãy nêu nên dùng nén có mất dữ liệu hay không mất dữ liệu và đưa ra lý do.</p><p>(a) Một bức ảnh kỳ nghỉ để chia sẻ trên mạng xã hội. [2]</p><p>(b) Một bảng tính tài khoản của công ty. [2]</p>`
      },
      ms: {
        en: `<ul><li>(a) Lossy [1]; a big reduction in size is useful and the small loss of detail is hardly noticed by the viewer [1]</li><li>(b) Lossless [1]; losing any data would make the figures wrong, so the original must be rebuilt exactly [1]</li></ul>`,
        vi: `<ul><li>(a) Nén có mất dữ liệu [1]; giảm được nhiều dung lượng là có ích và người xem hầu như không nhận ra phần chi tiết bị mất nhỏ [1]</li><li>(b) Nén không mất dữ liệu [1]; mất bất kỳ dữ liệu nào cũng làm sai số liệu, nên phải dựng lại được tệp gốc chính xác [1]</li></ul>`
      }
    }
  ]
});
