"use client";

import React from "react";
import Header from "./Header";
import Menu from "./Menu";

export default function ClientLayout({ children }) {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <Menu />
      <main className="pt-15 ps-17">{children}</main>
    </div>
  );
}
