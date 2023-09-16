import "./Favorites.css";
import gta from "../assets/gta5.jpg";
import nfs from "../assets/nfs.jpg";
import fifa from "../assets/fifa.jpg";
import mobile from "../assets/legends.jpeg";
import vice from "../assets/vicecity.avif";
import dota2 from "../assets/dota2.jpg";
import san from "../assets/sa.webp";
import GamesList from "../components/GamesList";
import Recomendation from "../components/Recomendation";
/* eslint-disable react/prop-types */

const Favorites = (props) => {
  return (
    <>
      <GamesList
        text="Your Favorite Games List"
        gameHandler={props.gameHandler}
        gamesList={props.gamesList}
      />
      <Recomendation
        img1={gta}
        img2={nfs}
        img3={fifa}
        img4={mobile}
        img5={vice}
        img6={san}
        img7={dota2}
        text="Recomended For You"
      />
    </>
  );
};

export default Favorites;
