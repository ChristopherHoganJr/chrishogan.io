"use client";
import React, { type FC, useState } from "react";

type NavBoolean = {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navOpen: boolean;
};

const NavButton: FC<NavBoolean> = ({ setNavOpen, navOpen }) => {
  return (
    <div
      className={`flex transition-all gap-2 flex-col justify-center p-3 overflow-hidden md:hidden cursor-pointer`}
      onClick={() => setNavOpen(!navOpen)}
    >
      <div
        className={`transition-all  h-[3px] w-10 ${
          navOpen
            ? "rotate-45 translate-y-[11px] opacity-1 bg-[var(--color-red)]"
            : "opacity-1 bg-[var(--color-green)]"
        }`}
      ></div>
      <div
        className={`transition-all  h-[3px] w-10 ${
          navOpen
            ? "opacity-0 translate-x-10"
            : "opacity-1 bg-[var(--color-green)]"
        }`}
      ></div>
      <div
        className={`transition-all h-[3px] w-10 ${
          navOpen
            ? "-rotate-45 -translate-y-[11px] opacity-1 bg-[var(--color-red)]"
            : "opacity-1 bg-[var(--color-green)]"
        }`}
      ></div>
    </div>
  );
};

export default NavButton;
