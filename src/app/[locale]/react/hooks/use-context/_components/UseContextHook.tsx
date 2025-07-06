import {
  H2Typo,
  LeadTypo,
  PTypo,
  BlockquoteTypo,
  LargeTypo,
  InlineCodeTypo,
} from "@/components/typography";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import React from "react";

const UseContextHook = () => {
  return (
    <Card>
      <CardHeader>
        <H2Typo>useContext() hook</H2Typo>
        <LeadTypo>
          Hook useContext() là gì? Khi nào thì sử dụng hook useContext()?
        </LeadTypo>
      </CardHeader>
      <CardContent>
        <PTypo>
          <b>Context: </b>
          Là 1 cách để đơn giản hóa việc truyền dữ liệu giữa các component từ
          component cha xuống các component con mà không cần phải truyền qua
          props.
        </PTypo>
        <BlockquoteTypo>
          <b>VD: </b>
          Component A là component cha, có component con trực tiếp là B và
          component C là con của component B. Nếu component A có dữ liệu muốn
          truyền xuống component C thì phải truyền qua component B. Như vậy, nếu
          có nhiều component con thì việc truyền dữ liệu sẽ rất phức tạp. Lúc
          này, ta có thể sử dụng Context để truyền dữ liệu từ component A xuống
          component C mà không cần phải truyền qua component B.
          <br />
          <br />
          Trong thực tế sẽ tự dưng sinh ra nhưng component trung gian chỉ để
          truyền dữ liệu xuống các component con. Điều này làm cho code trở nên
          khó đọc và khó bảo trì. Nếu sau này xóa 1 khớp nối là 1 component
          trung gian thì sẽ làm mất đi dữ liệu truyền xuống các component con.
        </BlockquoteTypo>
        <PTypo className="italic">
          Một số state thường được truyền qua Context như: <b>theme</b>,
          <b>ngôn ngữ</b>, <b>người dùng</b>, <b>cài đặt</b>, <b>thông báo</b>,
          <b>thông tin đăng nhập</b>, <b>giỏ hàng</b>...
          <br />
        </PTypo>
        <br />
        <LargeTypo>3 bước để sử dụng hook useContext()</LargeTypo>
        <PTypo>
          <b>Bước 1: </b> Tạo Context bằng cách sử dụng hàm{" "}
          <InlineCodeTypo>createContext()</InlineCodeTypo> từ thư viện React.
          <InlineCodeTypo className="block">
            {`import { createContext } from 'react';`}
          </InlineCodeTypo>
          <InlineCodeTypo>
            export const MyContext = createContext();
          </InlineCodeTypo>
        </PTypo>
        <PTypo>
          <b>Bước 2: </b> Sử dụng Context Provider để cung cấp dữ liệu cho các
          component con. Context Provider là một component( hàm
          createContext().Provider ) được cung cấp bởi Context mà ta đã tạo ở
          bước 1. Ta sẽ sử dụng Context Provider để bao bọc các component con
          <b> children</b> và truyền dữ liệu vào props <b>value</b>.
          <InlineCodeTypo className="block">
            {`<MyContext.Provider value={/* dữ liệu */}>`}
          </InlineCodeTypo>
          <InlineCodeTypo className="block">
            {`  <ComponentCon />`}
          </InlineCodeTypo>
          <InlineCodeTypo className="block">
            {`</MyContext.Provider>`}
          </InlineCodeTypo>
        </PTypo>
        <PTypo>
          <b>Bước 3: </b> Sử dụng hook useContext() - <b>Consumer</b> để lấy dữ
          liệu từ Context trong các component con. Ta sẽ sử dụng hook
          useContext() và truyền vào Context mà ta đã tạo ở bước 1. Hook
          useContext() sẽ trả về dữ liệu mà ta đã truyền vào props <b>value</b>{" "}
          của Context Provider.
          <InlineCodeTypo className="block">
            {`import { useContext } from 'react';`}
          </InlineCodeTypo>
          <InlineCodeTypo className="block">
            {`const data = useContext(MyContext);`}
          </InlineCodeTypo>
        </PTypo>
        <PTypo>
          <b>Lưu ý:</b> Khi sử dụng hook useContext() thì component sẽ tự động
          re-render khi dữ liệu trong Context thay đổi
          <br />
          <b>VD:</b> Nếu dữ liệu trong Context là một object và ta thay đổi
          thuộc tính của object đó thì component sẽ không tự động re-render. Ta
          cần phải tạo một object mới để component tự động re-render. Điều này
          là do React sử dụng cơ chế so sánh tham chiếu để xác định xem
          component có cần re-render hay không. Nếu ta chỉ thay đổi thuộc tính
          của object thì React sẽ không nhận ra sự thay đổi và component sẽ
          không re-render. Để tránh trường hợp này, ta có thể sử dụng hook
          <InlineCodeTypo>useState</InlineCodeTypo> hoặc{" "}
          <InlineCodeTypo>useReducer</InlineCodeTypo> để tạo một object mới mỗi
          khi dữ liệu trong Context thay đổi. Điều này sẽ giúp component tự động
          re-render khi dữ liệu trong Context thay đổi.
        </PTypo>
        <PTypo>
          <b>VD:</b> Nếu ta có một Context chứa thông tin người dùng và ta muốn
          thay đổi tên người dùng thì ta cần tạo một object mới với tên người
          dùng mới. Ta không thể chỉ thay đổi thuộc tính <b>name</b> của object
          cũ mà không tạo một object mới.
          <br />
          <InlineCodeTypo className="block">
            {`const user = { name: 'John', age: 30 };`}
          </InlineCodeTypo>
          <InlineCodeTypo className="block">
            {`const newUser = { ...user, name: 'Jane' };`}
          </InlineCodeTypo>
        </PTypo>
      </CardContent>
    </Card>
  );
};

export default UseContextHook;
