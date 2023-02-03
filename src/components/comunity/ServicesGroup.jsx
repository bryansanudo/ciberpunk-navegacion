import React from "react";

import { SiGooglemaps } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

const ServicesGroup = () => {
  return (
    <>
      <div className=" flex flex-col gap-1">
        <p>Tenemos grupo desde el nivel 0 hasta nivel avanzado.</p>

        <p>
          <span className="font-black mr-2">Martes y Jueves</span>
          Con un valor de $8.000 cada día.
        </p>

        <div className="flex flex-col gap-1 items-center">
          <span className="font-black py-5 ">Grupos</span>
          <article>Clases de principiantes </article>
          <article>Clase de frenos básicos </article>
          <article>Frenado en T</article>
          <article>Saltos</article>
          <article>Curva</article>
          <article>Saltos y Reaccíon</article>
          <article>Frenos Avanzados</article>
        </div>
      </div>

      <div className="mt-12 flex md:flex-row md:justify-center md:gap-20 gap-10 flex-col  ">
        <p className="flex flex-col gap-4">
          <span className="font-black  ">Hora de la clase</span>{" "}
          <span className=" font-black">7:30 PM</span>
        </p>
        <p className="flex flex-col gap-4 items-center">
          <span className="font-black  ">Punto de Encuentro</span>
          <span className=" font-black">Parques del río</span>
          <a
            href="https://www.google.com/maps/@6.2437119,-75.5781871,3a,90y,305.44h,86.31t/data=!3m6!1e1!3m4!1sq5qhRd2khE9fMxhe79mOow!2e0!7i16384!8i8192"
            target="_blank"
            rel="noreferrer"
            className="group-hover:scale-150 duration-300"
          >
            <SiGooglemaps size={20} />
          </a>
        </p>
      </div>
    </>
  );
};

export default ServicesGroup;
