import React, { useState } from "react";

import balineras from "@/assets/rollerSkate/balineras.jpg";
import ruedas from "@/assets/rollerSkate/ruedas.jpg";
import profesionales from "@/assets/rollerSkate/profesionales.jpg";
import recreativos from "@/assets/rollerSkate/recreativos.jpg";
import accesorios from "@/assets/rollerSkate/accesorios.jpg";
import urbanos from "@/assets/rollerSkate/urbanos.jpg";

import PageSegction from "@/components/PageSection";
import StoreNavbar from "@/components/store/StoreNavbar";
import StoreHeroRollerSkates from "@/components/store/hero/StoreHeroRollerSkates";

import Contact from "@/components/Contact";

const RollerSkates = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const portfolios = [
    {
      id: 1,
      src: profesionales,
      category: "profesionales",
      code: "/profesionales.pdf",
    },
    {
      id: 2,
      src: ruedas,
      category: "ruedas",
      code: "/ruedas.pdf",
    },
    {
      id: 3,
      src: recreativos,
      category: "recreativos",
      code: "/recreativos.pdf",
    },
    {
      id: 4,
      src: urbanos,
      category: "urbanos",
      code: "/urbanos.pdf",
    },
    {
      id: 5,
      src: accesorios,
      category: "accesorios",
      code: "/accesorios.pdf",
    },
    {
      id: 6,
      src: balineras,
      category: "balineras",
      code: "/balineras.pdf",
    },
  ];

  return (
    <>
      <StoreNavbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <div className="flex flex-col items-center ">
        <PageSegction
          name="/productos/patines"
          title="Patines"
          subtitle={`Recibe la mejor accesoria por patinadores expertos. Conoce los catálogos de patines.`}
        >
          <div
            name="portfolio"
            className="w-full bg-gradient-to-b from-gray-800 to-black text-white "
          >
            <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4">
              <div className="grid gap-8 md:px-12 sm:grid-cols-2 sm:px-0 md:grid-cols-3">
                {portfolios.map(({ id, src, code, category }) => (
                  <div
                    key={id}
                    className="rounded-lg shadow-lg shadow-thBlue duration-200 hover:scale-105"
                  >
                    <a href={code} target="_blank" rel="noreferrer">
                      <img
                        src={src}
                        alt=""
                        className="rounded-md duration-200 hover:scale-105 object-cover  "
                      />
                      <div className="flex items-center justify-center">
                        <p className="m-4 py-3 uppercase">{category}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageSegction>
        <StoreHeroRollerSkates isMenuShown={isMenuShown} />
      </div>
      <Contact />
    </>
  );
};

export default RollerSkates;
