import { CustomerGrowth, Dots, Total, Totalrevenue } from "./UseabelIcons";

export default function ProgressReport() {
  return (
    <>
      <h2 className="text-[#464255] font-semibold text-3xl pb-7">
        Progress Reports
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10">
        <div className="bg-white relative px-10 py-8 rounded-lg shadow-lg lg:w-[718px]">
          <div className="flex items-baseline justify-between">
            <h4 className="text-xl font-semibold text-gray-700">Pie Chart</h4>
            <div className="flex gap-6 justify-between items-center">
              <div>
                <input type="checkbox" name="" id="" className="mr-2" />
                <label htmlFor="">Chart</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 accent-red-400 border border-red-400"
                />
                <label htmlFor="">Show Value</label>
              </div>
              <div>
                <Dots />
              </div>
            </div>
          </div>
          <div className="flex items-center pt-5 justify-between gap-6">
            <Total />
            <CustomerGrowth />
            <Totalrevenue />
          </div>
        </div>
        <div>
          <img
            src="/svgs/card_chart_order.png"
            alt=""
            className="shadow-lg rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
