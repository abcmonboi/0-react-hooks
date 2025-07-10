import {
  H2Typo,
  LeadTypo,
  PTypo,
  BlockquoteTypo,
  InlineCodeTypo,
  ListTypo,
  H3Typo,
} from "@/components/typography";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import React from "react";

const BasicInfo = () => {
  return (
    <Card>
      <CardHeader>
        <H2Typo>Node.js</H2Typo>
        <LeadTypo>
          Node.js là một <b>JavaScript runtime environment</b> – nghĩa là môi
          trường cho phép chạy mã JavaScript
          <b> ngoài trình duyệt</b>, trực tiếp trong máy tính. Trước đây
          JavaScript chỉ chạy được trong trình duyệt như Chrome, Firefox,...
          Nhưng với Node.js, bạn có thể viết các chương trình (hoặc API, server)
          bằng JavaScript mà không cần trình duyệt.
          <br />
          <br />
          📌 Nếu trình duyệt là nơi chạy JavaScript ở<b>
            giao diện người dùng
          </b>{" "}
          (front-end), thì:
          <br />→ Node.js là nơi chạy JavaScript ở <b>phía máy chủ</b>
          (back-end).
          <br />
          Điều đó có nghĩa là bạn có thể dùng chung một ngôn ngữ (JS) cho cả
          client và server.
          <br />
          <br />
          Node.js được xây dựng dựa trên
          <b>Chrome&apos;s V8 JavaScript engine</b> – đây là lõi xử lý
          JavaScript rất mạnh, do Google phát triển cho trình duyệt Chrome.
          <br />
          ✅ Nhờ engine này, Node.js có thể thực thi mã JavaScript rất nhanh,
          tương đương các ngôn ngữ server-side khác như PHP, Python,...
          <br />
          <br />✨ Tóm lại: Node.js biến JavaScript thành một ngôn ngữ
          <b>fullstack</b> thực thụ – có thể dùng cho cả giao diện (HTML/CSS) và
          máy chủ (API, DB, Auth...).
        </LeadTypo>
      </CardHeader>

      <CardContent>
        <PTypo>
          Trước khi có Node.js, JavaScript chỉ được dùng để xử lý logic phía
          giao diện (trình duyệt). Nhưng nhờ Node.js, chúng ta có thể sử dụng
          cùng một ngôn ngữ JavaScript để xử lý cả <b>front-end</b> và
          <b>back-end</b>.
        </PTypo>

        <ListTypo>
          <li>
            <b>Ở phía front-end:</b> Node.js thường được dùng để tạo
            <b>máy chủ nội bộ (dev server)</b> để phục vụ giao diện (ví dụ như
            khi dùng <InlineCodeTypo>npm run dev</InlineCodeTypo> để khởi chạy
            React/Vite/Next.js). Các tool build (Vite/Webpack/Babel/ESLint...)
            đều là các thư viện JavaScript. Chúng được viết bằng JavaScript Và
            chỉ chạy được trong môi trường có thể thực thi JS ngoài trình duyệt
            → chính là Node.js. Tức là: Node.js chính là nền tảng giúp “chạy
            được” các chương trình JS này trong Terminal của bạn.Chạy như một
            chương trình dòng lệnh (CLI). Trình duyệt sẽ không làm được những
            điều này.Không có Node.js ⇒ bạn sẽ không thể dùng được
            React/Vite/Webpack/... trong local máy của mình.
            <BlockquoteTypo>
              <b> Tại sao cần &quot;server&quot;?</b>
              <br />
              {`Vì React (và JSX) không phải là mã mà trình duyệt hiểu trực tiếp.
            Bạn cần một quá trình "build" hoặc "transpile" qua
            Babel/Vite/Webpack,... 📦 Các công cụ đó (ví dụ Vite, Webpack Dev
            Server) sẽ biên dịch JSX Bundle tất cả file, chạy một server để phân
            phối file này cho trình duyệt 📌 => Đây là một server Node.js
            nhỏ, chạy trong quá trình dev. Không phải server back-end (như
            Express), mà là chỉ là 1 Dev Server (do Node.js + tool như
            Vite/Webpack tạo ra) để phục vụ giao diện và theo dõi thay đổi. Mục
            đích Phục vụ file HTML/CSS/JS để test giao diện trong trình
            duyệt.Chạy trên localhost:3000, localhost:5173, tuỳ tool. Server này có liên
            quan đến back-end ko? ❌ Không – chỉ để phục vụ React code ra trình
            duyệt Dùng được khi nào ✅ Khi phát triển (dev) – còn production sẽ
            build ra file tĩnh.`}
            </BlockquoteTypo>
            <BlockquoteTypo>
              <b>Khi nào không cần server này?</b>
              <br />
              Khi bạn chạy lệnh <InlineCodeTypo>npm run build</InlineCodeTypo>
              Thì: React sẽ được build thành các file tĩnh trong thư mục
              <b>/dist</b>
              hoặc <b>/build</b> Bạn không cần server dev nữa Các file tĩnh có
              thể deploy lên bất kỳ web server nào (Vercel, Netlify, Apache,...)
            </BlockquoteTypo>
          </li>
          <br />
          <li>
            <b>Ở phía back-end:</b> Node.js cho phép bạn viết các API, xử lý
            database, authentication,... hoàn toàn bằng JavaScript thay vì dùng
            các ngôn ngữ như PHP, Java, Python,... Khi deploy, Node.js cũng giúp
            khởi động server hoặc xử lý các request nếu bạn viết back-end.
          </li>
        </ListTypo>

        <PTypo>
          Khi bạn cài Node.js, nó cũng tự động cài thêm công cụ <b>npm</b> (Node
          Package Manager) – giúp cài đặt các thư viện từ <b>npmjs.com</b> để hỗ
          trợ phát triển dự án. Hầu hết các thư viện phổ biến như
          <InlineCodeTypo>express</InlineCodeTypo>,
          <InlineCodeTypo>dotenv</InlineCodeTypo>,
          <InlineCodeTypo>mongoose</InlineCodeTypo> đều hoạt động dựa trên
          Node.js.
        </PTypo>
        <PTypo>
          Sau khi cài Node.js, bạn có thể chạy trực tiếp file JavaScript trên
          máy tính bằng cách dùng câu lệnh:
          <br />
          <InlineCodeTypo>node tên-file.js</InlineCodeTypo>
          <br />
          Ví dụ: <br />
          <InlineCodeTypo>node index.js</InlineCodeTypo>
          <br />
          Câu lệnh này sẽ yêu cầu Node.js thực thi nội dung của file
          <i>index.js</i> ngay trong môi trường dòng lệnh (terminal).
        </PTypo>

        <BlockquoteTypo>
          Trước đây, muốn chạy code JavaScript bạn phải dùng trình duyệt (vì nó
          có sẵn engine V8).
          <br />
          Nhưng với Node.js, bạn có thể chạy code JavaScript
          <b>trực tiếp trong terminal</b>, không cần trình duyệt. Điều này biến
          JavaScript thành ngôn ngữ có thể dùng để viết phần mềm máy chủ, CLI
          tool, web server,...
        </BlockquoteTypo>
        <br />

        <H3Typo>Khởi tạo dự án Node.js</H3Typo>
        <PTypo>
          Sau khi cài Node.js, bạn có thể khởi tạo dự án mới bằng lệnh:
          <br />
          <InlineCodeTypo>npm init</InlineCodeTypo>
          <br />
          Lệnh này sẽ tạo file <InlineCodeTypo>package.json</InlineCodeTypo>
          dùng để lưu thông tin dự án như tên, mô tả, phiên bản, thư viện phụ
          thuộc,...
        </PTypo>

        <BlockquoteTypo>
          Bạn có thể thêm cờ <InlineCodeTypo>-y</InlineCodeTypo> để tự động đồng
          ý tất cả các câu hỏi.
          <br />
          Ví dụ: <InlineCodeTypo>npm init -y</InlineCodeTypo>
          <br />
          Thuộc tính <b>main</b> trong file
          <InlineCodeTypo>package.json</InlineCodeTypo> là file
          <b>entry point</b> – nơi Node.js sẽ chạy đầu tiên, thường là
          <InlineCodeTypo>index.js</InlineCodeTypo>.
        </BlockquoteTypo>
        <br />
        <H3Typo>scripts – Viết câu lệnh chạy nhanh</H3Typo>
        <PTypo>
          Trong <InlineCodeTypo>package.json</InlineCodeTypo>, phần
          <b>scripts</b> cho phép bạn định nghĩa các câu lệnh tùy chỉnh để chạy
          nhanh bằng <InlineCodeTypo>npm run</InlineCodeTypo>.
        </PTypo>

        <BlockquoteTypo>
          Ví dụ:
          <br />
          <InlineCodeTypo>{`"dev": "node index.js"`}</InlineCodeTypo>
          <br />
          Khi đó, chạy <InlineCodeTypo>npm run dev</InlineCodeTypo> sẽ tương
          đương với việc chạy <i>node index.js</i>.
        </BlockquoteTypo>
        <br />
        <H3Typo>
          type (Thuộc tính <InlineCodeTypo>&quot;type&quot;</InlineCodeTypo>{" "}
          trong package.json)
        </H3Typo>
        <PTypo>
          Thuộc tính <InlineCodeTypo>&quot;type&quot;</InlineCodeTypo> được dùng
          để chỉ định kiểu module cho toàn bộ dự án:
        </PTypo>

        <ListTypo>
          <li>
            <InlineCodeTypo>
              &quot;type&quot;: &quot;commonjs&quot;
            </InlineCodeTypo>
            (mặc định): sử dụng cú pháp
            <InlineCodeTypo>require()</InlineCodeTypo> và
            <InlineCodeTypo>module.exports</InlineCodeTypo>
          </li>
          <li>
            <InlineCodeTypo>
              &quot;type&quot;: &quot;module&quot;
            </InlineCodeTypo>
            : cho phép dùng cú pháp <InlineCodeTypo>import</InlineCodeTypo> và
            <InlineCodeTypo>export</InlineCodeTypo> hiện đại.
          </li>
          <li>
            Khi dùng <b>type: module</b>, nếu file có đuôi
            <InlineCodeTypo>.js</InlineCodeTypo> thì phải nằm trong project có
            khai báo rõ
            <InlineCodeTypo>
              &quot;type&quot;: &quot;module&quot;
            </InlineCodeTypo>
            , hoặc bạn phải đổi tên file thành{" "}
            <InlineCodeTypo>.mjs</InlineCodeTypo>.
          </li>
          <li>
            Có thể ghi đè lại kiểu module bằng đuôi file
            <InlineCodeTypo>.cjs</InlineCodeTypo> hoặc
            <InlineCodeTypo>.mjs</InlineCodeTypo>
          </li>
        </ListTypo>

        <BlockquoteTypo>
          Ví dụ nếu bạn viết:
          <br />
          <InlineCodeTypo>
            import express from &apos;express&apos;
          </InlineCodeTypo>
          <br />
          Thì bạn cần khai báo
          <InlineCodeTypo>&quot;type&quot;: &quot;module&quot;</InlineCodeTypo>
          trong file <InlineCodeTypo>package.json</InlineCodeTypo>
        </BlockquoteTypo>
      </CardContent>
    </Card>
  );
};

export default BasicInfo;
