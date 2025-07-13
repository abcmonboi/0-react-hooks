import {
  BlockquoteTypo,
  H2Typo,
  H3Typo,
  H4Typo,
  LeadTypo,
  ListTypo,
  PTypo,
} from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import mvc from "@/images/mvc.webp";
import mvcNet from "@/images/MVCNET.png";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";

const page = () => {
  return (
    <Card>
      <CardHeader>
        <H2Typo>{`Định Nghĩa Mô Hình MVC (Model View Controller)`}</H2Typo>
        <LeadTypo>
          Đây là mô hình thiết kế được sử dụng trong kỹ thuật phần mềm.
          <b>MVC </b> là một <b>mẫu </b> kiến trúc phần để tạo lập giao diện
          người dùng trên máy tính. MVC chia thành <i>ba phần</i> được{" "}
          <i>kết nối với nhau</i> và mỗi thành phần đều có một nhiệm vụ
          <b>riêng</b> của nó và <b>độc lập</b> với các thành phần khác. Được sử
          dụng rộng rãi trong việc phát triển <b>web</b>,{" "}
          <i>sự khác biệt được tùy chỉnh liên quan đến sự có mặt </i> của{" "}
          <b>server - client.</b>
        </LeadTypo>
        <Avatar className="w-full h-auto rounded-none">
          <AvatarImage src={mvc.src ?? ""} />
          <AvatarFallback> MVC</AvatarFallback>
        </Avatar>
        <br />
        <Avatar className="w-full h-auto rounded-none">
          <AvatarImage src={mvcNet.src ?? ""} />
          <AvatarFallback> mvcNet</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <H3Typo>Model</H3Typo>
        <ListTypo>
          <li>
            Có nhiệm vụ thao tác với <b>Database</b>
          </li>
          <li>
            Nó chứa <b>tất cả các hàm, các phương thức truy vấn trực tiếp</b>{" "}
            với dữ liệu
          </li>
          <li>
            <b>Controller</b> sẽ thông qua <b> các hàm, phương thức đó</b>{" "}
            <b>để lấy dữ liệu rồi gửi qua View</b>
          </li>
        </ListTypo>
        <H3Typo>View</H3Typo>
        <ListTypo>
          <li>
            Là giao diện người dùng <b>(User Interface)</b>
          </li>
          <li>
            Nơi nhận dữ liệu từ <b>Controller</b> và hiển thị
          </li>
        </ListTypo>
        <H3Typo>Controller</H3Typo>
        <ListTypo>
          <li>
            Là thành phần trung gian giữa <b>Model</b> và <b>View</b>
          </li>
          <li>
            Đảm nhận vai trò tiếp nhận <b>request</b> từ <b>user</b>, thông qua
            <b>Model</b> để lấy dữ liệu sau đó thông qua <b>View</b> để hiển thị
            cho <b>User</b>
          </li>
        </ListTypo>
        <H3Typo>Luồng xử lý trong MVC</H3Typo>
        <PTypo>
          Luồng xử lý trong MVC rất đơn giản thôi, với web nó gồm các bước như
          sau:
        </PTypo>
        <ListTypo>
          <li>
            Đầu tiên là <b>Request</b> từ người dùng được gửi từ client đến
            server.
          </li>
          <li>
            Sau đó <b>Controller</b> dựa vào <b>Request</b> của người dùng tiến
            hành giao tiếp với Model để lấy data từ database
          </li>
          <li>
            Cuối cùng <b>Controller</b> gửi dữ liệu vừa lấy được và gửi về
            <b> View</b>
            và hiển thị ra cho người dùng trên trình duyệt
          </li>
        </ListTypo>
        <H3Typo>
          {" "}
          Tại sao nên sử dụng mô hình <b>MVC</b>
        </H3Typo>
        <ListTypo>
          <li>
            Sư độc lập và phát triển song song:
            <BlockquoteTypo>
              Vì mỗi thành phần trong <b>MVC</b> có nhiệm vụ <b>riêng </b> và{" "}
              <b>độc lập </b>
              với nhau, nên việc developer có thể{" "}
              <b>đảm nhiệm một thành phần</b> và không ảnh hưởng đến nhau khiến
              quá trình phát triển diễn ra nhanh chóng, dễ dàng
            </BlockquoteTypo>
            <br />
          </li>
          <li>
            Hỗ trợ bất đồng bộ:
            <BlockquoteTypo>
              Kỹ thuật bất đồng bộ khiến các ứng dụng được load nhanh hơn đơn
              giản vì tiến hành chạy nhiều câu lệnh cùng lúc.
            </BlockquoteTypo>
            <br />
          </li>
          <li>
            MVC thân thiện với <b>SEO</b>
            <BlockquoteTypo>
              Nền tảng MVC hỗ trợ phát triển các trang web thân thiện với SEO.
              Bằng nền tảng này, bạn có thể dễ dàng phát triển các URL thân
              thiện với SEO để tạo ra nhiều lượt truy cập hơn.
            </BlockquoteTypo>
          </li>
        </ListTypo>
      </CardContent>
    </Card>
  );
};

export default page;
