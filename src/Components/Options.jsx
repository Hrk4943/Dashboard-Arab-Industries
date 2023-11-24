import React, { useState } from "react";

export default function Options({ open }) {
  const [selected, setSelected] = useState("monthly");

  const handleSelected = (select) => {
    setSelected(select);
  };
  return (
    <>
      <div className="bg-white p-4 pr-2 mr-16 md:pr-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white text-2xl cursor-pointer font-bold mb-4 md:mb-0"></div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <div className="flex items-center">
                <div className="border-2 p-1 md:p-0 flex sm:items-center sm:justify-center md:items-center md:justify-center md:mr-10 md:-mt-12 border-black rounded-full overflow-hidden">
                  <button
                    className={`px-10 md:px-14 sm:px-4 sm:py-2 py-2 ${
                      selected === "monthly"
                        ? "bg-blue-300 text-black rounded-full"
                        : "bg-white text-black rounded-full"
                    }`}
                    onClick={() => handleSelected("monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    className={`px-10 md:px-14 sm:px-4 sm:py-2 py-2 mt-2 md:mt-0 md:ml-2 ${
                      selected === "annually"
                        ? "bg-blue-300 text-white rounded-full"
                        : "bg-white text-black rounded-full"
                    }`}
                    onClick={() => handleSelected("annually")}
                  >
                    Annually
                    <span className="block md:inline-block md:ml-2 md:mt-0 font-semibold text-sm text-green-700">
                      -10%
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
