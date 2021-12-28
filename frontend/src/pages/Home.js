import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Item from "../components/Item";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  const refreshList = () => {
    axios
      .get("/api/genomafoodies/")
      .then((res) => {
        console.log(res);
        setRestaurants(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <Link to="/new">Add restaurant</Link>
      <ul>
        {restaurants.map((restaurant) => (
          <Item key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    </>
  );
};

export default Home;
