import './Portfolio.css';

const works = [
  { label: 'Sample Excel File', img: '/images/work2.jpg' },
  { label: 'Wordpress Website Sample', img: '/images/work1.jpg' },
  { label: 'Kartra Landing Sales Page', img: '/images/work2.jpg' },
  { label: 'Shopify Store Website Management', img: '/images/work1.jpg' },
  { label: 'Active Campaign Automation', img: '/images/work2.jpg' },
  { label: 'GHL Automation Sample', img: '/images/work1.jpg' },
  { label: 'Sample Course Walkthrough', img: '/images/work2.jpg' },
  { label: 'Speaker Sizzle Reel', img: '/images/work1.jpg' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-inner">
        <div className="portfolio-label-wrap">
          <span className="portfolio-script">Sample</span>
          <h2 className="portfolio-heading">WORKS</h2>
        </div>
        <div className="portfolio-grid">
          {works.map((w, i) => (
            <div key={i} className="portfolio-item">
              <img src={w.img} alt={w.label} className="portfolio-item-img" />
              <p className="portfolio-item-label">{w.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
