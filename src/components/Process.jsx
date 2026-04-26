import './Process.css';

const steps = [
  { num: '01', title: 'Discovery Call',       desc: 'Understand your business needs, goals, and challenges.' },
  { num: '02', title: 'Strategy & Planning',  desc: 'Build a tailored workflow or system plan that fits your processes.' },
  { num: '03', title: 'Implementation',       desc: 'Set up tools, manage CRM, and automate workflows for smooth operations.' },
  { num: '04', title: 'Ongoing Support',      desc: 'Monitor progress, optimize systems, and provide continuous updates.' },
];

const photos = [
  '/images/work1.jpg',
  '/images/work2.jpg',
  '/images/work1.jpg',
  '/images/work2.jpg',
];

export default function Process() {
  return (
    <section className="process">
      <div className="process-inner">
        <h2 className="process-title" data-reveal>How I Work With Clients</h2>
        <p className="process-sub" data-reveal data-delay="1">A streamlined yet adaptable approach designed to optimize your systems and drive lasting growth.</p>
        <div className="process-steps">
          {steps.map((s, i) => (
            <div key={i} className="process-step" data-reveal data-delay={String(i + 1)}>
              <div className="step-number">{s.num}</div>
              <p className="step-title">{s.title}</p>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="process-photos">
          {photos.map((p, i) => (
            <img key={i} src={p} alt={`Step ${i+1}`} className="process-photo" data-reveal="scale" data-delay={String(i + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}
