import Carousel from "../components/Carousel";
import GamesList from "../components/GamesList";
import Quiz from "../components/Quiz";
import samp from "../assets/samp.jpg";
import nfs from "../assets/nfs.jpg";
import nations from "../assets/nations.jpg";
import dota2 from "../assets/dota2.jpg";
import generals from "../assets/generals.jpg";
import vice from "../assets/vicecity.avif";
import cs from "../assets/cs.jpg";
import san from "../assets/sa.webp";
import gta4 from "../assets/gta4.png";
import gta5 from "../assets/gta5.jpg";
import rdr2 from "../assets/rdr2.jpg";
import max from "../assets/max.jpg";
import bully from "../assets/bully.jpg";
import "./Home.css";
import Recomendation from "../components/Recomendation";
import LatestGames from "../components/LatestGames";
import Character from "../components/Character";
/* eslint-disable react/prop-types */
const games = [
  {
    id: 1,
    name: "EA Sports FC24",
    url: "https://cdn1.epicgames.com/offer/4750c68b2bfa4f43933b81cfd5cc510c/EGS_EASPORTSFC24UltimateEdition_EACanada_Editions_S2_1200x1600-dc25e6d71666959d43074b7ed2868ad7",
    rating: 97,
  },
  {
    id: 2,
    name: "NBA 2k24",
    url: "https://image.api.playstation.com/vulcan/ap/rnd/202307/2809/5b5f06906ae8066a29bd07f70821d41150f9039ecffd370d.jpg",
    rating: 95,
  },
  {
    id: 3,
    name: "GTA V",
    url: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg",
    rating: 92,
  },
  {
    id: 4,
    name: "NFS Heat",
    url: "https://image.api.playstation.com/vulcan/ap/rnd/202209/2915/uZgA8iEoSMzNrbDsj6dZpnpu.png",
    rating: 87,
  },
  {
    id: 5,
    name: "Counter-Strike 2",
    url: "https://en.shiftdelete.net/wp-content/uploads/2023/09/counter-strike-2-is-unavailable-for-mac-computers-3.jpg",
    rating: 91,
  },
  {
    id: 6,
    name: "GTA Vice City",
    url: "https://cdn1.epicgames.com/offer/fd6a13a256014a22a83ff2aaacc30e00/EGS_GrandTheftAutoViceCityTheDefinitiveEdition_RockstarGames_S2_1200x1600-18ac3dd32143492b2650144da0cf0ca9",
    rating: 99,
  },
  {
    id: 7,
    name: "Far Cry 6",
    url: "https://m.media-amazon.com/images/I/91RLJcgCE-L.jpg",
    rating: 92,
  },

  {
    id: 9,
    name: "Forza Horizon 5",
    url: "https://assets-prd.ignimgs.com/2021/08/24/forza-horizon-5-button-fin-1629830068379.jpg",
    rating: 95,
  },
  {
    id: 10,
    name: "WWE 2k24",
    url: "https://preview.redd.it/rate-my-custom-wwe-2k24-cover-athlete-ft-the-tribal-chief-v0-av7mcif4wkcb1.png?width=640&crop=smart&auto=webp&s=595416251657b9448ecf012b3a6b1f81c800d31f",
    rating: 91,
  },
  {
    id: 11,
    name: "MAFIA III",
    url: "https://upload.wikimedia.org/wikipedia/ru/9/9f/Mafia_III_cover_art.jpg",
    rating: 84,
  },
];
const Home = (props) => {
  return (
    <>
      <GamesList
        gameHandler={props.gameHandler}
        gamesList={props.gamesList}
        text="Search Results For :"
      />
      <section className="midpage">
        <Recomendation
          img1={samp}
          img2={nfs}
          img3={nations}
          img4={dota2}
          img5={generals}
          img6={vice}
          img7={cs}
          text="Top Games From 2000s"
        />
        <LatestGames games={games} text="Highest Rated 2024" />
        <Character />
      </section>

      <section className="interaction">
        <Carousel />
        <Quiz />
      </section>

      <Recomendation
        img1={san}
        img2={max}
        img3={vice}
        img4={bully}
        img5={gta4}
        img6={rdr2}
        img7={gta5}
        text="Best From Rockstar Games"
      />
    </>
  );
};

export default Home;
