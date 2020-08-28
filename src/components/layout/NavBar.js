import React, { useContext } from "react";
import ShoppingContext from "../../context/ShoppingContext";

const NavBar = () => {
  const { quantity } = useContext(ShoppingContext);
  return (
    <header>
      <nav>
        <div className="left">Logo</div>
        <div className="right">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">
                Card <span className="card-number">{quantity}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
