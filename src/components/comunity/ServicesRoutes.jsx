import React from "react";

import { SiGooglemaps } from "react-icons/si";

const ServicesRoutes = () => {
  return (
    <div>
      <div className=" flex flex-col gap-2">
        <p>
          <span className="font-black mr-2">Avanzados:</span>Lunes
        </p>
        <p>
          Es necesario manejo perfecto del freno, buen cardio y casco. La ruta
          contiene muchos descensos.
        </p>
        <p>
          <span className="font-black mr-2">Principiantes:</span>Miercoles
        </p>
        <p>
          Es necesario buen equilibro, poder avanzar solos y casco. La ruta va a
          un ritmo moderado y no contiene descensos.
        </p>
        <p>
          <span className="font-black mr-2">Intermedia:</span>Viernes
        </p>
        <p>
          Es necesario poder avanzar solos, buen manejo de freno y casco. Es una
          ruta mas larga donde se suele parar a comer y compartir.
        </p>
      </div>

      <div className="mt-4 flex justify-between ">
        <p className="flex flex-col gap-4">
          <span className="font-black  ">Hora de salida</span>{" "}
          <span className=" font-black">8:00 PM</span>
        </p>
        <p className="flex flex-col gap-4 items-center">
          <span className="font-black  ">Punto de Encuentro</span>
          <span className=" font-black">Estacion Estadio</span>
          <a href="" className="group-hover:scale-150 duration-300">
            <SiGooglemaps size={20} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ServicesRoutes;
