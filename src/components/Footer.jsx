import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer sigma">
      <div className="sections">
        <div className="footer-section">
          <h2 className="sigma">About Us</h2>
          <Link>Terms Of Use</Link>
          <Link>Privacy Policy</Link>
          <Link>Contact</Link>
        </div>
        <div className="footer-section">
          <h2 className="sigma">Games</h2>
          <Link>Top Paid Games</Link>
          <Link>Top Free Games</Link>
          <Link>Best Rated</Link>
          <Link>Users Choice</Link>
          <Link>Games From Early 2000&apos;s</Link>
        </div>
        <div className="footer-section">
          <h2 className="sigma">Online Support</h2>
          <Link>Online Chat</Link>
          <Link>Nubmer : +771 71 17 71</Link>
          <Link>Request Call</Link>
        </div>
      </div>
      <div className="rights">
        <p>&copy; 2023 VGames. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
