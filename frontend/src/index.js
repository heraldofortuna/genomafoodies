import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewRestaurant from "./pages/NewRestaurant";
import EditRestaurant from "./pages/EditRestaurant";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
    <Router>
      <Routes>
        <Route exact path="/edit/:id" element={<EditRestaurant />} />
        <Route exact path="/new" element={<NewRestaurant />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
