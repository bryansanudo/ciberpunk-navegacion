import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import ingravityLogo from "@/assets/ingravityLogo.png";

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
          <div>
            <img
              src={ingravityLogo}
              alt="contact us"
              className="rounded-full object-cover w-16 h-16 shadow-md shadow-thOrange"
            />
          </div>

          <div className="hidden lg:flex items-center ">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="p-4 uppercase duration-200 hover:text-thOrange cursor-pointer"
                >
                  <Link to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
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
        className={`fixed w-full bg-black text-white  z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opactiy-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <li key={id} className="p-4 uppercase cursor-pointer">
              <Link
                onClick={() => setIsMenuShown(!isMenuShown)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
