import "./GamesList.css";
import GameCard from "./UI/GameCard";
import { useContext } from "react";
import { GamesContext } from "../App";

/* eslint-disable react/prop-types */

const GamesList = (props) => {
  const { games, search, addToFavsHandler, favsColor } =
    useContext(GamesContext);

  return (
    <section className="gameslist">
      <h3 className="searchheading font1">
        {props.text} : {search}
      </h3>
      <div className="small">
        {games.slice(0, 8).map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            rating={game.rating}
            released={game.released}
            image={game.background_image}
            onClick={() => addToFavsHandler(game)}
            favsColor={favsColor}
          />
        ))}
      </div>
      <div className="large">
        {games.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            rating={game.rating}
            released={game.released}
            image={game.background_image}
            onClick={() => addToFavsHandler(game)}
            favsColor={favsColor}
          />
        ))}
      </div>
    </section>
  );
};

export default GamesList;
