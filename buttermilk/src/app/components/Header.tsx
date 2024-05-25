"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("home");

  const hanldeActiveTab = (activeTab: string) => setActiveTab(activeTab);
  return (
    <div className="px-5 md:px-10 py-4 flex flex-col lg:flex-row justify-between bg-white w-full items-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-400 text-white">
        Logo
      </div>
      <nav>
        <ul className="flex gap-5 items-center cursor-pointer">
          <Link href={"/"}>
            <li
              className={`${activeTab === "home" ? "bg-blue-400 shadow-lg" : "hover:border-b"} px-5 py-3`}
              onClick={() => hanldeActiveTab("home")}
            >
              Home
            </li>
          </Link>
          <Link href={"/about"}>
            <li
              className={`${activeTab === "about" ? "bg-blue-400 shadow-lg" : "hover:border-b"} px-5 py-3`}
              onClick={() => hanldeActiveTab("about")}
            >
              About
            </li>
          </Link>
          <Link href={"/"}>
            <li
              className={`${activeTab === "contact" ? "bg-blue-400 shadow-lg" : "hover:border-b"} px-5 py-3`}
              onClick={() => hanldeActiveTab("contact")}
            >
              Contact
            </li>
          </Link>
          <Link href={"/"}>
            <li
              className={`${activeTab === "features" ? "bg-blue-400 shadow-lg" : "hover:border-b"} px-5 py-3`}
              onClick={() => hanldeActiveTab("features")}
            >
              Features
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
