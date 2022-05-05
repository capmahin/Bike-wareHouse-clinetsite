import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className="service">
      <img className="w-100" src={img} alt="" />
      <h2>Service:{name}</h2>
      <p>Price:{price}</p>
      <button className="btn btn-dark">Book:{name}</button>
    </div>
  );
};

export default Service;
