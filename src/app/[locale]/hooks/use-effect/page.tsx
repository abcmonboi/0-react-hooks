import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Knowledge } from "@/app/[locale]/hooks/type";

const UseEffectKnowledge = () => {
  return (
    <div className="grid gap-4">
      <KnowledgeBasic />
      <UseEffectOnlyCallBack />
      <UseEffectNoDependency />
      <UseEffectCallBackWithDeps />
    </div>
  );
};

function KnowledgeBasic() {
  const informations = [
    {
      title: "Khi state thay đổi và muốn thay đổi DOM",
      required: false,
    },
    {
      title:
        "Call API - ( Nếu không bỏ việc gọi API vào <code>useEffect</code>" +
        " thì phần logic gọi API sẽ được chạy trước đoạn return hay render ra UI." +
        "Vậy nên phải bỏ vào callBack của useEffect. Sau khi render UI sẽ chạy" +
        " đoạn logic gọi API trong callBack của <code>useEffect</code>",
    },
    {
      title: "Listen DOM events: scroll,resize,...",
    },
    {
      title: "Clean up: Remove listener/Unsubcribe, Clear Timer",
    },
  ];
  const requirement: Knowledge[] = [
    {
      title: "Add/remove event listener",
      required: true,
    },
    {
      title: "Observer pattern: Subcribe/unsubcribe",
      required: true,
    },
    {
      title: "Closure",
      required: true,
    },
    {
      title: "Timer: Interval, setInterval, setTimeout",
      required: true,
    },
    {
      title: "Toán tử === ",
      required: true,
    },
    {
      title: "Clear Interval, Clear Timeout",
      required: true,
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>useEffect(callback,[deps])- Side Effect</CardTitle>
        <CardDescription>
          Sử dụng <code>useEffect</code> khi nào ?
          <br />
          <b>
            <code>{`=> `}</code>Dùng khi muốn sử dụng các Side Effect
            <br />
            (Đang nói đến 1 chương trình phần mềm khi có tác động xảy ra thì
            chương trình thay đổi dữ liệu)
            <br />
            (Side Effect là việc sửa dữ liệu bên cạnh sau khi ưu tiên việc tạo
            ra UI người dùng)
          </b>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <CardTitle className="text-red-500">Kiến thức yêu cầu</CardTitle>
        <ul className="p-10">
          {requirement.map((item, index) => (
            <li className="list-disc" key={index}>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>

        <CardTitle>
          Các trường hợp <code>SideEffect Chính</code>
        </CardTitle>
        <ul className="p-10">
          {informations.map((item, index) => (
            <li className="list-decimal p-1" key={index}>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
        <CardTitle className="text-red-500">Được gọi khi nào ?</CardTitle>
        <ul className="p-10">
          <li className="list-decimal p-1">
            <span>
              UseEffect có chứa callback và sẽ luôn được gọi khi componet
              mounted ( tức là phần state bỏ trong callback luôn được gọi ít
              nhất 1 lần)
            </span>
          </li>
        </ul>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

function UseEffectOnlyCallBack() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>useEffect(callback only) - không có dependencies</CardTitle>
      </CardHeader>
      <CardContent>
        Gọi <code>callback</code> mỗi lần component <code>re-render</code>.
        (State thay đổi)
        <br />
        <b className="text-red-500 text-4xl">*</b>
        <span>
          Gọi callback sau khi đoạn component thêm vào DOM( nghĩa là code phần
          return UI được thêm vào DOM)
        </span>
      </CardContent>
    </Card>
  );
}

function UseEffectNoDependency() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>useEffect(callback,[dependency rỗng])</CardTitle>
      </CardHeader>
      <CardContent>
        Gọi <code>callback </code>duy nhất 1 lần component{" "}
        <code>được mount(hay thêm vào dom hay render)</code>
        <br />
        <li>Dùng khi muốn thực hiện logic duy nhất 1 lần render</li>
        <li>Không muốn gọi lại khi component render</li>
      </CardContent>
    </Card>
  );
}

function UseEffectCallBackWithDeps() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>useEffect(callback,[dependencies]) - dependencies</CardTitle>
      </CardHeader>
      <CardContent>
        <li>
          Denpendencies là 1 hay nhiều biến:(props,state,...) đơn giản là 1 biến
          chứa dữ liệu có thể thay đổi
        </li>
        <li>
          Dùng khi muốn thực hiện logic lần đầu và mỗi khi dependencies thay đổi{" "}
        </li>
        <li>
          Nó sẽ so sánh toán tử (===) Nếu dependencies thay đổi khi so sánh thì
          chạy callback{" "}
        </li>
        <li>
          Các state khác thay đổi không thuộc dependencies thì callback cũng
          không gọi
        </li>
      </CardContent>
    </Card>
  );
}
export default UseEffectKnowledge;
