import React from "react";

import PageSection from "@/components/PageSection";

import event1 from "@/assets/ingravityEvent/event1.jpg";
import event2 from "@/assets/ingravityEvent/event2.jpg";
import event3 from "@/assets/ingravityEvent/event3.jpg";
import event4 from "@/assets/ingravityEvent/event4.jpg";

const Customers = () => {
  const facts = [
    {
      id: 4,
      src: event4,
      code: "https://www.instagram.com/p/CVwKNuSl9zk/",
    },
    {
      id: 2,
      src: event2,
      code: "https://www.instagram.com/p/CnzsbEBLPrp/",
    },
    {
      id: 3,
      src: event3,
      code: "https://www.instagram.com/p/CgAh4UUOzVT/",
    },
    {
      id: 1,
      src: event1,
      code: "https://www.instagram.com/p/Cl-ywdnA92G/",
    },
  ];

  return (
    <PageSection
      name="eventos"
      title="Eventos"
      subtitle={`¡Gracias a la comunidad Ingravity Roller por tantos momentos llenos de buena energía! Esa es la magia del patín que donde llega irradia con su energía.`}
    >
      <>
        <div className="grid lg:grid-cols-2  gap-8 mb-16">
          {facts.map(({ id, src, code }) => (
            <div
              key={id}
              className=" rounded-lg flex flex-col items-center justify-center p-4 lg:p-8 text-center "
            >
              <a href={code} target="_blank" rel="noreferrer">
                <img
                  src={src}
                  alt="code"
                  className="rounded-lg shadow-lg shadow-thOrange object-cover w-[20rem] h-[14rem] md:w-[32rem] md:h-[24rem] duration-300 hover:scale-125 lg:hover:scale-150"
                />
              </a>
            </div>
          ))}
        </div>
      </>
    </PageSection>
  );
};

export default Customers;
