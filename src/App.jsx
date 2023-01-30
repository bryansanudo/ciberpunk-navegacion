import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
import DevApi from "@/components/DevApi";
import Customers from "@/components/Customers";
import Contact from "@/components/Contact";

import Wheels from "@/components/store/products/Wheels";
import RollerSkates from "@/components/store/products/RollerSkates";
import Waterproof from "@/components/store/products/Waterproof";
import Accesories from "@/components/store/products/Accesories";
import Caps from "@/components/store/products/Caps";

import StoreMain from "@/components/store/StoreMain";
import { useState } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar
                  isMenuShown={isMenuShown}
                  setIsMenuShown={setIsMenuShown}
                />
                <HeroSection isMenuShown={isMenuShown} />
                <Products />
                <DevApi />
                <Customers />
                <Contact />
              </>
            }
          ></Route>
          <Route path="/productos" element={<StoreMain />} />
          <Route path="/productos/patines" element={<RollerSkates />} />
          <Route path="/productos/ruedas" element={<Wheels />} />
          <Route path="/productos/chaquetas" element={<Waterproof />} />
          <Route path="/productos/gorras" element={<Caps />} />
          <Route path="/productos/accesorios" element={<Accesories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
