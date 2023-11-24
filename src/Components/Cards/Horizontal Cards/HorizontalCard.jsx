import React from 'react'
import CardContainer from './CardContainer';
import { FiMail, FiUser } from "react-icons/fi";
import { CiCloudOn } from "react-icons/ci";
import { TiTick } from "react-icons/ti";

export default function HorizontalCard() {
  const cardData = [
    {
      head: 'Free Forever',
      title: 'Free Starter',
      paragraph:
        'The Quickest and easiest way to try Protocols with basic functionalities',
      color: "bg-lime-500",
      content: (
        <>
          <p className="font-semibold text-sm">What You'll Get :-</p>
          <ul className="mt-2 font-semibold text-sm flex flex-col">
            <li className="flex items-center">
              <FiUser className="mr-2" />
              Upto 8 Users
            </li>
            <li className="flex items-center">
               <CiCloudOn className="mr-2" />
               Upto 3gb Storage
             </li>
             <li className="flex items-center">
               <FiMail className="mr-2" />
               Email Support
             </li>
             <li className="flex items-center">
               <TiTick className="mr-6" />
               Basic of Documentation,Task Flow,Voting,Accounting,<br/>Banking,Notes,<br/>Investors,Directors and Team Management included,
             </li>
          </ul>
        </>
      ),
    },
    {
      head: "Let's Connect",
      title: 'Enterprise Plan',
      color:"bg-blue-300",
      paragraph :
        'Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for \nsuccess',
      content: (
        <>
          <ul className="mt-2 font-semibold text-sm flex flex-col">
            <li className="flex items-center">
              <FiUser className="mr-2" />
              Upto 8 Users
            </li>
            <li className="flex items-center">
               <TiTick className="mr-2" />
               Customization of all other features
             </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap bg-white mr-16 pr-24 -mt-16 ">
      {cardData.map((card, index) => (
        <CardContainer key={index} {...card} />
      ))}
    </div>
  );
}
