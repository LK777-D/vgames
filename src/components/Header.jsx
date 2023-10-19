import "atropos/css";
import "./Header.css";
import img from "../assets/controller.png";
import Button from "./UI/Button";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header">
      <div className="texts ">
        <h1 className="robotech">Gaming World Awaits You</h1>
        <span className="pacifico">
          Unlock the Adventure: Explore, Discover, and Play a World of Games in
          Our Extensive Catalog
        </span>
      </div>
      <div>
        <img src={img} />
      </div>
    </header>
  );
};

export default Header;
