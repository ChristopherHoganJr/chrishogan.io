import React, { type FC } from "react";
import Link from "next/link";

// interface
import { NavLink } from "../../interfaces/NavigationLink";

const DesktopLink: FC<NavLink> = ({ url, title }) => {
  return (
    <Link
      href={url}
      className="h-full desktop-navlink flex items-center px-10 hover:bg-[var(--color-grey)] transition-all bg-transparent text-[var(--color-white)] hover:text-[var(--color-black)]"
    >
      {title}
    </Link>
  );
};

export default DesktopLink;
