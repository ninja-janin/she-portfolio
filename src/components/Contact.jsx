import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-left">
        <div className="contact-heading" data-reveal>
          <span className="contact-work">WORK </span>
          <span className="contact-with">with</span>
          <br />
          <span className="contact-name">Sherry Astorga</span>
        </div>
        <p className="contact-role" data-reveal data-delay="1">Technical Virtual Assistant</p>
        <a href="mailto:sherryrose.astorga@gmail.com" className="contact-email" data-reveal data-delay="2">
          sherryrose.astorga@gmail.com
        </a>
        <a href="mailto:sherryrose.astorga@gmail.com" className="contact-btn" data-reveal data-delay="3">
          Email me to get started
        </a>
        <div className="contact-socials" data-reveal data-delay="4">
          <a href="#" className="social-icon" aria-label="Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="#" className="social-icon" aria-label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>
      <div className="contact-right" data-reveal="right">
        <img src="/images/sherry-hero.jpg" alt="Sherry Astorga" />
      </div>
    </section>
  );
}
