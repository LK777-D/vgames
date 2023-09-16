import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            Email: <span>info@vgames.com</span>
          </p>
          <p>Phone: +123-456-1777</p>
        </div>
        <div className="footer-nav">
          <Link>Home</Link>
          <Link>Catalog</Link>
          <Link>Favorites Page</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 VGames. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
