const smallCardsData = [
  {
    id: 1,
    title: "Today Sale",
    amount: "$15000.36",
    icon: "attach_money",
    color: "#00CFD5",
  },
  {
    id: 2,
    title: "Total Sale",
    amount: "$1005600.98",
    icon: "equalizer",
    color: "#7C6AF5",
  },
  {
    id: 3,
    title: "Stock Valuation",
    amount: "$10586.58",
    icon: "send_money",
    color: "#0061F2",
  },
  {
    id: 4,
    title: "Invoice Due",
    amount: "$10586.58",
    icon: "shopping_basket",
    color: "#EC3F69",
  },
];

const SmallCard = () => {
  return (
    <div className="min-h-screen">
      <div className="grid gap-8 grid-cols-1 xl:grid-cols-4">
        {smallCardsData.map(({ id, title, icon, color, amount }) => (
          <div
            key={id}
            className="bg-white rounded-xl px-8 py-6 flex items-center justify-between"
          >
            <div>
              <span className="text-lg text-[#A3AED0] font-medium">
                {title}
              </span>
              <h2 className="text-2xl font-bold mt-1 text-g900">{amount}</h2>
            </div>
            <div
              style={{ background: color }}
              className={`w-[50px] h-[50px] rounded-xl flex items-center justify-center`}
            >
              <span className="material-symbols-outlined !text-white">
                {icon}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallCard;
