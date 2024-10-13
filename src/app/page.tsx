import Link from "next/link";

export default function Home() {
  const menu = [
    { label: "Hooks", url: "/hooks" },
    { label: "useState", url: "/hooks/usestate" },
  ];
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Trang Chủ</h1>

        <ul className="space-y-4 mb-8">
          {menu.map((item) => {
            return (
              <li key={item.label} className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50">
                <Link href={item.url}>
                  <span className="text-blue-500 hover:text-blue-700">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-300 rounded-lg shadow hover:bg-gray-400">
            Trở Lại
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
            Tiếp Theo
          </button>
        </div>
      </div>
    </main>
  );
}
