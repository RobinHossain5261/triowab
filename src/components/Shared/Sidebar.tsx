import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import logo from "@/../public/images/logo.png";
import { sidebarmenus } from "../../../public/data/sidebarData";

const Sidebar = ({
  setSidebar,
  sidebarIsOpen,
}: {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
}) => {
  return (
    <div
      className={`w-[280px] xl:w-[300px]  overflow-y-auto shadow-sm z-[105] ${
        sidebarIsOpen ? "translate-x-0 visible" : "-translate-x-full invisible"
      } duration-500  fixed left-0 top-0 h-full bg-white shadow-md`}
    >
      <div className="flex gap-2 items-center justify-between xl:justify-center p-4 w-full bg-p1">
        <Link href="/">
          <Image className="h-12 w-[141px] shrink-0" src={logo} alt="logo" />
        </Link>
        <div className="block xl:hidden">
          <span
            onClick={() => setSidebar((prev) => !prev)}
            className="material-symbols-outlined !text-3xl text-white cursor-pointer"
          >
            close
          </span>
        </div>
      </div>
      <div className="border rounded-lg mx-4 py-2 px-4 my-5 flex items-center">
        <label
          htmlFor="search"
          className="material-symbols-outlined  text-black cursor-pointer"
        >
          search
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search"
          className="outline-none px-2 overflow-hidden text-black placeholder:text-500"
        />
      </div>
      <ul className="px-4">
        {sidebarmenus.map(
          ({
            id,
            title,
            icon,
            link,
          }: {
            id: number;
            title: string;
            icon: string;
            link: string;
          }) => (
            <li
              key={id}
              className="text-g600 hover:text-white hover:bg-p1 rounded-lg py-1 px-4"
            >
              <Link href={link} className="flex gap-3 items-center">
                <span className="material-symbols-outlined !text-3xl">
                  {icon}
                </span>
                {title}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
