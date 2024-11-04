1.Unit Test là gì ?
  - Unit test là 1 
- Gồm 4 bước test :
  +Unit testing : Done by Developers : Test phần nhỏ nhất(các function dev viết) trong dự án. Từng hàm từng đơn vị trong dự án
  +Integration Testing: Done by Testers : Test kếp hợp các hàm từ unit test để ra 1 flow, 1 future. Gọi các hàm lẫn nhau để ra kết quả mong muốn. Test các hàm với nhau
  +System Testing: Done by Testers : End to end, test từ đầu tới cuối. Test toàn bộ dự án 
  +Acceptance Testing: Done by End Users: Khách hàng sử dụng bước cuối cùng
2.Nên viết Unit Test cho dự án nào ?
  - Lợi ích của Unit Test 
+ Đảm bảo code chạy đúng theo những test cases đã định nghĩa mong muốn ( các trường hợp mình mong muốn).
+ Tự tin hơn khi thay đổi code.
  - Cân nhắc khi sử dụng Unit Test:
+ Luôn cập nhật test case tương ứng khi thay đổi code. VD khi ban đầu mong muốn test case là A thì khi cập nhập theo logic B thì thêm test case B
+ Dự án phải chấp nhận dev thêm thời gian để viết unit test.
  - CÓ nên áp dụng cho tất cả dự án ? 
  + THường là không, hay áp dụng cho BE, thỉnh thoảng có bên FE
- Có nên viết unit test cho tất cả code không ?
  + Làm vậy hơi tốn thời gian và chi phí, mà không cần thiết.
  + Chỉ nên viết unit test cho phần logic quan trọng
3.Cách viết Unit Test trong JavaScript
Mỗi file js có 1 file unit test tương ứng. common.js thì file unit test là common.test.js
- Hàm được test nên là 1 pure function (?????)
- Liệt kê ra tát cả tình huống có thể xảy ra trong hàm
4.Link tham khảo ?
