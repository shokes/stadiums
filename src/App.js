import "./App.css";

import React, { useState, useEffect } from "react";
import data from "./data";
import Stadiums from "./stadiums";

function App() {
  const [loading, setLoading] = useState(true);
  const [stadium, setStadium] = useState(data);

  if (loading) {
    return (
      <div>
        <h1>Visit These Stadiums For Free</h1>
        <Stadiums stadium={stadium} />
      </div>
    );
  }

  return (
    <main>
      <h2>an error occured</h2>
    </main>
  );
}

export default App;
