import "./Alert.css";
/* eslint-disable react/prop-types */

const Alert = (props) => {
  return (
    <div className="alert">
      <span>{props.alertText}</span>
    </div>
  );
};

export default Alert;
