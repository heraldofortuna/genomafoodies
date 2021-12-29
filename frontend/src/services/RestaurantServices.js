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

export const addRestaurant = async (data) => {
  try {
    const response = await axios({
      url: "/api/genomafoodies/",
      method: "POST",
      data: data,
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const deleteRestaurant = async (item) => {
  try {
    const response = await axios({
      url: `/api/genomafoodies/${item.id}`,
      method: "DELETE",
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};
