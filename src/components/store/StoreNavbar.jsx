import React, { useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import rollerLogo from "@/assets/rollerLogo.png";

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
      link: "chaquetas",
    },
    {
      id: 4,
      link: "gorras",
    },
    {
      id: 5,
      link: "ruedas",
    },
    {
      id: 6,
      link: "promociones",
    },
  ];

  const useScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  return (
    <>
      {useScrollToTop()}
      <div className="fixed w-full h-24 bg-black text-white z-20">
        <div className="flex justify-between lg:justify-center md:gap-5 items-center max-w-screen-xl mx-auto px-4 h-full">
          <div>
            <img
              src={rollerLogo}
              alt="contact us"
              className="rounded-full object-cover w-16 h-16 shadow-md shadow-thBlue"
            />
          </div>

          <div className="hidden lg:flex items-center ">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="p-4 uppercase duration-200 hover:text-thBlue cursor-pointer"
                >
                  <Link to={`/productos/${link}`}>{link}</Link>
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
              <Link to={`/productos/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StoreNavbar;
