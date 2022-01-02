import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header"
import Form from "../components/Form";

const EditRestaurant = () => {
  const { state } = useLocation();

  return (
    <div className="wrapper">
      <Header />
      <Form isToEdit data={state} />
    </div>
  );
};

export default EditRestaurant;
