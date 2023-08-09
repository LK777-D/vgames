import "./Navbar.css";
// import logo from "../assets//logo-color.png";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GamesContext } from "../App";

const Navbar = () => {
  const { searchGameHandler, search, setSearch } = useContext(GamesContext);

  useEffect(() => {
    searchGameHandler();
  }, []);
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="firstletter">V</span>
        <span className="logotext">Games</span>
      </div>

      <div className="navigation">
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
        <NavLink to="/favorites" className="navlink">
          Favorite Games
        </NavLink>
      </div>
      <div className="search">
        <input
          value={search}
          placeholder="Search Game..."
          className="input"
          name="text"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="navbtn" onClick={searchGameHandler}>
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;