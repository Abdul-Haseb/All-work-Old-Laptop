"use client";
import { SearchIcon } from "@/components/UseabelIcons";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import TitleOfPages from "@/components/TitleOfPages";

const tableData = [
  {
    sno: "001",
    name: "Cameron Wiiiamson",
    email: "ABC@workreel.com",
    review: "View Review",
    rating: "* * * * *",
  },

  {
    sno: "001",
    name: "Cameron Wiiiamson",
    review: "View Review",
    rating: "* * * * *",
  },
];
const DriverDetails = () => {
  return (
    <DashboardLayout>
      <TitleOfPages title={"Driver Details"} button={""} />
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
                  S.NO
                </th>
                <th className="p-3 text-sm whitespace-nowrap">Full Name</th>
                <th className="p-3 text-sm whitespace-nowrap">Email</th>
                <th className="p-3 text-sm whitespace-nowrap">Review</th>
                <th className="p-3 text-sm whitespace-nowrap">Rating</th>
              </tr>
            </thead>
            {tableData.map((data) => (
              <tbody key={data.sno}>
                <tr className="border-b hover:bg-gray-100 hover:rounded-xl">
                  <td className="px-2 py-3 hover:border-r">
                    <p>{data.sno}</p>
                  </td>

                  <td className="px-2 py-3">{data.name}</td>
                  <td className="px-2 py-3">{data.email}</td>
                  <td className="px-2 py-3">{data.review}</td>
                  <td className="px-2 py-3">{data.rating}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DriverDetails;
