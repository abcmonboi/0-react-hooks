import {
  H2Typo,
  H3Typo,
  H4Typo,
  InlineCodeTypo,
  ListTypo,
  PTypo,
} from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const UnitTest = () => (
  <Card>
    <CardHeader>
      <H2Typo>Unit test là gì?</H2Typo>
    </CardHeader>
    <CardContent>
      <div>
        <H4Typo>Gồm 4 bước test:</H4Typo>
        <ListTypo>
          <li>
            <strong>Unit testing</strong>: <em>Done by Developers</em> - Test
            phần nhỏ nhất (các function dev viết) trong dự án. Từng hàm từng đơn
            vị trong dự án.
          </li>
          <li>
            <strong>Integration Testing</strong>: <em>Done by Testers</em> -
            Test kết hợp các hàm từ unit test để ra 1 flow, 1 feature. Gọi các
            hàm lẫn nhau để ra kết quả mong muốn. Test các hàm với nhau.
          </li>
          <li>
            <strong>System Testing</strong>: <em>Done by Testers</em> - End to
            end, test từ đầu tới cuối. Test toàn bộ dự án.
          </li>
          <li>
            <strong>Acceptance Testing</strong>: <em>Done by End Users</em> -
            Khách hàng sử dụng bước cuối cùng.
          </li>
        </ListTypo>

        <H4Typo>Lợi ích của Unit Test:</H4Typo>
        <ListTypo>
          <li>
            Đảm bảo code chạy đúng theo những test cases đã định nghĩa mong muốn
            (các trường hợp mình mong muốn).
          </li>
          <li>Tự tin hơn khi thay đổi code.</li>
        </ListTypo>

        <H4Typo>Cân nhắc khi sử dụng Unit Test:</H4Typo>
        <ListTypo>
          <li>
            Luôn cập nhật test case tương ứng khi thay đổi code. VD khi ban đầu
            mong muốn test case là A thì khi cập nhật theo logic B thì thêm test
            case B.
          </li>
          <li>Dự án phải chấp nhận dev thêm thời gian để viết unit test.</li>
        </ListTypo>

        <H4Typo>Có nên áp dụng cho tất cả dự án?</H4Typo>
        <ListTypo>
          <li>Thường là không, hay áp dụng cho BE, thỉnh thoảng có bên FE.</li>
        </ListTypo>

        <H4Typo>Có nên viết unit test cho tất cả code không?</H4Typo>
        <ListTypo>
          <li>Làm vậy hơi tốn thời gian và chi phí, mà không cần thiết.</li>
          <li>Chỉ nên viết unit test cho phần logic quan trọng.</li>
        </ListTypo>

        <H4Typo>Cách viết Unit Test trong JavaScript</H4Typo>
        <PTypo>
          Mỗi file js có 1 file unit test tương ứng.{" "}
          <InlineCodeTypo>common.js</InlineCodeTypo> thì file unit test là{" "}
          <InlineCodeTypo>common.test.js</InlineCodeTypo>
        </PTypo>
        <ListTypo>
          <li>Hàm được test nên là 1 pure function (?????)</li>
          <li>Liệt kê ra tất cả tình huống có thể xảy ra trong hàm.</li>
        </ListTypo>
      </div>
    </CardContent>
  </Card>
);

export default UnitTest;
