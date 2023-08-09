import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About VGames</h4>
          <ul>
            <li>
              <Link href="/">Company</Link>
            </li>
            <li>
              <Link href="/catalog">Adress</Link>
            </li>
            <li>
              <Link href="/about">Related Projects</Link>
            </li>
            <li>
              <Link href="/contact">Creators</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/catalog">Catalog</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            Email: <a href="mailto:info@vgames.com">info@vgames.com</a>
          </p>
          <p>Phone: +123-456-7777</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 VGames. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
