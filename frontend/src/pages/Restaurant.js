import React from "react";
import { useLocation } from "react-router-dom";
import Form from "../components/Form";

const Restaurant = ({ action }) => {
  const values = {
    new: {
      label: "Add a new restaurant",
      isToEdit: false,
      data: [],
    },
    edit: {
      label: "Edit restaurant",
      isToEdit: true,
      data: useLocation().state,
    },
  };

  return (
    <main className="container">
      <Form
        label={values[action].label}
        isToEdit={values[action].isToEdit}
        data={values[action].data}
      />
    </main>
  );
};

export default Restaurant;
