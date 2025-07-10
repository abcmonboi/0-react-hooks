import {
  BlockquoteTypo,
  H2Typo,
  H3Typo,
  InlineCodeTypo,
  LeadTypo,
  ListTypo,
  PTypo,
} from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const RequireLibrary = () => {
  return (
    <Card>
      <CardHeader>
        <H2Typo>Một số thư viện bắt buộc và chức năng</H2Typo>
        <LeadTypo>
          Dưới đây là một số thư viện yêu cầu và chức năng của nó để có thể khởi
          tạo 1 server node.
        </LeadTypo>
      </CardHeader>
      <CardContent>
        <H3Typo>
          Express (Thư viện express) -{" "}
          <InlineCodeTypo>npm i express</InlineCodeTypo>
        </H3Typo>
        <PTypo>
          Express đơn giản là một thư viện giúp{" "}
          <b>khởi tạo và chạy một server Node.js</b> một cách dễ dàng. Nó cung
          cấp các API đơn giản để xử lý request từ client, response và xây dựng
          các tuyến đường (route) cho ứng dụng web hoặc API, quản lý middleware,
          và trả về <b>response</b> cho client một cách hiệu quả.
        </PTypo>
        <ListTypo>
          <li>
            Xử lý routing (Routing trong Express là việc xác định endpoint
            (đường dẫn URL) và phương thức HTTP tương ứng
            <b>(GET, POST, PUT, DELETE…)</b> để xử lý request.)
          </li>
          <li>Sử dụng middleware để xử lý logic giữa các bước</li>
          <li> Gửi response về cho client</li>
          <li>Dễ dàng mở rộng cho các ứng dụng RESTful API</li>
        </ListTypo>
        <BlockquoteTypo>
          Tạo một ứng dụng bằng Express:
          <br />
          <InlineCodeTypo>const app = express()</InlineCodeTypo>
          <br />
          Biến <InlineCodeTypo>app</InlineCodeTypo> là một đối tượng đại diện
          cho toàn bộ ứng dụng web/server, được tạo ra từ hàm{" "}
          <InlineCodeTypo>express()</InlineCodeTypo>. Đây là một object function
          chứa nhiều phương thức giúp định nghĩa route, middleware và cấu hình
          server.
        </BlockquoteTypo>

        <ListTypo>
          <li>
            <InlineCodeTypo>app.get(path, handler)</InlineCodeTypo> – Định nghĩa
            route xử lý request <b>GET</b> tại đường dẫn cụ thể.
          </li>
          <li>
            <InlineCodeTypo>app.post(path, handler)</InlineCodeTypo> – Xử lý
            request <b>POST</b> tại route cụ thể.
          </li>
          <li>
            <InlineCodeTypo>app.use(middleware)</InlineCodeTypo> – Thêm
            middleware vào toàn bộ ứng dụng hoặc route cụ thể. Middleware là các
            hàm trung gian xử lý logic trước khi trả về kết quả.
          </li>
          <li>
            <InlineCodeTypo>express.json()</InlineCodeTypo> – Middleware được
            dùng để tự động parse body của request được gửi từ client có định
            dạng JSON. Giúp đọc dữ liệu gửi từ client qua body.
            <br />
            Mặc định, body của request gửi lên sẽ ở dạng{" "}
            <b>raw Buffer binary</b> – tức là dữ liệu nhị phân thô chưa xử lý,
            nên Express không thể đọc được trực tiếp.
            <br />
            Middleware <InlineCodeTypo>express.json()</InlineCodeTypo> sẽ:
            <br />
            - Tự động đọc và ghép các Buffer lại thành chuỗi JSON
            <br />- Parse chuỗi đó thành object bằng{" "}
            <InlineCodeTypo>JSON.parse()</InlineCodeTypo>
            <br />- Gán kết quả vào <InlineCodeTypo>req.body</InlineCodeTypo> để
            server có thể sử dụng như một object JavaScript thông thường
          </li>
          <li>
            <InlineCodeTypo>express.urlencoded()</InlineCodeTypo> – Middleware
            dùng để parse dữ liệu trong <b>body</b> khi client gửi lên với{" "}
            <InlineCodeTypo>
              Content-Type: application/x-www-form-urlencoded
            </InlineCodeTypo>{" "}
            (thường gặp khi gửi form HTML).
            <br />
            Mặc định, body của request cũng là <b>raw Buffer binary</b> nên
            Express không thể hiểu nếu không có middleware này.
            <br />
            Middleware{" "}
            <InlineCodeTypo>{`express.urlencoded({ extended: true })`}</InlineCodeTypo>{" "}
            sẽ:
            <br />- Đọc và parse dữ liệu dạng{" "}
            <InlineCodeTypo>key=value&key2=value2</InlineCodeTypo>
            <br />- Chuyển thành object JavaScript gán vào{" "}
            <InlineCodeTypo>req.body</InlineCodeTypo>
            <br />
            <br />
            Thuộc tính <InlineCodeTypo>extended</InlineCodeTypo> quyết định cách
            dữ liệu phức tạp (object lồng nhau) được xử lý:
            <br />- <InlineCodeTypo>extended: false</InlineCodeTypo>: chỉ parse
            object đơn giản, dùng thư viện Node.js mặc định
            <br />- <InlineCodeTypo>extended: true</InlineCodeTypo>: hỗ trợ
            parse object phức tạp (lồng nhau) nhờ thư viện{" "}
            <InlineCodeTypo>qs</InlineCodeTypo>
          </li>

          <li>
            <InlineCodeTypo>app.listen(port, callback)</InlineCodeTypo> – Khởi
            động server lắng nghe tại một cổng nhất định.
          </li>
        </ListTypo>
        <li>
          <InlineCodeTypo>app.listen(port, callback)</InlineCodeTypo> – Phương
          thức dùng để <b>khởi động server</b> và cho phép Express lắng nghe
          (listen) các request HTTP gửi đến tại một cổng (port) cụ thể.
          <br />
          Đây là bước cuối cùng trong một ứng dụng Express để server bắt đầu
          hoạt động và tiếp nhận request.
          <br />
          Phương thức này trả về một <b>instance của HTTP server</b> (gọi là{" "}
          <InlineCodeTypo>listener</InlineCodeTypo>), giúp bạn có thể truy cập
          thêm thông tin như địa chỉ hoặc cổng thật sự server đang dùng.
          <br />- <InlineCodeTypo>port</InlineCodeTypo>: số cổng mà server sẽ
          lắng nghe (ví dụ: 3000, 8080, hoặc 0 để hệ thống tự chọn cổng ngẫu
          nhiên)
          <br />- <InlineCodeTypo>callback</InlineCodeTypo>: hàm được gọi khi
          server khởi động thành công
        </li>

        <BlockquoteTypo>
          Trường hợp bạn muốn để hệ thống tự chọn port (thường dùng khi test):
          <br />
          <InlineCodeTypo>
            {`const listener = app.listen(0, () => {
  const port = listener.address().port;
  console.log(\`Server is running on http://localhost:\${port}\`);
});`}
          </InlineCodeTypo>
        </BlockquoteTypo>
        <br />
        <li>
          <InlineCodeTypo>app.use(path, middleware)</InlineCodeTypo> – Dùng để
          khai báo một <b>middleware</b> hoặc một nhóm route con bắt đầu từ
          đường dẫn <InlineCodeTypo>path</InlineCodeTypo> nhất định.
          <br />
          Middleware trong Express là một <b>callback function</b> (hàm gọi lại)
          được thực thi mỗi khi có request phù hợp. Hàm này luôn nhận ít nhất{" "}
          <b>2 tham số</b>:
          <br />- <InlineCodeTypo>req</InlineCodeTypo>: đối tượng đại diện cho
          request từ client
          <br />- <InlineCodeTypo>res</InlineCodeTypo>: đối tượng đại diện cho
          response trả về cho client
          <br />
          <br />
          Nếu bạn chỉ truyền <InlineCodeTypo>"/"</InlineCodeTypo> làm đường dẫn,
          middleware đó sẽ được gọi cho <b>mọi route</b> vì tất cả đường dẫn
          trong Express đều bắt đầu bằng <InlineCodeTypo>"/"</InlineCodeTypo>.
          <BlockquoteTypo>
            <InlineCodeTypo>
              {`app.use("/", (req, res) => {
  res.send("You are at the root path '/'");
});`}
            </InlineCodeTypo>
            <br />
            Khi người dùng truy cập vào <b>http://localhost:3000/</b>, server sẽ
            phản hồi:
            <InlineCodeTypo>"You are at the root path '/'”</InlineCodeTypo>
            <br />
            Và vì tất cả các đường dẫn đều bắt đầu bằng "/", nên middleware này
            sẽ được gọi cho <b>mọi request</b> nếu không có route cụ thể xử lý
            trước.
          </BlockquoteTypo>
        </li>
        <br />
        <PTypo>
          <InlineCodeTypo>res.send()</InlineCodeTypo> – Phương thức dùng để{" "}
          <b>gửi dữ liệu phản hồi</b> (response) từ server về client. Dữ liệu
          này sẽ xuất hiện ở tab <b>Response</b> trong DevTools (F12) của trình
          duyệt khi client gửi request tới route đó. Khi được gọi,{" "}
          <InlineCodeTypo>res.send()</InlineCodeTypo> sẽ kết thúc quá trình xử
          lý request và gửi dữ liệu về cho client.
          <br />
          Dữ liệu phản hồi này sẽ hiển thị ở tab <b>Response</b> khi kiểm tra
          bằng công cụ F12 của trình duyệt hoặc Postman:
          <br />- Trình duyệt (Chrome): F12 → tab <b>Network</b> → chọn request
          → tab <b>Response</b>
          <br />- Postman: phần <b>Body</b> → chế độ <b>Pretty</b> hoặc{" "}
          <b>Raw</b>
          <br />
          Đây là phương thức phổ biến nhất khi bạn muốn trả về văn bản, chuỗi,
          số, object, hoặc HTML từ Express server.
          <br />
          Khi được gọi, <InlineCodeTypo>res.send()</InlineCodeTypo> sẽ kết thúc
          quá trình xử lý request và trả dữ liệu cho client. Nếu bạn không gọi
          phương thức nào để kết thúc response (như{" "}
          <InlineCodeTypo>res.send</InlineCodeTypo>,{" "}
          <InlineCodeTypo>res.json</InlineCodeTypo>,{" "}
          <InlineCodeTypo>res.end</InlineCodeTypo>), client sẽ chờ mãi và không
          nhận được phản hồi.
        </PTypo>
        <BlockquoteTypo>
          <InlineCodeTypo>
            {`app.use("/", (req, res) => {
  res.send("Welcome to the homepage");
});`}
          </InlineCodeTypo>
          <br />
          Khi người dùng truy cập vào <b>http://localhost:3000/</b>, server sẽ
          trả về phản hồi dạng chuỗi:
          <InlineCodeTypo>"Welcome to the homepage"</InlineCodeTypo>
        </BlockquoteTypo>
        <br />
        <PTypo>
          Hàm <InlineCodeTypo>express()</InlineCodeTypo> khi được gọi sẽ trả về
          một đối tượng <b>Application</b>, có đầy đủ các phương thức như{" "}
          <InlineCodeTypo>get</InlineCodeTypo>,{" "}
          <InlineCodeTypo>post</InlineCodeTypo>,{" "}
          <InlineCodeTypo>use</InlineCodeTypo>,... và hoạt động như một hàm
          (function object). Đây chính là “app” bạn sẽ dùng để xây dựng toàn bộ
          ứng dụng web.
        </PTypo>

        <br />
        <H3Typo>
          dotenv (Thư viện dotenv) -{" "}
          <InlineCodeTypo>npm i dotenv</InlineCodeTypo>
        </H3Typo>
        <PTypo>
          Dotenv là một thư viện giúp Node.js đọc các biến môi trường từ file{" "}
          <b>.env</b>. Điều này giúp quản lý cấu hình một cách linh hoạt, tách
          biệt thông tin nhạy cảm như API key, database URL… khỏi mã nguồn.
        </PTypo>
        <BlockquoteTypo>
          ✅ 1. Vì sao sinh ra file .env? File .env ra đời để:
          <li>Lưu biến môi trường như PORT, DATABASE_URL, API_KEY,...</li>
          <li>
            Giúp tách cấu hình khỏi mã nguồn, không hardcode các giá trị nhạy
            cảm
          </li>
          <li>
            Dễ thay đổi giá trị theo môi trường (development, production,
            staging, ...)
          </li>
          <li>
            Để là .env vì đây là file đc cấu hình chung cho nhiều framework để
            nhận biết biến môi trường. Nếu cần đổi và ko dùng .env mà dùng .#
            bạn cần chỉnh path khá nhiều chỗ vd 1 số chỗ như .gitignore, path
            cho các thư viện đọc. Nên ko cần thiết
          </li>
        </BlockquoteTypo>
        <ListTypo>
          <li>
            Tự động load các biến môi trường từ file <b>.env</b> vào{" "}
            <InlineCodeTypo>process.env</InlineCodeTypo>
          </li>
          <li>
            Giữ thông tin cấu hình (PORT, DB_URL, API_KEY…) bên ngoài mã nguồn,
            dễ dàng thay đổi giữa các môi trường (dev, test, production)
          </li>
          <li>
            Hạn chế rò rỉ thông tin nhạy cảm nếu biết cách{" "}
            <b>thêm .env vào .gitignore</b>
          </li>
          <li>
            Dễ tích hợp, chỉ cần gọi{" "}
            <InlineCodeTypo>require("dotenv").config()</InlineCodeTypo> hoặc{" "}
            <InlineCodeTypo>import "dotenv/config"</InlineCodeTypo> ở đầu file
          </li>
        </ListTypo>
        <H3Typo>
          CORS (Thư viện cors) - <InlineCodeTypo>npm i cors</InlineCodeTypo>
        </H3Typo>
        <PTypo>
          CORS (Cross-Origin Resource Sharing) là một cơ chế bảo mật của trình
          duyệt, quy định **trình duyệt chỉ cho phép gửi request đến server khác
          origin (domain/port/protocol)** nếu server đó cho phép. Thư viện{" "}
          <b>cors</b> trong Node.js/Express giúp backend xác định **những URL
          (origin)** nào được phép truy cập tài nguyên.
        </PTypo>
        <PTypo>
          Điều này có nghĩa là: <b>dù client gọi đúng địa chỉ backend</b>, nếu
          backend không cho phép origin đó, trình duyệt vẫn <b>chặn lại</b> và
          không cho gửi/nhận dữ liệu. Việc kiểm soát nằm hoàn toàn ở phía
          server.
        </PTypo>
        <ListTypo>
          <li>
            Cho phép cấu hình rõ ràng domain (origin) nào được phép truy cập
            thông qua option <InlineCodeTypo>origin</InlineCodeTypo>
          </li>
          <li>
            Hạn chế phương thức HTTP được chấp nhận (
            <b>GET, POST, PUT, DELETE,…</b>)
          </li>
          <li>
            Tích hợp đơn giản với Express thông qua middleware:{" "}
            <InlineCodeTypo>app.use(cors())</InlineCodeTypo>
          </li>
          <li>
            Có thể giới hạn theo từng route, từng header, hoặc cho phép
            credentials (cookie, token)
          </li>
          <li>
            Rất hữu ích trong các ứng dụng frontend-backend tách biệt như SPA,
            mobile app gọi API từ domain khác
          </li>
        </ListTypo>
        <H3Typo>
          nodemon (Thư viện nodemon) -{" "}
          <InlineCodeTypo>npm i -D nodemon</InlineCodeTypo>
        </H3Typo>
        <PTypo>
          Nodemon là một công cụ hỗ trợ trong quá trình phát triển Node.js, giúp
          tự động khởi động lại ứng dụng mỗi khi có thay đổi trong mã nguồn.
          Điều này giúp developer không phải tự tay dừng và chạy lại server sau
          mỗi lần chỉnh sửa file.
        </PTypo>
        <PTypo>
          Về bản chất, nodemon tương tự như Webpack hoặc Vite ở frontend ở điểm:{" "}
          <b>giám sát (watch) các thay đổi</b> trong project và{" "}
          <b>tự động chạy lại ứng dụng</b> mà không cần thao tác thủ công.
        </PTypo>
        <ListTypo>
          <li>
            Tự động phát hiện thay đổi trong các file `.js`, `.ts`, `.json`,
            v.v... trong project
          </li>
          <li>
            Tự động dừng và khởi động lại tiến trình Node.js mỗi khi file thay
            đổi
          </li>
          <li>
            Rất hữu ích khi phát triển các ứng dụng Express, API server, CLI
            tool,...
          </li>
          <li>
            Có thể cấu hình file, extension, delay hoặc ignore thông qua file{" "}
            <InlineCodeTypo>nodemon.json</InlineCodeTypo>
          </li>
          <li>
            Không dùng trong production — chỉ dùng trong quá trình phát triển
            DevDependencies
          </li>
        </ListTypo>
      </CardContent>
    </Card>
  );
};

export default RequireLibrary;
