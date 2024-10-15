"use client";

import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
/**Case for init state is a caculator funtion */
const orders = [100, 200, 300];

type inforProps = {
  name: string;
  age: string;
  jobs: string;
};

const UseStateComponent = () => {
  /**Case for init state is a caculator funtion */
  const total = orders.reduce((total, cur) => total + cur);
  /**Code above make total counting function with each time component re-render */
  //   const [count, setCount] = useState<number>(() => {
  //     const total = orders.reduce((total, cur) => total + cur);
  //       /**Code above make total counting function with 1 init time component render */
  //     return total;
  //   });

  const [count, setCount] = useState<number>(0);

  const [infor, setInfor] = useState<object>({
    name: "Le Bac",
    age: "25",
    jobs: "front-ends",
  });

  const handleIncrese = () => {
    setCount((prev) => prev + 1);

    /**Case for change multi line of state */
    // setCount(prev => prev + 1);
    // setCount(prev => prev + 1);

    /**Case for change multi line but just one line working */
    // setCount(count + 1);
    // setCount(count + 1);

    /**Case for set new State Infor */
    // setInfor({
    //     hobby:"listen music"
    // })

    /**Case for set new State from old infor */
    // setInfor({
    //     ...infor,
    //     hobby:"listen music"
    // })
    /**Case for set new State from old infor with condition */
    setInfor((prev: inforProps) => {
      prev.name = "Tram ham";
      return {
        ...prev,
        hobby: "listen music",
      };
    });
  };
  return (
    <>
      <CountNumber />
      <CallBackWithUseState />
      {/* <ProductCard
        count={count}
        handleIncrese={handleIncrese}
        setCount={setCount}
        infor={infor}
      /> */}
    </>
  );
};

function ProductCard({
  count,
  handleIncrese,
  infor,
}: {
  count: number;
  handleIncrese: () => void;
  setCount: Dispatch<SetStateAction<number>>;
  infor: object;
}) {
  return (
    <div className="mt-40 flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="group relative w-96 h-96 bg-white rounded-2xl shadow-xl transform hover:rotate-6 hover:-translate-y-6 transition duration-500 ease-in-out">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-md opacity-75 transform group-hover:scale-105 transition duration-500"></div>

        <div className="relative z-10 p-6 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {JSON.stringify(infor)}
          </h2>
          <p className="text-gray-600">{count}</p>

          <div className="flex justify-between items-center">
            <button
              onClick={handleIncrese}
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
            >
              Increse
            </button>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full shadow-2xl transform -translate-x-10 -translate-y-10 group-hover:scale-110 transition duration-500 ease-in-out"></div>

        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full shadow-2xl transform translate-x-8 translate-y-8 group-hover:scale-110 transition duration-500 ease-in-out"></div>
      </div>
    </div>
  );
}

function CountNumber() {
  const [count, setCount] = useState<number>(0);

  const handleIncrese = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-customColors-lightBlue text-3xl text-white rounded-lg px-6">
      <h1 className="text-center py-6 text-6xl text-">
        Giao diện tự thay đổi (re-render) khi state thay đổi
      </h1>
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
        <h5>{count && `Render: ` + (count + 1)} </h5>
      </div>
    </div>
  );
}

function CallBackWithUseState() {
  const [count, setCount] = useState<number>(0);

  const handleIncrese = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div className="bg-customColors-lightBlue text-3xl text-white rounded-lg px-6">
      <h1 className="text-center py-6 text-6xl text-">
        {`callBack với useState () => {}`}
      </h1>
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
    </div>
  );
}

export default UseStateComponent;
