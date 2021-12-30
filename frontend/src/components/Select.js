import React from "react";
import Option from "./Option";
import options from "../stores/OptionsData";

const Select = ({ name, defaultValue, onChange }) => {
  const characters = name.split("_").join(" ");
  const label = characters.charAt(0).toUpperCase() + characters.slice(1);

  return (
    <div>
      <label htmlFor="food_type">{label}</label>
      <select id="food_type" defaultValue={defaultValue} onChange={onChange}>
        {options.map((option) => (
          <Option key={option.id} value={option.value} />
        ))}
      </select>
    </div>
  );
};

export default Select;
