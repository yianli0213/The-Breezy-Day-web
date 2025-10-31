import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './WeatherCard.css';

function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const cardRef = useRef(null);

  useEffect(() => {
    // Fetch weather data
    fetchWeather();

    // Animate card on mount
    gsap.from(cardRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
      delay: 0.2
    });
  }, []);

  const fetchWeather = async () => {
    try {
      // Simulate API call
      setTimeout(() => {
        setWeather({
          location: 'Taipei',
          temperature: 22,
          humidity: 65,
          condition: 'Partly Cloudy',
          timestamp: new Date().toISOString()
        });
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching weather:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div ref={cardRef} className="card weather-card">
        <div className="card-loading">Loading weather...</div>
      </div>
    );
  }

  return (
    <div ref={cardRef} className="card weather-card">
      <div className="card-header">
        <h3 className="card-title">☀️ Weather</h3>
        <span className="location">{weather.location}</span>
      </div>
      <div className="weather-info">
        <div className="temperature">
          <span className="temp-value">{weather.temperature}</span>
          <span className="temp-unit">°C</span>
        </div>
        <div className="condition">{weather.condition}</div>
        <div className="details">
          <div className="detail-item">
            <span className="detail-label">Humidity:</span>
            <span className="detail-value">{weather.humidity}%</span>
          </div>
        </div>
      </div>
      <button className="btn refresh-btn" onClick={fetchWeather}>
        Refresh
      </button>
    </div>
  );
}

export default WeatherCard;
