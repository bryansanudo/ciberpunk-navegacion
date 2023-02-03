import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as Link1 } from "react-scroll";
import { Link as Link2 } from "react-router-dom";

import ingravityLogo from "@/assets/ingravityLogo.png";
import rollerLogo from "@/assets/rollerLogo.png";

const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "inicio",
    },
    {
      id: 2,
      link: "nosotros",
    },
    {
      id: 3,
      link: "servicios",
    },
    {
      id: 4,
      link: "eventos",
    },
    {
      id: 5,
      link: "contactanos",
    },
  ];

  return (
    <>
      <div className="fixed w-full h-24 bg-black text-white z-20 ">
        <div className="flex justify-between lg:justify-center md:gap-5 items-center max-w-screen-xl mx-auto px-4 h-full">
          <Link2 to="/">
            <div>
              <img
                src={ingravityLogo}
                alt="contact us"
                className="rounded-full object-cover w-16 h-16  shadow-thOrange hover:scale-110 duration-300 shadow-lg"
              />
            </div>
          </Link2>

          <div className="hidden lg:flex items-center ">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <Link1 key={id} to={link} smooth duration={500}>
                  <li className="p-4 uppercase duration-300 hover:text-thOrange cursor-pointer">
                    {link}
                  </li>
                </Link1>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          <Link2 to="/productos">
            <div>
              <img
                src={rollerLogo}
                alt="contact us"
                className="rounded-full object-cover w-16 h-16 hover:scale-110 duration-300 shadow-lg shadow-thBlue"
              />
            </div>
          </Link2>
        </div>
      </div>

      <div
        className={`fixed w-full bg-black text-white  z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opactiy-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <Link1
              onClick={() => setIsMenuShown(!isMenuShown)}
              to={link}
              smooth
              duration={500}
              key={id}
            >
              <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thOrange ">
                {link}
              </li>
            </Link1>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
