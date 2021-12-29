import React from "react";

const Input = ({
  type = "text",
  name,
  value,
  minLength,
  maxLength,
  pattern,
  min,
  max,
  checked = false,
  onChange,
}) => {
  const characters = name.split("_").join(" ");
  const label = characters.charAt(0).toUpperCase() + characters.slice(1);

  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        min={min}
        max={max}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
