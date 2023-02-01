import React, { useState } from "react";

import StoreNavbar from "@/components/store/StoreNavbar";
import StorePromotions from "@/components/store/StorePromotions";

const Promotions = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
      <StoreNavbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <StorePromotions isMenuShown={isMenuShown} />
    </>
  );
};

export default Promotions;
