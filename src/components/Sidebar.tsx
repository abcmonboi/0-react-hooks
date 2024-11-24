import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const menu = [
    {
      id: 1,
      label: "useState",
      url: "/vi/hooks/usestate",
      subItems: [
        {
          label: "Knowledge",
          url: "/vi/hooks/usestate",
        },
        {
          label: "Practice",
          url: "/vi/hooks/usestate/practice",
        },
      ],
    },
    {
      id: 2,
      label: "useEffect",
      url: "/vi/hooks/use-effect",
      subItems: [
        {
          label: "Knowledge",
          url: "/vi/hooks/use-effect",
        },
        {
          label: "Practice",
          url: "/vi/hooks/use-effect/practice",
        },
      ],
    },
    {
      id: 3,
      label: "Two-way binding",
      url: "/vi/hooks/usestate",
      subItems: [
        {
          label: "Knowledge",
          url: "/vi/hooks/twowaybinding",
        },
        {
          label: "Practice",
          url: "/vi/hooks/twowaybinding/practice",
        },
      ],
    },
    {
      id: 4,
      label: "Mounted/Unmounted",
      url: "/vi/hooks/mounted",
      subItems: [
        {
          label: "Knowledge",
          url: "/vi/hooks/mounted",
        },
        {
          label: "Practice",
          url: "/vi/hooks/mounted/practice",
        },
      ],
    },
    {
      id: 5,
      label: "UseLayoutEffect",
      url: "/vi/hooks/use-layout-effect",
      subItems: [
        {
          label: "Knowledge",
          url: "/vi/hooks/use-layout-effect",
        },
        {
          label: "Practice",
          url: "/vi/hooks/use-layout-effect/practice",
        },
      ],
    },
    {
      id: 6,
      label: "UseRef",
      url: "/vi/hooks/use-ref",
      subItems: [
        {
          label: "Knowledge",
          url: "/vi/hooks/use-ref",
        },
        {
          label: "Practice",
          url: "/vi/hooks/use-ref/practice",
        },
      ],
    },
    {
      id: 7,
      label: "useCallBack()",
      url: "/vi/hooks/use-callback",
      subItems: [
        {
          label: "Knowledge",
          url: "/vi/hooks/use-callback",
        },
        {
          label: "Practice",
          url: "/vi/hooks/use-callback/practice",
        },
      ],
    },
    {
      id: 8,
      label: "useMemo()",
      url: "/vi/hooks/use-memo",
      subItems: [
        {
          label: "Knowledge",
          url: "/vi/hooks/use-memo",
        },
        {
          label: "Practice",
          url: "/vi/hooks/use-memo/practice",
        },
      ],
    },
    {
      id: 9,
      label: "useReducer()",
      url: "/vi/hooks/use-reducer",
      subItems: [
        {
          label: "Knowledge",
          url: "/vi/hooks/use-reducer",
        },
        {
          label: "Practice",
          url: "/vi/hooks/use-reducer/practice",
        },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState<Record<string, boolean>>({}); // Track which item is open

  const toggleSubmenu = (id: number) => {
    setOpenIndex((prevIndex) => {
      const newState = { ...prevIndex };
      if (newState[id]) {
        delete newState[id];
      } else {
        newState[id] = true;
      }
      return newState;
    });
  };

  return (
    <aside className="max-w-fit w-[20vw] h-[85vh] bg-gradient-to-b from-white to-blue-100 p-6 shadow-2xl rounded-3xl border-l-4 border-blue-500 flex flex-col">
      <h1 className="text-3xl font-bold text-customColors-slate mb-4">
        React Hooks
      </h1>
      <ul className="space-y-4">
        {menu.map((item) => {
          return (
            <li key={item.label}>
              <button
                className="overflow-hidden text-ellipsis whitespace-nowrap w-full text-left py-3 px-4 flex justify-between items-center rounded-full bg-gradient-to-r from-customColors-lightBlue to-customColors-lightBlue text-white hover:bg-gradient-to-l transition-all duration-300 shadow-md"
                onClick={() => toggleSubmenu(item.id)}
              >
                <span>{item.label}</span>
                {openIndex[item.id] ? (
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
              <ul
                className={`transition-all duration-300 overflow-hidden flex flex-col items-end mr-2 ${
                  openIndex[item.id]
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.subItems.map((sub) => {
                  return (
                    <li
                      key={sub.label}
                      className="w-[90%] mt-2 text-2xl transition-transform duration-300 transform ease-in-out"
                    >
                      <Link
                        href={sub.url}
                        className="block py-1 px-4 rounded-full bg-blue-400 text-white hover:bg-blue-300 transition-all duration-300 shadow-sm"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
