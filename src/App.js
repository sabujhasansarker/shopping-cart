import React from "react";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";

// State
import ShoppingState from "./context/ShoppingState";
import Product from "./components/Product";
import Card from "./components/Card";
import SingleProduct from "./components/SingleProduct";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <ShoppingState>
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Switch>
              <Route path="/shopping-cart" exact component={Product} />
              <Route
                path="/shopping-cart/register"
                exact
                component={Register}
              />
              <Route path="/shopping-cart/login" exact component={Login} />
              <Route path="/shopping-cart/card" exact component={Card} />
              <Route
                path="/shopping-cart/product-:id"
                exact
                component={SingleProduct}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </ShoppingState>
  );
}

export default App;
