import React from "react";

import ingravityVideo from "@/assets/nosotros.mp4";

import PageSection from "@/components/PageSection";
import downhill1 from "@/assets/downhillVideo/downhill1.mp4";

const DevApi = () => {
  return (
    <PageSection
      name="nosotros"
      title="¿Quiénes Somos?"
      subtitle={`Somos INGRAVITY ROLLER y estamos seguros de que rodando hemos llegado a lugares de nuestra ciudad que normalmente no visitaríamos. Nos juntamos para recorrer las calles de Medellín.`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            La vida es mejor sobre ruedas. El patinaje no solo es un deporte, es
            una forma de vida. Una forma de ver el mundo, una forma de sentir la
            libertad, una forma de ser feliz
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            No somos solo una comunidad Roller, somos una gran familia.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            3 años haciendo que esta pasión por rodar crezca cada día más!
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            Te invitamos a formar parte de la comunidad y rodar por todo
            Medellín.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center  ">
          <video
            src={ingravityVideo}
            loop
            autoPlay
            muted
            type="video/mp4"
            playsInline
            className="rounded-lg shadow-xl shadow-thOrange h-[400px] lg:h-[500px]"
          />
        </div>
      </div>
    </PageSection>
  );
};

export default DevApi;
