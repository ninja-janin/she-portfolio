import './Testimonials.css';

const clients = [
  { name: 'Abbie Steele', img: '/images/client1.jpg' },
  { name: 'Hannah Lily',  img: '/images/client2.jpg' },
  { name: 'Marie Ryba',   img: '/images/client3.jpg' },
  { name: 'Hayley Su',    img: '/images/client1.jpg' },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <p className="testimonials-title" data-reveal>LOVE NOTES FROM MY CLIENTS</p>
        <div className="testimonials-grid">
          {clients.map((c, i) => (
            <div key={i} className="testimonial-card" data-reveal data-delay={String(i + 1)}>
              <div className="phone-frame">
                <div className="phone-notch" />
                <img src={c.img} alt={c.name} />
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, j) => <span key={j} className="star">★</span>)}
              </div>
              <p className="testimonial-name">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
