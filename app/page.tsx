import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="">
      <section className="relative w-full mx-auto min-h-[calc(100vh-100px)] h-full flex justify-center items-center">
        <div
          className="absolute -z-10 b h-full w-full bg-cover bg-center bg-no-repeat brightness-[90%]"
          style={{ backgroundImage: `url('/images/cyberbear.png')` }}
        ></div>
        <div className="max-w-7xl w-full translate-y-10 flex flex-col gap-3">
          <h1 className="font-bold text-5xl text-white">
            Welcome to my world of code.
          </h1>
          <p className="max-w-2xl text-[var(--color-white)]">
            As a passionate fullstack developer, I strive to create brilliant
            and unforgettable frontends that not only look amazing, but also
            function seamlessly. My expertise in Javascript and Typescript
            allows me to create dynamic and interactive user experiences, while
            my focus on frontend development ensures that the user interface is
            both intuitive and visually stunning. My passion for creating
            high-quality and functional user interfaces has led me to become a
            sought-after Javascript developer.
          </p>
        </div>
      </section>
    </main>
  );
}
