"use client";

import React from "react";
import Header from "./Header";

export default function ClientLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="pt-15 pl-17">{children}</main>
    </div>
  );
}
