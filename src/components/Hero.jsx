import Navbar from './Navbar';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <Navbar />
      <div className="hero-left">
        <h1 className="hero-headline">
          Optimizing business<br/>
          <em>systems</em> with smart<br/>
          tech &amp; <em>automation</em>
        </h1>
        <p className="hero-sub">
          I help entrepreneurs and businesses simplify workflows,
          manage CRMs, and leverage automation tools to achieve
          efficient growth.
        </p>
        <a href="#contact" className="hero-btn">Work with me</a>
      </div>
      <div className="hero-right">
        <img src="/images/sherry-hero.jpg" alt="Sherry Astorga" />
      </div>
    </section>
  );
}
