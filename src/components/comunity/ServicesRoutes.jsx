import React from "react";

import { SiGooglemaps } from "react-icons/si";

const ServicesRoutes = () => {
  return (
    <>
      <div className=" flex flex-col gap-2 md:gap-5 ">
        <p>
          <span className="font-black mr-2">Lunes:</span>Avanzados
        </p>
        <p>
          <span className="font-black mr-2">Requisitos:</span>
          Manejo perfecto del freno, buen cardio y casco. La ruta contiene
          muchos descensos.
        </p>
        <p>
          <span className="font-black mr-2 ">Miercoles:</span>Principiantes
        </p>
        <p>
          <span className="font-black mr-2">Requisitos:</span>
          Buen equilibro, poder avanzar solos y casco. La ruta va a un ritmo
          moderado y no contiene descensos.
        </p>
        <p>
          <span className="font-black mr-2">Viernes:</span>Intermedia
        </p>
        <p>
          <span className="font-black mr-2">Requisitos:</span>
          Poder avanzar solos, buen manejo de freno y casco. Es una ruta mas
          larga donde se suele parar a comer y compartir.
        </p>
      </div>

      <div className="mt-6 flex md:flex-row md:justify-center md:gap-20 gap-10 flex-col ">
        <p className="flex flex-col gap-4">
          <span className="font-black  ">Hora de salida</span>{" "}
          <span className=" font-black">8:00 PM</span>
        </p>
        <p className="flex flex-col gap-4 items-center">
          <span className="font-black  ">Punto de Encuentro</span>
          <span className=" font-black">Estacion Estadio</span>
          <a
            href="https://www.google.com/maps/@6.2537305,-75.587888,3a,19y,251.17h,89.87t/data=!3m6!1e1!3m4!1s8zOp8264n5G6vReCYwBHAA!2e0!7i16384!8i8192"
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

export default ServicesRoutes;
