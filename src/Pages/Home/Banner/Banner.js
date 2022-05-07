import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          style={{ height: "700px" }}
          className="d-block w-100 "
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ducati 999</h3>
          <p>
            The Ducati 999 is a sport bike made by Ducati from 2003 to 2006. It
            superseded the Massimo Tamburini designed Ducati 916, Ducati 996 and
            Ducati 998 range of superbikes..
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "700px" }}
          className="d-block w-100 "
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Ducati 900</h3>
          <p>
            The Ducati SuperSport and SS are a series of air-cooled four stroke
            desmodromic 2-valve 90° L-twin motorcycles made by Ducati since
            1988.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "700px" }}
          className="d-block w-100 "
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Ducati 998</h3>
          <p>
            The Ducati 998 is a sport bike made by Ducati from 2002 to 2004. It
            was the successor to the Ducati 996 and the final variation on the
            Ducati 916. The new Testastretta engine shared many similarities
            with the previous Desmoquattro engine in the 996, although it was
            completely new from the crankshaft up.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
