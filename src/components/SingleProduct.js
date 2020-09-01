import React, { useContext, useEffect } from "react";
import ShoppingContext from "../context/ShoppingContext";
import PreLoader from "./layout/PreLoader";

const SingleProduct = ({ match }) => {
  const {
    items,
    cardItems,
    cards,
    setPrice,
    removeItem,
    getData,
    loading,
  } = useContext(ShoppingContext);

  useEffect(() => {
    getData();
  }, []);
  // On click event
  const onClick = (e) => {
    cardItems(cards, e);
    setPrice();
  };
  // console.log(match.params.id, cards);
  if (items.length <= 0) {
    return <PreLoader />;
  }
  const cardTrue =
    cards && cards.find((card) => card.id === Number(match.params.id));
  const item =
    cardTrue || items.find((card) => card.id === Number(match.params.id));

  return (
    <div className="single-product">
      <div className="card">
        <img className="product-img" src={item.image} alt="" />
        <div className="content">
          <h1>{item.name}</h1>
          <p className="dec">{item.dec}</p>
          <p className="price">
            <b>Price : </b>${item.price}
          </p>
          <p className="action-container">
            <span
              className="action"
              onClick={() => cardItems(cards, item, "+")}
            >
              +
            </span>
            <span className="quantity">{cardTrue ? item.qn : 0}</span>
            <span
              className="action"
              onClick={() => cardItems(cards, item, "-")}
            >
              -
            </span>
          </p>
          <div className="flex">
            <div className="button" onClick={() => onClick(item)}>
              <img
                src="https://img.icons8.com/plasticine/100/000000/add-shopping-cart.png"
                alt=""
              />
              Add to cart
            </div>
            {cardTrue && (
              <div className="button remove" onClick={() => removeItem(item)}>
                <img
                  src="https://img.icons8.com/plasticine/100/000000/clear-shopping-cart.png"
                  alt=""
                />
                Remove
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
