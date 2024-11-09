import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>LS08 - React.memo() HOC memo</CardTitle>
          <CardDescription>
            Phương thức memo trong react. Hàm memo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <li className="marker:text-red-500">Không phải là hook</li>
          <li>
            Là một higher order component (HOC) dùng để bọc các component(wrap)
          </li>
          <li className="text-red-500">
            Cả <br /> <b>1. Hooks</b> <br /> <b>2. HOC</b> <br />{" "}
            <b>3. Render props</b> <br />
            Sinh ra với mục đích tương tự như nhau đều giúp kế thừa lại logic.
            Thay vì lặp lại logic ở nhiều compoent thì người ta thiết kế ra 3
            cái trên.
          </li>
          <li className="marker:text-red-500">
            React.memo giúp ghi nhớ lại các `props` của component để quyết định
            component đó có render lại hay không để tối ưu về hiệu năng. So sánh
            props trước render và sau rendeer bằng `===`
          </li>
        </CardContent>
        <CardFooter>
          Việc sử dụng React.memo là do bản thân tự đánh giá nó về độ phức tạp
          UI. Có nên bọc component vào memo không. Không phải 100% bỏ vào.
          <b>Hãy tự đánh giá mức độ cần thiết</b>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <h2>Unit test là gì?</h2>
        </CardHeader>
        <CardContent>
          <div>
            <h4>Gồm 4 bước test:</h4>
            <ul>
              <li>
                <strong>Unit testing</strong>: <em>Done by Developers</em> -
                Test phần nhỏ nhất (các function dev viết) trong dự án. Từng hàm
                từng đơn vị trong dự án.
              </li>
              <li>
                <strong>Integration Testing</strong>: <em>Done by Testers</em> -
                Test kết hợp các hàm từ unit test để ra 1 flow, 1 feature. Gọi
                các hàm lẫn nhau để ra kết quả mong muốn. Test các hàm với nhau.
              </li>
              <li>
                <strong>System Testing</strong>: <em>Done by Testers</em> - End
                to end, test từ đầu tới cuối. Test toàn bộ dự án.
              </li>
              <li>
                <strong>Acceptance Testing</strong>: <em>Done by End Users</em>{" "}
                - Khách hàng sử dụng bước cuối cùng.
              </li>
            </ul>

            <h2>Nên viết Unit Test cho dự án nào?</h2>

            <h3>Lợi ích của Unit Test:</h3>
            <ul>
              <li>
                Đảm bảo code chạy đúng theo những test cases đã định nghĩa mong
                muốn (các trường hợp mình mong muốn).
              </li>
              <li>Tự tin hơn khi thay đổi code.</li>
            </ul>

            <h3>Cân nhắc khi sử dụng Unit Test:</h3>
            <ul>
              <li>
                Luôn cập nhật test case tương ứng khi thay đổi code. VD khi ban
                đầu mong muốn test case là A thì khi cập nhật theo logic B thì
                thêm test case B.
              </li>
              <li>
                Dự án phải chấp nhận dev thêm thời gian để viết unit test.
              </li>
            </ul>

            <h3>Có nên áp dụng cho tất cả dự án?</h3>
            <ul>
              <li>
                Thường là không, hay áp dụng cho BE, thỉnh thoảng có bên FE.
              </li>
            </ul>

            <h3>Có nên viết unit test cho tất cả code không?</h3>
            <ul>
              <li>Làm vậy hơi tốn thời gian và chi phí, mà không cần thiết.</li>
              <li>Chỉ nên viết unit test cho phần logic quan trọng.</li>
            </ul>

            <h2>Cách viết Unit Test trong JavaScript</h2>
            <p>
              Mỗi file js có 1 file unit test tương ứng. <code>common.js</code>{" "}
              thì file unit test là <code>common.test.js</code>
            </p>
            <ul>
              <li>Hàm được test nên là 1 pure function (?????)</li>
              <li>Liệt kê ra tất cả tình huống có thể xảy ra trong hàm.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
