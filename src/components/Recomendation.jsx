import "./Recomendation.css";
import gta from "../assets/gta5.jpg";
import mafia from "../assets/mafia.jpg";
import fifa from "../assets/fifa.jpg";
import mobile from "../assets/legends.jpeg";
import nba from "../assets/nba.jpg";
const Recomendation = () => {
  return (
    <section className="recomendation">
      <h3>Suggested For You</h3>
      <div className="reccontainer">
        <div className="recomendedcontent">
          <img src={gta} />
          <img src={mafia} />
          <img src={fifa} />
          <img src={nba} />
          <img src={mobile} />
        </div>
      </div>
    </section>
  );
};

export default Recomendation;
