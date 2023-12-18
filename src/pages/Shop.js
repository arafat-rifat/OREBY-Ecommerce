import React from "react";
import BreadCum from "../components/BreadCum";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Pagination from "../components/Pagination";

const Shop = () => {
  console.log(window.location.pathname.split("/")[1]);

  return (
    <Container>
      <BreadCum title="Product" />

      <Flex className="flex gap-x-10">
        <div className="w-[25%] bg-red-500">ADFA</div>
        <div className="w-[75%] ">
          <Pagination itemsPerPage={12} />
        </div>
      </Flex>
    </Container>
  );
};

export default Shop;
