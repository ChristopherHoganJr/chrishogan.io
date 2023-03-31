// sections
import Hero from "./components/landing/Hero";
import ExperienceSection from "./components/landing/ExperienceSection";
import ControlCharacterSection from "./components/landing/ControlCharacterSection";
import PokedexSection from "./components/landing/PokedexSection";

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <ExperienceSection />
      <div className='w-full bg-[var(--color-white)] p-4'>
        <div className=' max-w-7xl mx-auto  '>
          <div className='grid grid-cols-1 lg:grid-cols-[2fr_1fr]'>
            <PokedexSection />
            <ControlCharacterSection />
          </div>
        </div>
      </div>
    </main>
  );
}
