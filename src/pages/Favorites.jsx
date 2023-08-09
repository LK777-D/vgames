import FavoriteGames from "../components/FavoriteGames";
import "./Favorites.css";
import History from "../components/History";
import Recomendation from "../components/Recomendation";
import gta from "../assets/gta5.jpg";
import mafia from "../assets/mafia.jpg";
import fifa from "../assets/fifa.jpg";
import mobile from "../assets/legends.jpeg";
import nba from "../assets/nba.jpg";

const Favorites = () => {
  return (
    <>
      <FavoriteGames />
      <History />
      <Recomendation
        text="Recomended For You"
        img1={gta}
        img2={mafia}
        img3={fifa}
        img4={mobile}
        img5={nba}
      />
    </>
  );
};

export default Favorites;
