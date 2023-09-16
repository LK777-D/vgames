import "./Button.css";
/* eslint-disable react/prop-types */

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick} className="mainbtn font1">
        {props.text}
      </button>
    </>
  );
};

export default Button;
