import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login form-container">
      <h1>Login</h1>
      <form action="" className="form">
        <div className="form-item">
          <label htmlFor="email">Email : </label>
          <input type="email" name="email" placeholder="E-mail" />
        </div>
        <div className="form-item">
          <label htmlFor="password_1">Password : </label>
          <input type="password" name="password_1" placeholder="Password" />
        </div>
        <div className="form-item">
          <input className="btn" type="submit" name="submit" value="register" />
        </div>
      </form>
      <p>
        If no account please{" "}
        <Link to="/shopping-cart/register">register !</Link>
      </p>
    </div>
  );
};

export default Login;
