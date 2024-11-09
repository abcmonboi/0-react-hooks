import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="z-10 w-full fixed top-0 bg-white dark:bg-gray-800 p-4 shadow-md flex justify-between items-center">
      {/* Search Bar */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            name="search"
            type="text"
            placeholder="Search...(not Dev)"
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute left-0 top-0 text-blue-500">
            {/* Palm Tree Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 21V9a1 1 0 012 0v12m0 0H9m2 0h2M7.4 11c-.25 1.49.43 2.99 1.69 3.73.98.56 2.4.4 3.34.77.58.22 1.02.63 1.4 1.08.4-.54.9-1 1.5-1.3m-.34 3.29c-.46-.13-1.03-.02-1.47.35-.41.34-.66.86-.56 1.41.1.56.45.95.98 1.23"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Categories */}
      <nav className="space-x-8 text-gray-700 dark:text-gray-200">
        <Link
          href={"/"}
          className="hover:text-blue-500 dark:hover:text-blue-400"
        >
          Home
        </Link>
        <span className="hover:text-blue-500 dark:hover:text-blue-400">
          About
        </span>
        <span className="hover:text-blue-500 dark:hover:text-blue-400">
          Contact
        </span>
        <Link
          href={"/react"}
          className="hover:text-blue-500 dark:hover:text-blue-400"
        >
          React...
        </Link>
      </nav>

      {/* Toggle Button */}
      <button
        onClick={() => location.reload()}
        className="px-6 py-2 rounded-full bg-customColors-lightBlue text-white hover:bg-customColors-lightBlue dark:bg-customColors-lightBlue dark:hover:bg-blue-700 transition-all duration-300 shadow-md relative overflow-hidden group transform hover:-rotate-2 active:rotate-2 active:scale-95"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-customColors-lightBlue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        <span className="relative z-10">Refresh</span>
        <span className="absolute inset-0 w-full h-full bg-white opacity-10 transform scale-0 group-hover:scale-110 transition-transform duration-500 rounded-full"></span>
      </button>
    </header>
  );
};

export default Header;
