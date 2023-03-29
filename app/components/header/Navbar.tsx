import React, { type FC } from "react";
import Link from "next/link";

// components
import DesktopLink from "./desktop/DesktopLink";
import NavButton from "./mobile/NavButton";

const Navbar: FC = () => {
  return (
    <nav className="h-[80px] flex items-center ">
      <div className="flex justify-between max-w-7xl mx-auto w-full px-4">
        <div className="flex justify-center items-center">
          <h1>ChrisHogan.io</h1>
        </div>
        <div className="md:flex gap-4 py-2 hidden">
          <DesktopLink url="/" title="About" />
          <DesktopLink url="/" title="Projects" />
          <DesktopLink url="/" title="Education" />
        </div>
        <NavButton />
      </div>
    </nav>
  );
};

export default Navbar;
