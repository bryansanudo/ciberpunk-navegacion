import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
import DevApi from "@/components/DevApi";
import Customers from "@/components/Customers";
import Contact from "@/components/Contact";
import ProductHome from "@/components/products/ProductHome";
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
          <Route path="/products" element={<ProductHome />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
