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
        <CardTitle>useCallback() hook</CardTitle>
        <CardDescription>
          Tránh tạo ra hàm mới không cần thiết với useCallback(gọi lại hàm,[các
          phụ thuộc])
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <ul>
          <li className="text-red-500 ">
            Reference types (Kiểu dữ liệu tham chiếu)
          </li>
          <li className="text-red-500">React Memo</li>
        </ul>
        <li>
          Hook sinh ra để tránh tạo thêm (lại) các hàm mới không cần thiết trong
          component đang sử dụng
        </li>
        <li>
          (Nếu func được truyền làm props cho 1 component con. Với mỗi lần
          component cha re-render func cũng sẽ được tạo lại mới. So sánh với địa
          chỉ tham chiếu của hàm cũ với func mới sẽ khác nhau. Dẫn đến việc dù
          component con bọc memo(HOC) vẫn sẽ bị render theo nếu hàm không được
          dùng với useCallback )
        </li>
        <li className="text-red-500 ">Kiến thức bổ sung về reference types</li>
        <CardDescription>
          Mỗi lần tạo ra 1 hàm thì sẽ được lưu vào địa chỉ bộ nhớ khác nhau và
          sẽ trả ra (về) địa chỉ tham chiếu. Suy ra nếu sinh ra hàm mới sẽ là
          tham chiếu mới. Có nghĩa rằng khi component tạo lại thì hàm lại được
          tạo lại, tham chiếu mới sẽ được tạo. Próp so sánh địa chỉ tham chiếu
          với hàm cũ sẽ khác nhau dù cùng là hàm.
        </CardDescription>
        <li className="marker:text-red-500">
          Khắc phục việc tạo lại (mới hàm) bằng useCallback
        </li>
        <li>const funcName = useCallback(callback,[deps])</li>
        <li className="marker:text-red-500">
          Có thể dùng khi viết hook (Truyền hàm vào 1 components dưới dạng props
          hay là gọi trực tiếp hook )
        </li>
        <li className="marker:text-red-500">
          Nếu chống re-render thì cần phải bọc <code>React.memo</code>
        </li>
      </CardContent>
    </Card>
  );
};

export default page;
