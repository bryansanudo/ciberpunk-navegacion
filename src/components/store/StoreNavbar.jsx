import React, { useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import rollerLogo from "@/assets/rollerLogo.png";
import ingravityLogo from "@/assets/ingravityLogo.png";

const StoreNavbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "inicio",
    },
    {
      id: 2,
      link: "patines",
    },
    {
      id: 3,
      link: "downhill",
    },
    {
      id: 4,
      link: "chaquetas",
    },
    {
      id: 5,
      link: "gorras",
    },
    {
      id: 6,
      link: "promociones",
    },
  ];

  const useScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }, [pathname]);
  };

  return (
    <>
      {useScrollToTop()}
      <div className="fixed w-full h-24 bg-black text-white z-20">
        <div className="flex justify-between lg:justify-center md:gap-5 items-center max-w-screen-xl mx-auto px-4 h-full">
          <Link to="/">
            <div>
              <img
                src={ingravityLogo}
                alt="contact us"
                className="rounded-full object-cover w-16 h-16  shadow-thOrange hover:scale-110 duration-300 shadow-lg"
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center ">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <Link key={id} to={`/productos/${link}`}>
                  <li className="p-4 uppercase duration-200 hover:text-thBlue cursor-pointer">
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          <Link to="/productos">
            <div>
              <img
                src={rollerLogo}
                alt="contact us"
                className="rounded-full object-cover w-16 h-16 hover:scale-110 duration-300 shadow-lg shadow-thBlue"
              />
            </div>
          </Link>
        </div>
      </div>

      <div
        className={`fixed w-full bg-black text-white  z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opactiy-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <Link key={id} to={`/productos/${link}`}>
              <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thBlue">
                {link}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StoreNavbar;
