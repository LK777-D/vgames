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
/* eslint-disable react/prop-types */

const Home = (props) => {
  return (
    <>
      <GamesList
        gameHandler={props.gameHandler}
        gamesList={props.gamesList}
        text="Search Results For"
      />
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
