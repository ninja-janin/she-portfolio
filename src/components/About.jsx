import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-left" data-reveal="left">
        <img src="/images/client2.jpg" alt="Sherry Astorga" />
      </div>
      <div className="about-right">
        <p className="about-label" data-reveal data-delay="1">ABOUT ME</p>
        <h2 className="about-title" data-reveal data-delay="2">Hi, I'm Sherry!</h2>
        <p className="about-text" data-reveal data-delay="3">
          I'm a Technical Virtual Assistant with years of experience supporting businesses
          through digital marketing, CRM management, and automation tools. My background
          includes working as a Marketing Assistant and Virtual Assistant, where I handled
          everything from content creation, social media management, and email marketing to
          project coordination and administrative support.
        </p>
        <p className="about-text" data-reveal data-delay="4">
          I specialize in streamlining operations by setting up and managing CRMs, designing
          workflows, and implementing automation that saves time and boosts productivity. With
          expertise in tools like ActiveCampaign, Kajabi, Kartra, ClickFunnels, Zapier, Go High
          Level, Trello, and Canva, I help entrepreneurs, coaches, and growing businesses focus
          on scaling while I take care of the backend systems.
        </p>
        <p className="about-text" data-reveal data-delay="5">
          Passionate about creating efficient solutions, I combine creativity and tech skills to
          ensure my clients achieve consistent results, stronger online presence, and smoother
          day-to-day operations.
        </p>
        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="about-cta" data-reveal data-delay="6">
          Book a Call With Me
        </a>
      </div>
    </section>
  );
}
