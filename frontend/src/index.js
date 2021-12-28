import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import NewRestaurant from "./pages/NewRestaurant";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/new" element={<NewRestaurant />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
