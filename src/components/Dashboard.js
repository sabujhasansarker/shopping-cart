import React, { useState } from "react";

import { store, database } from "../config/fire";

const Dashboard = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
    dec: "",
    image: "",
  });
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { name, price, dec, image } = data;
  const [yesOrNo, setYesOrNo] = useState(false);
  const [math, setMath] = useState(Math.random() * 1000);

  // Onchange Handler
  const onChange = (e) => {
    let type = ["image/png", "image/jpeg"];
    let file = e.target.files;

    if (!file) {
      setData({ ...data, [e.target.name]: e.target.value });
    } else {
      file = file[0];
      if (type.includes(file.type)) {
        if (file.size < 2000000) {
          setData({ ...data, image: file });
          setFile(file);
        } else {
          setError("Plz ");
        }
      }
    }
  };

  // On submit
  const onSubmit = (e) => e.preventDefault();

  // save data
  const saveData = async () => {
    if (name && price && dec && image) {
      // upload image
      store
        .ref()
        .child(file.name + math)
        .put(file)
        .on("state_changed", async (snap) => {
          // image upload
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          console.log(percentage);

          // percentage
          if (percentage >= 100) {
            // Get url
            const url = await store.ref(file.name + math).getDownloadURL();
            setData({ ...data, image: url });
            setYesOrNo(true);
            if (typeof image === "string") {
              // Yes or no
              setYesOrNo(false);
              setData({ name: "", price: "", dec: "", image: "" });
              setFile(null);
              // Save database
              var newProduct = database.push();
              newProduct.set(data);
            }
          }
        });
    }
  };

  // Delete image form storage
  const deleteImage = () => {
    store
      .ref()
      .child(file.name + math)
      .delete();
    setYesOrNo(false);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard form-container">
        <h1>Create Your Product</h1>
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
      </div>

      {/* Preview */}
      <div className="preview">
        <h3>Preview your product after published </h3>
        {file && <img src={URL.createObjectURL(file)} />}
        {name && (
          <p>
            <b>Name : </b>
            {name}
          </p>
        )}
        {price && (
          <p>
            <b>Price : </b>${price}
          </p>
        )}
        {dec && (
          <p>
            <b>Description : </b>
            {dec}
          </p>
        )}
        {!yesOrNo && image && name && price && dec && (
          <div className="button" onClick={() => saveData()}>
            Submit your product
          </div>
        )}
        {yesOrNo && (
          <div>
            <button onClick={() => saveData()}>Yes</button>
            <button onClick={() => deleteImage()}>No</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
