"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
        "Khi input Onchange ta lấy event value để gán vào state đó là ràng buộc 1 chiều",
    },
    {
      title:
        "Khi input Onchange ta lấy event value để gán vào state đó và đồng thời để value của input bằng với state gọi lầ rầng buộc 2 chiều",
    },
    {
      title:
        "Sử dụng ràng buộc 2 chiều bởi khi input thay đổi thì dữ liệu thay đổi theo. Tuy nhiên khi dữ liệu thay đổi input sẽ không thay đổi. Vì vậy cần để value cho input",
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ràng buộc 2 chiều</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="p-10">
          {informations.map((item, index) => (
            <li className="list-disc" key={index}>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
        <div className="text-gray-700 dark:text-gray-300 text-2xl space-y-4 p-10">
          <div className="flex items-center space-x-2">
            <span className="text-red-500">
              * Kiến thức cần nắm:
              <li>Array</li>
              <li>Reference types</li>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-500">{`=>`}</span>
            <span>Ví dụ cho 1 chiều</span>
          </div>
          <Input
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="border-cyan-500 border h-20 "
          ></Input>
          <Button
            className="text-2xl h-20"
            onClick={() => setName("HelloWord")}
          >
            Click To setState: HelloWord
          </Button>
          {name === "HelloWord" && (
            <span className="text-red-500">
              * Input đầu tiên không tự set giá trị khi state thay đổi
            </span>
          )}
          <div>State: {name}</div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-500">{`=>`}</span>
            <span>Ví dụ cho 2 chiều</span>
          </div>
          <Input
            name="name2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-cyan-500 border h-20 "
          ></Input>
          <Button
            className="text-2xl h-20"
            onClick={() => setName("HelloWord")}
          >
            Click To setState: HelloWord
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TwoWayBinding;
