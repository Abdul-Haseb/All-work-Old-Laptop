const data = [
  {
    id: 0,
    image: "./svgs/totalorders.svg",
    total: 75,
    text: "Total Orders",
    up: "4%(30 days)",
    percentage: "./svgs/percentageup.svg",
  },
  {
    id: 1,
    image: "./svgs/totaldelivered.svg",
    total: 357,
    text: "Total Delivered",
    up: "4%(30 days)",
    percentage: "./svgs/percentageup.svg",
  },
  {
    id: 3,
    image: "./svgs/totalcanceled.svg",
    total: 65,
    text: "Total Canceled",
    up: "35%(30 days)",
    percentage: "./svgs/percentagedown.svg",
  },
  {
    id: 4,
    image: "./svgs/totalrevenue.svg",
    total: "$128",
    text: "Total Revenue",
    up: "12%(30 days)",
    percentage: "./svgs/percentagedown.svg",
  },
];

export default function DashboardCards() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 pb-20">
      {data.map((cardData) => (
        <div
          key={cardData.id}
          className="bg-white py-8 px-12 rounded-lg shadow-lg flex items-start gap-4 hover:scale-105 transition-all duration-300 "
        >
          <img src={cardData.image} alt="" />
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl font-bold text-[#464255]">
              {cardData.total}
            </h3>
            <p className="text-nowrap text-gray-600">{cardData.text}</p>
            <div className="flex  items-center gap-1 text-xs text-gray-400">
              <img src={cardData.percentage} alt="" />
              <span>{cardData.up}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
