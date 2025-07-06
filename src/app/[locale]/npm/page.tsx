import {
  H2Typo,
  LargeTypo,
  LeadTypo,
  ListTypo,
  PTypo,
} from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const NPM_SCRIPTS = [
  {
    key: "install",
    command: "npm install",
    shortDescription: "Cài đặt các gói phần mềm từ package.json.",
    description: `Cài đặt các gói phần mềm từ package.json. Lệnh này
    sẽ đọc tệp package.json trong thư mục hiện tại và cài đặt tất cả các
    gói phần mềm được liệt kê trong phần "dependencies" và "devDependencies".
    Nếu bạn muốn cài đặt một gói phần mềm cụ thể, bạn có thể sử dụng lệnh
    <code>npm install <tên-gói></code>. Ví dụ: <code>npm install express</code> sẽ cài đặt gói Express.`,
  },
  {
    key: "install-dry-run",
    command: "npm install --dry-run",
    shortDescription: "Chạy thử cài đặt mà không thực hiện thay đổi.",
    description: `Chạy thử cài đặt mà không thực hiện thay đổi. Lệnh này sẽ
    kiểm tra các gói phần mềm cần cài đặt mà không thực sự cài đặt chúng.
    Điều này hữu ích để xem trước các thay đổi sẽ xảy ra khi bạn chạy lệnh
    <code>npm install</code>. Bạn có thể sử dụng lệnh này để kiểm tra xem
    có bất kỳ vấn đề gì với các gói phần mềm trước khi thực hiện cài đặt thực tế.`,
  },
  {
    key: "outdated",
    command: "npm outdated",
    shortDescription: "Kiểm tra các gói phần mềm đã lỗi thời.",
    description: `Kiểm tra các gói phần mềm đã lỗi thời. Lệnh này sẽ
    hiển thị danh sách các gói phần mềm đã cài đặt trong dự án của bạn và
    thông báo nếu có phiên bản mới hơn của chúng có sẵn. Điều này giúp bạn
    dễ dàng cập nhật các gói phần mềm của mình để sử dụng các tính năng mới
    hoặc sửa lỗi. Bạn có thể sử dụng lệnh này để kiểm tra xem có bất kỳ
    gói phần mềm nào cần được cập nhật hay không trước khi thực hiện lệnh
    <code>npm update</code>.`,
  },
  {
    key: "update",
    command: "npm update",
    shortDescription: "Cập nhật các gói phần mềm đã cài đặt.",
    description: `Lệnh sẽ kiểm tra các gói đã được khai báo
    trong dự án và cập nhật chúng lên phiên bản mới nhất trong phạm vi
    phiên bản (version range) được chỉ định trong package.json — thường gọi
    là phiên bản wanted. Lệnh này sẽ cập nhật các gói trong thư mục node_modules
    và có thể cập nhật package-lock.json, nhưng không thay đổi phiên bản trong package.json nếu không vượt ra ngoài phạm vi cũ.
    `,
  },
  {
    key: "uninstall",
    command: "npm uninstall <tên-gói>",
    shortDescription: "Gỡ bỏ một gói phần mềm khỏi dự án.",
    description: `Gỡ bỏ một gói phần mềm khỏi dự án. Lệnh này sẽ xóa
    gói phần mềm được chỉ định khỏi thư mục node_modules và cập nhật tệp
    package.json để loại bỏ nó khỏi danh sách phụ thuộc. Ví dụ:
    <code>npm uninstall express</code> sẽ gỡ bỏ gói Express khỏi dự án của bạn.`,
  },
];

const NPMPage = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <H2Typo>Npm và một số lệnh cơ bản</H2Typo>
          <LeadTypo>
            Npm (Node Package Manager) là một công cụ quản lý gói phần mềm được
            sử dụng rộng rãi trong cộng đồng Node.js. Nó cho phép bạn cài đặt,
            quản lý và chia sẻ các gói phần mềm (packages) trong dự án Node.js
            của bạn. Npm cung cấp một kho lưu trữ trực tuyến lớn chứa hàng triệu
            gói phần mềm, giúp bạn dễ dàng tìm kiếm và cài đặt các thư viện cần
            thiết cho dự án của mình.
            <br />
            <br />
            Ngoài ra, npm cũng hỗ trợ việc{" "}
            <b>
              quản lý các phụ thuộc (dependencies) của dự án, giúp bạn đảm bảo
              rằng các gói phần mềm mà bạn sử dụng luôn được cập nhật và tương
              thích với nhau
            </b>
            . Npm cũng cho phép bạn tạo và chia sẻ các gói phần mềm của riêng
            mình, giúp cộng đồng phát triển phần mềm có thể sử dụng lại mã nguồn
            của bạn một cách dễ dàng. Với npm, việc quản lý các gói phần mềm trở
            nên đơn giản và hiệu quả hơn bao giờ hết.
            <br />
            <br />
            Npm sẽ được tự động cài đặt khi bạn cài đặt Node.js trên máy tính
            của mình. Bạn có thể kiểm tra phiên bản npm đã cài đặt bằng lệnh{" "}
            <code>npm -v</code>. Dưới đây là một số lệnh npm cơ bản mà bạn có
            thể sử dụng
          </LeadTypo>
        </CardHeader>
        <CardContent>
          <LargeTypo>Một số lệnh npm có thể bạn chưa biết</LargeTypo>
          <ListTypo>
            {NPM_SCRIPTS.map((command) => (
              <li key={command.key} className="italic hover:text-destructive">
                <Link href={`#${command.key}`}>
                  <strong>{command.command}</strong>: {command.shortDescription}
                </Link>
              </li>
            ))}
          </ListTypo>
        </CardContent>
      </Card>

      {NPM_SCRIPTS.map((command) => (
        <Card key={command.key} className="mt-6 scroll-m-20" id={command.key}>
          <CardHeader>
            <H2Typo>{command.command}</H2Typo>
          </CardHeader>
          <CardContent>
            <PTypo>
              <span
                dangerouslySetInnerHTML={{ __html: command.description }}
              ></span>
            </PTypo>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default NPMPage;
