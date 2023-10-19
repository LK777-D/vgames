import "./GameCard.css";
import { useState } from "react";
import xbox from "../../assets/xbox.svg";
import ps from "../../assets/playstation.svg";
import pc from "../../assets/laptop.svg";
// import { useContext } from "react";
// import { GamesContext } from "../../App";
/* eslint-disable react/prop-types */

import save from "../../assets/storage.svg";

const GameCard = (props) => {
  // const { AddToFavsHandler } = useContext(GamesContext);
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    props.onClick(); // Call the parent's onClick to update global state
  };
  return (
    <div className="cardcont">
      <div className="cardimgcont">
        <img src={props.image} />
      </div>

      <div className="infocont">
        <div className="upperinfo">
          <div className="consoles">
            <img src={xbox} />
            <img src={ps} />
            <img src={pc} />
          </div>
          <div>
            <span>{props.released}</span>
          </div>
        </div>
        <div className="namerating">
          <span>{props.name}</span>
          <span className="rating robotech">
            {(props.rating * 20).toFixed(1)}%
          </span>
        </div>
      </div>
      <span className="save">
        <img width="20px" src={save} onClick={toggleFavorite} />
      </span>
    </div>
  );
};

export default GameCard;
