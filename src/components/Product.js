import React, { useContext } from "react";

import ShoppingContext from "../context/ShoppingContext";
import { Link } from "react-router-dom";

const Product = () => {
  const { items, cardItems, cards, setPrice } = useContext(ShoppingContext);

  // On click event
  const onClick = (e) => {
    cardItems(cards, e);
    setPrice();
  };
  return (
    <div className="product">
      {items.map((item, index) => (
        <div className="card" key={index}>
          <img className="product-img" src={item.image} alt="" />
          <div className="content">
            <Link to={`/shopping-cart/product-${item.id}`} className="name">
              {item.name}
            </Link>
            <p>${item.price}</p>
            <div className="button" onClick={() => onClick(item)}>
              <img
                src="https://img.icons8.com/plasticine/100/000000/add-shopping-cart.png"
                alt=""
              />
              Add to cart
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
