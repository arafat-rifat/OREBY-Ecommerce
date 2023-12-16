import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Container from "./Container";

const Banner = () => {
  let [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px black solid",
                padding: "10px 0",
              }
            : {
                width: "30px",
                color: "#262626",
                borderRight: "3px white solid",
                padding: "10px 0",
                color: "transparent",
              }
        }
      >
        0{i + 1}
      </div>
    ),

    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px black solid",
                    }
                  : {
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px white solid",
                      color: "transparent",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <Container>
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
    </Container>
  );
};

export default Banner;
