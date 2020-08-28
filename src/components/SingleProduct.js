import React, { useContext, Fragment } from "react";
import ShoppingContext from "../context/ShoppingContext";

const SingleProduct = ({ match }) => {
  const { items } = useContext(ShoppingContext);
  return (
    <div className="single-product">
      {items.map((item) => (
        <Fragment key={item.id}>
          {item.id === Number(match.params.id) && (
            <div className="card">
              <img src={item.image} alt="" />
              <h1>{item.name}</h1>
              <p>{item.dec}</p>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default SingleProduct;
