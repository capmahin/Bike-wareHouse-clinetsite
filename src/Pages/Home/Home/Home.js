import React from "react";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <h1>
        <Banner></Banner>
        <Services></Services>
        <Experts></Experts>
      </h1>
    </>
  );
};

export default Home;
