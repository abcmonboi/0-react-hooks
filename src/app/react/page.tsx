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
          Thay vì lặp lại logic ở nhiều compoent thì người ta thiết kế ra 3 cái
          trên.
        </li>
        <li className="marker:text-red-500">
          React.memo giúp ghi nhớ lại các `props` của component để quyết định
          component đó có render lại hay không để tối ưu về hiệu năng. So sánh
          props trước render và sau rendeer bằng `===`
        </li>
      </CardContent>
      <CardFooter>
        Việc sử dụng React.memo là do bản thân tự đánh giá nó về độ phức tạp UI.
        Có nên bọc component vào memo không. Không phải 100% bỏ vào.
        <b>Hãy tự đánh giá mức độ cần thiết</b>
      </CardFooter>
    </Card>
  );
};

export default page;
