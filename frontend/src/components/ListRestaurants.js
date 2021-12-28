import React from "react";
import genomafoodiesItems from "../store";
// Components
import ItemRestaurants from "../components/ItemRestaurants";

const ListRestaurants = () => {
  return (
    <ul>
      {genomafoodiesItems.map((restaurant) => (
        <ItemRestaurants restaurant={restaurant} />
      ))}
    </ul>
  );
};

export default ListRestaurants;
