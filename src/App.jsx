import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Rent from "./pages/Rent";
import Category from "./pages/Category";
import Resources from "./pages/Resources";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
