"use client";

import {
  Folder,
  House,
  Newspaper,
  TextAlignJustify,
  UserIcon,
} from "lucide-react";
import React, { useState } from "react";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menus = [
    {
      label: "Trang chủ",
      icon: <House className="min-h-7 min-w-7" />,
    },
    {
      label: "Dự án",
      icon: <Folder className="min-h-7 min-w-7" />,
    },
    {
      label: "Blog",
      icon: <Newspaper className="min-h-7 min-w-7" />,
    },
  ];
  return (
    <div>
      <div
        className={`h-full py-2
        bg-white 
        flex flex-col 
        fixed top-0 bottom-0 left-0`}
      >
        <button
          className={`p-3 ms-4.5 w-fit
          rounded-full
          flex justify-center items-center
          cursor-pointer
          bg-white hover:bg-gray-200
          transition-all duration-300 ease-in-out`}
          onClick={() => setMenuOpen(true)}
        >
          <TextAlignJustify />
        </button>

        <div
          className={`mt-2 w-full
        flex flex-col gap-2 items-center`}
        >
          {menus.map(({ label, icon }) => (
            <button
              key={label}
              className={`p-3 w-[90%]
            rounded-lg
            flex flex-col justify-center items-center gap-1
            cursor-pointer text-nowrap text-sm
            bg-white hover:bg-gray-200
            transition-all duration-300 ease-in-out`}
            >
              {icon} {label}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`bg-black opacity-40 
          fixed top-0 bottom-0 left-0 right-0
          ${menuOpen ? "flex" : "hidden"}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        className={`h-full w-full py-2 
        bg-white 
          flex flex-col
          fixed top-0 bottom-0 left-0
          ${
            menuOpen ? "max-w-60 overflow-auto" : "max-w-0 overflow-hidden px-0"
          }
          transition-all duration-300 ease-in-out`}
      >
        <button
          className={`p-3 w-fit ms-4.5
            rounded-full
            flex justify-center items-center
            cursor-pointer
            bg-white hover:bg-gray-200
            transition-all duration-300 ease-in-out`}
          onClick={() => setMenuOpen(false)}
        >
          <TextAlignJustify />
        </button>

        <div
          className={`mt-2 w-full px-3
            flex flex-col gap-2 items-center`}
        >
          {menus.map(({ label, icon }) => (
            <button
              key={label}
              className={`px-3 py-2 w-full
                rounded-lg
                flex items-center gap-3
                cursor-pointer text-nowrap text-md
                bg-white hover:bg-gray-200
                transition-all duration-300 ease-in-out`}
            >
              {icon} {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
