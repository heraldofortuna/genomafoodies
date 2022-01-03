import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/table.css";
import { MdAddCircle, MdModeEdit, MdDeleteForever } from "react-icons/md";
import Icon from "../components/Icon";
import Input from "./Input";

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
    <table className="table">
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
                <Input
                  type="checkbox"
                  name="visited"
                  checked={visited}
                  readOnly={true}
                />
              </td>
              <td className="table__actions">
                <Link to={`/edit/${restaurant.id}`} state={restaurant}>
                  <Icon children={<MdModeEdit />} action="edit" />
                </Link>
                <Icon
                  children={<MdDeleteForever />}
                  onClick={() => handleDelete(restaurant)}
                  action="delete"
                />
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr className="table__add">
          <td>
            <Link to="/new">
              <Icon children={<MdAddCircle />} action="new" />
            </Link>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
