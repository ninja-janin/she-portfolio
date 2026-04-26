import './CTA.css';

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-photo-col" data-reveal="left">
        <img src="/images/sherry-hero.jpg" alt="Sherry Astorga" />
      </div>
      <div className="cta-content-col">
        <blockquote className="cta-quote" data-reveal data-delay="1">
          "A great Technical Virtual Assistant doesn't just manage tasks, they build systems
          that let businesses run smarter, faster, and stronger."
        </blockquote>
        <div className="cta-box" data-reveal data-delay="2">
          <p className="cta-box-title">Ready to simplify your business systems and scale with ease?</p>
          <p className="cta-box-text">
            Book a free 30-minute call and discover how I can streamline your business with
            CRM management, tech support, and automation, so you can focus on growth.
          </p>
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="cta-btn">
            Book A Call With Me
          </a>
        </div>
      </div>
    </section>
  );
}
