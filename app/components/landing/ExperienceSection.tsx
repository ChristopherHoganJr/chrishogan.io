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
        <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10'>
          <div>
            <p className='font-xl font-semibold text-center md:text-left'>
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
          </div>
          <div className="bg-[url('/images/codeface.png')] w-full h-full bg-cover bg-center bg-no-repeat min-h-[300px]"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
