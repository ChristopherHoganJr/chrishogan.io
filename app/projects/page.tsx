import React from "react";

// components
import ProjectBox from "../components/ui/ProjectBox";

// data
import Projects_Info from "../components/data/project_info.json";

// interface
import { ProjectInterface } from "../components/interfaces/Projects";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <section>
        <div className="max-w-7xl mx-auto">
          <div className="px-4 relative w-full h-full flex flex-col justify-end items-center min-h-[600px]">
            <div className="bg-[url('/images/bearbanner.jpg')] bg-center bg-cover bg-no-repeat h-full w-full absolute -z-10 brightness-[50%]"></div>
            <div className="px-8 mt-36 mb-4">
              <h1 className="text-5xl text-[var(--color-white)] text-center mb-4 font-bold">
                Fearless Innovation
              </h1>
              <p className="text-xl text-[var(--color-white)] text-center bg-[rgba(0,0,0,0.7)] md:bg-[rgba(0,0,0,0.3)] p-4 rounded-md">
                Being a software engineer with a passion for pushing the
                boundaries of what's possible. I pride myself on my creativity
                and ability to think outside the box, always striving to come up
                with new and innovative solutions to complex problems. I believe
                that true progress comes from taking risks and exploring
                uncharted territories, which is why I'm not content with fitting
                into the cookie-cutter definition of a software engineer.
                Instead, I'm constantly experimenting with the latest
                technologies and tools, always looking for new ways to improve
                and innovate. From cyborg bears in uncharted worlds to
                cutting-edge software solutions, I'm driven by a deep curiosity
                and a desire to push the limits of what's possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-white)]">
        <div className="max-w-7xl mx-auto ">
          <div className=" px-4 py-10">
            <h2 className="text-center text-3xl font-bold mb-5">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Projects_Info.map((e: ProjectInterface, i: number) => (
                <ProjectBox
                  key={i}
                  title={e.title}
                  logo_path={e.logo_path}
                  stack_name={e.stack_name}
                  description={e.description}
                  stack_items={e.stack_items}
                  link_url={e.link_url}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
