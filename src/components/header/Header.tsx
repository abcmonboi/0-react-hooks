import Link from "next/link";
import React from "react";
import Search from "@/components/header/Search";

const Header = () => {
  return (
    <header className="z-10 w-full fixed top-0 bg-white dark:bg-gray-800 p-4 shadow-md flex justify-between items-center">
      {/* Search Bar */}
      <Search />

      {/* Categories */}
      <nav className="space-x-8 text-gray-700 dark:text-gray-200">
        <Link
          href={"/vi/"}
          className="hover:text-blue-500 dark:hover:text-blue-400"
        >
          Home
        </Link>
        <Link
          href={"/vi/lessons"}
          className="hover:text-blue-500 dark:hover:text-blue-400"
        >
          Lessons
        </Link>
        <Link
          href={"/vi/testing"}
          className="hover:text-blue-500 dark:hover:text-blue-400"
        >
          Testing...
        </Link>

        <Link
          href={"/vi/react"}
          className="hover:text-blue-500 dark:hover:text-blue-400"
        >
          React...
        </Link>
        <Link
          href={"/vi/html"}
          className="hover:text-blue-500 dark:hover:text-blue-400"
        >
          Html...
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
