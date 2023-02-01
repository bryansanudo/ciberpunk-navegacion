import React, { useState } from "react";

import PageSection from "@/components/PageSection";
import StoreNavbar from "@/components/store/StoreNavbar";
import StoreHeroWheels from "@/components/store/hero/StoreHeroWheels";

import Contact from "@/components/Contact";

import blackMagic1 from "@/assets/whell/blackMagic1.jpg";
import blackMagic2 from "@/assets/whell/blackMagic2.jpg";
import blackSonic from "@/assets/whell/blackSonic.jpg";
import grip from "@/assets/whell/grip.jpg";
import materG13 from "@/assets/whell/materG13.jpg";
import mpcRoadWar1 from "@/assets/whell/mpcRoadWar1.jpg";
import mpcRoadWar2 from "@/assets/whell/mpcRoadWar2.jpg";

const Wheels = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const techs = [
    {
      id: 1,
      src: blackMagic1,
      title: "asj",
      milimeter: "sdfkl",
      state: "nueva",
      price: "$80.000",
      style: "shadow-[#10849d]",
    },
    {
      id: 2,
      src: blackMagic2,
      title: "asj",
      milimeter: "sdfkl",
      state: "nueva",
      price: "$80.000",
      style: "shadow-[#167e18]",
    },
    {
      id: 3,
      src: blackSonic,
      title: "asj",
      milimeter: "sdfkl",
      state: "nueva",
      price: "$80.000",
      style: "shadow-[#f8eb4c]",
    },
    {
      id: 4,
      src: grip,
      title: "asj",
      milimeter: "sdfkl",
      state: "nueva",
      price: "$80.000",
      style: "shadow-[#972c8c]",
    },
    {
      id: 5,
      src: materG13,
      title: "asj",
      milimeter: "sdfkl",
      state: "nueva",
      price: "$80.000",
      style: "shadow-[#1cc12a]",
    },
    {
      id: 6,
      src: mpcRoadWar1,
      title: "asj",
      milimeter: "sdfkl",
      state: "nueva",
      price: "$80.000",
      style: "shadow-[#fc644b]",
    },
    {
      id: 7,
      src: mpcRoadWar2,
      title: "asj",
      milimeter: "sdfkl",
      state: "nueva",
      price: "$80.000",
      style: "shadow-[#ecdc31]",
    },
  ];

  return (
    <>
      <StoreNavbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <div className="flex flex-col items-center gap-[700px] sm:gap-[0]   ">
        <PageSection
          name="products"
          title="Products"
          subtitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi facilis nostrum aspernatur sit error quia quae, placeat optio`}
        >
          <div
            name="experience"
            className="h-screen w-full bg-gradient-to-b from-gray-800 to-black"
          >
            <div className=" relative mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 text-white ">
              <div className="absolute grid w-full grid-cols-1 gap-8 py-8 px-12 text-center sm:grid-cols-3 sm:px-0 top-0 left-0">
                {techs.map(
                  ({ id, src, price, style, title, milimeter, state }) => (
                    <div
                      key={id}
                      className={`rounded-lg py-2 shadow-md duration-500 hover:scale-105 ${style}`}
                    >
                      <img
                        src={src}
                        alt=""
                        className="mx-auto w-20 h-20 lg:w-40 lg:h-40 rounded-lg object-cover"
                      />
                      <p className="mt-4">{title}</p>
                      <p>{milimeter} </p>
                      <p>{state}</p>
                      <p>{price}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </PageSection>
        <StoreHeroWheels />
      </div>
      <Contact />
    </>
  );
};

export default Wheels;
