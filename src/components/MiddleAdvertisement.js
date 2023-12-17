import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const MiddleAdvertisement = () => {
  return (
    <section className="mt-32">
      <Container>
        <Link>
          <img src="assets/BannerAdd.jpg" alt="Banner Advertisement" />
        </Link>
      </Container>
    </section>
  );
};

export default MiddleAdvertisement;
