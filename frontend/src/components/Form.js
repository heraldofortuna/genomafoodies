import React, { useState } from "react";
import { Link } from "react-router-dom";
import genomafoodiesItems from "../store";

const Form = () => {
  const [newTitle, setNewTitle] = useState("a new title...");
  const [newLocation, setNewLocation] = useState("a new location...");
  const [newFoodType, setNewFoodType] = useState("a new food type...");
  const [newScore, setNewScore] = useState("a new score...");
  const [newVisited, setNewVisited] = useState("a new visited...");

  const addNote = (event) => {
    event.preventDefault();

    genomafoodiesItems.push({
      id: genomafoodiesItems.length + 1,
      title: newTitle,
      location: newLocation,
      food_type: newFoodType,
      score: newScore,
      visited: newVisited,
    });
  };

  const handleNoteChange = (event) => {
    let { name, value } = event.target;

    switch (name) {
      case "title":
        setNewTitle(value);
        break;
      case "location":
        setNewLocation(value);
        break;
      case "foodType":
        setNewFoodType(value);
        break;
      case "score":
        setNewScore(value);
        break;
      case "visited":
        setNewVisited(value);
        break;
      default:
        console.log("Default");
    }
  };

  return (
    <form onSubmit={addNote}>
      <div>
        <label>Title</label>
        <input name="title" value={newTitle} onChange={handleNoteChange} />
      </div>
      <div>
        <label>Location</label>
        <input
          name="location"
          value={newLocation}
          onChange={handleNoteChange}
        />
      </div>
      <div>
        <label>Food Type</label>
        <input
          name="foodType"
          value={newFoodType}
          onChange={handleNoteChange}
        />
      </div>
      <div>
        <label>Score</label>
        <input name="score" value={newScore} onChange={handleNoteChange} />
      </div>
      <div>
        <label>Visited</label>
        <input name="visited" value={newVisited} onChange={handleNoteChange} />
      </div>
      <button type="submit">save</button>
      <Link to="/">Cancel</Link>
    </form>
  );
};

export default Form;
