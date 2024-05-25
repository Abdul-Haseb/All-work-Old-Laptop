import { Dots } from "./UseabelIcons";

const data = [
  {
    id: 0,
    image: "./svgs/allshipments.svg",
    total: 150,
    text: "All Shipments",
  },
  {
    id: 1,
    image: "./svgs/deliveredshipments.svg",
    total: 80,
    text: "Delivered Shipments",
  },
  {
    id: 2,
    image: "./svgs/pending.svg",
    total: 70,
    text: "Pending Shipments",
  },
];

export default function ShipmentUpdates() {
  return (
    <>
      <h2 className="text-[#464255] font-semibold text-3xl pb-10">
        Shipment Updates
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
