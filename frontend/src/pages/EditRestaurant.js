import React from "react";
import { useLocation } from "react-router-dom";
import Form from "../components/Form";

const EditRestaurant = () => {
  const { state } = useLocation();

  return (
    <>
      <h1>Edit Restaurant</h1>
      <Form isToEdit data={state} />
    </>
  );
};

export default EditRestaurant;
