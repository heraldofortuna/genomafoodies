import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import Select from "./Select";
import {
  addRestaurant,
  updateRestaurant,
} from "../services/RestaurantServices";

const Form = ({ isToEdit, restaurant }) => {
  const [newRestaurant, setNewRestaurant] = useState({
    title: isToEdit ? restaurant.title : "",
    ubication: isToEdit ? restaurant.ubication : "",
    food_type: isToEdit ? restaurant.food_type : "",
    score: isToEdit ? restaurant.score : 0,
    visited: isToEdit ? restaurant.visited : false,
  });

  const { title, ubication, food_type, score, visited } = newRestaurant;
  const currentId = restaurant?.id;
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, id, checked } = event.target;
    const key = id === "food_type" ? id : name;
    setNewRestaurant((prevRestaurant) => ({
      ...prevRestaurant,
      [key]: name === "visited" ? checked : value,
    }));
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
      <button type="submit">Save</button>
      <Link to="/">Cancel</Link>
    </form>
  );
};

export default Form;
