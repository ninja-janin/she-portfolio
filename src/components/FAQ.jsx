import './FAQ.css';

const faqs = [
  {
    num: '01',
    q: 'What type of businesses do you work with?',
    a: 'I work with entrepreneurs, coaches, and small-to-medium businesses that want to optimize their backend systems, manage CRMs, and implement automations for growth.',
  },
  {
    num: '02',
    q: "What if I'm not sure which tools I need?",
    a: "No worries! I'll assess your current workflow and recommend the best tools and automations tailored to your business.",
  },
  {
    num: '03',
    q: 'Do you offer one-time setups or ongoing support?',
    a: 'Yes! I provide both one-time system setups (CRMs, automations, funnels) and monthly retainer packages for ongoing management and support.',
  },
];

export default function FAQ() {
  return (
    <section className="faq">
      <div className="faq-inner">
        <div className="faq-decor">FAQs</div>
        <div className="faq-cards">
          {faqs.map((f, i) => (
            <div key={i} className="faq-card">
              <div className="faq-number">{f.num}</div>
              <div>
                <p className="faq-q">{f.q}</p>
                <p className="faq-a">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
