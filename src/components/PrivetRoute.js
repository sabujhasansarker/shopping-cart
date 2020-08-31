import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import ShoppingContext from "../context/ShoppingContext";

const PrivetRoute = ({ component: Component, ...rest }) => {
  const { isAutination } = useContext(ShoppingContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAutination ? (
          <Redirect to="/shopping-cart/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivetRoute;
