const Model = ({ handleOpenModel, children }: any) => {
  return (
    <div className="bg-slate-500 bg-opacity-30 flex justify-center items-center w-screen h-screen">
      <div
        id="screen"
        className="max-w-screen-lg md:h-[400px] lg:max-h-[600px] box-border z-10 bg-white p-5 rounded-l-3xl overflow-y-auto relative"
      >
        {children}
      </div>
    </div>
  );
};

export default Model;
