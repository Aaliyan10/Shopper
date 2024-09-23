import { useState } from "react";
import Nav from "./common/NavBar/Nav";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Products from "./pages/All_products/Products";
import Electronics from "./pages/Electronics/Electronics"
import Jewellery from "./pages/Jewellery/Jewellery"
import Landing from "./common/Product_Landing/Landing";
import Footer from "./common/Footer/Footer";
import Cart from "./common/Shopping_Cart'/Cart";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Jewelery" element={<Jewellery />} />
        <Route path="/Product/:id" element={<Landing />} />
        <Route path="/Product/:id" element={<Landing />} />
        <Route path="/Cart/:id/:quantity" element={<Cart />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
