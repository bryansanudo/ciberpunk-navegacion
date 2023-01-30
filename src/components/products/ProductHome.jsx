import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";

const ProductHome = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <Products />
    </div>
  );
};

export default ProductHome;
