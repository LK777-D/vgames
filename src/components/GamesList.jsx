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
      <h3>
        {props.text} : {search}
      </h3>
      <div className="searchedgame">
        {games.slice(0, 6).map((game) => (
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
