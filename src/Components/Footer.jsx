import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-white p-5 pr-2 -mt-14 mr-16 md:pr-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white text-2xl cursor-pointer font-bold"></div>
            <div className="hidden md:flex space-x-2">
              <div className="flex items-center  bg-white">
                <a className="text-blue-400 p-2 cursor-pointer">
                  
                  <p className="font-semibold mr-4">
                    *Some unique features are provided as add-ons with individual
                    plans for each feature.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
