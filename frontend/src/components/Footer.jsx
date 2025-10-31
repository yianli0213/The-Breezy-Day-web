import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>The Breezy Day</h4>
          <p>Improving happiness and preventing allergies</p>
        </div>
        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li>Real-time Weather</li>
            <li>Allergy Tracking</li>
            <li>LINE Bot Notifications</li>
            <li>Data Analytics</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Technology</h4>
          <ul>
            <li>React & GSAP</li>
            <li>Node.js & Express</li>
            <li>MySQL Database</li>
            <li>LINE Bot API</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 The Breezy Day. Built with ❤️ for better well-being.</p>
      </div>
    </footer>
  );
}

export default Footer;
