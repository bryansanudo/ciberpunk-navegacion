import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import contactImage from "@/assets/contact-us.jpg";

import ContactForm from "@/components/ContactForm";
const StoreContact = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-4 mx-auto">
      <div className="w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center">
        <img
          src={contactImage}
          alt="contact us"
          className="rounded-full object-cover w-72 h-72 shadow-lg shadow-thPurple"
        />

        <p className="py-8 max-w-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          a voluptatibus optio repudiandae sequi laudantium
        </p>
        <div className="grid grid-cols-1  mx-auto w-3/5 lg:w-2/5 gap-4">
          <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
            <FaWhatsapp size={25} />
          </div>
          <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
            <div className="flex flex-col items-center justify-center ">
              <FaInstagram size={25} />
              <p>Tienda</p>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
            <div className="flex flex-col items-center justify-center ">
              <FaInstagram size={25} />
              <p>Comunidad</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-full rounded-xl p-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default StoreContact;
