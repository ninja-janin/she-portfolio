import './FeaturedWork.css';

export default function FeaturedWork() {
  return (
    <section className="featured">
      <div className="featured-inner">
        <div className="featured-top">
          <h2 className="featured-title" data-reveal>
            Optimized Business Systems with CRM &amp; <em>Automation Tools</em>
          </h2>
          <div>
            <p className="featured-text" data-reveal data-delay="2">
              With proven expertise in CRM management and automation tools such as
              ActiveCampaign, Kajabi, Kartra, ClickFunnels, Zapier, and Go High Level, I
              create streamlined systems that drive efficiency and growth for businesses.
            </p>
            <p className="featured-text" data-reveal data-delay="3">
              By designing smart workflows, automating repetitive tasks, and integrating tools
              seamlessly, I help entrepreneurs and teams save time, reduce errors, and improve
              productivity. This allows businesses to focus on scaling, serving clients better,
              and achieving long-term success.
            </p>
          </div>
        </div>
        <img src="/images/work1.jpg" alt="CRM and automation work" className="featured-photo" data-reveal="scale" />
      </div>
    </section>
  );
}
