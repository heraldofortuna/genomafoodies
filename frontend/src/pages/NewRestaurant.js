import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";

const NewRestaurant = () => {
  return (
    <div className="wrapper">
      <Header />
      <Form label="Add a new restaurant" />
    </div>
  );
};

export default NewRestaurant;
