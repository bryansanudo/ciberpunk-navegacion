import React from "react";
import { FaRoute, FaSkating } from "react-icons/fa";
import { GiLifeJacket, GiTeacher } from "react-icons/gi";
import { MdGroup } from "react-icons/md";

import PageSection from "@/components/PageSection";
import ServicesRoutes from "@/components/comunity/ServicesRoutes";
import ServicesGroup from "@/components/comunity/ServicesGroup";
import ServicesRent from "@/components/comunity/ServicesRent";

import routes from "@/assets/servicesVideo/routes.mp4";
import groups from "@/assets/servicesVideo/groups.mp4";

import ingravityVideo from "@/assets/nosotros.mp4";

const Products = () => {
  /* const mySwitchFunction = (param) => {
    switch (param) {
      case 1:
        return <ServicesRoutes />;
      case 2:
        return <ServicesGroup />;
      case 4:
        return <ServicesRent />;
    }
  }; */

  const products = [
    {
      id: 1,
      icon: <FaRoute size={50} className="text-black" />,
      title: "Rutas",
      element: <ServicesRoutes />,
      src: routes,
    },
    {
      id: 2,
      icon: <GiTeacher size={50} className="text-black" />,
      title: "clases grupales",
      element: <ServicesGroup />,
      src: groups,
    },
    /* {
      id: 3,
      icon: <MdGroup size={40} className="text-black" />,
      title: "clases personalizadas",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi facilis nostrum aspernatur sit error quia quae, placeat optio suscipit sint dicta odio, deserunt modi inventore, natus exercitationem adipisci repellendus.",
    },
    {
      id: 4,
      icon: <FaSkating size={40} className="text-black" />,
      title: "alquiler de patines",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi facilis nostrum aspernatur sit error quia quae, placeat optio suscipit sint dicta odio, deserunt modi inventore, natus exercitationem adipisci repellendus.",
    }, */
  ];

  return (
    <PageSection
      name="servicios"
      title="Servicios"
      subtitle={`Después de un largo día lleno de ocupaciones y estrés no hay mejor parche que montar tus patines y salir a compartir en INGRAVITY ROLLER.`}
    >
      <>
        <div className="grid lg:grid-cols-1 gap-12  text-black">
          {products.map(({ id, icon, title, element, src }) => (
            <div
              key={id}
              className="group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex   justify-center p-4  text-center flex-col lg:flex-row items-center md:gap- gap-4 "
            >
              {/*  {mySwitchFunction(id)} */}

              <div className="w-full lg:w-1/2 flex justify-center  ">
                <video
                  src={src}
                  loop
                  autoPlay
                  type="video/mp4"
                  playsInline
                  muted
                  className=" rounded-lg h-[280px] lg:h-[600px] "
                />
              </div>
              <div className="w-full lg:w-1/2 h-full  flex items-center flex-col justify-center gap-5">
                <div className="flex items-center justify-center">{icon}</div>
                <div className="font-black text-2xl">{title}</div>
                <div>
                  <div>{element}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </PageSection>
  );
};

export default Products;
