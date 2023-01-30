import React from "react";
import {
  FaAmazon,
  FaApple,
  FaFacebook,
  FaGoogle,
  FaSnapchatGhost,
} from "react-icons/fa";

import PageSection from "@/components/PageSection";

const Customers = () => {
  const facts = [
    {
      id: 1,
      title: "$49M",
      subtitle: "Was and broken pallas rustling thy.",
    },
    {
      id: 2,
      title: "57%",
      subtitle: "Was and broken pallas rustling thy.",
    },
    {
      id: 3,
      title: "3 months faster",
      subtitle: "Was and broken pallas rustling thy.",
    },
    {
      id: 4,
      title: "7 new countries",
      subtitle: "Was and broken pallas rustling thy.",
    },
  ];

  const companies = [
    {
      id: 1,
      icon: <FaGoogle size={25} />,
      title: "google",
    },
    {
      id: 2,
      icon: <FaFacebook size={25} />,
      title: "facebook",
    },
    {
      id: 3,
      icon: <FaAmazon size={25} />,
      title: "amazon",
    },
    {
      id: 4,
      icon: <FaApple size={25} />,
      title: "apple",
    },
    {
      id: 5,
      icon: <FaSnapchatGhost size={25} />,
      title: "snapchat",
    },
  ];

  return (
    <PageSection
      name="customers"
      title="Customers"
      subtitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse perferendis nam voluptates animi quos qui maiores corporis accusantium enim aliquid, at odit est dicta eligendi provident vitae aliquam molestias.`}
    >
      <>
        <div className="grid lg:grid-cols-4 text-left gap-8 mb-16">
          {facts.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="odd:bg-thBlue even:bg-thOrange text-black p-4 rounded-lg"
            >
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              <p>{subtitle}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-around gap-6">
          {companies.map(({ id, icon, title }) => (
            <div
              key={id}
              className="flex items-center capitalize p-4 rounded-lg"
            >
              {icon}
              <p className="ml-2">{title}</p>
            </div>
          ))}
        </div>
      </>
    </PageSection>
  );
};

export default Customers;
