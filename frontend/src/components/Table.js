import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Table = ({ data, handleDelete }) => {
  const [restaurants, setRestaurants] = useState(data);
  const [ascendant, setAscendant] = useState(true);

  useEffect(() => setRestaurants(data), [data]);

  const sortingTable = (column) => {
    const sorted = [...restaurants].sort((a, b) => {
      const columnA = a[column].toLocaleString();
      const columnB = b[column].toLocaleString();
      return ascendant
        ? columnA.localeCompare(columnB)
        : columnB.localeCompare(columnA);
    });
    setRestaurants(sorted);
    setAscendant(!ascendant);
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => sortingTable("title")}>Title</th>
          <th onClick={() => sortingTable("ubication")}>Ubication</th>
          <th onClick={() => sortingTable("food_type")}>Food type</th>
          <th onClick={() => sortingTable("score")}>Score</th>
          <th onClick={() => sortingTable("visited")}>Visited</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => {
          const { title, ubication, food_type, score, visited } = restaurant;
          return (
            <tr key={restaurant.id}>
              <td>{title}</td>
              <td>{ubication}</td>
              <td>{food_type}</td>
              <td>{score}</td>
              <td>
                <input type="checkbox" checked={visited} readOnly />
              </td>
              <td>
                <Link
                  className="button button--edit"
                  to={`/edit/${restaurant.id}`}
                  state={restaurant}
                >
                  Edit
                </Link>
                <button
                  className="button button--delete"
                  onClick={() => handleDelete(restaurant)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
