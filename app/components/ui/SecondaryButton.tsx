import React, { type FC } from "react";
import Link from "next/link";

// interface
import { Button } from "../interfaces/Buttons";

const SecondaryButton: FC<Button> = ({ title, url }) => {
  return (
    <Link
      href={url}
      className="text-xl border-2 text-[var(--color-black)] border-[var(--color-grey)] rounded-md py-3 px-6 bg-[var(--color-grey)] hover:border-[var(--color-white)] hover:text-[var(--color-black)] hover:bg-[var(--color-white)] transition-all"
    >
      {title}
    </Link>
  );
};

export default SecondaryButton;
