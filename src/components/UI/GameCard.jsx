import "./GameCard.css";
import { useState } from "react";
// import { useContext } from "react";
// import { GamesContext } from "../../App";
/* eslint-disable react/prop-types */
import { UilSave } from "@iconscout/react-unicons";

const GameCard = (props) => {
  // const { AddToFavsHandler } = useContext(GamesContext);
  const [isFavorited, setIsFavorited] = useState(false);
  const style = `save ${isFavorited ? "saveanim" : ""}`;
  const styleL = `saveL ${isFavorited ? "saveanim" : ""}`;

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    props.onClick(); // Call the parent's onClick to update global state
  };
  return (
    <>
      <div className="gamecard shadow">
        <div className="gamecardimg">
          <img src={props.image} />

          <UilSave className={style} size="37" onClick={toggleFavorite} />
        </div>
        <div className="infolarge">
          <span className="gradient-text">Rating : {props.rating} / 5</span>
          <span className="gradient-text">Release Date : {props.released}</span>
          <UilSave className={styleL} size="37" onClick={toggleFavorite} />
        </div>
        <div className="gameinfo">
          <span className="release">Release Date:{props.released}</span>
          <span className="rating">Rating: {props.rating} / 5</span>
        </div>
        <span className="gradient-text gamename">{props.name}</span>
      </div>
    </>
  );
};

export default GameCard;
