import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import WeatherCard from './components/WeatherCard';
import AllergyCard from './components/AllergyCard';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Animate content on load
      gsap.from('.app-content', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading The Breezy Day...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="app-content">
        <Hero />
        <section className="dashboard">
          <div className="cards-container">
            <WeatherCard />
            <AllergyCard />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
