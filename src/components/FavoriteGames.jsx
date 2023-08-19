import "./FavoriteGames.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GamesContext } from "../App";
import GameCard from "./UI/GameCard";
import Button from "./UI/Button";

const FavoriteGames = () => {
  const { favs, removeFromFavsHandler } = useContext(GamesContext);

  return (
    <section className="favssection">
      {favs.length < 1 ? (
        <div className="emptyfavs">
          <h2>Favorite Games List Is Empty</h2>
          <Link to="/">
            <Button text="Add Games" />
          </Link>
        </div>
      ) : (
        <h2>Your Favorite Games</h2>
      )}
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
