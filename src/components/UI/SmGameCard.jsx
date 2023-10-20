import "./SmGameCard.css";
import xbox from "../../assets/xbox.svg";
import ps from "../../assets/playstation.svg";
import pc from "../../assets/laptop.svg";
/* eslint-disable react/prop-types */
//smcard

const SmGameCard = (props) => {
  return (
    <div className="smcardcont">
      <div className="cardimgcont">
        <img src={props.image} />
      </div>

      <div className="infocont">
        <div className="smupperinfo">
          <div className="consoles">
            <img src={xbox} />
            <img src={ps} />
            <img src={pc} />
          </div>
          <div>
            <span>{props.released}</span>
          </div>
        </div>
        <div className="smnamerating">
          <span>{props.name}</span>
          <span className="smrating robotech">{props.rating}%</span>
        </div>
      </div>
    </div>
  );
};

export default SmGameCard;
