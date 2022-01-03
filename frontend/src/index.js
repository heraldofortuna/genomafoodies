import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Header from "./components/Header";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <Header />
      <Router>
        <Routes>
          <Route
            exact
            path="/edit/:id"
            element={<Restaurant action="edit" />}
          />
          <Route exact path="/new" element={<Restaurant action="new" />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
