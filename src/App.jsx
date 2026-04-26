import useScrollReveal from './hooks/useScrollReveal';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Tools from './components/Tools';
import Process from './components/Process';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default function App() {
  useScrollReveal();
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Services />
      <FeaturedWork />
      <Portfolio />
      <Testimonials />
      <Tools />
      <Process />
      <CTA />
      <FAQ />
      <Contact />
    </main>
  );
}
