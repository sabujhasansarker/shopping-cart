import React, { useContext, useState, useRef } from "react";

import ShoppingContext from "../context/ShoppingContext";

const Card = () => {
  const { items, cardItems, cards, price, setPrice, quantity } = useContext(
    ShoppingContext
  );

  // On click event
  const onClick = (e) => {
    let findOrg = cards.find((i) => i.id === e.id);

    if (findOrg) {
      findOrg.qn += 1;
      cards.filter((ca) => (ca.id === e.id ? findOrg : ca));
    } else {
      cardItems([...cards, e]);
    }
    setPrice();
  };

  return (
    <div className="d-grid">
      {items.map((d) => (
        <div className="card" key={d.id}>
          <img src={d.image} alt="" />
          <div className="content">
            <h4>{d.name}</h4>
            <p>${d.price}</p>
            <p>
              <span>+</span>
              <span style={{ padding: "0px 10px", cursor: "default" }}>
                <input type="number" value={d.qn} />
              </span>
              <span>-</span>
            </p>
            <button onClick={() => onClick(d)}>Add</button>
          </div>
        </div>
      ))}
      {price}
    </div>
  );
};

export default Card;
