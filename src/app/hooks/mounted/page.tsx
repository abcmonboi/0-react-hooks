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
        <CardTitle>{`Mounted/UnMounted`}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="p-10">
          {notifications.map((item, index) => (
            <li className="list-disc" key={index}>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default page;
