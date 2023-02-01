import React, { useState } from "react";

import agresivos from "@/assets/rollerSkate/agresivos.jpg";
import downhill from "@/assets/rollerSkate/downhill.jpg";
import profesionales from "@/assets/rollerSkate/profesionales.jpg";
import recreativos from "@/assets/rollerSkate/recreativos.jpg";
import tradicionales from "@/assets/rollerSkate/tradicionales.jpg";
import urbanos from "@/assets/rollerSkate/urbanos.jpg";

import PageSegction from "@/components/PageSection";
import StoreNavbar from "@/components/store/StoreNavbar";
import StoreHeroSection from "@/components/store/StoreHeroSection";

import StoreContact from "@/components/store/StoreContact";

const RollerSkates = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const portfolios = [
    {
      id: 1,
      src: urbanos,
      category: "urbanos",
      code: "/urbanos.pdf",
    },
    {
      id: 2,
      src: downhill,
      category: "downhill",
      code: "/downhill.pdf",
    },
    {
      id: 3,
      src: profesionales,
      category: "profesionales",
      code: "/profesionales.pdf",
    },
    {
      id: 4,
      src: recreativos,
      category: "recreativos",
      code: "/recreativos.pdf",
    },
    {
      id: 5,
      src: agresivos,
      category: "agresivos",
      code: "/agresivos.pdf",
    },
    {
      id: 6,
      src: tradicionales,
      category: "tradicionales",
      code: "/tradicionales.pdf",
    },
  ];

  return (
    <>
      <StoreNavbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <StoreHeroSection isMenuShown={isMenuShown} />
      <div className="flex flex-col items-center ">
        <PageSegction
          name="/productos/patines"
          title="Patines"
          subtitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi facilis nostrum aspernatur sit error quia quae, placeat optio`}
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
                        <p className="m-4   py-3 uppercase">{category}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageSegction>
        <div className="md:mr-28 ">
          <StoreContact />
        </div>
      </div>
    </>
  );
};

export default RollerSkates;
