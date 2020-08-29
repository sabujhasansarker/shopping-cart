import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import ShoppingContext from "../../context/ShoppingContext";

const NavBar = () => {
  const { quantity } = useContext(ShoppingContext);
  return (
    <header>
      <nav>
        <div className="left">
          <Link to="/shopping-cart">Logo</Link>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link to="/shopping-cart">Home</Link>
            </li>
            <li>
              <Link to="/shopping-cart">Products</Link>
            </li>
            <li>
              <Link to="/shopping-cart/login">Login</Link>
            </li>
            <li>
              <Link to="/shopping-cart/register">Register</Link>
            </li>
            <li>
              <Link to="/shopping-cart/card">
                <img
                  src="https://img.icons8.com/plasticine/100/000000/add-shopping-cart.png"
                  className="cart-img"
                  alt=""
                />
                <span className="card-number">{quantity}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;