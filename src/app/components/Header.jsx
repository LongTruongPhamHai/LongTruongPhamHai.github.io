"use client";

import { Search, TextAlignJustify, User2Icon } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div
      className={`h-15 w-full px-3 
      shadow-lg bg-white
      flex items-center justify-between
      fixed top-0`}
    >
      <div className={`w-1/4`}>
        <button
          className={`p-3 
          rounded-full
          flex justify-center items-center
          cursor-pointer
          bg-white hover:bg-gray-200
          transition-all duration-300 ease-in-out`}
        >
          <TextAlignJustify />
        </button>
        {/* <div
        className={`h-full p-3 
        border-r-3 border-black
        flex justify-center items-center
        cursor-pointer
        text-center uppercase font-bold text-nowrap text-xl
        `}
      >
        TruongPhamHaiLong's page
      </div> */}
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
  );
}
