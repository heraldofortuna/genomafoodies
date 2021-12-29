import axios from "axios";

export const getRestaurants = async () => {
  try {
    const response = await axios({
      url: "/api/genomafoodies/",
      method: "GET",
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const addRestaurant = async (newItem) => {
  try {
    const response = await axios({
      url: "/api/genomafoodies/",
      method: "POST",
      data: newItem,
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const updateRestaurant = async (newItem, itemId) => {
  try {
    const response = await axios({
      url: `/api/genomafoodies/${itemId}/`,
      method: "PUT",
      data: newItem,
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const deleteRestaurant = async (itemId) => {
  try {
    const response = await axios({
      url: `/api/genomafoodies/${itemId}/`,
      method: "DELETE",
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};
