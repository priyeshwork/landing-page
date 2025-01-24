import Hero from './components/hero';
import About from './components/about';
import PageTransition from './components/transition/PageTransition';
import Footer from './components/footer';
import { SECTION_IDS } from '@/constants';

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col w-full">
        <div id={SECTION_IDS.hero}>
          <Hero />
        </div>
        <div id={SECTION_IDS.about}>
          <About />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
}
