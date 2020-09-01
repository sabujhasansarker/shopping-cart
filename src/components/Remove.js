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
                  let splitData = item.image.split("/")[7];
                  // splitData = splitData.include("%20") ? : splitData
                  let indexNu = splitData.indexOf("?alt");
                  splitData = splitData.slice(0, indexNu).split("%20");
                  indexNu = splitData.join(" ");
                  // let reg = /[^%20])\w+/;
                  store.ref().child(splitData.join(" ")).delete();
                  database.ref(`products/${item.id}`).remove();

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
