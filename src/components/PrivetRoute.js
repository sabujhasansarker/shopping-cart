import React from "react";
import { Route, Redirect } from "react-router-dom";

import ShoppingContext from "../context/ShoppingContext";

const PrivetRoute = ({ component: Component, ...rest }) => {
  const { isAutination } = useContext();
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAutination ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivetRoute;
