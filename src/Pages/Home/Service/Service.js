import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <h2>Service:{name}</h2>
      <p>Price:{price}</p>
      <button>Book:{name}</button>
    </div>
  );
};

export default Service;
