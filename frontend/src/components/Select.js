import React from "react";

const Select = ({ name, onChange }) => {
  const characters = name.split("_").join(" ");
  const label = characters.charAt(0).toUpperCase() + characters.slice(1);

  return (
    <div>
      <label htmlFor="food_type">{label}</label>
      <select id="food_type" defaultValue={"default"} onChange={onChange}>
        <option value="default" disabled></option>
        <option value="Sushi">Sushi</option>
        <option value="Sea food">Sea food</option>
        <option value="Fast food">Fast food</option>
        <option value="Typical">Typical</option>
        <option value="Hamburguers">Hamburguers</option>
        <option value="Italian">Italian</option>
        <option value="Oriental">Oriental</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Cake Shop">Cake Shop</option>
        <option value="Grill">Grill</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Vegan">Vegan</option>
      </select>
    </div>
  );
};

export default Select;
