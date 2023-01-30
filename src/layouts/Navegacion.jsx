import React from "react";
import GradientBtn from "@/components/GradientBtn";
import { Outlet, Link } from "react-router-dom";

const Navegacion = ({ className, className2 }) => {
  return (
    <>
      <div>
        <Link to="/">
          <GradientBtn
            className={`capitalize ${className}`}
            title="Principal"
          />
        </Link>

        <Link to="/products">
          <GradientBtn
            className={`ml-6 capitalize ${className2}`}
            title="Productos"
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
