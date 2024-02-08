"use client";

import Header from "@/components/Shared/Header";
import Sidebar from "@/components/Shared/Sidebar";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setSidebarIsOpen(false);
      } else {
        setSidebarIsOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Sidebar setSidebar={setSidebarIsOpen} sidebarIsOpen={sidebarIsOpen} />
      <div
        className={`${
          sidebarIsOpen
            ? "w-full xl:w-[calc(100%-300px)] xl:ml-[300px]"
            : "w-full"
        }`}
      >
        <Header setSidebar={setSidebarIsOpen} sidebarIsOpen={sidebarIsOpen} />
        <div className="pt-28 px-4 md:px-8">{children}</div>
      </div>
    </div>
  );
}
