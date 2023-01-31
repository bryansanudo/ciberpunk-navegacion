import React from "react";

import { SiGooglemaps } from "react-icons/si";

const ServicesRoutes = () => {
  return (
    <div>
      <div className="text-xl flex flex-col gap-5">
        <p>
          <span className="font-bold mr-2">Avanzados:</span>Lunes
        </p>
        <p>
          Es necesario manejo perfecto del freno, buen cardio y casco. La ruta
          contiene muchos descensos. <br /> Hora de retorno alrededor de las
          10:00 PM
        </p>
        <p>
          <span className="font-bold mr-2">Principiantes:</span>Miercoles
        </p>
        <p>
          Es necesario buen equilibro, poder avanzar solos y casco. La ruta va a
          un ritmo moderado y no contiene descensos.
          <br /> Hora de retorno alrededor de las 10:00 PM
        </p>
        <p>
          <span className="font-bold mr-2">Intermedia:</span>Viernes
        </p>
        <p>
          Es necesario poder avanzar solos, buen cardio y casco. Es una ruta mas
          larga donde se suele parar a comer y compartir. <br /> Hora de retorno
          entre 10:00 PM y 11:30 PM
        </p>
      </div>

      <div className="mt-4 flex justify-between ">
        <p className="flex flex-col gap-4">
          <span className="font-bold text-xl lg:text-2xl">Hora de salida</span>{" "}
          <span className="text-xl font-bold">8:00 PM</span>
        </p>
        <p className="flex flex-col gap-4 items-center">
          <span className="font-bold text-xl lg:text-2xl">
            Punto de Encuentro
          </span>
          <span className="text-xl font-bold">Estacion Estadio</span>
          <a href="" className="group-hover:scale-125 duration-300">
            <SiGooglemaps size={50} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ServicesRoutes;
