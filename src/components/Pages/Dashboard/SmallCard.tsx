import { smallCardsData } from "../../../../public/data/dashboardSmallCard";

const SmallCard = () => {
  return (
    <div>
      <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xxl:grid-cols-3 xxxl:grid-cols-4">
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
              className={`w-[50px] h-[50px] rounded-xl flex items-center justify-center ${
                color === "p1"
                  ? "bg-p1"
                  : "p3"
                  ? "bg-p3"
                  : "p4"
                  ? "bg-p4"
                  : "bg-p5"
              }`}
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
