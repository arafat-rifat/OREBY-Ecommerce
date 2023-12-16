import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { RiNumber2 } from "react-icons/ri";
import { FaTruckMoving } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";

const AdditionalInfo = ({ children, className }) => {
  return (
    <div className="border border-solid border-[#f0f0f0] py-2 md:py-7 mt-[-6px]">
      <Container>
        <Flex className="flex justify-between">
          <Flex className="flex items-center gap-x-1 md:gap-x-4">
            <RiNumber2 className="text-[10px] md:text-2xl " />
            <p className="font-regular font-dm text-[10px] md:text-base text-[#6d6d6d]">
              Two years warranty
            </p>
          </Flex>

          <Flex className="flex items-center gap-x-1 md:gap-x-4">
            <FaTruckMoving className="text-[10px] md:text-2xl " />
            <p className="font-regular font-dm text-[10px] md:text-base text-[#6d6d6d]">
              Free Shipping
            </p>
          </Flex>

          <Flex className="flex items-center gap-x-1 md:gap-x-4">
            <GiReturnArrow className="text-[10px] md:text-2xl " />
            <p className="font-regular font-dm text-[10px] md:text-base text-[#6d6d6d]">
              Return Policy In 30 days
            </p>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default AdditionalInfo;
