import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card " style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <h5 className="card-text">
            A motorcycle, often called a motorbike, bike, cycle, or (if
            three-wheeled) trike, is a two- or three-wheeled motor
            vehicle.[1][2][3] Motorcycle design varies greatly to suit a range
            of different purposes: long-distance travel, commuting, cruising,
            sport (including racing), and off-road riding. Motorcycling is
            riding a motorcycle and being involved in other related social
            activity such as joining a motorcycle club and attending motorcycle
            rallies.
          </h5>
          <a href="#" className="btn btn-dark">
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default Expert;
