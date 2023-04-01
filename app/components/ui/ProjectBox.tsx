import React, { type FC } from "react";
import Link from "next/link";

// components
import PrimaryButton from "./PrimaryButton";

// interface
import { ProjectInterface } from "../interfaces/Projects";

const ProjectBox: FC<ProjectInterface> = ({
  title,
  logo_path,
  stack_name,
  stack_items,
  link_url,
}) => {
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-8 justify-between border-2 border-[var(--color-black)] rounded-md">
      <h3 className="text-3xl font-semibold text-center">{title}</h3>
      {logo_path ? (
        <img
          src={`/images/project-icons/${logo_path}`}
          alt={`${title} logo`}
          className="w-auto h-[90px]"
        />
      ) : (
        <p className="font-bold text-xl py-2 px-6 border-2 border-[var(--color-black)]">
          No Logo
        </p>
      )}

      <div>
        <h4 className="text-xl font-semibold text-center">{stack_name}</h4>
        <ul className="">
          {stack_items.map((e: string, i: number) => (
            <li key={i} className="text-center">
              {e}
            </li>
          ))}
        </ul>
      </div>

      <PrimaryButton title={title} url={link_url} />
    </div>
  );
};

export default ProjectBox;
