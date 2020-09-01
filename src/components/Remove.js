import React, { useContext } from "react";

import { database, store } from "../config/fire";

import ShoppingContext from "../context/ShoppingContext";

export const Remove = () => {
  const { items, getData } = useContext(ShoppingContext);
  return (
    <div className="remove">
      <h1>Your all product</h1>
      <table id="product">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
          {items.map((item, index) => (
            <tr key={index} className="table-data">
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <img src={item.image} alt="" />
              </td>
              <td
                onClick={() => {
                  // store.ref().child(item.image).delete();
                  // database.ref(`products/${item.id}`).remove();
                  console.log();
                  getData();
                }}
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
