import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
import Alert from "./components/UI/Alert";
import ScrollFromTop from "./components/ScrollFromTop";
/* eslint-disable react/prop-types */

export const GamesContext = createContext();

function App() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [favs, setFavs] = useState([]);
  const [favsColor, setfavsColor] = useState(false);
  const [showAddAlert, setShowAddAlert] = useState(false);
  const [showRemoveAlert, setShowRemoveAlert] = useState(false);
  const fetchGames = async () => {
    const url = `https://api.rawg.io/api/games?key=b43b2252367d458eaefb415f8c07cbfe&search=${search}`;

    const response = await fetch(url);
    const gameData = await response.json();

    if (gameData.results) {
      setGames(gameData.results);
    }
  };
  const searchGameHandler = () => {
    fetchGames();
  };

  const addToFavsHandler = (game) => {
    setFavs((prevFavs) => [...prevFavs, game]);
    setfavsColor(true);
    setShowAddAlert(true);
    setTimeout(() => {
      setShowAddAlert(false);
    }, 1000);
  };

  const removeFromFavsHandler = (game) => {
    const filteredGames = favs.filter((fav) => fav.id !== game.id);
    setFavs(filteredGames);
    setShowRemoveAlert(true);
    setTimeout(() => {
      setShowRemoveAlert(false);
    }, 1000);
  };

  return (
    <>
      <GamesContext.Provider
        value={{
          games,
          setGames,
          searchGameHandler,
          search,
          setSearch,
          addToFavsHandler,
          favs,
          removeFromFavsHandler,
          favsColor,
        }}
      >
        {showAddAlert && <Alert alertText="Added To favorites!" />}
        {showRemoveAlert && <Alert alertText="Removed From Favorites!" />}
        <Navbar />
        <Header />

        <ScrollFromTop />
        <Routes>
          <Route
            path="/"
            element={<Home gamesList={games} gameHandler={addToFavsHandler} />}
          />
          <Route
            path="/favorites"
            element={
              <Favorites gamesList={favs} gameHandler={removeFromFavsHandler} />
            }
          />
        </Routes>
        <Footer />
      </GamesContext.Provider>
    </>
  );
}

export default App;
