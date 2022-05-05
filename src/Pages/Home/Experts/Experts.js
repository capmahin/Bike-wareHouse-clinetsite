import React from "react";
import expert1 from "../../../images/Experts/expert1.jpg";
import expert2 from "../../../images/Experts/expert2.jpg";
import expert3 from "../../../images/Experts/expert3.jpg";
import expert4 from "../../../images/Experts/expert4.jpg";
import expert5 from "../../../images/Experts/expert5.jpg";
import expert6 from "../../../images/Experts/expert6.jpg";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "john corner", img: expert1 },
  { id: 2, name: "john corner", img: expert2 },
  { id: 3, name: "john corner", img: expert3 },
  { id: 4, name: "john corner", img: expert4 },
  { id: 5, name: "john corner", img: expert5 },
  { id: 6, name: "john corner", img: expert6 },
];

const Experts = () => {
  return (
    <div className="container">
      <h2 className="text-dark text-center mt-5">Our Experts</h2>
      <div className="row">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
