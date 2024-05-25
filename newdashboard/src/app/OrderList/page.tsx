import { SearchIcon } from "@/components/UseabelIcons";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import TitleOfPages from "@/components/TitleOfPages";

const tableData = [
  {
    id: 123456789,
    id2: "FD43RD",
    userImg: "./svgs/user.png",
    name: "AbCD",
    location: "Dara adam khel peshawar Pak",
    recNum: 2345678,
    cod: 12345,
    deliveryData: "12/12/12",
    status: "Food Delivery",
  },
  {
    id: 123456789,
    id2: "FD43RD",
    userImg: "./svgs/user.png",
    name: "AbCD",
    location: "Dara adam khel peshawar Pak",
    recNum: 2345678,
    cod: 12345,
    deliveryData: "12/12/12",
    status: "Food Delivery",
  },
  {
    id: 123456789,
    id2: "FD43RD",
    userImg: "./svgs/user.png",
    name: "AbCD",
    location: "Dara adam khel peshawar Pak",
    recNum: 2345678,
    cod: 12345,
    deliveryData: "12/12/12",
    status: "Food Delivery",
  },
  {
    id: 123456789,
    id2: "FD43RD",
    userImg: "./svgs/user.png",
    name: "AbCD",
    location: "Dara adam khel peshawar Pak",
    recNum: 2345678,
    cod: 12345,
    deliveryData: "12/12/12",
    status: "Food Delivery",
  },
  {
    id: 123456789,
    id2: "FD43RD",
    userImg: "./svgs/user.png",
    name: "AbCD",
    location: "Dara adam khel peshawar Pak",
    recNum: 2345678,
    cod: 12345,
    deliveryData: "12/12/12",
    status: "Food Delivery",
  },
  {
    id: 123456789,
    id2: "FD43RD",
    userImg: "./svgs/user.png",
    name: "AbCD",
    location: "Dara adam khel peshawar Pak",
    recNum: 2345678,
    cod: 12345,
    deliveryData: "12/12/12",
    status: "Food Delivery",
  },
];
const details = [
  {
    title: "All Shipments",
    num: 1,
  },
  {
    title: "To be picked up",
    num: 1,
  },
  {
    title: "Picked up",
    num: 1,
  },
  {
    title: "To be Delivered",
    num: 1,
  },
  {
    title: "Delivered",
    num: 1,
  },
  {
    title: "Lost & Damages",
    num: 1,
  },
  {
    title: "To be returned",
    num: 1,
  },
  {
    title: "RTOS",
    num: 1,
  },
  {
    title: "Cancelled",
    num: 1,
  },
];
const OrderList = () => {
  return (
    <DashboardLayout>
      <TitleOfPages title={"Order List"} button={""} />
      <div
        id="table"
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
        <div className="flex gap-5 flex-wrap py-5">
          {details.map(({ num, title }) => (
            <div className="flex items-center gap-2">
              <span className="bg-gray-300 w-5 h-5 flex items-center justify-center text-xs rounded-full ">
                {num}
              </span>
              <span>{title}</span>
            </div>
          ))}
        </div>
        <div>
          <table className="w-full text-sm text-gray-700 ">
            <thead className="bg-gray-100 text-left">
              <tr className="rounded-2xl p-3">
                <th className="p-3 text-sm whitespace-nowrap rounded-l-3xl">
                  Tranfering ID <br /> Refrence
                </th>
                <th className="p-3 text-sm whitespace-nowrap">Shipper Name</th>
                <th className="p-3 text-sm whitespace-nowrap">Location</th>
                <th className="p-3 text-sm whitespace-nowrap">
                  Recipient Name
                </th>
                <th className="p-3 text-sm whitespace-nowrap">COD</th>
                <th className="p-3 text-sm whitespace-nowrap">Delivery Date</th>
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
                    <p className="text-xs">{data.id2}</p>
                  </td>
                  <td className="px-2 py-3 flex items-center gap-1">
                    <span>
                      <img
                        src={data.userImg}
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />
                    </span>
                    <span>{data.name}</span>
                  </td>
                  <td className="px-2 py-3">{data.location}</td>
                  <td className="px-2 py-3">{data.recNum}</td>
                  <td className="px-2 py-3">{data.cod}</td>
                  <td className="px-2 py-3">{data.deliveryData}</td>
                  <td className="px-2 py-3">{data.status}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        {/* <div>
          <table className="w-full">
            <thead className="bg-gray-100 rounded-lg ">
              <tr className="divide-x divide-gray-300 text-left">
                <th className="w-24 p-2 font-medium text-sm rounded-tl-xl">
                  Tracking ID Refrence
                </th>
                <th className="w-24 p-2 font-medium text-sm">Shipper Name</th>
                <th className="w-24 p-2 font-medium text-sm">Location</th>
                <th className="w-24 p-2 font-medium text-sm">Recipient Name</th>
                <th className="w-24 p-2 font-medium text-sm">CDD</th>
                <th className="w-24 p-2 font-medium text-sm">Delivery Date</th>
                <th className="w-24 p-2  font-medium text-sm rounded-tr-xl">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700 ...">Indiana</td>
                <td className="border border-slate-700 ...">Indianapolis</td>
              </tr>
              <tr>
                <td className="border border-slate-700 ...">Ohio</td>
                <td className="border border-slate-700 ...">Columbus</td>
              </tr>
              <tr>
                <td className="border border-slate-700 ...">Michigan</td>
                <td className="border border-slate-700 ...">Detroit</td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
    </DashboardLayout>
  );
};

export default OrderList;
