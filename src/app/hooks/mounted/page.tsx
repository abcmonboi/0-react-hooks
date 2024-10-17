import { cn } from "@/lib/utils";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const notifications = [
  {
    title: "Gán và Gỡ",
    required: false,
  },
  {
    title:
      "Mounted là khi component được đưa vào React.Element trước khi vào Dom",
  },
  {
    title:
      "UnMounted là khi component được gỡ khỏi Dom và trước khi rời React.Element",
  },
  {
    title: "Viết Biểu thức điều kiện để 1 component unmount sử dụng useEffect",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

const page = ({ className, ...props }: CardProps) => {
  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-center text-5xl text-customColors-oceanBlue ">{`Mounted/UnMounted`}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
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
                <p className="text-lg font-medium leading-none">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default page;
