import './Stats.css';

const stats = [
  { value: '10+',   label: 'YEARS OF EXPERIENCE' },
  { value: '100%',  label: 'JOB SUCCESS' },
  { value: '99%',   label: 'CLIENT SATISFACTION' },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div key={i} className="stat-item" data-reveal data-delay={String(i + 1)}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
