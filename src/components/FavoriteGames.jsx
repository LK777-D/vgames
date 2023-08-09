import "./FavoriteGames.css";
import { useContext, useState } from "react";
import { GamesContext } from "../App";
import GameCard from "./UI/GameCard";
import Button from "./UI/Button";
const FavoriteGames = () => {
  const { favs, removeFromFavsHandler } = useContext(GamesContext);

  const clearFavs = () => {};
  return (
    <section className="favssection">
      <div className="favs">
        {favs.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            rating={game.rating}
            released={game.released}
            image={game.background_image}
            onClick={() => removeFromFavsHandler(game)}
            isFavorited={true}
          />
        ))}
      </div>
    </section>
  );
};

export default FavoriteGames;
