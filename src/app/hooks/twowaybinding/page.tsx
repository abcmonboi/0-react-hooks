"use client";

import React, { useState } from "react";

const TwoWayBinding = () => {
  const [name, setName] = useState<string>("");
  return (
    <div className="flex flex-col gap-7 px-28">
      <>
        <h1 className="text-5xl font-bold text-customColors-slate text-center">
          Ràng buộc 2 chiều
        </h1>
        <div className="text-gray-700 dark:text-gray-300 text-2xl space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-blue-500">•</span>
            <span>Xử lý các trường dữ liệu thường là trong form</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-500">•</span>
            <span>
              Khi input Onchange ta lấy event value để gán vào state đó là ràng
              buộc 1 chiều
            </span>
          </div>{" "}
          <div className="flex items-center space-x-2">
            <span className="text-blue-500">•</span>
            <span>
              Khi input Onchange ta lấy event value để gán vào state đó và đồng
              thời để value của input bằng với state gọi lầ rầng buộc 2 chiều
            </span>
          </div>{" "}
          <div className="flex items-center space-x-2">
            <span className="text-blue-500">•</span>
            <span>
              Sử dụng ràng buộc 2 chiều bởi khi input thay đổi thì dữ liệu thay
              đổi theo. Tuy nhiên khi dữ liệu thay đổi input sẽ không thay đổi.
              Vì vậy cần để value cho input
            </span>
          </div>{" "}
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
          <input
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="border-cyan-500 border "
          ></input>
          <div className="btn" onClick={() => setName("HelloWord")}>
            Click To setState: HelloWord
          </div>
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
          <input
            name="name2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-cyan-500 border "
          ></input>
          <div className="btn" onClick={() => setName("HelloWord")}>
            Click To setState: HelloWord
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <button className="px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-customColors-lightBlue shadow-md transition-all duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200 shadow-md transition-all duration-300">
            Learn More
          </button>
        </div>
      </>
    </div>
  );
};

export default TwoWayBinding;
