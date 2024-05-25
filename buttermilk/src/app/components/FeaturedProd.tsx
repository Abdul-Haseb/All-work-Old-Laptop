import Image from "next/image";

const prductsData = [
  {
    image: "/images/ghee.jpg",
    title: "Grass-Fed Organic Ghee",
    price: "$11.90",
  },
  {
    image: "/images/white-cheese.jpg",
    title: "White Cheese",
    price: "$12.90",
  },
  {
    image: "/images/milk.jpg",
    title: "Milk 3.6%",
    price: "$3.90",
  },
  {
    image: "/images/yogurt-strawberry.jpg",
    title: "Yogurt Strawberry",
    price: "$3.20",
  },
];

export default function () {
  return (
    <div className="py-20 px-2 md:px-10">
      <h3 className="text-neutral-700 font-bold text-2xl text-center">
        Featured Products
      </h3>
      <div className="w-10 h-1 rounded-lg mx-auto bg-blue-400 my-2" />
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {prductsData.map((product) => (
          <div className="flex flex-col items-center gap-10">
            <Image src={product.image} alt="ghee" width={300} height={300} />
            <h4 className="text-xl text-blue-400 font-semibold">
              {product.title}
            </h4>
            <p>{product.price}</p>
            <button className="px-5 py-2 bg-blue-400 text-white rounded-3xl hover:scale-110 transition-all duration-300 ease-in">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
