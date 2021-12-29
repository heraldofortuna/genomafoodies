import React from "react";
import { Link } from "react-router-dom";

const Table = ({ restaurants, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Location</th>
          <th>Type food</th>
          <th>Score</th>
          <th>Visited</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.title}</td>
            <td>{restaurant.location}</td>
            <td>{restaurant.type_food}</td>
            <td>{restaurant.score}</td>
            <td>
              <input type="checkbox" checked={restaurant.visited} readOnly />
            </td>
            <td>
              <Link to={`/edit/${restaurant.id}`} state={restaurant}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(restaurant)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
