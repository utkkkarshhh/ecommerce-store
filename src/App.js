import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Reusable/Header";
import HeroSection from "./Components/HeroSection";
import ProductsRow from "./Components/Products/ProductsRow";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <Router>
      <Header /> {/* Render Header outside of routes for common layout */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProductsRow />
            </>
          }
        />{" "}
        {/* Combine Landing Page components */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<h2>Login Page</h2>} />{" "}
        {/* Replace with actual login component */}
      </Routes>
    </Router>
  );
}

export default App;
