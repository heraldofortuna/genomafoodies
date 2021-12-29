import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
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
    let { name, value, checked } = event.target;

    setNewRestaurant((prevRestaurant) => ({
      ...prevRestaurant,
      [name]: name === "visited" ? checked : value,
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
      <Input name="title" value={title} onChange={handleChange} />
      <Input name="ubication" value={ubication} onChange={handleChange} />
      <Input name="food_type" value={food_type} onChange={handleChange} />
      <Input name="score" value={score} onChange={handleChange} />
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
