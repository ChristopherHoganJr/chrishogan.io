import React, { type FC } from "react";
import Link from "next/link";

// interface
import { NavLink } from "../../interfaces/NavigationLink";

const DesktopLink: FC<NavLink> = ({ url, title }) => {
  return (
    <Link
      href={url}
      className="relative h-full desktop-navlink flex items-center px-10  transition-all bg-[var(--color-black)] text-[var(--color-white)] hover:text-[var(--color-black)] group"
    >
      {title}
      <div className="absolute bg-[var(--color-green)] h-full w-full transition-all left-0 desktop-navlink -z-10 -translate-x-[100%] group-hover:-translate-x-0"></div>
    </Link>
  );
};

export default DesktopLink;
