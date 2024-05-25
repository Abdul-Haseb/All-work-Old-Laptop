"use client";
import Link from "next/link";
import {
  CustomerDetail,
  DashBordIcon,
  DriverDetails,
  OrderList,
  Reviews,
  Shipment,
} from "./UseabelIcons";
const navLinks = [
  {
    icon: <DashBordIcon />,
    page: "Dashboard",
    link: "/Dashboard",
  },
  {
    icon: <OrderList />,
    page: "Order List",
    link: "/OrderList",
  },
  {
    icon: <Reviews />,
    page: "Reviews",
    link: "/CustomerReview",
  },
  {
    icon: <Shipment />,
    page: "Shipment",
    link: "/",
  },
  {
    icon: <CustomerDetail />,
    page: "Customer Details",
    link: "/CustomerDetails",
  },
  {
    icon: <DriverDetails />,
    page: "Driver Details",
    link: "/DriverDetails",
  },
];
import { useState } from "react";

export default function SideNav({ isSidebarOpen, toggleSideBar }: any) {
  const [active, setActive] = useState(0);
  const handleActiveTab = (getIndex: number) => setActive(getIndex);

  return (
    <div
      className={`md:w-[250px] z-10 absolute lg:relative lg:w-[300px] xl:w-[320px] h-full md:overflow-scroll lg:overflow-hidden bg-[#3D3D3D] text-white px-4 lg:px-10 py-8 lg:py-14 ${isSidebarOpen ? "block" : "hidden lg:block"}`}
    >
      <div className="flex justify-end">
        <button className="block lg:hidden" onClick={toggleSideBar}>
          X
        </button>
      </div>
      <div>
        <div className="pb-8 lg:pb-14">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            MtoH
          </h1>
          <p className="text-sm font-thin">Quick Delievery</p>
        </div>

        <div>
          {navLinks.map(({ icon, page, link }, index) => (
            <Link
              key={index}
              onClick={() => handleActiveTab(index)}
              className={` ${active === index ? "bg-blue-400" : ""} flex items-center gap-4 px-5 py-3 rounded-md transition-all duration-300 ease-in hover:scale-105 hover:font-medium`}
              href={link}
            >
              <span>{icon}</span>
              <span>{page}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-[#969BA0] text-sm absolute bottom-5 hidden lg:block">
        <p>Mtoh Delivery service Admin</p>
        <p>Dashboard</p>
        <p>© 2024 All Rights Reserved</p>
      </div>
    </div>
  );
}
