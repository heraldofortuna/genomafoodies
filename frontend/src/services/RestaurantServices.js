import axios from "axios";

export const newRestaurant = async (data) => {
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
