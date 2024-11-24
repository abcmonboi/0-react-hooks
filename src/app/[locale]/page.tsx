import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const notifications = [
  {
    title: "Hooks có nghĩa là gán vào, móc vào",
  },
  {
    title: "Sử dụng Hooks khi tạo mới dự án React",
  },
  {
    title: "Chỉ dùng cho Function component",
    required: true,
  },
];

export default function Home() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-5xl text-customColors-oceanBlue ">{`Một số kiến thức phải nhớ về React 2022`}</CardTitle>
        <CardDescription className="text-2xl">
          Website này cung cấp cho bạn một số kiến thức về React. Đặc biệt là
          <b> Hooks</b>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <div className="flex-1 space-y-1">
            <span className="font-medium leading-none">
              Một vài điều cơ bản có thể bạn đã biết về hooks
            </span>
            <p className="text-lg text-muted-foreground">
              Hooks là tên khái niệm - là một hàm được viết sẵn sử dụng cho 1 sự
              việc, hành động cụ thể nhiều lần ở nhiều nơi
            </p>
          </div>
        </div>
        <div>
          {notifications.map((item, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span
                className={`flex text-4xl h-2 w-2 translate-y-1 rounded-full ${
                  item?.required ? `text-red-500` : ` text-sky-500 `
                }`}
              >
                {item?.required ? `*` : `•`}
              </span>
              <div className="py-3 pl-2">
                <span className="text-2xl font-medium leading-none">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
