import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <a href="#hero" className="navbar-logo">Sherry Astorga</a>
      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span/><span/><span/>
      </button>
      <ul className={`navbar-links ${open ? 'open' : ''}`}>
        <button className="nav-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <span/><span/>
        </button>
        <li><a href="#about" onClick={() => setOpen(false)}>ABOUT</a></li>
        <li><a href="#portfolio" onClick={() => setOpen(false)}>PORTFOLIO</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)} className="nav-contact">CONTACT</a></li>
      </ul>
    </nav>
  );
}
