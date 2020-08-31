import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import ShoppingState from "./context/ShoppingState";

ReactDOM.render(
  <React.StrictMode>
    <ShoppingState>
      <App />
    </ShoppingState>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();