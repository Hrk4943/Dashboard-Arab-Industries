import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function CardContainer({
  title,
  price,
  discountPrice,
  content,
  buttonColor
}) {
  return (
    <div className={`bg-white ml-28 m-10 rounded-lg shadow-lg p-5 -mt-2  relative`}>
    <h2 className="text-3xl font-semibold mb-2">{title}</h2>
    <p className="text-lg font-semibold relative">
      <span className="line-through text-red-600">${price}/mo</span>
    </p>
    <p className="text-black font-semibold text-3xl">${discountPrice}/mo</p>
    <button className={`mt-4 ${buttonColor} flex items-center text-black font-semibold py-1 px-4 rounded`}>
      Get Started
      <FaLongArrowAltRight className="ml-2" />
    </button>
    <hr className="my-2" />
    <div className="flex justify-between">
      <p className="text-black  mb-1">{content}</p>
    </div>
  </div>
  );
}