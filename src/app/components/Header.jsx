"use client";

import { Search, TextAlignJustify, User2Icon } from "lucide-react";
import React from "react";

export default function Header() {
  const suggest_tab = [
    {
      label: "Tất cả",
    },
    {
      label: "Phân tích dữ liệu lớn",
    },
  ];
  return (
    <div
      className={`px-3 py-2 w-full 
      bg-white
      flex flex-col gap-2
      fixed top-0`}
    >
      <div
        className={`w-full 
        flex items-center justify-between`}
      >
        <div className={`w-1/4`}>
          {/* <button
            className={`p-3 
          rounded-full
          flex justify-center items-center
          cursor-pointer
          bg-white hover:bg-gray-200
          transition-all duration-300 ease-in-out`}
          >
            <TextAlignJustify />
          </button> */}
        </div>

        <div className={`w-1/2 flex justify-center items-center`}>
          <input
            type="text"
            className={`px-4 py-2 flex-1 text-lg h-full
          rounded-l-full border`}
            placeholder="Tìm kiếm..."
          />
          <button
            className={`rounded-r-full border border-l-0
        bg-gray-100 hover:bg-gray-200
          flex justify-center items-center
          px-5 py-2 cursor-pointer h-full
          transition-all duration-300 ease-in-out`}
          >
            <Search />
          </button>
        </div>

        <div className={`w-1/4 flex justify-end`}>
          <button
            className={`p-3 
          rounded-full
          flex justify-center items-center
          cursor-pointer
          bg-white hover:bg-gray-200
          transition-all duration-300 ease-in-out`}
          >
            <User2Icon />
          </button>
        </div>
      </div>

      <div
        className={`max-w-full ps-19
        overflow-auto
        flex items-center justify-start gap-3`}
      >
        {suggest_tab.map(({ label }) => (
          <button
            key={label}
            className={`px-3 py-1 rounded-md
              flex justify-center items-center
              font-semibold cursor-pointer text-nowrap
            bg-gray-100 hover:bg-gray-200
              transition-all duration-300 ease-in-out`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
