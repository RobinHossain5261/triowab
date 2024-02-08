import React, { Dispatch, SetStateAction } from "react";
import user from "@/../public/images/user.png";
import Image from "next/image";

const Header = ({
  setSidebar,
  sidebarIsOpen,
}: {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
}) => {
  return (
    <div
      className={`fixed bg-white shadow-sm flex gap-2 items-center justify-between z-[100] left-0  right-0 py-4 px-4 md:px-8 ${
        sidebarIsOpen
          ? "w-full xl:w-[calc(100%-300px)] xl:ml-[300px]"
          : "w-full"
      }`}
    >
      <div
        onClick={() => setSidebar((prev) => !prev)}
        className={`w-10 h-10 sm:w-12 sm:h-12 `}
      >
        <span className="material-symbols-outlined !text-3xl text-p1 cursor-pointer">
          menu
        </span>
      </div>
      <div className="flex items-center gap-3 md:gap-6">
        <span className="material-symbols-outlined text-black cursor-pointer">
          sms
        </span>
        <span className="material-symbols-outlined text-black cursor-pointer">
          report
        </span>
        <span className="material-symbols-outlined text-black cursor-pointer">
          notifications
        </span>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image className="w-8 h-8 rounded-full" src={user} alt="user" />
          <span className="text-black text-sm hidden md:block">
            Md. Hedayet Ullah
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
