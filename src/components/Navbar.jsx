import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Navegacion from "@/layouts/Navegacion";
import ingravityLogo from "@/assets/ingravityLogo.png";

const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "products",
    },
    {
      id: 3,
      link: "developer API",
    },
    {
      id: 4,
      link: "customers",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <>
      <div className="fixed w-full h-24 bg-black text-white z-20">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
          <div>
            <img
              src={ingravityLogo}
              alt="contact us"
              className="rounded-full object-cover w-16 h-16 shadow-lg shadow-thPurple"
            />
          </div>

          <div className="hidden lg:flex items-center ">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="p-4 uppercase duration-200 hover:text-thBlue cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
            <Navegacion />
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      <div
        className={`w-full bg-black text-white absolute z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opactiy-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <li key={id} className="p-4 uppercase cursor-pointer">
              {link}
            </li>
          ))}
          <Navegacion className="mt-10" className2="mt-10" />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
