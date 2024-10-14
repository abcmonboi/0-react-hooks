"use client";

import React, { useState, useEffect } from "react";
const gifts = ["CPU core i7", "NVIDIA GTX 1060", "SSD 512GB"];

const PracticeComponent = () => {
  return (
    <>
      <RandomGift />
      <ToDoList />
    </>
  );
};

function RandomGift() {
  const [gift, setGift] = useState("");

  const handleRandomGift = () => {
    setGift(gifts[Math.floor(Math.random() * gifts.length)]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-200 to-red-200">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Nhận Phần Thưởng
      </h1>

      <button
        onClick={handleRandomGift}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        Nhận Thưởng
      </button>

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
        <h2 className="text-2xl font-bold text-gray-800 mt-6">{gift}</h2>

        {/* Pháo hoa dưới */}
        {gift && (
          <div className="absolute bottom-50 right-50 w-24 h-24">
            <div className="w-6 h-6 bg-yellow-800 rounded-full absolute animate-ping"></div>
            <div className="w-4 h-4 bg-red-400 rounded-full absolute bottom-4 right-10 animate-ping"></div>
            <div className="w-5 h-5 bg-blue-400 rounded-full absolute bottom-0 right-4 animate-ping"></div>
          </div>
        )}
      </div>
    </div>
  );
}

function ToDoList() {
  const [lists, SetLists] = useState<string[]>([]);

  useEffect(() => {
    const localJobs = localStorage.getItem("jobs")
      ? JSON.parse(localStorage.getItem("jobs") as string)
      : [];
    SetLists(localJobs);
  }, []);
  const [toDo, SetToDo] = useState<string>("");

  const handleAddToList = (done: string, status: "add" | "remove") => {
    SetLists((prev) => {
      var newList = [...prev, toDo];

      if (lists.includes(done) && status === "remove") {
        newList = lists.filter((item) => item !== done);
      }
      localStorage.setItem("jobs", JSON.stringify(newList));
      return newList;
    });
    SetToDo("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          To-Do List
        </h1>

        {/* Input box */}
        <div className="flex items-center mb-4">
          <input
            value={toDo}
            onChange={(e) => SetToDo(e.target.value)}
            type="text"
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={() => handleAddToList(toDo, "add")}
            className="px-6 py-2 bg-indigo-500 text-white rounded-r-lg hover:bg-indigo-600 transition"
          >
            Add
          </button>
        </div>

        {/* To-do Items */}
        <ul className="space-y-3">
          {/* Task 1 */}
          {lists?.map((item) => {
            return (
              <li
                key={item}
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow"
              >
                <span className="text-gray-800">{item}</span>
                <button
                  onClick={() => handleAddToList(item, "remove")}
                  className="px-3 py-1 text-xs text-white bg-green-500 rounded hover:bg-green-600 transition"
                >
                  Done
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PracticeComponent;
