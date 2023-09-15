import "./GameCard.css";
import { useState } from "react";
import xbox from "../../assets/xbox.svg";
import ps from "../../assets/playstation.svg";
import pc from "../../assets/laptop.svg";
// import { useContext } from "react";
// import { GamesContext } from "../../App";
/* eslint-disable react/prop-types */

import { UilSave } from "@iconscout/react-unicons";

const GameCard = (props) => {
  // const { AddToFavsHandler } = useContext(GamesContext);
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    props.onClick(); // Call the parent's onClick to update global state
  };
  return (
    <div className="gamecard">
      <div className="imgcont">
        <img src={props.image} />
      </div>

      <div className="infocont">
        <div className="consoles">
          <img src={xbox} />
          <img src={ps} />
          <img src={pc} />
        </div>
        <div className="name font1">
          <span>{props.name}</span>
        </div>
        <div className="date font2">
          <span>{props.released}</span>
        </div>
        <div className="rating">
          <span>{(props.rating * 20).toFixed(1)}%</span>
        </div>
      </div>
      <div className="saveicon">
        <span>
          <UilSave size="45" onClick={toggleFavorite} />
        </span>
      </div>
    </div>
  );
};

export default GameCard;
