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

const GIT_COMMANDS = [
  {
    command: "git init",
    key: "init",
    shortDescription: "Khởi tạo một kho Git mới.",
    description: "Khởi tạo một kho Git mới.",
  },
  {
    command: "git clone",
    key: "clone",
    shortDescription: "Sao chép một kho Git từ xa về máy tính của bạn.",
    description: "Sao chép một kho Git từ xa về máy tính của bạn.",
  },
  {
    command: "git add",
    key: "add",
    shortDescription: "Thêm tệp vào khu vực staging để chuẩn bị commit.",
    description: "Thêm các tệp vào khu vực staging để chuẩn bị commit.",
  },
  {
    command: "git commit",
    key: "commit",
    shortDescription: "Lưu các thay đổi đã staging vào kho Git.",
    description: "Lưu các thay đổi đã staging vào kho Git.",
  },
  {
    command: "git push",
    key: "push",
    shortDescription: "Đẩy các thay đổi từ kho cục bộ lên kho từ xa.",
    description: "Đẩy các thay đổi từ kho cục bộ lên kho từ xa.",
  },
  {
    command: "git fetch",
    key: "fetch",
    shortDescription:
      "Lấy các thay đổi từ remote nhưng không merge chúng vào local repository.",
    description:
      "Lấy các thay đổi từ remote nhưng không merge chúng vào local repository.",
  },
  {
    command: "git merge",
    key: "merge",
    shortDescription:
      "Hợp nhất(merge) các thay đổi từ một nhánh khác vào nhánh hiện tại.",
    description: `Hợp nhất(merge) các thay đổi từ một nhánh khác vào nhánh hiện tại.
    Nếu vừa git fetch xong và muốn merge các thay đổi mới nhất từ remote vào nhánh hiện tại,
    bạn có thể sử dụng git merge origin/main (nếu nhánh chính là main).
    Lệnh này sẽ lấy các thay đổi từ nhánh main trên remote (origin) và
    hợp nhất chúng vào nhánh hiện tại của bạn.`,
  },
  {
    command: "git pull",
    key: "pull",
    shortDescription: `Lấy các thay đổi mới nhất từ trên remote và merge chúng vào local repository.`,
    description: `Lấy các thay đổi mới nhất từ trên remote và merge chúng vào local repository.
    Là sự kết hợp của git fetch: lấy các thay đổi từ remote về local
    và git merge: hợp nhất các thay đổi trên remote vào nhánh hiện tại của bạn.
    Lệnh này thường được sử dụng để cập nhật nhánh hiện tại với các thay đổi
    mới nhất từ remote.
    Sẽ tạo ra một commit hợp nhất (merge commit) nếu có các thay đổi mới từ remote.
    Nếu bạn muốn giữ lịch sử commit của mình sạch sẽ và tránh tạo ra các commit hợp
    nhất (merge commits), bạn có thể sử dụng git pull --rebase thay vì git pull.`,
  },
  {
    command: "git pull --rebase",
    key: "pull-rebase",
    shortDescription:
      "Lấy các thay đổi mới nhất từ remote và áp dụng chúng lên nhánh hiện tại.",
    description: `Lấy các thay đổi mới nhất từ remote và áp dụng chúng lên nhánh hiện tại.
      Sử dụng lệnh này khi bạn muốn giữ lịch sử commit của mình sạch sẽ và tránh tạo ra các commit hợp nhất (merge commits).
      Khi bạn sử dụng git pull --rebase, Git sẽ lấy các thay đổi từ remote,
      sau đó áp dụng các commit của bạn lên trên các thay đổi đó, tạo ra một lịch sử commit tuyến tính hơn.
      Các id của commit sẽ thay đổi vì chúng được áp dụng lại trên các thay đổi mới nhất.
        Lưu ý rằng nếu có xung đột xảy ra trong quá trình rebase, bạn sẽ cần giải quyết chúng trước khi hoàn tất.
        Vì thay đổi id của các commit, nên khi bạn đã rebase và muốn đẩy các thay đổi lên remote,
        bạn sẽ cần sử dụng git push --force để ghi đè lên lịch sử commit trên remote.`,
  },
  {
    command: "git branch",
    key: "branch",
    shortDescription: "Quản lý các nhánh trong kho Git.",
    description: "Quản lý các nhánh trong kho Git.",
  },
  {
    command: "git checkout",
    key: "checkout",
    shortDescription:
      "Chuyển đổi giữa các nhánh hoặc khôi phục tệp về trạng thái trước đó.",
    description:
      "Chuyển đổi giữa các nhánh hoặc khôi phục tệp về trạng thái trước đó.",
  },

  {
    command: "git status",
    key: "status",
    shortDescription:
      "Kiểm tra trạng thái của kho Git, xem các tệp đã thay đổi, đã staging hay chưa.",
    description:
      "Kiểm tra trạng thái của kho Git, xem các tệp đã thay đổi, đã staging hay chưa.",
  },
  {
    command: "git log",
    key: "log",
    shortDescription: "Hiển thị lịch sử commit của kho Git.",
    description: "Hiển thị lịch sử commit của kho Git.",
  },
  {
    command: "git reset",
    key: "reset",
    shortDescription:
      "Quay lại một commit trước đó, có thể là để hủy bỏ các thay đổi đã commit.",
    description:
      "Quay lại một commit trước đó, có thể là để hủy bỏ các thay đổi đã commit.",
  },
  {
    command: "git revert",
    key: "revert",
    shortDescription:
      "Tạo một commit mới để đảo ngược các thay đổi của một commit trước đó.",
    description:
      "Tạo một commit mới để đảo ngược các thay đổi của một commit trước đó.",
  },
  {
    command: "git stash",
    key: "stash",
    shortDescription:
      "Tạm thời lưu các thay đổi chưa commit để có thể làm việc trên một nhánh khác.",
    description:
      "Tạm thời lưu các thay đổi chưa commit để có thể làm việc trên một nhánh khác.",
  },
  {
    command: "git remote",
    key: "remote",
    shortDescription: "Quản lý các kho từ xa liên kết với kho cục bộ.",
    description: "Quản lý các kho từ xa liên kết với kho cục bộ.",
  },
];

const GitPage = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <H2Typo>Git & Version Control</H2Typo>
          <LeadTypo>
            Git là một hệ thống quản lý phiên bản phân tán, cho phép bạn theo
            dõi các thay đổi trong mã nguồn và làm việc cùng với những người
            khác một cách hiệu quả. Nó rất hữu ích trong việc phát triển phần
            mềm, giúp bạn quản lý lịch sử thay đổi, hợp nhất các nhánh và khôi
            phục lại các phiên bản trước đó của mã nguồn.
          </LeadTypo>
        </CardHeader>
        <CardContent>
          <LargeTypo>Các lệnh cơ bản của Git bao gồm:</LargeTypo>
          <ListTypo>
            {GIT_COMMANDS.map((command) => (
              <li className="italic hover:text-destructive">
                <Link key={command.key} href={`#${command.key}`}>
                  <strong>{command.command}</strong>: {command.shortDescription}
                </Link>
              </li>
            ))}
          </ListTypo>
        </CardContent>
      </Card>

      {GIT_COMMANDS.map((command) => (
        <Card key={command.key} className="mt-6 scroll-m-20" id={command.key}>
          <CardHeader>
            <H2Typo>{command.command}</H2Typo>
          </CardHeader>
          <CardContent>
            <PTypo>{command.description}</PTypo>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default GitPage;
