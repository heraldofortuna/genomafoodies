import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import Select from "./Select";
import {
  addRestaurant,
  updateRestaurant,
} from "../services/RestaurantServices";

const Form = ({ isToEdit, data }) => {
  const [newRestaurant, setNewRestaurant] = useState({
    title: isToEdit ? data.title : "",
    ubication: isToEdit ? data.ubication : "",
    food_type: isToEdit ? data.food_type : "",
    score: isToEdit ? data.score : 0,
    visited: isToEdit ? data.visited : false,
  });

  const { title, ubication, food_type, score, visited } = newRestaurant;
  const currentId = data?.id;
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, id, checked } = event.target;
    const newKey = id === "food_type" ? id : name;
    const newValue = name === "visited" ? checked : value;
    setNewRestaurant({ ...newRestaurant, [newKey]: newValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isToEdit) {
      await updateRestaurant(newRestaurant, currentId);
    } else {
      await addRestaurant(newRestaurant);
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="title"
        value={title}
        placeholder="ej. Cala"
        minLength={1}
        maxLength={20}
        onChange={handleChange}
      />
      <Input
        name="ubication"
        value={ubication}
        placeholder="ej. Lima, Peru"
        pattern="(([a-zA-Z]+) ?)+, ?(([a-zA-Z]+) ?)+"
        onChange={handleChange}
      />
      <Select
        name="food_type"
        defaultValue={food_type}
        onChange={handleChange}
      />
      <Input
        type="number"
        name="score"
        value={score}
        placeholder="ej. 4"
        min={0}
        max={5}
        onChange={handleChange}
      />
      <Input
        type="checkbox"
        name="visited"
        checked={visited}
        onChange={handleChange}
      />
      <button className="button button--save" type="submit">
        Save
      </button>
      <Link className="button button--cancel" to="/">
        Cancel
      </Link>
    </form>
  );
};

export default Form;
