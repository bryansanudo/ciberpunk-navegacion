import React from "react";
import { Outlet, Link } from "react-router-dom";

import GradientBtn from "@/components/GradientBtn";

const Navegacion = ({ className, className2 }) => {
  return (
    <>
      <div>
        <Link to="/">
          <GradientBtn
            className={`capitalize ${className}`}
            title="Comunidad"
          />
        </Link>

        <Link to="/productos">
          <GradientBtn
            className={`ml-6 capitalize ${className2}`}
            title="Tienda"
          />
        </Link>
      </div>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default Navegacion;
