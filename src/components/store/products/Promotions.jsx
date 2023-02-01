import React, { useState } from "react";

import StoreNavbar from "@/components/store/StoreNavbar";
import StoreHeroPromotions from "@/components/store/hero/StoreHeroPromotions";

const Promotions = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
      <StoreNavbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <StoreHeroPromotions isMenuShown={isMenuShown} />
    </>
  );
};

export default Promotions;
