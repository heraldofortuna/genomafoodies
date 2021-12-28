import React, { useState } from "react";
import { Link } from "react-router-dom";
import genomafoodiesItems from "../store";
import Item from "../components/Item";

const Home = () => {
  const [restaurants, setRestaurants] = useState(genomafoodiesItems);

  return (
    <>
      <h1>Home</h1>
      <Link to="/new">Add restaurant</Link>
      <ul>
        {genomafoodiesItems.map((restaurant) => (
          <Item key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    </>
  );
};

export default Home;
