
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const menu = [
    {
      label: "useState",
      url: "/hooks/usestate",
      subItems: [
        {
          label: "Knowledge",
          url: "/hooks/usestate/practice",
        },
        {
          label: "Practice",
          url: "/hooks/usestate/practice",
        },
      ],
    },
    {
      label: "useEffect",
      url: "/hooks/useeffect",
      subItems: [
        {
          label: "Knowledge",
          url: "/hooks/usestate/practice",
        },
        {
          label: "Practice",
          url: "/hooks/usestate/practice",
        },
      ],
    },
    {
      label: "Two-way binding",
      url: "/hooks/usestate",
      subItems: [
        {
          label: "Knowledge",
          url: "/hooks/usestate/practice",
        },
        {
          label: "Practice",
          url: "/hooks/usestate/practice",
        },
      ],
    },
    {
      label: "Mounted/Unmounted",
      url: "/hooks/usestate",
      subItems: [
        {
          label: "Knowledge",
          url: "/hooks/usestate/practice",
        },
        {
          label: "Practice",
          url: "/hooks/usestate/practice",
        },
      ],
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <aside className="max-w-fit w-[20vw] h-[85vh] fixed top-[85px] left-5 bg-gradient-to-b from-white to-blue-100 p-6 shadow-2xl rounded-3xl border-l-4 border-blue-500 flex flex-col">
      <h1 className="text-3xl font-bold text-blue-300 mb-4">React Hooks</h1>
      <ul className="space-y-4">
        {menu.map((item) => {
          return (
            <li key={item.label}>
              <button
                className="w-full text-left py-3 px-4 flex justify-between items-center rounded-full bg-gradient-to-r from-blue-400 to-customColors-lightBlue text-white hover:bg-gradient-to-l transition-all duration-300 shadow-md"
                onClick={() => setOpen(!open)}
              >
                <span>{item.label}</span>
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </button>
              {/* Subitems with animation */}
              <ul
                className={`transition-all duration-300 overflow-hidden  flex flex-col items-end mr-2 ${
                  open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <li className="w-[90%] mt-2 transition-transform duration-300 transform ease-in-out">
                  <a
                    href="#"
                    className="block py-1 px-4 rounded-full bg-blue-200 text-blue-900 hover:bg-blue-300 transition-all duration-300 shadow-sm"
                  >
                    Subitem 1
                  </a>
                </li>
                <li className="w-[90%] mt-2 transition-transform duration-300 transform ease-in-out">
                  <a
                    href="#"
                    className="block py-1 px-4 rounded-full bg-blue-200 text-blue-900 hover:bg-blue-300 transition-all duration-300 shadow-sm"
                  >
                    Subitem 2
                  </a>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
