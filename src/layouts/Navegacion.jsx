import React from "react";

import { Link } from "react-router-dom";
import ingravityLogo from "@/assets/ingravityLogo.png";
import rollerLogo from "@/assets/rollerLogo.png";

const Navegacion = ({ className, className2 }) => {
  return (
    <div className="flex group">
      <Link to="/">
        <img
          src={ingravityLogo}
          alt="contact us"
          className="rounded-full object-cover w-20 h-20 shadow-lg shadow-thOrange group-hover:scale-150"
        />
      </Link>

      <Link to="/productos">
        <img
          src={rollerLogo}
          alt="contact us"
          className="rounded-full object-cover w-20 h-20 shadow-lg shadow-thBlue"
        />
      </Link>
    </div>
  );
};

export default Navegacion;
