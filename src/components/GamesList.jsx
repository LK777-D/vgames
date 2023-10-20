import "./GamesList.css";
import GameCard from "./UI/GameCard";
import { useContext } from "react";
import { GamesContext } from "../App";

/* eslint-disable react/prop-types */

const GamesList = (props) => {
  const { search, favsColor } = useContext(GamesContext);

  return (
    <section className="gameslist" id="games">
      <h3 className="searchheading sigma">
        {props.text} {search}
      </h3>
      <div className="small">
        {props.gamesList.slice(0, 8).map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            rating={game.rating}
            released={game.released}
            image={game.background_image}
            onClick={() => props.gameHandler(game)}
            favsColor={favsColor}
            width="85%"
          />
        ))}
      </div>
      <div className="large">
        {props.gamesList.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            rating={game.rating}
            released={game.released}
            image={game.background_image}
            onClick={() => props.gameHandler(game)}
            favsColor={favsColor}
          />
        ))}
      </div>
    </section>
  );
};

export default GamesList;
