import React, { useState } from "react";
import {
  FaChartLine,
  FaComment,
  FaUser,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";
import { RiShutDownLine } from "react-icons/ri";
import Logo from "../assets/Logo1.png";
import Arrow from "../assets/control.png";
import User from "../assets/qwe.jpeg";


export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const Menus = [
    { title: "Dashboard", icon: <FaChartLine /> },
    { title: "Perks", icon: <FaComment /> },
    { title: "Addons", icon: <FaUser /> },
    { title: "FAQ's", icon: <FaCalendarAlt /> },
    { title: "Support", icon: <FaSearch /> },
  ];

  const LogoutButton = ({ onClick }) => (
    <div
      className={`flex rounded-md p-2 cursor-pointer hover:bg-blue-500 text-black text-sm items-center gap-x-4 mt-14 ${
        open ? "bg-dark-700 text-blue-500 -ml-5" : ""
      }`}
      onClick={onClick}
    >
      <span className={`${!open && "hidden"} origin-left duration-200`}>
        Logout
      </span>
      <RiShutDownLine />
    </div>
  );
  return (
    <>
      <div className=" bg-white">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-dark-800 h-screen p-5  pt-8 relative duration-300`}
        >
          <img
            src={Arrow}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-800
         border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />

          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-x-4 items-center mb-12">
              <img
                src={Logo}
                className={`cursor-pointer duration-500 ${
                  open && "rotate-[360deg]"
                }`}
              />
            </div>

            {open && (
              <>
                <div className="rounded-full  overflow-hidden w-16 h-16 mb-1">
                  <img
                    src={User}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-black text-center mb-4">
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-xs text-black">johndoe@example.com</p>
                </div>
              </>
            )}

            <ul className="pt-6">
              {Menus.map((Menu, index) => (
                <li
                  key={index}
                  onClick={() => handleMenuClick(index)}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-500 text-black text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-4" : "mt-2"} ${
                    index === selectedMenu && "bg-blue-500"
                  } ${Menu.logout && "text-blue-500"}`}
                >
                  {Menu.icon}
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </li>
              ))}
            </ul>
            <LogoutButton onClick={handleMenuClick} />
          </div>
        </div>

        {/* <div className="h-screen flex-1">
          <Navbar className="navbar " />
          <Body/>
          <Options open={open}/>
        </div> */}
        
      </div>
    </>
  );
}
