import React, { useState } from "react";
import Input from "./Input";

const FilterBar = ({ handleFilter }) => {
  const [filter, setFilter] = useState({
    title: "",
    ubication: "",
    food_type: "",
  });

  const onChangeFilter = (event) => {
    const { name, value } = event.target;
    const newFilter = { ...filter, [name]: value };
    setFilter(newFilter);
    handleFilter(newFilter);
  };

  return (
    <div>
      <Input name="title" value={filter.title} onChange={onChangeFilter} />
      <Input
        name="ubication"
        value={filter.ubication}
        onChange={onChangeFilter}
      />
      <Input
        name="food_type"
        value={filter.food_type}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default FilterBar;
