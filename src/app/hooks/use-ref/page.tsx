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
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>useRef - Mục đích sử dụng</CardTitle>
          <CardDescription>
            Lưu giá trị tham chiếu ra bên ngoài 1 function component
          </CardDescription>
        </CardHeader>
        <CardContent>
          <li id="ss" className="marker:text-red-500">
            Mỗi component tạo sẽ sinh ra phạm vi mới không liên quan đến phạm vi
            trước đó.
          </li>
          <li id="sss" className="marker:text-red-500">
            Biến tạo bằng <b>let</b> ở phạm vi component render lúc đầu sẽ khác
            biến tạo ở component sau khi được re-render
          </li>
          <li className="marker:text-red-500">
            Dùng useRef để giữ giá trị mới mỗi lần compoonent, function tạo lại
            (re-render) và được tạo bằng const
          </li>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cách dùng </CardTitle>
          <CardDescription>
            Khởi tạo bằng const varName = useRef(initValue)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <li id="ss" className="marker:text-red-500">
            initValue là giá trị khởi tạo, chỉ sử dụng trong 1 lần đầu tiên, nếu
            re-render giá trị sẽ không sử dụng hay tạo lại nữa
          </li>
          <li id="sss" className="marker:text-red-500">
            Hàm trả về 1 object có property current. Current dùng để gán giá trị{" "}
            <code>ref.current = value</code>
          </li>
          <li className="marker:text-red-500">
            Khi gán giá trị bằng current thì ref sẽ không reset lại giá trị ban
            đầu khởi tạo mà sẽ luôn nhận giá trị mới
          </li>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
