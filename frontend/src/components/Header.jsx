import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Header.css';

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    // Animate header on mount
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, []);

  return (
    <header ref={headerRef} className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🌤️</span>
          <h1 className="logo-text">The Breezy Day</h1>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#weather" className="nav-link">Weather</a>
          <a href="#allergy" className="nav-link">Allergy</a>
          <a href="#about" className="nav-link">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
