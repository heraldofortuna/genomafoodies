import React, { useState } from "react";
import Input from "./Input";
import "../styles/filterbar.css";

const FilterBar = ({ handleFilter }) => {
  const [filter, setFilter] = useState({
    title: "",
    ubication: "",
    food_type: "",
  });

  const { title, ubication, food_type } = filter;

  const onChangeFilter = (event) => {
    const { name, value } = event.target;
    const newFilter = { ...filter, [name]: value };
    setFilter(newFilter);
    handleFilter(newFilter);
  };

  return (
    <section className="filterbar">
      <h2 className="filterbar__title">Filter by</h2>
      <div className="filterbar__inputs">
        <Input name="title" value={title} onChange={onChangeFilter} />
        <Input name="ubication" value={ubication} onChange={onChangeFilter} />
        <Input name="food_type" value={food_type} onChange={onChangeFilter} />
      </div>
    </section>
  );
};

export default FilterBar;
