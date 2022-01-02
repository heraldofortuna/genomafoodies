import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/genomafoodies-logo.png";
import Icon from "../components/Icon";
import { MdAddCircle } from "react-icons/md";
import "../styles/header.css";

const Header = ({ isHome }) => {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} />
        {isHome && (
          <Link className="header__icon--new" to="/new">
            <Icon children={<MdAddCircle />} action="new" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
