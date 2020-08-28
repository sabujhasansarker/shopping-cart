import React, { useState, useRef } from "react";

import NavBar from "./components/layout/NavBar";

// State
import ShoppingState from "./context/ShoppingState";
import Card from "./components/Card";

function App() {
  return (
    <ShoppingState>
      <div className="App">
        <NavBar />
        <div className="container">
          <h1>App Js</h1>
          <Card />
          {/* <div className="card-list">
            <p>{card.length}</p>
            <div className="price">{value.current}</div>
          </div> */}
        </div>
      </div>
    </ShoppingState>
  );
}

export default App;
