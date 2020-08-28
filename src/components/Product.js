import React, { useContext } from "react";

import ShoppingContext from "../context/ShoppingContext";
import { Link } from "react-router-dom";

const Product = () => {
  const { items, cardItems, cards, price, setPrice } = useContext(
    ShoppingContext
  );

  // On click event
  const onClick = (e) => {
    cardItems(cards, e);
    setPrice();
  };

  return (
    <div className="d-grid">
      {items.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt="" />
          <div className="content">
            <Link to={`/product-${item.id}`}>{item.name}</Link>
            <p>${item.price}</p>
            <button onClick={() => onClick(item)}>Add</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
