import React from "react";

const Item = ({ restaurant, handleDelete }) => {
  return (
    <li>
      <h2>{restaurant.title}</h2>
      <p>{restaurant.ubication}</p>
      <p>{restaurant.food_type}</p>
      <p>{restaurant.score}/5</p>
      <input type="checkbox" checked={restaurant.visited} readOnly />
      <div>
        <button>Edit</button>
        <button onClick={() => handleDelete(restaurant)}>Delete</button>
      </div>
    </li>
  );
};

export default Item;
