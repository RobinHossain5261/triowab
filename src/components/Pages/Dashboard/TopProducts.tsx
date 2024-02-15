import React from "react";
import { products } from "../../../../public/data/topSellingProducts";
import Image, { StaticImageData } from "next/image";

const TopProducts = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
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
              <tr className="text-sm text-g900">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle">
                        <Image
                          src={img}
                          alt="product"
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                    </div>
                    <div className="font-semibold text-sm text-[#0068DD]">
                      {name}
                    </div>
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
  );
};

export default TopProducts;
