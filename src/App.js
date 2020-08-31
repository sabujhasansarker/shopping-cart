import React, { useContext, useEffect } from "react";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";

// State
import Product from "./components/Product";
import Card from "./components/Card";
import SingleProduct from "./components/SingleProduct";
import Register from "./components/Register";
import Login from "./components/Login";
import ShoppingContext from "./context/ShoppingContext";
import PreLoader from "./components/layout/PreLoader";

import PrivetRoute from "./components/PrivetRoute";
import Dashboard from "./components/Dashboard";

function App() {
  useEffect(() => {
    getUser();
  }, []);
  const { loading, getUser, user } = useContext(ShoppingContext);
  return (
    <Router>
      {loading ? (
        <PreLoader />
      ) : (
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
              <PrivetRoute path="/shopping-cart/card" exact component={Card} />
              {user ? (
                user.email === "sabujhasansarker@gmail.com" &&
                user.emailVerified && (
                  <PrivetRoute
                    path="/shopping-cart/dashboard"
                    exact
                    component={Dashboard}
                  />
                )
              ) : (
                <PrivetRoute
                  path="/shopping-cart/dashboard"
                  exact
                  component={Dashboard}
                />
              )}
              <Route
                path="/shopping-cart/product-:id"
                exact
                component={SingleProduct}
              />
            </Switch>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
