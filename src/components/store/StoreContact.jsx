import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import ingravityLogo from "@/assets/ingravityLogo.png";

import ContactForm from "@/components/ContactForm";
const StoreContact = () => {
  return (
    <div className="flex flex-col lg:flex-row  ">
      <div className="w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center">
        <img
          src={ingravityLogo}
          alt="contact us"
          className="rounded-full object-cover w-48 h-48 md:w-72 md:h-72 shadow-xl shadow-thOrange"
        />

        <p className="py-8 text-center max-w-md">
          sffdgdfgdfgRecibe la mejor asesoría por patinadores expertos. <br />
          Envíos a todo Colombia y gratis en Medellín
        </p>

        <div className="grid grid-cols-1  mx-auto w-3/5 lg:w-2/5 gap-4">
          <a
            href="https://api.whatsapp.com/message/U5B7NPRK54QCK1
              "
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full shadow-lg shadow-thOrange hover:scale-105 duration-200 p-3 cursor-pointer"
          >
            <FaWhatsapp size={25} />
          </a>

          <a
            href="https://www.instagram.com/tienda.roller/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full shadow-lg shadow-thBlue hover:scale-105 duration-200 p-3 cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center ">
              <FaInstagram size={25} />
            </div>
          </a>

          <a
            href="https://www.instagram.com/ingravityroller/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full shadow-lg shadow-thOrange hover:scale-105 duration-200 p-3 cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center ">
              <FaInstagram size={25} />
            </div>
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-full rounded-xl p-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default StoreContact;
