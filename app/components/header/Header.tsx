"use client";
import Link from "next/link";

import React, { type FC, useState } from "react";

// components
import Navbar from "./Navbar";

const Header: FC = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <header className='sticky z-20 relative top-0 bg-[var(--color-black)] drop-shadow-md h-full'>
      <Navbar setNavOpen={setNavOpen} navOpen={navOpen} />
      <div
        className={`absolute flex flex-col gap-3 z-10 w-full  bg-[var(--color-black)] top-0 left-0 right-0 py-5 md:hidden ${
          navOpen
            ? "translate-y-[99px] opacity-1"
            : "-translate-y-[100%] opacity-0"
        } transition-all`}>
        <div className='flex justify-center items-center px-4 '>
          {" "}
          <Link
            href='/projects'
            className='py-5 text-[var(--color-grey)] text-xl font-bold w-full h-full text-center rounded-md border-2 border-[var(--color-green)]'
            onClick={() => setNavOpen(!navOpen)}>
            Projects
          </Link>
        </div>

        <div className='flex justify-center items-center px-4 '>
          {" "}
          <Link
            href='https://github.com/ChristopherHoganJr'
            className='py-5 text-[var(--color-grey)] text-xl font-bold w-full h-full text-center rounded-md border-2 border-[var(--color-green)]'>
            Github
          </Link>
        </div>

        <div className='flex justify-center items-center px-4 '>
          {" "}
          <Link
            href='https://www.linkedin.com/in/chrishoganjr/'
            className='py-5 text-[var(--color-grey)] text-xl font-bold w-full h-full text-center rounded-md border-2 border-[var(--color-green)]'>
            Linkedin
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
