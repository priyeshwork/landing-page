import Image from "next/image";
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PageTransition from './components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col w-full">
        <HeroSection />
        <AboutSection />
      </div>
    </PageTransition>
  );
}
