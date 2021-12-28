import React, { useState } from "react";
import { Link } from "react-router-dom";
import { newRestaurant } from "../services/RestaurantServices";

const Form = () => {
  const initialState = {
    id: 10,
    title: "insert title",
    ubication: "insert ubication",
    food_type: "insert food type",
    score: 0,
    visited: false,
  };

  const [newRestaurant, setNewRestaurant] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    newRestaurant(newRestaurant);
  };

  const handleChange = (event) => {
    let { name, value } = event.target;

    setNewRestaurant((prevRestaurant) => ({
      ...prevRestaurant,
      [name]: value,
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
          name="visited"
          value={newRestaurant.visited}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
      <Link to="/">Cancel</Link>
    </form>
  );
};

export default Form;
