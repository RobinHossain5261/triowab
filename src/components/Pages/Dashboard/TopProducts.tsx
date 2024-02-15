import React from "react";
import { products } from "../../../../public/data/topSellingProducts";
import Image, { StaticImageData } from "next/image";

const TopProducts = () => {
  return (
    <div className="bg-white p-7 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg text-g900  font-bold">Top Selling Products </h4>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="text-[#605BFF]">
            See More
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
      <div className="overflow-x-auto">
        <table className="table whitespace-nowrap">
          <thead className="bg-white">
            <tr>
              <th className="py-5">SN</th>
              <th>Names</th>
              <th>Price</th>
              <th>Total Order</th>
              <th>Total Selles</th>
            </tr>
          </thead>
          <tbody>
            {products.map(
              (
                {
                  id,
                  name,
                  price,
                  order,
                  seles,
                  img,
                }: {
                  id: number;
                  name: string;
                  price: string;
                  order: string;
                  seles: string;
                  img: StaticImageData;
                },
                index
              ) => (
                <tr key={id} className="text-sm text-g900">
                  <td>{index + 1}</td>
                  <td className="w-max pr-2">
                    <div className="flex items-center gap-3">
                      <div className="shrink-0">
                        <Image
                          src={img}
                          alt="product"
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div className="font-semibold text-[#0068DD]">{name}</div>
                    </div>
                  </td>
                  <td>{order}</td>
                  <td>{price}</td>
                  <th className="font-normal text-p6">{seles}</th>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
