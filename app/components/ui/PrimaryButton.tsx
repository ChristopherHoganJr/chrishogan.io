import React, { type FC } from "react";
import Link from "next/link";

// interface
import { Button } from "../interfaces/Buttons";

const PrimaryButton: FC<Button> = ({ title, url }) => {
  return (
    <Link
      href={url}
      className=' hover:animate-bounce text-xl border-2 text-[var(--color-grey)] border-[var(--color-grey)] rounded-md py-3 px-6 bg-[var(--color-black)] hover:border-[var(--color-white)] hover:text-[var(--color-white)] transition-all'>
      {title}
    </Link>
  );
};

export default PrimaryButton;
