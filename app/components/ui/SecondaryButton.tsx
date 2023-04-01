import React, { type FC } from "react";
import Link from "next/link";

// interface
import { Button } from "../interfaces/Buttons";

const SecondaryButton: FC<Button> = ({ title, url }) => {
  return (
    <Link
      href={url}
      className="md:hover:-translate-y-2 md:active:translate-y-[-2px] text-xl border-2 text-[var(--color-black)] border-[var(--color-grey)] rounded-md py-3 px-6 bg-[var(--color-grey)] md:hover:border-[var(--color-white)] md:hover:text-[var(--color-black)] md:hover:bg-[var(--color-white)] transition-all"
    >
      {title}
    </Link>
  );
};

export default SecondaryButton;
