import React from "react";

export default function Home() {
  return (
    <main className='bg-[var(--color-white)]'>
      <section>
        <div className='max-w-7xl mx-auto'>
          <div>
            <p className='px-4'>
              I am a software engineer with a passion for pushing the boundaries
              of what's possible. I pride myself on my creativity and ability to
              think outside the box, always striving to come up with new and
              innovative solutions to complex problems. I believe that true
              progress comes from taking risks and exploring uncharted
              territories, which is why I'm not content with fitting into the
              cookie-cutter definition of a software engineer. Instead, I'm
              constantly experimenting with the latest technologies and tools,
              always looking for new ways to improve and innovate. From cyborg
              bears in uncharted worlds to cutting-edge software solutions, I'm
              driven by a deep curiosity and a desire to push the limits of
              what's possible.
            </p>
            <div className="bg-[url('/images/bearbanner.jpg')] w-full h-[600px] bg-cover bg-center  bg-no-repeat"></div>
            <p className='px-4'>
              I specialize in building web applications using a variety of
              programming languages, including but not limited to Java,
              JavaScript, TypeScript, and Python. I am proficient in various
              frameworks such as Flask, Spring Boot, and Next.js, and I have
              extensive experience working with popular databases such as
              MongoDB, SQL, MySQL, and SQLite. Additionally, I am constantly
              expanding my skillset and staying up-to-date with the latest
              technologies in the industry. I completed a rigorous coding
              bootcamp where I tackled a new stack each month, so learning new
              things is not a problem. With my diverse range of skills and
              experience, I am confident in my ability to deliver high-quality
              web applications that meet and exceed my clients' expectations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
