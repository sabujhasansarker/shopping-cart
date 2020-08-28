import React, { useState, useRef } from "react";

// Demo
import data from "./demo.json";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [card, setCard] = useState([]);
  const [price, setPrice] = useState(0);
  const value = useRef(null);

  // On click event
  const onClick = (e) => {
    if (card.length <= 0) {
      setCard([...card, e]);
    } else {
      let findOrg = card.find((i) => i.id === e.id);

      if (findOrg) {
        findOrg.qn += 1;
        card.filter((ca) => (ca.id === e.id ? findOrg : ca));
      } else {
        setCard([...card, e]);
      }
    }
    totalPrice();
  };

  // Total price
  value.current = card.reduce((result, prd) => result + prd.price * prd.qn, 0);
  const totalPrice = () => {
    setPrice(card.reduce((result, prd) => result + prd.price * prd.qn, 0));
    console.log("card");
  };

  return (
    <div className="App">
      <div className="container">
        <h1>App Js</h1>
        <div className="d-grid">
          {data.map((d) => (
            <div className="card" key={d.id}>
              <img src={d.image} alt="" />
              <div className="content">
                <h4>{d.name}</h4>
                <p>${d.price}</p>
                <p>
                  <span onClick={() => setQuantity(quantity + 1)}>+</span>
                  <span style={{ padding: "0px 10px", cursor: "default" }}>
                    <input type="number" value={d.qn} />
                  </span>
                  <span onClick={() => (d.qn -= 1)}>-</span>
                </p>
                <button onClick={() => onClick(d)}>Add</button>
              </div>
            </div>
          ))}
        </div>
        <div className="card-list">
          <p>{card.length}</p>
          <div className="price">{value.current}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
