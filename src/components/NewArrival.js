import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import Product from "./Product";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrival = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="mt-5 md:mt-32">
      <Container>
        <Heading title="New Arrivals" />
        {/* <Flex className="md:flex gap-x-10"> */}

        <Slider {...settings}>
          <div className="sm:max-w-[300px] md:max-w-[370px] lg:max-w-[325px]">
            <Product src="assets/cap.jpg" badge={true} />
          </div>
          <div className="sm:max-w-[300px] md:max-w-[370px] lg:max-w-[325px]">
            <Product src="assets/clock.jpg" badge={false} />
          </div>
          <div className="sm:max-w-[300px] md:max-w-[370px] lg:max-w-[325px]">
            <Product src="assets/headphone.jpg" badge={true} />
          </div>
          <div className="sm:max-w-[300px] md:max-w-[370px] lg:max-w-[325px]">
            <Product src="assets/cap.jpg" badge={false} />
          </div>
          <div className="sm:max-w-[300px] md:max-w-[370px] lg:max-w-[325px]">
            <Product src="assets/clock.jpg" badge={false} />
          </div>
        </Slider>
        {/* </Flex> */}
      </Container>
    </section>
  );
};

export default NewArrival;
