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
import LatestGames from "../components/LatestGames";
/* eslint-disable react/prop-types */

const games = [
  {
    id: 1,
    name: "Generals",
    url: "https://assets-prd.ignimgs.com/2022/04/16/commandconquergenerals-1650150354258.jpg",
    rating: 91,
  },
  {
    id: 2,
    name: "GTA 3",
    url: "https://m.media-amazon.com/images/I/91Trwpz101L.jpg",
    rating: 92,
  },
  {
    id: 3,
    name: "Prototype",
    url: "https://m.media-amazon.com/images/I/51gRg0udiKL.jpg",
    rating: 89,
  },
  {
    id: 4,
    name: "Mafia 2",
    url: "https://assets-prd.ignimgs.com/2020/07/07/mafia-ii-button-fin-1594154630039.jpg",
    rating: 94,
  },
  {
    id: 5,
    name: "CS 1.6",
    url: "https://cs16-go.ru/img/index/cs-source-bg.webp",
    rating: 95,
  },
  {
    id: 6,
    name: "GTA San Andres",
    url: "https://img2.tapimg.net/post/etag/FiG9NL1rQCg1cCNVw7ruosvsvzfp.webp?imageMogr2/thumbnail/720x9999%3E/quality/80/format/jpg/interlace/1/ignore-error/1",
    rating: 98,
  },
  {
    id: 7,
    name: "Rise Of Nations",
    url: "https://assets-prd.ignimgs.com/2022/04/16/risenations-1650151464808.jpg",
    rating: 84,
  },
  {
    id: 8,
    name: "Crash",
    url: "https://m.media-amazon.com/images/I/914wdLTcWJL.jpg",
    rating: 95,
  },
  {
    id: 9,
    name: "Driver 2",
    url: "https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-9438-13.jpg",
    rating: 89,
  },
  {
    id: 10,
    name: "COD 4",
    url: "https://i.ytimg.com/vi/JWL9CxsdpWE/maxresdefault.jpg",
    rating: 91,
  },
];

const Favorites = (props) => {
  return (
    <>
      <GamesList
        text={`${
          props.gamesList.length > 0
            ? "Your Favirote Games List"
            : "Favorite Games List Is Empty"
        }`}
        gameHandler={props.gameHandler}
        gamesList={props.gamesList}
      />
      <LatestGames games={games} text="Best Nostalgic Games from 2000's " />
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
