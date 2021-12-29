import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../components/Item";
import {
  getRestaurants,
  deleteRestaurant,
} from "../services/RestaurantServices";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  const loadRestaurants = async () => {
    const response = await getRestaurants();

    if (response.status === 200) {
      setRestaurants(response.data);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    loadRestaurants();
  }, []);

  const handleDelete = async (restaurant) => {
    await deleteRestaurant(restaurant);
    loadRestaurants();
  };

  return (
    <>
      <h1>Home</h1>
      <Link to="/new">Add restaurant</Link>
      {isLoading ? (
        <p>Is loading ...</p>
      ) : !restaurants.length ? (
        <p>You don't have restaurants in your list</p>
      ) : (
        <ul>
          {restaurants.map((restaurant) => (
            <Item
              key={restaurant.id}
              restaurant={restaurant}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
