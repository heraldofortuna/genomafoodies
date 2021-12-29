import React from "react";
import { Link } from "react-router-dom";

const Item = ({ restaurant, handleDelete }) => {
  const { title, ubication, food_type, score, visited } = restaurant;

  return (
    <li>
      <h2>{title}</h2>
      <p>{ubication}</p>
      <p>{food_type}</p>
      <p>{score}/5</p>
      <input type="checkbox" checked={visited} readOnly />
      <div>
        <Link to={`/edit/${restaurant.id}`} state={restaurant}>
          <button>Edit</button>
        </Link>
        <button onClick={() => handleDelete(restaurant)}>Delete</button>
      </div>
    </li>
  );
};

export default Item;
