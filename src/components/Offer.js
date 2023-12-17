import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import Flex from "./Flex";
import Product from "./Product";

const Offer = () => {
  return (
    <section className="mt-10 md:mt-32">
      <Container>
        <Heading title="Special Offers" />
        <Flex className="md:flex gap-x-10">
          <div className="max-w-[370px]">
            <Product src="assets/headphone.jpg" badge={true} />
          </div>
          <div className="max-w-[370px]">
            <Product src="assets/headphone.jpg" badge={false} />
          </div>
          <div className="max-w-[370px]">
            <Product src="assets/headphone.jpg" badge={true} />
          </div>
          <div className="max-w-[370px]">
            <Product src="assets/headphone.jpg" badge={false} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Offer;
