import React from "react";

import { SiGooglemaps } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

const ServicesGroup = () => {
  return (
    <div>
      <div className="text-xl flex flex-col gap-5">
        <p>
          clases de patinaje para todos los niveles, tenemos grupo desde el
          nivel 0 hasta nivel avanzado.
        </p>

        <p>
          <span className="font-bold mr-2">Martes y Jueves</span>
          Con un valor de $8.000 cada día.
        </p>

        <div className="flex flex-col gap-2 items-center">
          <span className="font-bold mr-2">Grupos</span>
          <article>Clases de principiantes </article>
          <article>Clase de frenos básicos </article>
          <article>Frenado en T</article>
          <article>Saltos</article>
          <article>Curva</article>
          <article>Saltos y Reaccíon</article>
          <article>Frenos Avanzados</article>
          <a
            href="https://www.instagram.com/p/CnhZ0hbBI2K/"
            className="group-hover:scale-125 duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>

      <div className="mt-6 flex justify-between  ">
        <p className="flex flex-col gap-4">
          <span className="font-bold text-xl lg:text-2xl">
            Hora de la clase
          </span>{" "}
          <span className="text-xl font-bold">7:30 PM</span>
        </p>
        <p className="flex flex-col gap-4 items-center">
          <span className="font-bold text-xl lg:text-2xl">
            Punto de Encuentro
          </span>
          <span className="text-xl font-bold">Parques del río</span>
          <a href="" className="group-hover:scale-125 duration-300">
            <SiGooglemaps size={50} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ServicesGroup;
