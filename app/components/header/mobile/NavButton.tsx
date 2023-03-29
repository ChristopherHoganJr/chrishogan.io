"use client";
import React, { type FC, useState } from "react";

const NavButton: FC = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <div
      className={`flex bg-blue-200 transition-all gap-2 flex-col justify-center p-3 overflow-hidden md:hidden`}
      onClick={() => setNavOpen(!navOpen)}
    >
      <div
        className={`transition-all bg-black h-[3px] w-10 ${
          navOpen ? "rotate-45 translate-y-[11px]" : ""
        }`}
      ></div>
      <div
        className={`transition-all bg-black h-[3px] w-10 ${
          navOpen ? "opacity-0 translate-x-10" : "opacity-1"
        }`}
      ></div>
      <div
        className={`transition-all bg-black h-[3px] w-10 ${
          navOpen ? "-rotate-45 -translate-y-[11px]" : ""
        }`}
      ></div>
    </div>
  );
};

export default NavButton;
