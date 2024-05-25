import { Logo, StartConvBtn } from "./icons";

const SideBar = ({ ifMobile }) => {
  return (
    <>
      {ifMobile ? (
        <div className="max-w-[420px] absolute md:hidden z-10 top-0 left-0 bg-zinc-950 text-white p-8 h-screen">
          <Logo />
          <div className="mt-16">
            <button>
              <StartConvBtn />
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-[420px] hidden md:block bg-zinc-950 text-white p-8 h-screen">
          <Logo />
          <div className="mt-16">
            <button>
              <StartConvBtn />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
