import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";

// auth
import { auth } from "../config/fire";
import ShoppingContext from "../context/ShoppingContext";

const Login = () => {
  const { getUser, isAutination } = useContext(ShoppingContext);

  const [data, setData] = useState({
    email: "",
    password_1: "",
  });
  const [error, setError] = useState(null);
  const { email, password_1 } = data;

  if (isAutination) {
    return <Redirect to="/shopping-cart" />;
  }

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password_1);
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
    <div className="login form-container">
      <h1>Login</h1>
      <p>{error}</p>
      <form action="" className="form" onSubmit={(e) => onSubmit(e)}>
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
          <label htmlFor="password_1">Password : </label>
          <input
            value={password_1}
            onChange={(e) => onChange(e)}
            type="password"
            name="password_1"
            placeholder="Password"
          />
        </div>
        <div className="form-item">
          <input className="btn" type="submit" name="submit" value="login" />
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
