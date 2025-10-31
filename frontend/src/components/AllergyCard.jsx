import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './AllergyCard.css';

function AllergyCard() {
  const [allergy, setAllergy] = useState(null);
  const [loading, setLoading] = useState(true);
  const cardRef = useRef(null);

  useEffect(() => {
    // Fetch allergy data
    fetchAllergy();

    // Animate card on mount
    gsap.from(cardRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
      delay: 0.4
    });
  }, []);

  const fetchAllergy = async () => {
    try {
      // Simulate API call
      setTimeout(() => {
        setAllergy({
          location: 'Taipei',
          pollenLevel: 'Moderate',
          pollenTypes: {
            grass: 'Low',
            tree: 'Moderate',
            weed: 'High'
          },
          airQuality: 'Good',
          recommendation: 'Take precautions if you are sensitive to weed pollen'
        });
        setLoading(false);
      }, 1200);
    } catch (error) {
      console.error('Error fetching allergy data:', error);
      setLoading(false);
    }
  };

  const getLevelColor = (level) => {
    const colors = {
      'Low': '#50C878',
      'Moderate': '#FFD700',
      'High': '#FF6B6B',
      'Very High': '#C41E3A'
    };
    return colors[level] || '#666';
  };

  if (loading) {
    return (
      <div ref={cardRef} className="card allergy-card">
        <div className="card-loading">Loading allergy data...</div>
      </div>
    );
  }

  return (
    <div ref={cardRef} className="card allergy-card">
      <div className="card-header">
        <h3 className="card-title">🌸 Allergy Info</h3>
        <span className="location">{allergy.location}</span>
      </div>
      <div className="allergy-info">
        <div className="pollen-level">
          <span className="level-label">Pollen Level:</span>
          <span 
            className="level-value" 
            style={{ color: getLevelColor(allergy.pollenLevel) }}
          >
            {allergy.pollenLevel}
          </span>
        </div>
        <div className="pollen-types">
          <div className="pollen-type">
            <span className="type-name">Grass:</span>
            <span className="type-level" style={{ color: getLevelColor(allergy.pollenTypes.grass) }}>
              {allergy.pollenTypes.grass}
            </span>
          </div>
          <div className="pollen-type">
            <span className="type-name">Tree:</span>
            <span className="type-level" style={{ color: getLevelColor(allergy.pollenTypes.tree) }}>
              {allergy.pollenTypes.tree}
            </span>
          </div>
          <div className="pollen-type">
            <span className="type-name">Weed:</span>
            <span className="type-level" style={{ color: getLevelColor(allergy.pollenTypes.weed) }}>
              {allergy.pollenTypes.weed}
            </span>
          </div>
        </div>
        <div className="air-quality">
          <span className="aq-label">Air Quality:</span>
          <span className="aq-value">{allergy.airQuality}</span>
        </div>
        <div className="recommendation">
          💡 {allergy.recommendation}
        </div>
      </div>
      <button className="btn refresh-btn" onClick={fetchAllergy}>
        Refresh
      </button>
    </div>
  );
}

export default AllergyCard;
