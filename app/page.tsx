import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="">
      <section className="relative max-w-7xl mx-auto min-h-screen h-full flex justify-center items-center">
        <div
          className="absolute -z-10 b h-full w-full bg-cover bg-bottom bg-no-repeat brightness-[90%]"
          style={{ backgroundImage: `url('/images/KeyBackground.png')` }}
        ></div>
        <div className="flex justify-center items-center h-full w-full bg-blue-200">
          <h1 className="font-bold text-3xl">The key is here</h1>
        </div>
      </section>
    </main>
  );
}
