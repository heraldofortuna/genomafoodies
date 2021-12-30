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

  useEffect(() => loadRestaurants(), []);

  const handleDelete = async (restaurant) => {
    await deleteRestaurant(restaurant.id);
    loadRestaurants();
  };

  const handleFilter = async (filter) => {
    const response = await getRestaurants();
    const filteredData = response.data
      .filter((restaurant) => {
        const currentTitle = restaurant.title.toLowerCase();
        const filteredTitle = filter.title.toLowerCase();
        if (currentTitle.includes(filteredTitle)) return restaurant;
      })
      .filter((restaurant) => {
        const currentRestaurant = restaurant.ubication.toLowerCase();
        const filteredRestaurant = filter.ubication.toLowerCase();
        if (currentRestaurant.includes(filteredRestaurant)) return restaurant;
      })
      .filter((restaurant) => {
        const currentFoodType = restaurant.food_type.toLowerCase();
        const filteredFoodType = filter.food_type.toLowerCase();
        if (currentFoodType.includes(filteredFoodType)) return restaurant;
      });
    setRestaurants(filteredData);
  };

  return (
    <>
      <h1>Home</h1>
      <Link to="/new" className="button">
        Add restaurant
      </Link>
      <FilterBar handleFilter={handleFilter} />
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
