import './Services.css';

const services = [
  {
    title: 'CRM Setup & Management',
    image: '/images/work1.jpg',
    inclusions: [
      'CRM setup & customization (Go High Level, ActiveCampaign, etc.)',
      'Contact segmentation & pipeline setup',
      'Email automation & workflow creation',
      'Ongoing maintenance and optimization',
    ],
    packages: [
      'Starter Package: $450 (one-time setup)',
      'Monthly Management: $500/month (up to 10 hrs)',
    ],
  },
  {
    title: 'Tech Support & Automation',
    image: '/images/work2.jpg',
    inclusions: [
      'Automation setup (Zapier, integrations, triggers)',
      'Funnel troubleshooting & tech support',
      'Website & landing page updates',
      'Calendar & scheduling tool integration',
    ],
    packages: [
      'Basic Automation Package: $300 (up to 5 workflows)',
      'Advanced Automation Package: $600 (up to 12 workflows + support)',
    ],
  },
  {
    title: 'Digital Marketing Support',
    image: '/images/work1.jpg',
    inclusions: [
      'Social media scheduling & content repurposing',
      'Email campaign setup & reporting',
      'Analytics tracking & insights',
      'Light graphic design (Canva)',
    ],
    packages: [
      'Content Support Package: $400/month (up to 12 posts + 2 emails)',
      'Growth Package: $750/month (up to 20 posts + 4 emails + reporting)',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-inner">
        <p className="services-heading">Choose the plan that fits your business needs</p>
        {services.map((s, i) => (
          <div key={i} className="service-block">
            <div className="service-content">
              <h3 className="service-name">{s.title}</h3>
              <p className="service-sub">Inclusions:</p>
              <ul>{s.inclusions.map((item, j) => <li key={j}>{item}</li>)}</ul>
              <p className="service-sub">Package Pricing:</p>
              <ul>{s.packages.map((pkg, j) => <li key={j}>{pkg}</li>)}</ul>
            </div>
            <div className="service-img-wrap">
              <img src={s.image} alt={s.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
