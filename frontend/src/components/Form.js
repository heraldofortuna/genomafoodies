import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  addRestaurant,
  updateRestaurant,
} from "../services/RestaurantServices";

const Form = ({ isToEdit, currentRestaurant }) => {
  const initialState = isToEdit
    ? {
        title: currentRestaurant.title,
        ubication: currentRestaurant.ubication,
        food_type: currentRestaurant.food_type,
        score: currentRestaurant.score,
        visited: currentRestaurant.visited,
      }
    : {
        title: "",
        ubication: "",
        food_type: "",
        score: 0,
        visited: false,
      };

  const [newRestaurant, setNewRestaurant] = useState(initialState);
  const navigate = useNavigate();
  const currentId = currentRestaurant?.id;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isToEdit) {
      await updateRestaurant(newRestaurant, currentId);
    } else {
      await addRestaurant(newRestaurant);
    }

    navigate("/");
  };

  const handleChange = (event) => {
    let { name, value, checked } = event.target;

    setNewRestaurant((prevRestaurant) => ({
      ...prevRestaurant,
      [name]: name === "visited" ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          name="title"
          value={newRestaurant.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Ubication</label>
        <input
          name="ubication"
          value={newRestaurant.ubication}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Food Type</label>
        <input
          name="food_type"
          value={newRestaurant.food_type}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Score</label>
        <input
          name="score"
          value={newRestaurant.score}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Visited</label>
        <input
          type="checkbox"
          name="visited"
          onChange={handleChange}
          checked={newRestaurant.visited}
        />
      </div>
      <button type="submit">Save</button>
      <Link to="/">Cancel</Link>
    </form>
  );
};

export default Form;
