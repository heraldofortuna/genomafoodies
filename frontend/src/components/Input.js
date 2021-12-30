import React from "react";
import "../styles/input.css";

const Input = ({
  type = "text",
  name,
  value,
  placeholder,
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
    <div className="input__container">
      <label className="input__label">{label}</label>
      <input
        className="input__element"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
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
