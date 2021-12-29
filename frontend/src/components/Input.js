import React from "react";

const Input = ({ type = "text", name, value, onChange, checked = false }) => {
  const characters = name.split("_").join(" ");
  const label = characters.charAt(0).toUpperCase() + characters.slice(1);

  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
    </div>
  );
};

export default Input;
