export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-bold text-customColors-darkGreen text-center">
        Welcome to React Hooks 2022
      </h1>
      <div className="text-gray-700 dark:text-gray-300 text-2xl space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-blue-500">•</span>
          <span>Hooks có nghĩa là gắn vào, móc vào</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-blue-500">•</span>
          <span>
            Hooks là tên khái niệm - là một hàm được viết sẵn sử dụng cho 1 sự
            việc, hành động cụ thể nhiều lần ở nhiều nơi
          </span>
        </div>{" "}
        <div className="flex items-center space-x-2">
          <span className="text-red-500">*</span>
          <span className="text-red-500">Chỉ dùng cho Function component</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-blue-500">{`=>`}</span>
          <span>Hãy sử dụng Hooks khi tạo mới dự án React</span>
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
  );
}
