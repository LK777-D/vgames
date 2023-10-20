import "./LatestGames.css";
import SmallGameCard from "./UI/SmallGameCard";
/* eslint-disable react/prop-types */

const LatestGames = (props) => {
  return (
    <section className="smgames">
      <h1 className="sigma">{props.text}</h1>
      <div className="smcont">
        {props.games.map((game) => (
          <SmallGameCard
            key={game.id}
            image={game.url}
            name={game.name}
            rating={game.rating.toFixed(2)}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestGames;
