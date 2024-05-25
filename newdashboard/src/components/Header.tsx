import { SearchIcon, SettingAndNotifcation } from "./UseabelIcons";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ toggleSideBar }: any) => {
  return (
    <div className="flex-1  px-10 pt-5">
      {/* HEADER  */}
      <header className="flex items-center gap-10">
        <button className="block lg:hidden" onClick={toggleSideBar}>
          <RxHamburgerMenu />
        </button>
        {/* SearchBar  */}
        <div className="relative bg-red-50 flex-1">
          <input
            type="search"
            placeholder="Search here..."
            className="flex-1 pl-5 pr-10 py-2 text-gray-500 w-full relative outline-none shadow-md rounded-md"
          />
          <div className="absolute right-4 top-2 text-gray-100">
            <SearchIcon />
          </div>
        </div>

        <div className="flex items-center gap-5">
          {/* Setting and notification Icon  */}
          <div className="border-r pr-8 border-gray-300">
            <SettingAndNotifcation />
          </div>

          {/* Name and Profile Picture  */}
          <div className="flex items-center gap-4 text-gray-500">
            <p>Hello, Hammad</p>
            <div>
              <img src="./svgs/avatar.png" alt="" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
