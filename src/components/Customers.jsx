import React from "react";

import PageSection from "@/components/PageSection";

import event1 from "@/assets/ingravityEvent/event1.jpg";
import event2 from "@/assets/ingravityEvent/event2.jpg";
import event3 from "@/assets/ingravityEvent/event3.jpg";
import event4 from "@/assets/ingravityEvent/event4.jpg";

const Customers = () => {
  const facts = [
    {
      id: 1,
      src: event1,
    },
    {
      id: 2,
      src: event2,
    },
    {
      id: 3,
      src: event3,
    },
    {
      id: 4,
      src: event4,
    },
  ];

  return (
    <PageSection
      name="customers"
      title="Customers"
      subtitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse perferendis nam voluptates animi quos qui maiores corporis accusantium enim aliquid, at odit est dicta eligendi provident vitae aliquam molestias.`}
    >
      <>
        <div className="grid lg:grid-cols-2 text-left gap-8 mb-16">
          {facts.map(({ id, src }) => (
            <div
              key={id}
              className=" rounded-lg flex flex-col items-center justify-center p-4 lg:p-8 text-center "
            >
              <img
                src={src}
                alt="code"
                className="rounded-lg shadow-lg shadow-thPurple object-cover w-[20rem] h-[14rem] md:w-[32rem] md:h-[24rem] duration-300 hover:scale-125 lg:hover:scale-150"
              />
            </div>
          ))}
        </div>
      </>
    </PageSection>
  );
};

export default Customers;
