import {
  BlockquoteTypo,
  H2Typo,
  LeadTypo,
  PTypo,
} from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const DirectoryStructure = () => {
  return (
    <Card>
      <CardHeader>
        <H2Typo>Cấu trúc thư mục (Directory Structure)</H2Typo>
        <LeadTypo>
          Cấu trúc thư mục rõ ràng giúp dự án backend dễ bảo trì, mở rộng và hợp
          tác.
        </LeadTypo>
      </CardHeader>
      <CardContent>
        <PTypo>
          Trong một dự án Node.js, việc tổ chức thư mục hợp lý giúp quản lý mã
          nguồn hiệu quả hơn. Thông thường, ta sẽ chia thành các thư mục chính
          như:
          <br />
          <strong>
            <code>src/</code>
          </strong>
          : Chứa toàn bộ mã nguồn chính của ứng dụng.
        </PTypo>
        <BlockquoteTypo>
          <b>/controllers/:</b> là nơi tiếp nhận <b>request</b> từ client, trích
          xuất dữ liệu cần thiết (như body, query, params), sau đó gọi đến các
          hàm trong <strong>/services/:</strong> để xử lý logic nghiệp vụ —
          chẳng hạn như truy xuất cơ sở dữ liệu, xử lý tính toán hoặc gọi API
          bên ngoài. Sau khi service <b>hoàn tất công việc</b>,{" "}
          <b>controller </b>
          sẽ định dạng và gửi response phù hợp trở lại cho client.
        </BlockquoteTypo>
        <BlockquoteTypo>
          <b>/services/:</b> là nơi chứa các logic nghiệp vụ chính, giúp tách
          biệt phần xử lý dữ liệu {`"cốt lõi"`} ra khỏi controller để code rõ
          ràng, dễ bảo trì hơn.
          <b>/controller/:</b> chỉ đóng vai trò điều phối (orchestration), không
          nên xử lý logic trực tiếp.
        </BlockquoteTypo>
        <BlockquoteTypo>
          <strong>
            <code>routes/</code>
          </strong>
          : là nơi định nghĩa các endpoint (đường dẫn API) mà ứng dụng backend
          hỗ trợ. Mỗi route sẽ được liên kết với một controller cụ thể để xử lý
          các request như GET, POST, PUT, DELETE,... Thư mục này giúp tổ chức mã
          nguồn theo từng chức năng rõ ràng và dễ bảo trì. Định nghĩa endpoint
          và ánh xạ đến controller tương ứng.
          <br />
          <b>
            Controller xử lý logic cho một request cụ thể, nhưng Router là nơi
            quyết định route nào sẽ được giao cho controller nào.
          </b>{" "}
          <br />
          <br />
          <b> Nếu bạn gộp hết route vào controller, bạn sẽ:</b>
          <br />
          <li>Khó quản lý khi ứng dụng lớn lên (hàng trăm route).</li>
          <li>Không thể dùng middleware riêng cho từng nhóm route.</li>
          <li>Vi phạm nguyên lý tách biệt trách nhiệm.</li>
        </BlockquoteTypo>
        <BlockquoteTypo>
          <strong>
            <code>models/</code>
          </strong>
          : Định nghĩa cấu trúc dữ liệu, thường dùng với cơ sở dữ liệu.
          <br />
          <strong>
            <code>middlewares/</code>
          </strong>
          : Xử lý các bước trung gian như xác thực, logging,...
          <br />
          <strong>
            <code>config/</code>
          </strong>
          : Chứa các file cấu hình như database, biến môi trường,...
          <br />
          <strong>
            <code>utils/</code>
          </strong>
          : Các hàm tiện ích dùng chung trong toàn ứng dụng.
          <br />
          <strong>
            <code>app.js / server.js</code>
          </strong>
          : Điểm khởi chạy chính của server.
          <br />
        </BlockquoteTypo>
        <br />
        Cách tổ chức này giúp tách biệt chức năng, giảm phụ thuộc và dễ dàng mở
        rộng trong tương lai.
      </CardContent>
    </Card>
  );
};

export default DirectoryStructure;
