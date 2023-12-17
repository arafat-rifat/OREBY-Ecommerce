import React from "react";
import Badge from "./Badge";
import { FaHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Flex from "./Flex";

const Product = ({ src, badge }) => {
  return (
    <div>
      <div className="relative group overflow-y-hidden">
        <img src={src} alt="image" />
        {badge && <Badge title="New" />}
        <div className="absolute left-0 h-40 w-full bg-white py-6 px-7 bottom-[-70%] duration-300 ease-in group-hover:bottom-0">
          <Flex className="flex items-center justify-end gap-x-1 sm:gap-x-4">
            <p className="font-regular font-dm text-base text-[#6d6d6d] sm:text-base">
              Add to WishList
            </p>
            <FaHeart className="text-base" />
          </Flex>

          <Flex className="flex items-center justify-end gap-x-1 sm:gap-x-4 my-5">
            <p className="font-regular font-dm text-base text-[#6d6d6d] sm:text-base">
              Compare
            </p>
            <IoIosGitCompare className="text-base" />
          </Flex>

          <Flex className="flex items-center justify-end gap-x-1 sm:gap-x-4">
            <p className="font-regular font-dm text-base text-[#6d6d6d] sm:text-base">
              Add to Cart
            </p>
            <FaShoppingCart className="text-base" />
          </Flex>
        </div>
      </div>
      <div className="mb-12 md:mb-0">
        <Flex className="flex justify-between mt-3 md:mt-6">
          <h3 className="font-dm text-xl font-bold">Basic Crew Neck Tee</h3>
          <p className="font-dm text-base font-regular text-[#767676]">
            $44.00
          </p>
        </Flex>
        <p className="font-dm text-base font-regular text-[#767676] mt-4">
          Black
        </p>
      </div>
    </div>
  );
};

export default Product;
