"use client";

import React, { type FC, useState } from "react";

type Colors = {
  bgColor: number;
  textColor: number;
};

const ExperienceSection: FC = () => {
  return (
    <section className='bg-[var(--color-white)]'>
      <div className='max-w-7xl mx-auto flex flex-col gap-10 py-20 px-8'>
        <h2 className='font-bold text-4xl text-[var(--color-black)] text-center'>
          Crafting Digital Experiences
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center align-middle gap-4'>
          <div className='flex flex-col gap-4'>
            <p className='text-lg font-semibold text-left'>
              As a full stack developer with expertise in Java, JavaScript,
              TypeScript, and Python, I pride myself on my ability to create
              clean, efficient code and solve complex problems with innovative
              solutions. My experience has taught me to approach development
              from both a technical and user-centered perspective, ensuring that
              the final product is both functional and intuitive. I am
              passionate about staying up to date with the latest technologies
              and techniques and constantly challenge myself by practicing
              coding challenges in my free time. Whether it's front-end design
              or back-end development, I am confident in my ability to deliver
              high-quality, scalable solutions that meet the needs of clients
              and users alike.
            </p>

            <div>
              <h3 className='text-xl font-bold text-left'>
                Some Stacks I Use:
              </h3>

              <ul>
                <li className='text-lg font-semibold text-left'>
                  Java with Spring Boot - enterprise-level applications that
                  require high performance and reliability.
                </li>
                <li className='text-lg font-semibold text-left'>
                  Python with Flask - lightweight web framework that allows
                  developers to build web applications quickly and easily.
                </li>
                <li className='text-lg font-semibold text-left'>
                  MERN - full-stack JavaScript framework that includes MongoDB,
                  Express.js, React, and Node.js.
                </li>
                <li className='text-lg font-semibold text-left'>
                  Next.js - React-based open-source framework that allows
                  developers to build server-side rendered React applications
                  with ease
                </li>
                <li className='text-lg font-semibold text-left'>
                  T3 - full-stack TypeScript framework that includes Next.js,
                  tRPC, Prisma, and NextAuth.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[url('/images/codeface.jpg')] w-full h-[600px]  bg-cover bg-center  bg-no-repeat top-32 sticky "></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
