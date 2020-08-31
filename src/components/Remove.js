import React, { useContext } from "react";

import ShoppingContext from "../context/ShoppingContext";

export const Remove = () => {
  const { items } = useContext(ShoppingContext);
  return (
    <div className="remove">
      <h1>Your all product</h1>
      <table id="students">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <img src={item.image} alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
