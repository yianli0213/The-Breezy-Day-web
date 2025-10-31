import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1
    })
    .from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, '-=0.5');
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-content">
        <h2 ref={titleRef} className="hero-title">
          Breathe Easy, Live Happy
        </h2>
        <p ref={subtitleRef} className="hero-subtitle">
          Stay informed about weather and allergens to improve your well-being
        </p>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">☀️</span>
            <span className="feature-text">Real-time Weather</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🌸</span>
            <span className="feature-text">Allergy Alerts</span>
          </div>
          <div className="feature">
            <span className="feature-icon">📱</span>
            <span className="feature-text">LINE Notifications</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
