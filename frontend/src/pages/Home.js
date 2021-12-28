import React from "react";
import { Link } from "react-router-dom";
import ListRestaurants from "../components/ListRestaurants";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/new">Add restaurant</Link>
      <ListRestaurants />
    </>
  );
};

export default Home;
