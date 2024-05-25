import { Dots } from "./UseabelIcons";

const data = [
  {
    id: 0,
    image: "./svgs/drivers.svg",
    total: 50,
    text: "All Drivers",
  },
  {
    id: 1,
    image: "./svgs/staff.svg",
    total: 20,
    text: "All Staff",
  },
  {
    id: 2,
    image: "./svgs/customers.svg",
    total: 150,
    text: "All Customers",
  },
];

export default function GeneralUpdateCards() {
  return (
    <>
      <h2 className="text-[#464255] font-semibold text-3xl pb-10">
        General Updates
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10 mx-auto pb-20">
        {data.map((cardData) => (
          <div
            key={cardData.id}
            className="bg-white relative px-10 py-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="absolute top-2 right-3">
              <Dots />
            </div>
            <div className="flex items-center justify-center gap-16">
              <div>
                <h3 className="text-4xl font-bold text-[#464255]">
                  {cardData.total}
                </h3>
                <p className="text-gray-700">{cardData.text}</p>
              </div>
              <div>
                <img src={cardData.image} alt="image" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
