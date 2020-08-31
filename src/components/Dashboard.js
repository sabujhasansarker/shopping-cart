import React, { useState, useEffect } from "react";

import { auth, store } from "../config/fire";

const Dashboard = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
    dec: "",
    image: "",
  });
  const [error, setError] = useState(null);

  const { name, price, dec, image } = data;

  const onChange = (e) => {
    let type = ["image/png", "image/jpeg"];
    let file = e.target.files[0];

    if (!file) {
      setData({ ...data, [e.target.name]: e.target.value });
    } else {
      if (type.includes(file.type)) {
        if (file.size < 2000000) {
          setData({ ...data, [e.target.name]: file });
        } else {
          setError("Plz ");
        }
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && price && dec) {
      setData({ name: "", price: "", dec: "" });
    } else {
      console.log("lkasdfj");
    }
  };
  return (
    <div className="dashboard form-container">
      <h1>Dashboard</h1>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-item">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="price">Price :</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="dec">Description :</label>
          <textarea
            name="dec"
            value={dec}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <div className="form-item">
          <label htmlFor="image">Image :</label>
          <input type="file" name="image" onChange={(e) => onChange(e)} />
        </div>
        <div className="form-item">
          <input className="btn" type="submit" name="submit" value="Submit" />
        </div>
      </form>
      {image && <img src={URL.createObjectURL(image)} />}
    </div>
  );
};

export default Dashboard;
