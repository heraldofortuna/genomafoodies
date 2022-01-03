import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";

const NewRestaurant = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Form label="Add a new restaurant" />
      </main>
    </>
  );
};

export default NewRestaurant;
