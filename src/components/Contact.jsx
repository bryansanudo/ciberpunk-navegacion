import React from "react";
import PageSection from "@/components/PageSection";
import contactImage from "@/assets/contact-us.jpg";
import ContactForm from "@/components/ContactForm";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <PageSection
      name="contact"
      title="Contact"
      subtitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse perferendis nam voluptates animi quos qui maiores corporis accusantium enim aliquid, at odit est dicta eligendi provident vitae aliquam molestias.`}
    >
      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        <div className="w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center">
          <img
            src={contactImage}
            alt="contact us"
            className="rounded-full object-cover w-72 h-72 shadow-lg shadow-thPurple"
          />

          <p className="py-12 max-w-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos a voluptatibus optio repudiandae sequi laudantium
            asperiores ab odio! Magni fugit facilis eligendi sapiente quos
            exercitationem, minima corporis inventore iure reprehenderit.
          </p>
          <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
            <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
              <FaLinkedin size={25} />
            </div>
            <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
              <FaTwitter size={25} />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-full rounded-xl p-4">
          <ContactForm />
        </div>
      </div>
    </PageSection>
  );
};

export default Contact;
