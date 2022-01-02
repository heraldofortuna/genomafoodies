import React from "react";
import { Link } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import Icon from "../components/Icon";
import { MdAddCircle } from "react-icons/md";
import "../styles/header.css";

const Header = ({ title, isHome, handleFilter }) => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="title">{title}</h1>
        {isHome && (
          <div className="header__actions">
            <FilterBar handleFilter={handleFilter} />
            <Link to="/new">
              <Icon children={<MdAddCircle />} action="new" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
