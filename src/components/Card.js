import React, { useContext, Fragment } from "react";
import ShoppingContext from "../context/ShoppingContext";
import { Link } from "react-router-dom";

const Card = () => {
  const {
    cards,
    cardItems,
    removeItem,
    quantity,
    price,
    checkOut,
    user,
  } = useContext(ShoppingContext);
  return (
    <Fragment>
      <div className="profile">
        <img className="user-profile" src={user.photoURL} alt={user.name} />
        <h4 className="user-name">
          Hello {user.displayName} , <br /> This is your cardItems
        </h4>
        {!user.emailVerified && (
          <p style={{ color: "red" }}>Plz verified Your email</p>
        )}
      </div>
      <div className="carts-container">
        {cards.length > 0 ? (
          <Fragment>
            <div className="carts">
              {cards.map((card, index) => (
                <div className="cart" key={index}>
                  <img src={card.image} alt="" />
                  <div className="content">
                    <Link
                      className="name"
                      to={`/shopping-cart/product-${card.id}`}
                    >
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
                      <img
                        src="https://img.icons8.com/plasticine/100/000000/clear-shopping-cart.png"
                        alt=""
                      />
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
              ))}
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
              {user.emailVerified && (
                <div className="button" onClick={() => checkOut()}>
                  <img
                    src="https://img.icons8.com/plasticine/100/000000/shopping.png"
                    alt=""
                  />
                  Checkout
                </div>
              )}
            </div>
          </Fragment>
        ) : (
          <h1 className="empty">Your cart is currently empty.</h1>
        )}
      </div>
    </Fragment>
  );
};

export default Card;
