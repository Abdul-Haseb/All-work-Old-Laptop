import Image from "next/image";

export default function ChooseUs() {
  return (
    <div className="bg-gray-100 py-20 px-10">
      <h3 className="text-neutral-700 font-bold text-2xl text-center">
        Why to choose us?
      </h3>
      <div className="w-10 h-1 rounded-lg mx-auto bg-blue-400 my-2" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 ">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-4">
            <span className="bg-blue-600 text-white min-w-12 h-12 rounded-full flex items-center justify-center">
              1
            </span>
            <span>
              <h4 className="text-xl font-semibold text-gray-800 pb-2">
                Organic and non-GMO
              </h4>
              <p className="text-gray-700 text-sm">
                A high-performant Virtuemart template suitable for any kind of
                lobia project. We recommend building small wesites with
                Buttermilk.
              </p>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-yellow-500 text-white min-w-12 h-12 rounded-full flex items-center justify-center">
              2
            </span>
            <span>
              <h4 className="text-xl font-semibold text-gray-800 pb-2">
                Award wining quality
              </h4>
              <p className="text-gray-700 text-sm">
                Buttermilk is the perfect joomla template for your shop or
                company website.
              </p>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 text-white min-w-12 h-12 rounded-full flex items-center justify-center">
              3
            </div>
            <span>
              <h4 className="text-xl font-semibold text-gray-800 pb-2">
                Best dairy prducts
              </h4>
              <p className="text-gray-700 text-sm">
                Small niche template for building small business websites with
                just exact amount of inner pages to ease your customers.
              </p>
            </span>
          </div>
        </div>
        <div className="min-w-[300px]">
          <Image src={"/images/why.jpg"} alt="img" width={350} height={400} />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-4 text-right">
            <span>
              <h4 className="text-xl font-semibold text-gray-800 pb-2">
                Healthy and nutritious
              </h4>
              <p className="text-gray-700 text-sm">
                It got revolutionary page builder, so you can create everything
                without coding. Create responsive pages and banners super fast.
              </p>
            </span>
            <span className="bg-blue-500 text-white min-w-12 h-12 rounded-full flex items-center justify-center">
              4
            </span>
          </div>
          <div className="flex items-center gap-4 text-right">
            <span>
              <h4 className="text-xl font-semibold text-gray-800 pb-2">
                500 acres of pasture
              </h4>
              <p className="text-gray-700 text-sm">
                Buttermilk was made with 100% organic milk in our coffee cups
                while developing.
              </p>
            </span>
            <span className="bg-yellow-500 text-white min-w-12 h-12 rounded-full flex items-center justify-center">
              5
            </span>
          </div>
          <div className="flex items-center gap-4 text-right">
            <span>
              <h4 className="text-xl font-semibold text-gray-800 pb-2">
                Delivery to your door
              </h4>
              <p className="text-gray-700 text-sm">
                Add unlimited module positions or colors! Change the layout with
                ease by using the Layout builder and add your elements with the
                Page builder.
              </p>
            </span>
            <span className="bg-blue-500 text-white min-w-12 h-12 rounded-full flex items-center justify-center">
              5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
