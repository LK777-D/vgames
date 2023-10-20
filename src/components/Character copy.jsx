import "./Character.css";
const Character = () => {
  return (
    <section className="characters">
      <span className="robotech gradienttext">
        Scariest Characters From GTA Series
      </span>
      <div className="wrapp">
        <div className="box tommy" data-text="Tommy Vercceti"></div>
        <div className="box cj" data-text="CJ"></div>
        <div className="box ryder" data-text="Ryder"></div>
        <div className="box trevor " data-text="Trevor"></div>
      </div>
    </section>
  );
};

export default Character;
