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
        <CardTitle>UseReducer() hook</CardTitle>
        <CardDescription>Khi nào thì sử dụng hook useReducer()</CardDescription>
      </CardHeader>
      <CardContent>
        <li>Có tên khá giống với 1 phương thức của mảng. Array.reduce()</li>
        <li className="marker:text-red-500">
          Redux - Nguyên lý và cách hoạt động tương tự với Reducer.
        </li>
        <h5>Mục đích sử dụng</h5>
        <li>
          Cung cấp thêm cho 1 cách dùng, sử dụng state(trạng thái) cho function
          component.
        </li>
        <CardDescription>
          Bất kỳ bài toán nào sử dụng useState() để giải quyết thì useReducer()
          cũng có thể giải quyết được và ngược lại nếu useReducer giải quyết
          được thì useState cũng sẽ giải quyết được.
        </CardDescription>
        <h5>
          Câu hỏi đặt ra: Vậy tại sao lại cần useReducer làm gì ? Và nếu cần thì
          khi nào sử dụng nó ?
        </h5>
        <CardDescription>
          Trong hầu hết trường hợp thì ta sử dụng <code>useState</code> để tạo
          ra 1 trạng thái cho component. <code>useState</code> sử dụng với các
          trạng thái đơn giản.
        </CardDescription>
        <li>
          Các state mang kiểu dữ liệu nguyên thủy như (chuối, số, boolean) hoặc
          mảng, đối tượng object 1 cấp, không lồng nhau{" "}
        </li>
        <li>Số lượng state trong 1 component ít</li>
        <li className="marker:text-red-500">*** Sử dụng useReducer</li>
        <CardDescription>
          Dùng cho trường hợp các state dần trở nên phức tạp hơn.
        </CardDescription>
        <li>
          Các state là các array mảng hay object đối tượng lồng nhau{" "}
          <code>[[],[],[],...]</code>
        </li>
        <li>
          Số lượng state trong 1 component nhiều. Dẫn đến việc xử lý logic phức
          tập.VD: Khi set lại state thì có thể set lại nhiều state cùng lúc.
          Hoặc khi cần tính toán logic state1, state2 thay đổi thì mới set lại
          state12
        </li>
        <li className="marker:text-red-500">
          Nếu update bằng state thông thường <code>useState</code> sẽ phức tạp
          hơn, dùng <code>useReducer</code> sẽ giúp code nhìn đơn giản gọn gàng
          dễ hiểu clean hơn về mặt logic
        </li>
        <li className="marker:text-red-500">
          Có thể tách ra hẳn 1 file JS, TS bên ngoài thay vì triển khai vào file
          của component khi sử dụng <code>useReducer</code>
        </li>
        <li className="marker:text-red-500">
          Để hiểu hơn về cách hoạt động và triển khai hãy theo dõi nội dung phần
          Practice
        </li>
      </CardContent>
    </Card>
  );
};

export default page;
