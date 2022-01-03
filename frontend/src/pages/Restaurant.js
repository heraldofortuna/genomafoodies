import React from "react";
import { useLocation } from "react-router-dom";
import Form from "../components/Form";

const Restaurant = ({ action }) => {
  const label = {
    new: "Add a new restaurant",
    edit: "Edit this restaurant",
  };

  const data = {
    new: [],
    edit: useLocation().state,
  };

  const isToEdit = {
    new: false,
    edit: true,
  };

  return (
    <main className="container">
      <Form
        label={label[action]}
        isToEdit={isToEdit[action]}
        data={data[action]}
      />
    </main>
  );
};

export default Restaurant;
