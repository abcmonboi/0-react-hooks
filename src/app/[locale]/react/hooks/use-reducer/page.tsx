import {
  H2Typo,
  H4Typo,
  LeadTypo,
  PTypo,
  BlockquoteTypo,
  LargeTypo,
} from "@/components/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <Card>
      <CardHeader>
        <H2Typo>UseReducer() hook</H2Typo>
        <LeadTypo>Khi nào thì sử dụng hook useReducer()</LeadTypo>
      </CardHeader>
      <CardContent>
        <li>
          Có tên khá giống với 1 phương thức của mảng. Array.reduce() nhưng hoạt
          động khác nhau
        </li>
        <li>
          Thư Viện Redux - Nguyên lý và cách hoạt động tương tự với Reducer.
        </li>
        <LargeTypo>Mục đích sử dụng</LargeTypo>
        <PTypo>
          Cung cấp thêm cho 1 cách dùng, sử dụng và quản lý state(trạng thái)
          cho function component.
        </PTypo>
        <BlockquoteTypo>
          Bất kỳ bài toán nào sử dụng useState() để giải quyết thì useReducer()
          cũng có thể giải quyết được và ngược lại nếu useReducer giải quyết
          được thì useState cũng sẽ giải quyết được.
        </BlockquoteTypo>
        <LargeTypo>
          Câu hỏi đặt ra: Vậy tại sao lại cần useReducer làm gì ? Và nếu cần thì
          khi nào sử dụng nó ?
        </LargeTypo>
        <BlockquoteTypo>
          Trong hầu hết trường hợp thì ta sử dụng <b>useState</b> để tạo ra 1
          trạng thái cho component. <b>useState</b> sử dụng với các trạng thái
          đơn giản.
        </BlockquoteTypo>
        <PTypo>
          Các state mang kiểu dữ liệu nguyên thủy như (chuỗi, số, boolean) hoặc
          mảng, đối tượng object 1 cấp, không lồng nhau
        </PTypo>
        <PTypo>Số lượng state trong 1 component ít</PTypo>
        <LargeTypo>Sử dụng useReducer khi: </LargeTypo>
        <BlockquoteTypo>
          Dùng cho trường hợp các state dần trở nên phức tạp hơn.
        </BlockquoteTypo>
        <PTypo>
          Các state là các array mảng hay object đối tượng lồng nhau{" "}
          <code>[[],[],[],...]</code>
        </PTypo>
        <PTypo>
          Số lượng state trong 1 component nhiều. Dẫn đến việc xử lý logic phức
          tạp.VD: Khi set lại state thì có thể set lại nhiều state cùng lúc.
          Hoặc khi cần tính toán logic state1, state2 thay đổi thì mới set lại
          state12
        </PTypo>
        <PTypo className="marker:text-red-500">
          Nếu update bằng state thông thường <b>useState</b> sẽ phức tạp hơn,
          dùng <b>useReducer</b> sẽ giúp code nhìn đơn giản gọn gàng dễ hiểu
          clean hơn về mặt logic
        </PTypo>
        <PTypo className="marker:text-red-500">
          Có thể tách ra hẳn 1 file JS, TS bên ngoài thay vì triển khai vào file
          của component khi sử dụng <b>useReducer</b>
        </PTypo>
        <BlockquoteTypo className="marker:text-red-500">
          Để hiểu hơn về cách hoạt động và triển khai hãy theo dõi nội dung phần
          Practice
        </BlockquoteTypo>
      </CardContent>
    </Card>
  );
};

export default page;
