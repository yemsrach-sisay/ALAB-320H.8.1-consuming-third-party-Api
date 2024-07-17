import React, { useState, useEffect } from "react";
import { getAllStarships } from "./services/sw-api";
import StarshipCard from "./components/StarshipCard";
import "./style.css";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getAllStarships().then((data) => setStarships(data.results));
  }, []);

  return (
    <div className="App">
      {starships.map((starship) => (
        <StarshipCard key={starship.name} starship={starship} />
      ))}
    </div>
  );
}

export default App;
