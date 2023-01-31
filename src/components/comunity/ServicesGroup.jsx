import React from "react";

import { SiGooglemaps } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

const ServicesGroup = () => {
  return (
    <div>
      <div className="text-l flex flex-col gap-1">
        <p>
          clases de patinaje para todos los niveles, tenemos grupo desde el
          nivel 0 hasta nivel avanzado.
        </p>

        <p>
          <span className="font-black mr-2">Martes y Jueves</span>
          Con un valor de $8.000 cada día.
        </p>

        <div className="flex flex-col gap-1 items-center">
          <span className="font-black ">Grupos</span>
          <article>Clases de principiantes </article>
          <article>Clase de frenos básicos </article>
          <article>Frenado en T</article>
          <article>Saltos</article>
          <article>Curva</article>
          <article>Saltos y Reaccíon</article>
          <article>Frenos Avanzados</article>
        </div>
      </div>

      <div className="mt-6 flex justify-between  ">
        <p className="flex flex-col gap-4">
          <span className="font-black  ">Hora de la clase</span>{" "}
          <span className=" font-black">7:30 PM</span>
        </p>
        <p className="flex flex-col gap-4 items-center">
          <span className="font-black  ">Punto de Encuentro</span>
          <span className=" font-black">Parques del río</span>
          <a href="" className="group-hover:scale-150 duration-300">
            <SiGooglemaps size={20} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ServicesGroup;
