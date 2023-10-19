import "./LatestGames.css";
import SmGameCard from "./UI/SmGameCard";
/* eslint-disable react/prop-types */

const LatestGames = (props) => {
  return (
    <section className="smgames">
      <h1 className="robotech">{props.text}</h1>
      <div className="smcont">
        {props.games.map((game) => (
          <SmGameCard
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
