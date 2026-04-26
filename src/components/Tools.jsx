import './Tools.css';

const skills = [
  'CRM Management: ActiveCampaign, Kajabi, Kartra, Go High Level',
  'Automation Tools: Zapier, ClickFunnels, Trello, Monday.com, ClickUp',
  'Digital Marketing: Social media management, content repurposing, email campaigns',
  'Admin Support: Scheduling, project management, data organization',
  'Creative Tools: Canva (graphics, presentations, social posts)',
];

const tools = [
  'WordPress','HighLevel','ActiveCampaign','Kajabi','Typeform','Loom','Stripe',
  'Zapier','LastPass','Zoom','Asana','Airtable','Slack','Trello',
  'ClickFunnels','Kartra','WiX','Monday.com','SendinBlue','Vimeo',
  'Dubsado','Calendly','Accessally','YouTube','Facebook','Instagram',
  'Canva','ClickUp','ConvertKit','Shopify',
];

export default function Tools() {
  return (
    <section className="tools">
      <div className="tools-inner">
        <div>
          <img src="/images/work2.jpg" alt="Working at desk" className="skills-col-photo" data-reveal="left" />
          <div className="skills-label" data-reveal data-delay="1">
            <span className="skills-script">Skills</span>
            <span className="skills-serif">&amp; Expertise</span>
          </div>
          <ul className="skills-list">
            {skills.map((s, i) => (
              <li key={i} data-reveal data-delay={String(i + 2)}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="tools-col-label" data-reveal="right">
            <span className="tools-script">Tools</span>
            <span className="tools-serif">&amp; Systems</span>
          </div>
          <p className="tools-subtitle" data-reveal data-delay="1">I Use and Familiar With</p>
          <div className="tools-grid">
            {tools.map((t, i) => (
              <span key={i} className="tool-chip" data-reveal data-delay={String((i % 6) + 1)}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
