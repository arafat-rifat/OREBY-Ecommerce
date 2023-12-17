import { FaArrowRight } from "react-icons/fa";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <span
      className="absolute top-[35%] right-0 !flex items-center justify-center h-16 w-16 rounded-full bg-[rgba(0,0,0,.20)]"
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <FaArrowRight className="text-2xl text-white" />
    </span>
  );
};

export default SampleNextArrow;
