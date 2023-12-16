import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { Link } from "react-router-dom";

const Add = () => {
  return (
    <section className="mt-36">
      <Container>
        <Flex className="flex gap-x-10">
          <div className="max-w-2/4">
            <Link to="#">
              <img src="assets/ad1.jpg" alt="AddImg1" />
            </Link>
          </div>

          <div className="max-w-2/4">
            <Link to="#">
              <img src="assets/ad1.jpg" alt="AddImg1" />
            </Link>
            <Link to="#" className="mt-10 inline-block">
              <img src="assets/ad1.jpg" alt="AddImg1" />
            </Link>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Add;
