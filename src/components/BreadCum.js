import React from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const BreadCum = ({ title }) => {
  return (
    <div className="my-28">
      <h1 className="font-dm font-bold text-5xl mb-3">{title}</h1>
      <p className="font-dm font-regular text-xs text-[#767676] flex items-center gap-x-2">
        <Link to="/"> Home </Link>
        <LiaAngleRightSolid /> {window.location.pathname.split("/")[1]}
      </p>
    </div>
  );
};

export default BreadCum;
