import "./Recomendation.css";
import { useState, useRef } from "react";

/* eslint-disable react/prop-types */
const Recomendation = (props) => {
  const scrollContainerRef = useRef(null);

  const [scrolling, setScrolling] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setScrolling(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!scrolling) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setScrolling(false);
  };

  return (
    <>
      <div className="redline mt"></div>
      <section className="recomendation sigma">
        <h1 className="gradienttext">{props.text}</h1>
        <div className="reccontainer">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="recomendedcontent"
          >
            <img src={props.img1} />
            <img src={props.img2} />
            <img src={props.img3} />
            <img src={props.img4} />
            <img src={props.img5} />
            <img src={props.img6} />
            <img src={props.img7} />
          </div>
        </div>
      </section>
      <div className="redline mb"></div>
    </>
  );
};

export default Recomendation;
