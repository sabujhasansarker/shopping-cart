import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register form-container">
      <h1>Register</h1>
      <form action="" className="form">
        <div className="form-item">
          <label htmlFor="name">Name : </label>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div className="form-item">
          <label htmlFor="email">Email : </label>
          <input type="email" name="email" placeholder="E-mail" />
        </div>
        <div className="form-item">
          <label htmlFor="password_1">Password : </label>
          <input type="password" name="password_1" placeholder="Password" />
        </div>
        <div className="form-item">
          <label htmlFor="password_2">Confirm Password : </label>
          <input type="password" name="password_2" placeholder="Password" />
        </div>
        <div className="form-item">
          <input className="btn" type="submit" name="submit" value="register" />
        </div>
      </form>
      <p>
        If Your already register please{" "}
        <Link to="/shopping-cart/login">login !</Link>
      </p>
    </div>
  );
};

export default Register;
