import Image from "next/image";
import styles from "./page.module.css";

// components
import PrimaryButton from "./components/ui/PrimaryButton";
import SecondaryButton from "./components/ui/SecondaryButton";

export default function Home() {
  return (
    <main className="">
      <section className="relative w-full mx-auto min-h-[calc(100vh-100px)]  h-full flex justify-center items-center md:items-end">
        <div
          className="absolute -z-10 b h-full w-full bg-cover bg-center bg-no-repeat brightness-[50%] "
          style={{ backgroundImage: `url('/images/cyberbear.png')` }}
        ></div>
        <div className="max-w-7xl w-full flex flex-col justify-center items-center gap-5  px-4 md:px-10 pt-24 pb-[150px] md:items-end ">
          <h1 className="font-bold text-5xl text-white text-center md:text-end">
            Hi, I&apos;m Chris
          </h1>
          <p className="max-w-2xl text-[var(--color-white)] text-lg text-center font-semibold md:text-end">
            I am a full-stack developer who is passionate about creating
            interactive and unforgettable user experiences. My love for video
            games has influenced my development style, and I strive to make
            every project as engaging and immersive as possible. With a focus on
            both front-end and back-end development, I am able to bring my ideas
            to life and create applications that truly stand out from the crowd.
          </p>
          <div className="h-full flex items-center justify-center gap-4 mt-2">
            <PrimaryButton title="Projects" url="/projects" />
            <SecondaryButton title="Contact Me" url="/contact" />
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-white)]">
        <h2 className="font-bold text-5xl text-[var(--color-black)] text-center">
          Crafting Digital Experiences
        </h2>
        <div>
          <p>
            As a full stack developer with expertise in Java, JavaScript,
            TypeScript, and Python, I pride myself on my ability to create
            clean, efficient code and solve complex problems with innovative
            solutions. My experience has taught me to approach development from
            both a technical and user-centered perspective, ensuring that the
            final product is both functional and intuitive. I am passionate
            about staying up to date with the latest technologies and techniques
            and constantly challenge myself by practicing coding challenges in
            my free time. Whether it's front-end design or back-end development,
            I am confident in my ability to deliver high-quality, scalable
            solutions that meet the needs of clients and users alike.
          </p>
          <div></div>
        </div>
      </section>
    </main>
  );
}
