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
  description,
  stack_items,
  link_url,
}) => {
  return (
    <div className="flex flex-col items-center px-4 py-8  border-2 border-[var(--color-black)] rounded-md">
      <h3 className="text-3xl font-semibold text-center mb-6">{title}</h3>
      {logo_path ? (
        <img
          src={`/images/project-icons/${logo_path}`}
          alt={`${title} logo`}
          className="w-auto h-[90px]"
        />
      ) : (
        <p className="h-[90px] font-bold text-xl flex justify-center items-center px-6 border-2 border-[var(--color-black)]">
          No Logo
        </p>
      )}

      <div className="my-4">
        <h4 className="text-xl font-semibold text-center">{stack_name}</h4>
        <p className="text-center py-4">{description}</p>
        <h3 className="text-center font-bold text-lg underline decoration-2 underline-offset-2">
          Some of the tech used:
        </h3>
        <ul className="">
          {stack_items.map((e: string, i: number) => (
            <li key={i} className="text-center">
              {e}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full flex items-end">
        <PrimaryButton title={title} url={link_url} />
      </div>
    </div>
  );
};

export default ProjectBox;
