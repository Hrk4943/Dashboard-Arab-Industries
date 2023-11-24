import React from "react";
import Logo from "../assets/logo.png";
import './Navbar.css'
export default function Navbar() {
  return (
    <>
      <nav className=" navbar p-2 pr-20">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white text-2xl cursor-pointer font-bold"></div>
            <div className="hidden md:flex space-x-2">
              <div className="flex items-center border-2 bg-white">
                <a className="text-black  p-2 cursor-pointer">
                  <img src={Logo} className="rounded-full h-8 w-8 mr-2" />
                </a>
                <a className="text-black font-semibold mr-4">
                  XYZ Enterprises Pvt Ltd
                </a>
              </div>
              <a className="text-black border-2 flex items-center bg-white  font-bold p-2 cursor-pointer rotate-180">
                ^
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
