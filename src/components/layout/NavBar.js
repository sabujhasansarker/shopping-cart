import React from "react";

const NavBar = () => {
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
                Card <span className="card-number">0</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
