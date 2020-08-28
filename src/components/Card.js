import React, { useContext } from "react";
import ShoppingContext from "../context/ShoppingContext";
import { Link } from "react-router-dom";

const Card = () => {
  const { cards, cardItems, removeItem, quantity, price } = useContext(
    ShoppingContext
  );
  return (
    <div className="carts-container">
      <div className="carts">
        {cards.length > 0
          ? cards.map((card) => (
              <div className="cart" key={card.id}>
                <img src={card.image} alt="" />
                <div className="content">
                  <Link className="name" to={`/product-${card.id}`}>
                    {card.name}
                  </Link>
                  <p className="action-container">
                    <span
                      className="action"
                      onClick={() => cardItems(cards, card, "+")}
                    >
                      +
                    </span>
                    <span className="quantity">{card.qn}</span>
                    <span
                      className="action"
                      onClick={() => cardItems(cards, card, "-")}
                    >
                      -
                    </span>
                  </p>
                  <div className="button" onClick={() => removeItem(card)}>
                    <img src="https://img.icons8.com/plasticine/100/000000/clear-shopping-cart.png" />
                    Remove
                  </div>
                  <p className="total-quantity single-qn">
                    Quantity : <span>{card.qn}</span>
                  </p>
                  <p className="single-price single-qn">
                    Price : <span>${card.price}</span>
                  </p>
                  <hr />
                  <p className="price single-qn">
                    Total Price : <span>${card.qn * card.price}</span>
                  </p>
                </div>
              </div>
            ))
          : "No Card"}
      </div>
      <div className="total">
        <h1>Total</h1>
        <hr />
        <div className="total-qn">
          Total Quantity : <b>{quantity}</b>
        </div>
        <div className="total-price">
          Total Price : <b>${price}</b>
        </div>
        <div className="button">
          <img src="https://img.icons8.com/plasticine/100/000000/shopping.png" />
          Checkout
        </div>
      </div>
    </div>
  );
};

export default Card;
