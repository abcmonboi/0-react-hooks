"use client";

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
    //Case for change status of state
    // setCount(count + 1);
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
      <div>UseStateComponent</div>
      <ProductCard
        count={count}
        handleIncrese={handleIncrese}
        setCount={setCount}
        infor={infor}
      />
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="group relative w-96 h-96 bg-white rounded-2xl shadow-xl transform hover:rotate-6 hover:-translate-y-6 transition duration-500 ease-in-out">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-md opacity-75 transform group-hover:scale-105 transition duration-500"></div>

        <div className="relative z-10 p-6 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {JSON.stringify(infor)}
          </h2>
          <p className="text-gray-600">{count}</p>

          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold text-indigo-500">
              $99.99
            </span>
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

export default UseStateComponent;
