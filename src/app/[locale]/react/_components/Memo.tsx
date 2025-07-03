import {
  BlockquoteTypo,
  H2Typo,
  LargeTypo,
  LeadTypo,
  ListTypo,
  PTypo,
} from "@/components/typography";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

const Memo = () => {
  return (
    <Card>
      <CardHeader>
        <H2Typo>HOC memo</H2Typo>
        <LeadTypo>
          Phương thức memo trong react. Hàm bọc các component(wrap) React.memo
        </LeadTypo>
      </CardHeader>
      <CardContent>
        <ListTypo>
          <li className="marker:text-red-500">Không phải là hook</li>
          <li>
            Là một higher order component (HOC) dùng để bọc các component(wrap)
          </li>
          <li>
            Cả <br /> <b>1. Hooks</b> <br /> <b>2. HOC</b> <br />{" "}
            <b>3. Render props</b> <br />
            Sinh ra với mục đích tương tự như nhau đều giúp kế thừa lại logic.
            Thay vì lặp lại logic ở nhiều compoent thì người ta thiết kế ra 3
            cái trên.
          </li>
          <li>
            React.memo giúp ghi nhớ lại các `props` của component để quyết định
            component đó có render lại hay không để tối ưu về hiệu năng. So sánh
            props trước render và sau render bằng `===`
          </li>
        </ListTypo>
        <BlockquoteTypo>
          Việc sử dụng React.memo là do bản thân tự đánh giá nó về độ phức tạp
          UI. Có nên bọc component vào memo không. Không phải 100% bỏ vào.
        </BlockquoteTypo>
        <PTypo>Hãy tự đánh giá mức độ cần thiết</PTypo>
      </CardContent>
    </Card>
  );
};

export default Memo;
