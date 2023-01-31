import React from "react";
import { FaRoute, FaSkating } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { MdGroup } from "react-icons/md";

import PageSection from "@/components/PageSection";
import ServicesRoutes from "@/components/comunity/ServicesRoutes";
import ServicesGroup from "@/components/comunity/ServicesGroup";
import ServicesRent from "@/components/comunity/ServicesRent";

const Products = () => {
  const mySwitchFunction = (param) => {
    switch (param) {
      case 1:
        return <ServicesRoutes />;
      case 2:
        return <ServicesGroup />;
      case 4:
        return <ServicesRent />;
    }
  };

  const products = [
    {
      id: 1,
      icon: <FaRoute size={40} className="text-white" />,
      title: "Rutas",
    },
    {
      id: 2,
      icon: <GiTeacher size={40} className="text-white" />,
      title: "clases grupales",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi facilis nostrum aspernatur sit error quia quae, placeat optio suscipit sint dicta odio, deserunt modi inventore, natus exercitationem adipisci repellendus.",
    },
    {
      id: 3,
      icon: <MdGroup size={40} className="text-white" />,
      title: "clases personalizadas",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi facilis nostrum aspernatur sit error quia quae, placeat optio suscipit sint dicta odio, deserunt modi inventore, natus exercitationem adipisci repellendus.",
    },
    {
      id: 4,
      icon: <FaSkating size={40} className="text-white" />,
      title: "alquiler de patines",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi facilis nostrum aspernatur sit error quia quae, placeat optio suscipit sint dicta odio, deserunt modi inventore, natus exercitationem adipisci repellendus.",
    },
  ];

  return (
    <PageSection
      name="products"
      title="Products"
      subtitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi facilis nostrum aspernatur sit error quia quae, placeat optio`}
    >
      <div className="grid lg:grid-cols-2 gap-12 text-black">
        {products.map(({ id, icon, title }) => (
          <div
            key={id}
            className="group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-4 lg:p- text-center"
          >
            <div className="flex items-center justify-center  ">
              <div className="bg-black rounded-full p-3  ">{icon}</div>
            </div>
            <h1 className="text-3xl lg:text-5xl my-5 capitalize">{title}</h1>

            {mySwitchFunction(id)}
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Products;
