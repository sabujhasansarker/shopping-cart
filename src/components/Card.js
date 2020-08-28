import React, { useContext } from "react";
import ShoppingContext from "../context/ShoppingContext";

const Card = () => {
  const { cards } = useContext(ShoppingContext);
  return (
    <div>
      <h1>Card</h1>
      {cards.length > 0
        ? cards.map((card) => (
            <div className="card" key={card.id}>
              <img src={card.image} alt="" />
              <div className="content">
                <h4>{card.name}</h4>
                <p>
                  Price : {card.qn + "X" + card.price} ${card.qn * card.price}
                </p>
              </div>
            </div>
          ))
        : "No Card"}
    </div>
  );
};

export default Card;
