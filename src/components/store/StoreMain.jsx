import React, { useState } from "react";

import StoreNavbar from "@/components/store/StoreNavbar";
import StoreHeroSection from "@/components/store/StoreHeroSection";

const StoreMain = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <div>
      <StoreNavbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <StoreHeroSection isMenuShown={isMenuShown} />
    </div>
  );
};

export default StoreMain;
