import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "black",
          borderRight: "3px black solid",
          padding: "10px 0",
        }}
      >
        0{i + 1}
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      <Link to="#">
        <div>
          <img src="assets/banner3.jpg" />
        </div>
      </Link>

      <Link to="#">
        <div>
          <img src="assets/banner3.jpg" />
        </div>
      </Link>

      <Link to="#">
        <div>
          <img src="assets/banner3.jpg" />
        </div>
      </Link>
    </Slider>
  );
};

export default Banner;
