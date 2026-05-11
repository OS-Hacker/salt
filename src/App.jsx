import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Rent from "./pages/Rent";
import Category from "./pages/Category";
import Resources from "./pages/Resources";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  const location = useLocation();

  // All valid routes
  const validRoutes = [
    "/",
    "/rent",
    "/category",
    "/about",
    "/resources",
    "/products",
    "/product-details",
  ];

  // Check if current route is NOT valid
  const hideLayout = !validRoutes.includes(location.pathname);

  return (
    <div>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product-details" element={<ProductDetails />} />

        {/* Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
