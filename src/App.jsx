import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
import DevApi from "@/components/DevApi";
import Customers from "@/components/Customers";
import Contact from "@/components/Contact";

import StoreMain from "@/components/store/StoreMain";

import Donwhill from "@/components/store/products/Downhill";
import RollerSkates from "@/components/store/products/RollerSkates";

import Waterproof from "@/components/store/products/Waterproof";
import Promotions from "@/components/store/products/Promotions";
import Caps from "@/components/store/products/Caps";

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
                <DevApi />
                <Products />
                <Customers />
                <Contact />
              </>
            }
          ></Route>
          <Route path="/productos" element={<StoreMain />} />
          <Route path="/productos/inicio" element={<StoreMain />} />
          <Route path="/productos/patines" element={<RollerSkates />} />
          <Route path="/productos/downhill" element={<Donwhill />} />
          <Route path="/productos/chaquetas" element={<Waterproof />} />
          <Route path="/productos/gorras" element={<Caps />} />
          <Route path="/productos/promociones" element={<Promotions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
