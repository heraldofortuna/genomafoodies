import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Form from "../components/Form";

const EditRestaurant = () => {
  const { state } = useLocation();

  return (
    <>
      <Header />
      <main className="container">
        <Form label="Edit this restaurant" isToEdit data={state} />
      </main>
    </>
  );
};

export default EditRestaurant;
