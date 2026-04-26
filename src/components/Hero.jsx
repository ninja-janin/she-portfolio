import Navbar from './Navbar';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
      <Navbar />
      <div className="hero-left">
        <h1 className="hero-headline hero-animate-1">
          Optimizing business<br/>
          <em>systems</em> with smart<br/>
          tech &amp; <em>automation</em>
        </h1>
        <p className="hero-sub hero-animate-2">
          I help entrepreneurs and businesses simplify workflows,
          manage CRMs, and leverage automation tools to achieve
          efficient growth.
        </p>
        <a href="#contact" className="hero-btn hero-animate-3">Work with me</a>
      </div>
      <div className="hero-right hero-animate-4">
        <img src="/images/client1.jpg" alt="Sherry Astorga" />
      </div>
      </div>
    </section>
  );
}
