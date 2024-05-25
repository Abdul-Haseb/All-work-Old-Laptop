import Image from "next/image";

const processData = [
  {
    image: "/images/process1.png",
    process: "Step 1",
    title: "Buttermilk farm produces.",
    desc: "We produce healthy 100% organic dairy products for your table",
  },
  {
    image: "/images/process2.png",
    process: "Step 2",
    title: "Choose your products.",
    desc: "Select your products from our shop and place your order.",
  },
  {
    image: "/images/process3.png",
    process: "Step 3",
    title: "We will deliver for free.",
    desc: "Depending on the delivery method you choose we can deliever for free.",
  },
];

const HowToOrder = () => {
  return (
    <div className="px-5 md:px-10 my-20">
      <h3 className="text-neutral-700 font-bold text-2xl text-center">
        How to order
      </h3>
      <div className="w-10 h-1 rounded-lg mx-auto bg-blue-400 my-2" />
      <div className="flex flex-wrap justify-center items-center mt-5 gap-10">
        {processData.map((data, index) => (
          <div
            key={index}
            className="border flex flex-col text-center  rounded-2xl items-center w-full md:max-w-sm px-4 py-8 text-blue-400 hover:text-white hover:bg-blue-400 hover:scale-105 hover:cursor-pointer hover:shadow-xl bg-gray-50 transition-all duration-300 ease-in "
          >
            <Image src={data.image} alt="process" width={300} height={300} />
            <h4 className="text-2xl font-semibold py-6">{data.process}</h4>
            <p className="txt-sm pb-2">{data.title}</p>
            <p className="text-sm">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToOrder;
