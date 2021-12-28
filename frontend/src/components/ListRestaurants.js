import React from "react";
import genomafoodiesItems from "../store";
import ItemRestaurants from "../components/ItemRestaurants";

const ListRestaurants = () => {
  return (
    <ul>
      {genomafoodiesItems.map((restaurant) => (
        <ItemRestaurants key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  );
};

export default ListRestaurants;
