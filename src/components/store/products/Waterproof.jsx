import React, { useState } from "react";

import waterproof1 from "@/assets/waterproof/waterproof1.jpg";
import waterproof2 from "@/assets/waterproof/waterproof2.jpg";
import waterproof3 from "@/assets/waterproof/waterproof3.jpg";
import waterproof4 from "@/assets/waterproof/waterproof4.jpg";
import waterproof5 from "@/assets/waterproof/waterproof5.jpg";
import waterproof6 from "@/assets/waterproof/waterproof6.jpg";
import waterproof7 from "@/assets/waterproof/waterproof7.jpg";
import waterproof8 from "@/assets/waterproof/waterproof8.jpg";
import waterproof9 from "@/assets/waterproof/waterproof9.jpg";
import waterproof10 from "@/assets/waterproof/waterproof10.jpg";
import waterproof11 from "@/assets/waterproof/waterproof11.jpg";
import waterproof12 from "@/assets/waterproof/waterproof12.jpg";

import PageSection from "@/components/PageSection";
import StoreNavbar from "@/components/store/StoreNavbar";

import StoreHeroWaterproof from "@/components/store/hero/StoreHeroWaterproof";

import Contact from "@/components/Contact";

const Waterproof = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const techs = [
    {
      id: 1,
      src: waterproof1,
      price: "$80.000",
      style: "shadow-[#e85d1a]",
    },
    {
      id: 2,
      src: waterproof2,
      price: "$80.000",
      style: "shadow-[#855e3b]",
    },
    {
      id: 3,
      src: waterproof3,
      price: "$80.000",
      style: "shadow-[#45a3a2]",
    },
    {
      id: 4,
      src: waterproof4,
      price: "$80.000",
      style: "shadow-[#ce717e]",
    },
    {
      id: 5,
      src: waterproof5,
      price: "$80.000",
      style: "shadow-[#b3aeaa]",
    },
    {
      id: 6,
      src: waterproof6,
      price: "$80.000",
      style: "shadow-[#da1365]",
    },
    {
      id: 7,
      src: waterproof7,
      price: "$80.000",
      style: "shadow-[#696864]",
    },
    {
      id: 8,
      src: waterproof8,
      price: "$80.000",
      style: "shadow-[#8e73aa]",
    },
    {
      id: 9,
      src: waterproof9,
      price: "$80.000",
      style: "shadow-[#0b71c2]",
    },
    {
      id: 10,
      src: waterproof10,
      price: "$80.000",
      style: "shadow-[#a49288]",
    },
    {
      id: 11,
      src: waterproof11,
      price: "$80.000",
      style: "shadow-[#ec5c71]",
    },
    {
      id: 12,
      src: waterproof12,
      price: "$80.000",
      style: "shadow-[#bbadc6]",
    },
  ];

  return (
    <>
      <StoreNavbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <div className="flex flex-col items-center gap-[3300px] sm:gap-[350px] md:gap-[600px] lg:gap-[1200px]">
        <PageSection
          name="products"
          title="Chaquetas"
          subtitle={`Texto de prueba(Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi facilis nostrum aspernatur sit error quia quae, placeat optio)`}
        >
          <div
            name="experience"
            className="h-screen w-full bg-gradient-to-b from-gray-800 to-black"
          >
            <div className=" relative mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 text-white ">
              <div className="absolute grid w-full grid-cols-1 gap-8 py-8 px-12 text-center sm:grid-cols-3 sm:px-0 top-0 left-0">
                {techs.map(({ id, src, price, style }) => (
                  <div
                    key={id}
                    className={`rounded-lg py-2 shadow-md duration-500 hover:scale-105 ${style}`}
                  >
                    <img
                      src={src}
                      alt=""
                      className="mx-auto w-56 h-56 lg:w-96 lg:h-96 rounded-lg"
                    />
                    <p className="mt-4">{price}</p>
                    <p>Talla S-M-L</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageSection>
        <StoreHeroWaterproof isMenuShown={isMenuShown} />
      </div>
      <Contact />
    </>
  );
};

export default Waterproof;
