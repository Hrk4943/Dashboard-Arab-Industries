import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function CardContainer({
  head,
  title,
  paragraph,
  color,
  content,
}) {
  return (
    <div className="bg-white ml-28 m-8 rounded-lg shadow-lg p-5 relative flex flex-col lg:flex-row">
    <div className={`w-full lg:w-1/2 pr-0 lg:-ml-3`}>
      <p className={`text-black rounded-lg flex items-center pl-4 lg:mr-60 mb-2 ${color}`}>{head}</p>
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      <p className="text-lg font-semibold relative leading-6">
        <span className={`text-xs leading-4`}>{paragraph}</span>
      </p>
      <button className={`mt-4 ${color} flex items-center text-black font-semibold py-1 px-4 rounded`}>
        Get Started
        <FaLongArrowAltRight className="ml-2" />
      </button>
    </div>
    <div className="w-full lg:w-1/2">
      <div className="flex justify-between">
        <p className="text-black mb-2 pl-0 ">{content}</p>
      </div>
    </div>
  </div>
  );
}
