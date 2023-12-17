import { FaArrowLeft } from "react-icons/fa";
import React from "react";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <span
      className="absolute top-[35%] left-0 !flex items-center justify-center h-16 w-16 rounded-full bg-[rgba(0,0,0,.20)] z-50"
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <FaArrowLeft className="text-2xl text-white" />
    </span>
  );
};

export default SamplePrevArrow;
