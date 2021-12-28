import React from "react";

const ItemRestaurants = ({ restaurant }) => {
  return (
    <li>
      <h2>{restaurant.title}</h2>
      <p>{restaurant.location}</p>
      <p>{restaurant.food_type}</p>
      <p>{restaurant.score}</p>
      <p>{restaurant.visited}</p>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default ItemRestaurants;
