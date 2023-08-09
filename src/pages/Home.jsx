import About from "../components/About";
import Carousel from "../components/Carousel";
import GamesList from "../components/GamesList";
import Quiz from "../components/Quiz";
import GamesArticle from "../components/GamesArticle";
import samp from "../assets/samp.jpg";
import nfs from "../assets/nfs.jpg";
import nations from "../assets/nations.jpg";
import dota2 from "../assets/dota2.jpg";
import generals from "../assets/generals.jpg";
import "./Home.css";
import Recomendation from "../components/Recomendation";

const Home = () => {
  return (
    <>
      <GamesList text="Search Results For" />
      <GamesArticle />
      <Carousel />
      <div className="seperate"></div>
      <Quiz />
      <Recomendation
        img1={samp}
        img2={nfs}
        img3={nations}
        img4={dota2}
        img5={generals}
        text="Top Games From 2000s"
      />
      <About />
    </>
  );
};

export default Home;
