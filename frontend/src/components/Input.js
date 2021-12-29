import React from "react";

const Input = ({ type = "text", name, value, onChange, checked = false }) => {
  const label =
    name.split("_").join(" ").charAt(0).toUpperCase() +
    name.split("_").join(" ").slice(1);

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
