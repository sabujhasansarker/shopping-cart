import React from "react";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";

// State
import ShoppingState from "./context/ShoppingState";
import Product from "./components/Product";
import Card from "./components/Card";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <ShoppingState>
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Product} />
              <Route path="/card" exact component={Card} />
              <Route path="/product-:id" exact component={SingleProduct} />
            </Switch>
          </div>
        </div>
      </Router>
    </ShoppingState>
  );
}

export default App;
