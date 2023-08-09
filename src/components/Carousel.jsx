import "./Carousel.css";
import { useEffect, useState } from "react";
import gta from "../assets/gta5.jpg";
import mafia from "../assets/mafia.jpg";
import fifa from "../assets/fifa.jpg";
import mobile from "../assets/legends.jpeg";
import nba from "../assets/nba.jpg";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const data = [
    { id: 1, img: gta, text: "Grand Theft Auto V" },
    { id: 2, img: mafia, text: "Mafia II" },
    { id: 3, img: fifa, text: "FIFA 2023" },
    { id: 4, img: mobile, text: "Mobile Legends: Bang Bang" },
    { id: 5, img: nba, text: "NBA 2k23" },
  ];

  useEffect(() => {
    const handleNextImage = () => {
      if (index < data.length - 1) {
        setIndex((prevIndex) => prevIndex + 1);
      }
      if (index === data.length - 1) {
        setIndex(0);
      }
    };
    const timeout = setTimeout(handleNextImage, 1500);
    return () => clearTimeout(timeout);
  }, [data.length, index]);

  return (
    <section className="carousel">
      <h2 className="gradient-text">Most Played Games Of The 2023 </h2>
      <div className="carouselimg">
        <img src={data[index].img} width="650px" height="350px" />
      </div>
      <div className="carouseltext">
        <h2>{data[index].text}</h2>
      </div>
    </section>
  );
};

export default Carousel;
