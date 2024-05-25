import Image from "next/image";

export default function Stores() {
  return (
    <div className="px-2 md:px-10 py-20 bg-gradient-to-b from-yellow-300 to-yellow-500 flex flex-col md:flex-row gap-10 items-center justify-center">
      <div className="min-w-[300px]">
        <Image
          src={"/images/bottles.png"}
          width={350}
          height={350}
          alt="milk bottle"
        />
      </div>
      <div>
        <h5 className="text-white text-2xl font-bold">Shop Online Now!</h5>
        <p className="text-sm text-gray-800 pt-10">
          In our online store, you can order all of the products that we produce
          in Buttermilk organic dairy farm. You can choose free delivery or you
          can pickup your basket directly from our stores.
        </p>
        <p className="py-10 text-sm text-gray-800">
          Each month we have different promotions that you can choose from.
        </p>
        <p className="text-sm text-gray-800 pb-10">
          ButterMilk template comes with visual page builder with more than 40
          shortcodes which makes the building of your site easy as pie!
        </p>
        <button className="px-6 py-3 hover:bg-white hover:text-blue-500 bg-blue-500 transition-all duration-300 ease-in hover:scale-110 text-white rounded-3xl font-semibold text-lg">
          Browse Products
        </button>
      </div>
      <div>
        <h5 className="text-white text-2xl font-bold">Visit Our Stores!</h5>
        <p className="text-sm text-gray-800 pt-10">
          If you are interested in what we have to offer you can visit our
          store, located in different places accross Bulgaria. You can taste any
          of the products that we produce, just visit any of our stores.
        </p>
        <p className="py-10 text-sm text-gray-800">
          We also provide a subscription box, which can be picked up from our
          stores.
        </p>
        <p className="text-sm text-gray-800 pb-10">
          ButterMilk template offers a custom Virtuemart styling for your online
          store. Browse through the pages to see all features.
        </p>
        <button className="px-6 py-3 hover:bg-blue-500 hover:text-white  text-blue-500 bg-white transition-all duration-300 ease-in hover:scale-110 rounded-3xl font-semibold text-lg">
          Locate Stores
        </button>
      </div>
    </div>
  );
}
