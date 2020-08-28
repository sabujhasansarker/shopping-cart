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
          <Link to="/">Logo</Link>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <Link to="/card">
                <img
                  src="https://img.icons8.com/plasticine/100/000000/add-shopping-cart.png"
                  className="cart-img"
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
