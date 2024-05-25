"use client";
import { SearchIcon } from "@/components/UseabelIcons";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import TitleOfPages from "@/components/TitleOfPages";
import { AiFillDelete } from "react-icons/ai";
import { FaUnlock } from "react-icons/fa";
import { useState } from "react";
import Model from "@/components/Model";

const tableData = [
  {
    userid: "001",
    userimg: "/svgs/user.png",
    name: "Cameron Wiiiamson",
    address: "ABC@workreel street abc",
    num: "1234567",
  },

  {
    userid: "001",
    userimg: "/svgs/user.png",
    name: "Cameron Wiiiamson",
    address: "ABC workreel street abc",
    num: "1234567",
  },
];
const CustomerDetails = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleOpenModel = () => setIsModelOpen(!isModelOpen);
  return (
    <div className="relative h-screen w-screen flex items-center justify-center">
      <div className="absolute z-10">
        {isModelOpen && (
          <Model handleOpenModel={handleOpenModel}>
            <h3 className="text-2xl font-bold text-gray-800 py-5">
              Add Customer Details
            </h3>
            <button
              className="absolute top-2 right-3 text-lg font-bold text-gray-800"
              onClick={handleOpenModel}
            >
              x
            </button>
            <div className="w-full h-full">
              <div className="grid grid-cols-2 gap-20 items-center">
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
                  <div className="flex flex-col items-center gap-20">
                    <div className="w-40 h-40 rounded-full bg-black"></div>
                    <button className="px-3 py-2 rounded-lg bg-gray-900 text-white text-xl font-semibold">
                      Upload Photo
                    </button>
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
          title={"Add Customer Details"}
          button={"Add Customer Details"}
          handleOpenModel={handleOpenModel}
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
                    User.ID
                  </th>
                  <th className="p-3 text-sm whitespace-nowrap">Photo</th>
                  <th className="p-3 text-sm whitespace-nowrap">Full Name</th>
                  <th className="p-3 text-sm whitespace-nowrap">Address</th>
                  <th className="p-3 text-sm whitespace-nowrap">
                    Phone number
                  </th>
                  <th className="p-3 text-sm whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              {tableData.map((data) => (
                <tbody key={data.userid}>
                  <tr className="border-b hover:bg-gray-100 hover:rounded-xl">
                    <td className="px-2 py-3 hover:border-r">
                      <p>{data.userid}</p>
                    </td>
                    <td className="px-2 py-3">
                      <img
                        src={data.userimg}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                    </td>

                    <td className="px-2 py-3">{data.name}</td>
                    <td className="px-2 py-3">{data.address}</td>
                    <td className="px-2 py-3">{data.num}</td>
                    <td className="px-2 py-3">
                      <div className="flex items-center gap-3">
                        <AiFillDelete />
                        <FaUnlock />
                      </div>
                    </td>
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

export default CustomerDetails;
