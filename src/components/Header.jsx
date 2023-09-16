import "atropos/css";
import "./Header.css";
import img from "../assets/headerimg2.jpg";
import Button from "./UI/Button";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <div className="headerwrapper">
        <div className="headercontent">
          <h2>Everything You Need To Know About Video Games</h2>
          <Link to="games" smooth={true}>
            <Button text="Explore" />
          </Link>
        </div>
        <div className="headerimgwrapper">
          <img src={img} />
        </div>
      </div>
    </>
  );
};

export default Header;
