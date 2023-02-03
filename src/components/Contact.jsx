import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import ingravityLogo from "@/assets/ingravityLogo.png";
import contact1 from "@/assets/contact1.jpg";
import contact2 from "@/assets/contact2.jpg";
import rollerLogo from "@/assets/rollerLogo.png";

import PageSection from "@/components/PageSection";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <PageSection
      name="contactanos"
      title="Contacto"
      subtitle={`
      Estas buscando los patines perfectos para comenzar en el mundo del patinaje. 
      ¿Qué esperas? Vamos a hablar.
      `}
    >
      <div className="flex flex-col lg:flex-row items-center md:gap-20 gap-4  ">
        <div className="w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center">
          <img
            src={contact1}
            alt="contact us"
            className=" object-cover  duration-300 w-[350px] h-[200px] md:w-[500px] md:h-[250px] shadow-xl shadow-thOrange rounded-lg "
          />

          <p className="py-12 max-w-md text-center">
            Recibe la mejor asesoría por patinadores expertos.
          </p>

          <div className="grid grid-cols-1  mx-auto w-1/2 lg:w-2/5 gap-4">
            <a
              href="https://api.whatsapp.com/message/U5B7NPRK54QCK1
              "
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-full shadow-lg shadow-thOrange hover:scale-105 duration-200 p-3 cursor-pointer"
            >
              <FaWhatsapp size={40} />
            </a>

            <a
              href="https://www.instagram.com/tienda.roller/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-full shadow-lg shadow-thBlue hover:scale-105 duration-200 p-3 cursor-pointer"
            >
              <div className="flex w-full flex-row justify-center items-center gap-8 ">
                <img
                  src={rollerLogo}
                  alt="contact us"
                  className="rounded-full object-cover w-9 h-9 shadow-lg shadow-thBlue   "
                />
                <FaInstagram size={40} className="text-thBlue " />
              </div>
            </a>

            <a
              href="https://www.instagram.com/ingravityroller/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-full shadow-lg shadow-thOrange hover:scale-105 duration-200 p-3 cursor-pointer"
            >
              <div className="flex w-full flex-row justify-center items-center gap-8 ">
                <img
                  src={ingravityLogo}
                  alt="contact us"
                  className="rounded-full object-cover w-9 h-9 shadow-lg shadow-thOrange   "
                />
                <FaInstagram size={40} className="text-thOrange" />
              </div>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 lg:w-1/2 h-full rounded-xl ">
          <ContactForm />
        </div>
      </div>
    </PageSection>
  );
};

export default Contact;
