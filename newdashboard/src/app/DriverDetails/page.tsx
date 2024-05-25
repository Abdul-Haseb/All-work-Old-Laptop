"use client";
import { CalenderSvg, DownArrow, SearchIcon } from "@/components/UseabelIcons";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import { useState } from "react";
import TitleOfPages from "@/components/TitleOfPages";
import Model from "@/components/Model";

const tableData = [
  {
    id: "001",
    userImg: "./svgs/user.png",
    name: "Cameron Wiiiamson",
    number: 123456789,
    VehicleNum: 12345678990,
    vehicleType: "SUV",
    status: "Food Delivery",
  },
  {
    id: "001",
    userImg: "./svgs/user.png",
    name: "Cameron Wiiiamson",
    number: 123456789,
    VehicleNum: 12345678990,
    vehicleType: "SUV",
    status: "Food Delivery",
  },
];
const DriverDetails = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleOpenModel = () => setIsModelOpen(!isModelOpen);
  return (
    <div className="relative h-screen w-screen flex items-center justify-center">
      <div className="absolute z-10">
        {isModelOpen && (
          <Model handleOpenModel={handleOpenModel}>
            <h3 className="text-2xl font-bold text-gray-800 py-5">
              Add Driver Details
            </h3>
            <button
              className="absolute top-2 right-3 text-lg font-bold text-gray-800"
              onClick={handleOpenModel}
            >
              x
            </button>
            <div className="w-full h-full">
              <div className="flex justify-between gap-10">
                <div className="flex flex-col gap-4">
                  <div className="">
                    <p className="pb-2">Full Name</p>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="px-4 py-3 border outline-none rounded-lg focus:shadow-lg"
                    />
                  </div>
                  <div className="">
                    <p className="pb-2">Email</p>
                    <input
                      type="email"
                      placeholder="Email..."
                      className="px-4 py-3 border outline-none rounded-lg focus:shadow-lg"
                    />
                  </div>
                  <div className="">
                    <p className="pb-2">Password</p>
                    <input
                      type="password"
                      placeholder="Password..."
                      className="px-4 py-3 border outline-none rounded-lg focus:shadow-lg"
                    />
                  </div>
                  <div className="">
                    <p className="pb-2">Vehicle Type</p>
                    <input
                      type="text"
                      placeholder="Vehicle type..."
                      className="px-4 py-3 border outline-none rounded-lg focus:shadow-lg"
                    />
                  </div>
                  <div className="">
                    <p className="pb-2">Delivery Address</p>
                    <input
                      type="text"
                      placeholder="Delivery Address..."
                      className="px-4 py-3 border outline-none rounded-lg focus:shadow-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-40 h-40 rounded-full bg-black"></div>
                    <div>
                      <button className="px-3 py-2 rounded-lg bg-gray-900 text-white text-xl font-semibold">
                        Upload Photo
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="">
                      <p className="pb-2">Vehicle Type</p>
                      <input
                        type="text"
                        placeholder="Vehicle type..."
                        className="px-4 py-3 border outline-none rounded-lg focus:shadow-lg"
                      />
                    </div>
                    <div className="">
                      <p className="pb-2">Delivery Address</p>
                      <input
                        type="text"
                        placeholder="Delivery Address..."
                        className="px-4 py-3 border outline-none rounded-lg focus:shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="py-4">Address</p>
                <textarea
                  name=""
                  className="w-full border outline-none p-2 resize-none"
                ></textarea>
              </div>
              <div className="flex justify-end py-4">
                <div className="flex justify-between gap-4">
                  <button
                    onClick={handleOpenModel}
                    className="px-8 py-2 rounded-lg text-[#1F1F52] bg-white border border-[#1F1F52]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleOpenModel}
                    className="px-8 py-3 rounded-lg text-white bg-[#1F1F52]"
                  >
                    Subimt
                  </button>
                </div>
              </div>
            </div>
          </Model>
        )}
      </div>
      <DashboardLayout>
        <TitleOfPages
          title={"Driver Details"}
          handleOpenModel={handleOpenModel}
          button={"Driver Details"}
        />
        <div
          id="screen"
          className=" rounded-3xl p-3 bg-white flex flex-col gap-5 h-full overflow-y-auto"
        >
          <div className="flex justify-end ">
            <div className="relative">
              <input
                type="search"
                placeholder="Search"
                className="min-w-[300px] h-[50px] pl-8 text-gray-700 border rounded-md outline-none"
              />
              <div className="absolute left-2 top-3.5">
                <SearchIcon />
              </div>
            </div>
          </div>
          <div>
            <table className="w-full text-sm text-gray-700">
              <thead className="bg-gray-100 text-left">
                <tr className="rounded-2xl p-3">
                  <th className="p-3 text-sm whitespace-nowrap rounded-l-3xl">
                    Driver ID
                  </th>
                  <th className="p-3 text-sm whitespace-nowrap">Photo</th>
                  <th className="p-3 text-sm whitespace-nowrap">Name</th>
                  <th className="p-3 text-sm whitespace-nowrap">Number</th>
                  <th className="p-3 text-sm whitespace-nowrap">
                    Vehicle Number
                  </th>
                  <th className="p-3 text-sm whitespace-nowrap">
                    Vehicle Type
                  </th>
                  <th className="p-3 text-sm whitespace-nowrap rounded-r-3xl ">
                    Status
                  </th>
                </tr>
              </thead>
              {tableData.map((data) => (
                <tbody key={data.id}>
                  <tr className="border-b hover:bg-gray-100 hover:rounded-xl">
                    <td className="px-2 py-3 hover:border-r">
                      <p>{data.id}</p>
                    </td>
                    <td className="px-2 py-3 flex items-center gap-1">
                      <img
                        src={data.userImg}
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="px-2 py-3">{data.name}</td>
                    <td className="px-2 py-3">{data.number}</td>
                    <td className="px-2 py-3">{data.VehicleNum}</td>
                    <td className="px-2 py-3">{data.vehicleType}</td>
                    <td className="px-2 py-3">{data.status}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default DriverDetails;
