import Distrutebuted from "@/components/Chart/Distrutebuted";
import LineChart from "@/components/Chart/LineChart";
import SmallCard from "@/components/Pages/Dashboard/SmallCard";
import TopProducts from "@/components/Pages/Dashboard/TopProducts";

const Dashboard = () => {
  return (
    <div>
      <SmallCard />
      <div className="grid gap-7 grid-cols-12 mt-8">
        <div className="bg-white  pt-7 px-7 rounded-xl col-span-12 xxl:col-span-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg text-g900  font-bold">
              Day Wise Sales Report
            </h4>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button">
                <span className="material-symbols-outlined text-[#030229]/30">
                  more_horiz
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box min-w-max"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <LineChart />
        </div>
        <div className="bg-white pt-7 px-7 rounded-xl col-span-12 xxl:col-span-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg text-g900  font-bold">
              Day Wise Sales Report
            </h4>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button">
                <span className="material-symbols-outlined text-[#030229]/30">
                  more_horiz
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box min-w-max"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <Distrutebuted />
        </div>
      </div>
      <div className="mt-7">
        <TopProducts />
      </div>
    </div>
  );
};

export default Dashboard;
