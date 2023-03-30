import React, { type FC } from "react";

// components
import Navbar from "./Navbar";

const Header: FC = () => {
  return (
    <header className="sticky z-50 top-0 bg-[var(--color-black)] drop-shadow-md">
      <Navbar />
    </header>
  );
};

export default Header;
