import React, { useState } from "react";
import Input from "./Input";

const FilterBar = ({ onTitleFilter }) => {
  const [title, setTitle] = useState("");

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setTitle(value);
    onTitleFilter(value);
  };

  return <Input name="title" value={title} onChange={handleFilterChange} />;
};

export default FilterBar;
