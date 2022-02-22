import "./App.css";

import React, { useState } from "react";
import data from "./data";
import Stadiums from "./stadiums";

function App() {
  const [stadium, setStadium] = useState(data);

  const removeStadium = function (id) {
    const newStadium = stadium.filter((stadi) => stadi.id !== id);
    setStadium(newStadium);
  };

  return (
    <div>
      <h1>Visit These Stadiums For Free</h1>
      <Stadiums stadium={stadium} removeStadium={removeStadium} />
    </div>
  );
}

export default App;
