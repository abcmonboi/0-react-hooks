import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-7 px-28">
      <h1 className="text-5xl font-bold text-customColors-slate text-center">
        Mounted/UnMounted
      </h1>
      <div className="text-gray-700 dark:text-gray-300 text-2xl space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-blue-500">•</span>
          <span>Gán và Gỡ </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-blue-500">•</span>
          <span>
            Mounted là khi component được đưa vào React.Element trước khi vào
            Dom
          </span>
        </div>{" "}
        <div className="flex items-center space-x-2">
          <span className="text-blue-500">•</span>
          <span>
            UnMounted là khi component được gỡ khỏi Dom và trước khi rời
            React.Element
          </span>
        </div>{" "}
        <div className="flex items-center space-x-2">
          <span className="text-blue-500">•</span>
          <span>
            Viết Biểu thức điều kiện để 1 component unmount sử dụng useEffect
          </span>
        </div>{" "}
      </div>

      <div className="flex sjustify-center items-center space-x-4">
        <button className="px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-customColors-lightBlue shadow-md transition-all duration-300">
          Get Started
        </button>
        <button className="px-6 py-3 rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200 shadow-md transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default page;
