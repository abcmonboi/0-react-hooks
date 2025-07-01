import {
  BlockquoteTypo,
  H2Typo,
  LeadTypo,
  ListTypo,
  PTypo,
} from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const NOTIFICATIONS = [
  {
    title: "Hooks có nghĩa là gán vào, móc vào",
  },
  {
    title: "Sử dụng Hooks cho các dự án mới của React từ React 16",
  },
  {
    title: "Chỉ dùng cho Function component (không phải Class Component)",
  },
];

export default function Home() {
  return (
    <Card>
      <CardHeader>
        <H2Typo>Một số kiến thức phải nhớ: React 2022</H2Typo>
        <LeadTypo>
          Website này cung cấp cho bạn một số kiến thức về React. Đặc biệt là
          <b> Hooks</b>
        </LeadTypo>
      </CardHeader>
      <CardContent>
        <PTypo>Một vài điều cơ bản có thể bạn đã biết về hooks</PTypo>
        <BlockquoteTypo>
          Hooks là một khái niệm - là một <b>hàm</b> được viết sẵn sử dụng cho
          một sự việc, hành động cụ thể lặp lại nhiều lần ở nhiều nơi. Thường
          <b> hàm</b> sẽ chứa logic về quản lý state.
        </BlockquoteTypo>
        <ListTypo>
          {NOTIFICATIONS.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ListTypo>
      </CardContent>
    </Card>
  );
}
