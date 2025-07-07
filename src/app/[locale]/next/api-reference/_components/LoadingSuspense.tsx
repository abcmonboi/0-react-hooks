import {
  BlockquoteTypo,
  H2Typo,
  H3Typo,
  H4Typo,
  LargeTypo,
  LeadTypo,
  ListTypo,
  PTypo,
} from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const LoadingSuspense = () => {
  return (
    <Card>
      <CardHeader>
        <H2Typo>Loading.js</H2Typo>
        <LeadTypo>
          File đặc biệt <b>loading.js</b> giúp bạn tạo giao diện loading thể
          hiển rõ ràng trạng thái đang tải dữ liệu với
          <b> React Suspense</b>. Với this convention (quy ước) này, bạn có thể
          thể hiện 1 <b>instant loading state</b> (trạng thái tải ngay lập tức -
          miêu tả việc khi chuyển hướng thì sẽ lập tức hiển thị giao diện
          loading) cho người dùng, giúp họ biết rằng dữ liệu đang được tải về từ
          server trong khi nội dung của a route segments streams in ( nội dung
          của một đoạn đường đang được truyền vào - nghĩa là dữ liệu sẽ được tải
          về và hiển thị dần dần khi nó sẵn sàng, thay vì phải đợi tất cả dữ
          liệu được tải xong mới hiển thị toàn bộ nội dung một lần. ). Nội dung
          mới automatically swapped (tự động hoán đổi) in once complete( khi
          hoàn thành )
        </LeadTypo>
      </CardHeader>
      <CardContent>
        <PTypo>
          Bên trong file <b>loading.js</b>, bạn có thể thêm bất kỳ line-weight
          loading UI( giao diện tải nhẹ ). Bạn có thể tìm thấy sự hữu ích khi sử
          dụng
          <b> React Developer Tools</b> để bật/ tắt thủ công{" "}
          <b> Suspense boundaries</b>
        </PTypo>
        <PTypo>
          Mặc định file này là 1 file <b> Server Component </b> nhưng cũng có
          thể được sử dụng như là 1<b> Client Component </b> thông qua việc dùng{" "}
          <b>{`"use client"`}</b>
        </PTypo>
        <br />
        <H3Typo>Tham khảo</H3Typo>
        <br />
        <LargeTypo>Tham số</LargeTypo>
        <PTypo>
          Component thể hiện giao diện loading sẽ không nhận bất cứ tham số nào
        </PTypo>
        <br />
        <H3Typo>Các phương thức</H3Typo>
        <br />
        <LargeTypo>Navigation</LargeTypo>
        <ListTypo>
          <li>
            Giao diện được <b>Fallback</b> là giao diện đã được{" "}
            <b className="text-blue-500">prefetched</b>, nó giúp làm cho việc
            điều hướng diễn ra ngay lập tức (immediate) trừ khi việc{" "}
            <b className="text-blue-500">prefetcheing </b>
            chưa được hoàn thành
          </li>
          <li>
            Việc điều hướng có thể bị ngắt quãng (interruptible) có nghĩa là
            chuyển sang một route khác thì không cần phải chờ nội dung của route
            ấy được load ra đầy đủ.
          </li>

          <li>
            Trong khi mà route khác đang load giữ liệu thì việc tương tác với
            `Layouts` chung vẫn được bảo toàn
          </li>
        </ListTypo>
        <LargeTypo>
          Instant Loading States (Thực thể của 1 Trạng thái tải tức thì)
        </LargeTypo>
        <PTypo>
          Định nghĩa này có nghĩa là việc khi điều huowsng thì ngay lập tức sẽ
          phải hiển thi ra giao diện <b>fallback</b>. Bạn có thể{" "}
          <b>pre-render</b> các thành phần như như skeleton, spinner, hoặc một
          phần nhỏ nhưng có ý nghĩa của màn hình sắp tới như ảnh bìa, tiêu đề,
          v.v. Điều này giúp người dùng hiểu rằng ứng dụng đang phản hồi và mang
          lại trải nghiệm tốt hơn.
        </PTypo>
        <PTypo>
          Để tạo 1 trạng thái tải ngay lập tức thì bạn thêm 1 file{" "}
          <b>loading.js</b> vào trong thư mục `route` cùng cấp với file{" "}
          <b> layout.tsx</b> và <b>page.tsx</b>
        </PTypo>
        <PTypo>
          Trong cùng 1 thư mục, file <b>loading.js</b> sẽ được lồng vào bên
          trong file
          <b> layout.js</b> (nested inside). Và nó sẽ tự động sẽ bọc file{" "}
          <b>page.js</b>
          và bất cứ children nào được bọc trong Suspense
        </PTypo>
        <BlockquoteTypo>
          Khi đặt file loading.js cùng cấp với page và layout thì ngay cả khi
          bạn không để suspense ở phần layout thì vẫn sẽ tự có 1 suspense được
          bọc page với fallback mặc định từ file loading.js
        </BlockquoteTypo>
        <br />
        <LargeTypo>SEO</LargeTypo>
        <ListTypo>
          <li>
            Next.js sẽ chờ việc lấy dữ liệu trong{" "}
            <b className="text-blue-500">generateMetadata</b>
            được hoàn thành trước khi mà chuyển tới client. Vậy nên sẽ đảm bảo
            phần đầu tiên của phản hồi đã bảo gồm đầy đủ thẻ <b>{`<head>`}</b>
          </li>
          <li>
            Vì việc <b>streaming</b> đã được render phía server, nên nó sẽ không
            ảnh hướng đến SEO. Bạn có thể sử dụng công cụ Rich Results Test của
            Google để kiểm tra cách trang của bạn được hiển thị với trình thu
            thập dữ liệu (web crawlers) của Google, cũng như xem mã HTML đã được
            tạo.
          </li>
        </ListTypo>
        <br />
        <LargeTypo>Status Codes (Mã trạng thái)</LargeTypo>
        <PTypo>
          Khi sử dụng streaming (phát nội dung theo luồng), mã trạng thái HTTP
          200 sẽ được trả về để cho biết rằng yêu cầu đã được xử lý thành công.
          Streaming nghĩa là máy chủ sẽ gửi dần nội dung HTML về phía client
          từng phần một, thay vì phải đợi toàn bộ nội dung render xong mới gửi
          đi. Điều này giúp giao diện có thể hiển thị sớm hơn, cải thiện tốc độ
          phản hồi của ứng dụng. Mặc dù mã trạng thái đã được gửi là 200, máy
          chủ vẫn có thể truyền đạt lỗi hoặc các vấn đề tới client thông qua nội
          dung được stream, ví dụ bằng cách gọi redirect() (chuyển hướng) hoặc
          notFound() (trả về trang không tồn tại). Tuy nhiên, vì header của phản
          hồi (bao gồm mã trạng thái HTTP) đã được gửi đi, nên không thể thay
          đổi mã trạng thái HTTP sau đó. Việc này không ảnh hưởng đến SEO, vì
          các công cụ tìm kiếm (search engines) vẫn có thể hiểu được nội dung và
          trạng thái thực tế từ nội dung HTML được trả về.
        </PTypo>
      </CardContent>
    </Card>
  );
};

export default LoadingSuspense;
