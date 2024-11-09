import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>LS10: useMemo(callback,[deps]) hook</CardTitle>
        <CardDescription>
          Tránh thực hiện lại 1 logic không cần thiết
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <ul>
          <li className="text-red-500 ">Array.reduce()</li>
        </ul>
        <li>
          Hook sinh ra để tránh xử lý (lại) một logic khi component re-render
        </li>
        <li>
          (Với mỗi lần component render là component sẽ lại tạo ra các tham
          chiếu mới dẫn đến việc tính toán lại không cần thiết )
        </li>

        <li className="marker:text-red-500">
          Khắc phục việc xử lý lại (logic) bằng useMemo
        </li>
        <li>const varName = useMemo(callback,[deps])</li>
        <li className="marker:text-red-500">
          Kiểm tra deps [] thay đổi thì mới thực hiện tính toán lại bằng toán tử{" "}
          <code>===</code>
        </li>
        <li className="marker:text-red-500">
          Đơn giản dùng cho case nhập input ở component và tính toán dựa trên
          input ở cùng component. Nếu không sử dụng useMemo() với mỗi lần input
          change dẫn đến state change component re-render thì việc tính toán
          cũng lại được xử lý lại liên tục. Vậy nên ta chỉ cần tính toán lại khi
          deps thay đổi
        </li>
      </CardContent>
    </Card>
  );
};

export default page;
