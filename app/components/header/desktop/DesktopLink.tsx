import React, { type FC } from "react";
import Link from "next/link";

// interface
import { NavLink } from "../../interfaces/NavigationLink";

const DesktopLink: FC<NavLink> = ({ url, title }) => {
  return (
    <Link href={url} className="py-2 px-5 bg-blue-200 rounded">
      {title}
    </Link>
  );
};

export default DesktopLink;
