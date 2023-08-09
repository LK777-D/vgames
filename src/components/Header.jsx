import Atropos from "atropos/react";
import "atropos/css";
import "./Header.css";
import img from "../assets/headerimg.jpeg";
import Button from "./UI/Button";

const Header = () => {
  return (
    <>
      <Atropos className="my-atropos">
        <div className="headerwrapper">
          <div className="headercontent">
            <h2>Everything You Need To Know About Video Games</h2>
            <Button text="Explore" />
          </div>
          <div className="imgwrapper">
            <img src={img} />
          </div>
        </div>
      </Atropos>
    </>
  );
};

export default Header;
