"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { H2Typo, LeadTypo, PTypo } from "@/components/typography";
import CountNumber from "@/app/[locale]/react/hooks/use-state/_components/CountNumber";
import CallBackWithUseState from "@/app/[locale]/react/hooks/use-state/_components/CallBackWithUseState";

const orders = [100, 200, 300];

type inforProps = {
  name: string;
  age: string;
  jobs: string;
};

const UseStateComponent = () => {
  return (
    <div className="grid gap-6">
      <CountNumber />
      <CallBackWithUseState />
      <InitStateWithCallBack />
      <NewValueSetState />
    </div>
  );
};

function InitStateWithCallBack() {
  const [count, setCount] = useState<number>(() => {
    const total = orders.reduce((total, cur) => total + cur);
    return total;
  });
  const handleIncrese = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {`Sử dụng hàm callBack làm giá trị khởi tạo cho state (initState)`}
        </CardTitle>

        <CardDescription>
          Truyền hàm vào initState thì giá trị được gán vào là{" "}
          <b>giá trị return</b> của hàm.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          Khi hàm được sinh ra để tính giá trị ban đầu cho state thì nên cho vào
          CallBack để tránh mỗi lần render lại tạo 1 hàm không cần thiết <br />
          {`const orders = [100, 200, 300];
`}
          <br />
          Cách xử lý: <br />
          <br />
          <li>{`    const [count, setCount] = useState(() => {
      const total = orders.reduce((total, cur) => total + cur);
    });`}</li>
        </div>
        <h3 className="py-6">Current number = {count} UI Change</h3>
        <div className="flex items-center justify-between px-6 py-6">
          <button
            onClick={handleIncrese}
            className="px-8 py-3 rounded-full bg-customColors-darkGreen text-white hover:bg-customColors-lightBlue dark:bg-customColors-lightBlue dark:hover:bg-blue-700 transition-all duration-300 shadow-md relative overflow-hidden group transform hover:-rotate-2 active:rotate-2 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-customColors-lightBlue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10">Increse Number</span>
            <span className="absolute inset-0 w-full h-full bg-white opacity-10 transform scale-0 group-hover:scale-110 transition-transform duration-500 rounded-full"></span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

function NewValueSetState() {
  const [infor, setInfor] = useState<object>({
    name: "Le Bac",
    age: "25",
    jobs: "front-ends",
  });

  const handleChangeInfor = () => {
    setInfor((prev: inforProps) => {
      prev.name = "Tram ham";
      return {
        ...prev,
        hobby: "listen music",
      };
    });
  };

  return (
    <Card>
      <CardHeader>
        <H2Typo>
          {`Khi setState thì state được thay thế bằng một state mới hoàn toàn`}
        </H2Typo>
        <LeadTypo>
          State không giữ lại giá trị cũ. Nếu muốn chèn thêm giá trị cũ vào
          state mới sử dụng toán tử ...spread
        </LeadTypo>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="group mt-20 relative w-[50%] h-96 bg-white rounded-2xl shadow-xl transform hover:rotate-6 hover:-translate-y-6 transition duration-500 ease-in-out">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-md opacity-75 transform group-hover:scale-105 transition duration-500"></div>

          <div className="relative h-full flex flex-col items-center justify-center p-6 ">
            <span className="text-center text-3xl font-bold text-gray-200">
              {JSON.stringify(infor)}
            </span>

            <div className="flex justify-between items-center">
              <button
                onClick={handleChangeInfor}
                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
              >
                Add Infor
              </button>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full shadow-2xl transform -translate-x-10 -translate-y-10 group-hover:scale-110 transition duration-500 ease-in-out"></div>

          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full shadow-2xl transform translate-x-8 translate-y-8 group-hover:scale-110 transition duration-500 ease-in-out"></div>
        </div>
      </CardContent>
    </Card>
  );
}

export default UseStateComponent;
