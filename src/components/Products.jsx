import React from "react";
import PageSegction from "@/components/PageSection";
import { FaRocket, FaSatellite, FaRobot, FaMicrochip } from "react-icons/fa";

const Products = () => {
  const products = [
    {
      id: 1,
      icon: <FaRocket size={50} className="text-white" />,
      title: "rocket manufacturing",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi facilis nostrum aspernatur sit error quia quae, placeat optio suscipit sint dicta odio, deserunt modi inventore, natus exercitationem adipisci repellendus.",
    },
    {
      id: 2,
      icon: <FaSatellite size={50} className="text-white" />,
      title: "rocket manufacturing",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi facilis nostrum aspernatur sit error quia quae, placeat optio suscipit sint dicta odio, deserunt modi inventore, natus exercitationem adipisci repellendus.",
    },
    {
      id: 3,
      icon: <FaRobot size={50} className="text-white" />,
      title: "rocket manufacturing",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi facilis nostrum aspernatur sit error quia quae, placeat optio suscipit sint dicta odio, deserunt modi inventore, natus exercitationem adipisci repellendus.",
    },
    {
      id: 4,
      icon: <FaMicrochip size={50} className="text-white" />,
      title: "rocket manufacturing",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi facilis nostrum aspernatur sit error quia quae, placeat optio suscipit sint dicta odio, deserunt modi inventore, natus exercitationem adipisci repellendus.",
    },
  ];

  return (
    <PageSegction
      name="products"
      title="Products"
      subtitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi facilis nostrum aspernatur sit error quia quae, placeat optio`}
    >
      <div className="grid lg:grid-cols-2 gap-12 text-black">
        {products.map(({ id, icon, title, subtitle }) => (
          <div
            key={id}
            className="group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="flex items-center justify-center duration-300 group-hover:scale-110">
              <div className="bg-black rounded-full p-5 m-4 ">{icon}</div>
            </div>
            <h1 className="text-3xl lg:text-5xl my-8 capitalize">{title}</h1>
            <p className="text-lg">{subtitle}</p>
          </div>
        ))}
      </div>
    </PageSegction>
  );
};

export default Products;
