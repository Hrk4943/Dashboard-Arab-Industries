import React from "react";
import CardContainer from "./CardContainer";
import { FiMail, FiUser } from "react-icons/fi";
import { CiCloudOn } from "react-icons/ci";

export default function VerticalCard() {
  const cardData = [
    {
      title: "Basic",
      content: (
        <>
          <p className="font-semibold text-lg">What You'll Get :-</p>
          <ul className="mt-2 font-semibold text-sm flex flex-col">
            <li className="flex items-center"><FiUser className="mr-2" />Upto 25% Users</li>
            <li className="flex items-center"><CiCloudOn className="mr-2" />Upto 25gb Storage</li>
            <li className="flex items-center"><FiMail className="mr-2" />Email Support</li>
            <li className="mt-4 flex items-center justify-center font-bold text-lg uppercase underline">Explore Features</li>
          </ul>
        </>
      ),
      price: 89.99,
      discountPrice: 9.99,
      buttonColor: "bg-orange-200",
    },
    {
      title: "Standard",
      content: (
        <>
          <p className="font-semibold text-lg">What You'll Get :-</p>
          <ul className="mt-2 font-semibold text-sm flex flex-col">
            <li className="flex items-center"><FiUser className="mr-2" />Upto 50% Users</li>
            <li className="flex items-center"><CiCloudOn className="mr-2" />Upto 60gb Storage</li>
            <li className="flex items-center"><FiMail className="mr-2" />Email + Chat Support</li>
            <li className="mt-4 flex items-center justify-center font-bold text-lg uppercase underline">Explore Features</li>
          </ul>
        </>
      ),
      price: 189.99,
      discountPrice: 99.99,
      buttonColor: "bg-red-300",
    },
    {
      title: "Premium",
      content: (
        <>
          <p className="font-semibold text-lg">What You'll Get :-</p>
          <ul className="mt-2 font-semibold text-sm flex flex-col">
            <li className="flex items-center"><FiUser className="mr-2" />Upto 75% Users</li>
            <li className="flex items-center"><CiCloudOn className="mr-2" />Upto 100 GB Storage</li>
            <li className="flex items-center"><FiMail className="mr-2" />Email + Chat + WhatsApp Support</li>
            <li className="mt-4 flex items-center justify-center font-bold text-lg uppercase underline">Explore Features</li>
          </ul>
        </>
      ),
      price: 389.99,
      discountPrice: 199.99,
      buttonColor: "bg-fuchsia-300",
    },
  ];

  return (
    <div className="flex flex-wrap bg-white mr-16">
      {cardData.map((card, index) => (
        <div key={index} >
          <CardContainer {...card} />
        </div>
      ))}
    </div>
  );
}
