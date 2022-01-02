import React from "react";
import "../styles/icon.css";

const Icon = ({ children, onClick, action }) => {
  const actions = {
    new: "icon icon--new",
    edit: "icon icon--edit",
    delete: "icon icon--delete",
  };

  return (
    <i className={actions[action]} onClick={onClick}>
      {children}
    </i>
  );
};

export default Icon;
