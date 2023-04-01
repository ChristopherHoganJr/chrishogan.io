"use client";

import React, { type FC } from "react";
import Link from "next/link";

// components
import DesktopLink from "./desktop/DesktopLink";
import NavButton from "./mobile/NavButton";

type NavBoolean = {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navOpen: boolean;
};

const Navbar: FC<NavBoolean> = ({ setNavOpen, navOpen }) => {
  return (
    <nav className="h-[100px] flex items-center static z-10">
      <div className="flex justify-between max-w-7xl mx-auto w-full px-4 h-full z-30 bg-[var(--color-black)]">
        <Link
          href="/"
          className="flex items-center justify-center"
          onClick={() => setNavOpen(false)}
        >
          <div className="flex justify-center items-center gap-2">
            <div className="rounded-lg bg-cover bg-bottom bg-no-repeat bg-[url('/images/logo.png')] h-[80px] w-[80px]"></div>
            <div>
              <p className="text-2xl text-[var(--color-white)]">
                ChrisHogan.io
              </p>
              <p className="text-[var(--color-green)]">Full Stack Developer</p>
            </div>
          </div>
        </Link>
        <div className="md:flex  hidden h-full">
          <DesktopLink url="/projects" title="Projects" />
          <DesktopLink
            url="https://www.hackerrank.com/cHogan"
            title="HackRank"
          />
          <DesktopLink
            url="https://www.linkedin.com/in/chrishoganjr/"
            title="LinkedIn"
          />
        </div>
        <NavButton setNavOpen={setNavOpen} navOpen={navOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
