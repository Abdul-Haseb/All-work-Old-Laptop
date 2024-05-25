import React from "react";
import { CalenderSvg, DownArrow } from "./UseabelIcons";

const TitleOfPages = ({ title, button, handleOpenModel }: any) => {
  return (
    <div className="flex justify-between text-gray-500 px-1 items-baseline py-5 bg-[#DDF2FB]">
      <h2 className="text-[#464255] font-semibold text-3xl">{title}</h2>
      <div className="flex items-center gap-6">
        {button !== "" && (
          <button
            onClick={handleOpenModel}
            className={`bg-[#46A6FF] px-5 py-3 rounded-md shadow-md hover:scale-105 transition-all duration-300 text-white`}
          >
            {button}
          </button>
        )}
        <div className="flex bg-white px-5 py-3 shadow-md rounded-md outline-none gap-4 items-center">
          <span className="bg-blue-100 rounded-md">
            <CalenderSvg />
          </span>
          <span className="flex flex-col text-xs">
            <span>Filter Periode</span>
            <span>17 April 2020 - 21 May 2020</span>
          </span>
          <span>
            <DownArrow />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TitleOfPages;
