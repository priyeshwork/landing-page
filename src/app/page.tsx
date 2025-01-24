import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PageTransition from './components/PageTransition';
import Footer from './components/Footer';

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col w-full">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
}
