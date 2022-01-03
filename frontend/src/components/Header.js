import React from "react";
import logo from "../assets/genomafoodies-logo.png";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img
          className="header__logo"
          src={logo}
          alt="Official logo of Genoma Foodies"
        />
      </div>
    </header>
  );
};

export default Header;
