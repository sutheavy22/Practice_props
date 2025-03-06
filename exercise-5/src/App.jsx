// function App() {
//   return <>{/* Your code  here */}</>;
// }

// export default App;

import React from "react";
import { PLACES } from "./data.js"; // Import place data
import { Place } from "./Place.js"; // Import Place component

function App() {
  return (
    <div id="app">
      <h1>PLACEPICKER</h1>
      <p>Where would you like to go?</p>
      <ul className="places-list">
        {PLACES.map((place) => (
          <Place key={place.id} place={place} />
        ))}
      </ul>
    </div>
  );
}

export default App;
