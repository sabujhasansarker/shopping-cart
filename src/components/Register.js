import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { auth } from "../config/fire";
import ShoppingContext from "../context/ShoppingContext";

const Register = () => {
  const { getUser } = useContext(ShoppingContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password_1: "",
    password_2: "",
  });
  const [error, setError] = useState(null);
  const { name, email, password_1, password_2 } = data;
  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password_1 !== password_2) {
      setError("Password dose not match");
      return clearError();
    }

    try {
      await auth.createUserWithEmailAndPassword(email, password_1);
      await auth.currentUser.updateProfile({
        displayName: name,
      });

      getUser();
    } catch (error) {
      setError(error.message);
      clearError();
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  return (
    <div className="register form-container">
      <h1>Register</h1>
      <div className="alert">
        <p>{error}</p>
      </div>
      <form action="" className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-item">
          <label htmlFor="name">Name : </label>
          <input
            value={name}
            onChange={(e) => onChange(e)}
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="form-item">
          <label htmlFor="email">Email : </label>
          <input
            value={email}
            onChange={(e) => onChange(e)}
            type="email"
            name="email"
            placeholder="E-mail"
          />
        </div>
        <div className="form-item">
          <label htmlFor="password_1">Password :</label>
          <input
            value={password_1}
            onChange={(e) => onChange(e)}
            type="password"
            name="password_1"
            placeholder="Password"
          />
        </div>
        <div className="form-item">
          <label htmlFor="password_2">Confirm Password : </label>
          <input
            value={password_2}
            onChange={(e) => onChange(e)}
            type="password"
            name="password_2"
            placeholder="Password"
          />
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