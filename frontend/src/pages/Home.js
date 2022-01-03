import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Table from "../components/Table";
import FilterBar from "../components/FilterBar";
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
      .filter((restaurant) =>
        restaurant.title.toLowerCase().includes(filter.title.toLowerCase())
      )
      .filter((restaurant) =>
        restaurant.ubication
          .toLowerCase()
          .includes(filter.ubication.toLowerCase())
      )
      .filter((restaurant) =>
        restaurant.food_type
          .toLowerCase()
          .includes(filter.food_type.toLowerCase())
      );

    setRestaurants(filteredData);
  };

  return (
    <main className="container">
      <FilterBar handleFilter={handleFilter} />
      {isLoading ? (
        <Loader />
      ) : (
        <Table data={restaurants} handleDelete={handleDelete} />
      )}
    </main>
  );
};

export default Home;
