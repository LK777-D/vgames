import "./Recomendation.css";

/* eslint-disable react/prop-types */
const Recomendation = (props) => {
  return (
    <section className="recomendation">
      <h2>{props.text}</h2>
      <div className="reccontainer">
        <div className="recomendedcontent">
          <img src={props.img1} />
          <img src={props.img2} />
          <img src={props.img3} />
          <img src={props.img4} />
          <img src={props.img5} />
        </div>
      </div>
    </section>
  );
};

export default Recomendation;
