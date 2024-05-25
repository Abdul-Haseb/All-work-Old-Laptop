"use client";
import React, { useState } from "react";
import SideNav from "../SideNav";
import Header from "../Header";

const DashboardLayout = ({ children }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSideBar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div className="flex w-full h-screen bg-[#DDF2FB]">
      <SideNav isSidebarOpen={isSidebarOpen} toggleSideBar={toggleSideBar} />
      <div className="flex flex-col flex-1 py-5">
        <Header
          title={"Dashboard"}
          toggleSideBar={toggleSideBar}
          isSidebarOpen={isSidebarOpen}
        />
        <div
          id="screen"
          className="min-h-fit py-5 overflow-y-auto lg:mx-10 rounded-md"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
