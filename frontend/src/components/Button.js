import React from "react";
import "../styles/button.css";

const Button = ({ text, type, action }) => {
  const actions = {
    new: "button button--save",
    cancel: "button button--cancel",
  };

  return (
    <button className={actions[action]} type={type}>
      {text}
    </button>
  );
};

export default Button;
