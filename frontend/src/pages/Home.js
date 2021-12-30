import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import Table from "../components/Table";
import {
  getRestaurants,
  deleteRestaurant,
} from "../services/RestaurantServices";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  const loadRestaurants = async () => {
    const response = await getRestaurants();
    if (response.status === 200) setRestaurants(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadRestaurants();
  }, []);

  const handleDelete = async (restaurant) => {
    await deleteRestaurant(restaurant.id);
    loadRestaurants();
  };

  const handleFilterTitle = async (title) => {
    const response = await getRestaurants();
    const filteredData = response.data.filter((restaurant) => {
      let lowerTitle = restaurant.title.toLowerCase();
      if (lowerTitle.includes(title.toLowerCase())) return restaurant;
    });
    setRestaurants(filteredData);
  };

  return (
    <>
      <h1>Home</h1>
      <Link to="/new">Add restaurant</Link>
      <FilterBar onTitleFilter={handleFilterTitle} />
      {isLoading ? (
        <p>Is loading ...</p>
      ) : !restaurants.length ? (
        <p>You don't have restaurants in your list</p>
      ) : (
        <Table data={restaurants} handleDelete={handleDelete} />
      )}
    </>
  );
};

export default Home;
