import About from "../components/About";
import Carousel from "../components/Carousel";
import GamesList from "../components/GamesList";
import Quiz from "../components/Quiz";
import GamesArticle from "../components/GamesArticle";
import "./Home.css";

const Home = () => {
  return (
    <>
      <GamesList text="Search Results For" />
      <GamesArticle />
      <Carousel />
      <div className="seperate"></div>
      <Quiz />
      <About />
    </>
  );
};

export default Home;
