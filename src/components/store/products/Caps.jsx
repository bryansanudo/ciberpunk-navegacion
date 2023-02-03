import React, { useState } from "react";

import cap1 from "@/assets/cap/cap1.jpg";
import cap2 from "@/assets/cap/cap2.jpg";
import cap3 from "@/assets/cap/cap3.jpg";
import cap4 from "@/assets/cap/cap4.jpg";
import cap5 from "@/assets/cap/cap5.jpg";
import cap6 from "@/assets/cap/cap6.jpg";
import cap7 from "@/assets/cap/cap7.jpg";
import cap8 from "@/assets/cap/cap8.jpg";
import cap9 from "@/assets/cap/cap9.jpg";
import cap10 from "@/assets/cap/cap10.jpg";
import cap11 from "@/assets/cap/cap11.jpg";
import cap12 from "@/assets/cap/cap12.jpg";
import cap13 from "@/assets/cap/cap13.jpg";
import cap14 from "@/assets/cap/cap14.jpg";
import cap15 from "@/assets/cap/cap15.jpg";
import cap16 from "@/assets/cap/cap16.jpg";

import PageSection from "@/components/PageSection";
import StoreNavbar from "@/components/store/StoreNavbar";
import StoreHeroCaps from "@/components/store/hero/StoreHeroCaps";

import Contact from "@/components/Contact";

const Waterproof = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const techs = [
    {
      id: 1,
      src: cap1,
      style: "shadow-[#8cd6bd]",
    },
    {
      id: 2,
      src: cap2,
      style: "shadow-[#bf8f6b]",
    },
    {
      id: 3,
      src: cap3,
      style: "shadow-[#d5c393]",
    },
    {
      id: 4,
      src: cap4,
      style: "shadow-[#616e5d]",
    },
    {
      id: 5,
      src: cap5,
      style: "shadow-[#b08165]",
    },
    {
      id: 6,
      src: cap6,
      style: "shadow-[#d0bfa2]",
    },
    {
      id: 7,
      src: cap7,
      style: "shadow-[#5766aa]",
    },
    {
      id: 8,
      src: cap8,
      style: "shadow-[#e95543]",
    },
    {
      id: 9,
      src: cap9,
      style: "shadow-[#645e54]",
    },
    {
      id: 10,
      src: cap10,
      style: "shadow-[#dfd3d1]",
    },
    {
      id: 11,
      src: cap11,
      style: "shadow-[#40414f]",
    },
    {
      id: 12,
      src: cap12,
      style: "shadow-[#c7772e]",
    },
    {
      id: 13,
      src: cap13,
      style: "shadow-[#7e8893]",
    },
    {
      id: 14,
      src: cap14,
      style: "shadow-[#ec243d]",
    },
    {
      id: 15,
      src: cap15,
      style: "shadow-[#d5b08f]",
    },
    {
      id: 16,
      src: cap16,
      style: "shadow-[#c77f3d]",
    },
  ];

  return (
    <>
      <StoreNavbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />

      <div className="flex flex-col gap-[3200px] sm:gap-[450px] md:gap-[950px] lg:gap-[1000px] items-center">
        <PageSection
          name="products"
          title="Gorras"
          subtitle={`Texto de prueba(Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi facilis nostrum aspernatur sit error quia quae, placeat optio)`}
          style="flex flex-col "
        >
          <div
            name="experience"
            className="h-screen w-full bg-gradient-to-b from-gray-800 to-black"
          >
            <div className=" relative mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 text-white ">
              <div className="absolute grid w-full grid-cols-1 gap-8 py-8 px-12 text-center sm:grid-cols-3 sm:px-0 top-0 left-0">
                {techs.map(({ id, src, style }) => (
                  <div
                    key={id}
                    className={`rounded-lg py-2 shadow-md duration-500 hover:scale-105 ${style}`}
                  >
                    <img
                      src={src}
                      alt=""
                      className="mx-auto w-36 h-36 lg:w-56 lg:h-56 rounded-lg"
                    />

                    <p className="m-4">INGRAVITY</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageSection>
        <StoreHeroCaps />
      </div>
      <Contact />
    </>
  );
};

export default Waterproof;
