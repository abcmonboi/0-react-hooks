"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";

const gifts = [
  "CPU core i7",
  "NVIDIA GTX 1060",
  "SSD 512GB",
  "1 Chỉ vàng",
  "1 Cây vàng",
  "Dây chuyền vàng",
];

const PracticeComponent = () => {
  return (
    <div className="grid gap-7">
      <RandomGift />
      <ToDoList />
    </div>
  );
};

function RandomGift() {
  const [gift, setGift] = useState("");

  const handleRandomGift = () => {
    setGift(gifts[Math.floor(Math.random() * gifts.length)]);
  };

  return (
    <Card className="grid justify-center bg-gradient-to-r from-customColors-lightBlue to-red-200">
      <CardHeader>
        <CardTitle>Nhận Phần Thưởng</CardTitle>
      </CardHeader>
      <CardContent className="grid justify-center">
        <Button
          className="text-2xl h-20"
          size={"lg"}
          onClick={handleRandomGift}
        >
          Nhận Thưởng
        </Button>

        {/* Hộp quà phần thưởng */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg text-center w-64">
          {/* Hộp quà 3D */}
          <div className="relative w-24 h-24 mx-auto">
            {/* Nắp hộp */}
            {gift ? (
              <div className="absolute inset-x-0 top-0 w-full h-4 bg-blue-500 rounded-t-lg transform transition-transform duration-500 ease-in-out -translate-y-6"></div>
            ) : (
              <div className="absolute inset-x-0 top-0 w-full h-4 bg-blue-500 rounded-t-lg animate-bounce"></div>
            )}

            {/* Thân hộp */}
            <div className="absolute inset-x-0 top-4 w-full h-20 bg-red-400 rounded-b-lg shadow-md"></div>
            {/* Dây nơ */}
            <div className="absolute inset-x-0 top-0 w-1 bg-yellow-400 h-24 mx-auto"></div>
            <div className="absolute inset-0 h-1 bg-yellow-400 mx-auto top-8"></div>
          </div>

          {/* Tên phần thưởng */}
          <span className="min-h-[30rem] ">{gift}</span>

          {/* Pháo hoa dưới */}
          {gift && (
            <div className="absolute bottom-50 right-50 w-24 h-24">
              <div className="w-6 h-6 bg-yellow-800 rounded-full absolute animate-ping"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full absolute bottom-4 right-10 animate-ping"></div>
              <div className="w-5 h-5 bg-blue-400 rounded-full absolute bottom-0 right-4 animate-ping"></div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function ToDoList() {
  const [lists, SetLists] = useState<Record<string, boolean>>({});
  const [toDo, SetToDo] = useState<string>("");

  useEffect(() => {
    const localJobs = localStorage.getItem("jobs");

    SetLists(() => {
      if (!localJobs) {
        return {};
      }
      try {
        const currentList = JSON.parse(localJobs);
        return currentList;
      } catch (error) {
        console.error("Failed to parse localStorage item:", error);
        return {};
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const HandleList = (task: string, status: "add" | "remove") => {
    if (!task) return;
    SetLists((prev) => {
      const newList = { ...prev };
      if (newList[task] && status === "remove") {
        delete newList[task];
      } else {
        newList[task] = true;
      }
      localStorage.setItem("jobs", JSON.stringify(newList));
      return newList;
    });
    SetToDo("");
  };

  return (
    <Card className="min-h-[50vh]  flex items-center justify-center bg-gradient-to-r from-customColors-lightBlue via-white to-customColors-teal ">
      <Card className="min-h-[20rem]">
        <CardHeader>
          <CardTitle className="text-center">To do list</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-12 gap-4 min-h-[80px]">
            <Input
              className="col-span-9 min-h-[40px] text-xl p-4"
              value={toDo}
              onChange={(e) => SetToDo(e.target.value)}
              type="text"
              placeholder="Add a new task..."
            />
            <Button
              className="col-span-3 min-h-[40px] text-xl"
              size={"lg"}
              onClick={() => HandleList(toDo, "add")}
            >
              Add
            </Button>
          </div>
          <ul className="space-y-3">
            {Object.keys(lists).map((item) => {
              return (
                <li
                  key={item}
                  className="flex items-center justify-between p-4 border rounded-lg shadow"
                >
                  <span className="text-gray-800">{item}</span>
                  <Button
                    onClick={() => HandleList(item, "remove")}
                    className="text-lg text-white bg-green-500 rounded hover:bg-green-600 transition"
                  >
                    Done
                  </Button>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </Card>
  );
}

export default PracticeComponent;
