"use client";

import {
  BlockquoteTypo,
  H2Typo,
  H4Typo,
  LargeTypo,
  LeadTypo,
  ListTypo,
  PTypo,
} from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const TwoWayBinding = () => {
  const [name, setName] = useState<string>("");

  const informations = [
    {
      title: "Xử lý các trường dữ liệu thường là trong form",
      required: false,
    },
    {
      title:
        "Khi input OnChange ta lấy event value để gán vào state đó là ràng buộc 1 chiều",
    },
    {
      title:
        "Khi input OnChange ta lấy event value để gán vào state đó và đồng thời để value của input bằng với state gọi là ràng buộc 2 chiều",
    },
    {
      title:
        "Sử dụng ràng buộc 2 chiều bởi khi input thay đổi thì dữ liệu thay đổi theo. Tuy nhiên khi dữ liệu thay đổi input sẽ không thay đổi. Vì vậy cần để value cho input",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <H2Typo>Ràng buộc 2 chiều</H2Typo>
      </CardHeader>
      <CardContent>
        <LargeTypo>Kiến thức cần hiểu trước:</LargeTypo>
        <BlockquoteTypo>
          <li>Array</li>
          <li>Reference types</li>
        </BlockquoteTypo>
        <ListTypo>
          {informations.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ListTypo>

        <div className="flex flex-col gap-6">
          <BlockquoteTypo>Ví dụ cho 1 chiều</BlockquoteTypo>
          <Input name="name" onChange={(e) => setName(e.target.value)} />
          <Button onClick={() => setName("HelloWord")}>
            Click to setState(HelloWord)
          </Button>
          <LargeTypo>State: {name}</LargeTypo>
          <span
            className={cn(
              name !== "HelloWord" && "hidden",
              "text-red-500 font-semibold italic"
            )}
          >
            * Input đầu tiên không tự set giá trị khi state thay đổi
          </span>
          <BlockquoteTypo>Ví dụ cho 2 chiều</BlockquoteTypo>
          <Input
            name="name2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={() => setName("HelloWord")}>
            Click to setState(HelloWord)
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TwoWayBinding;
