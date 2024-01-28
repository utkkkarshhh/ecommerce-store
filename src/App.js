import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Reusable/Header";
import HeroSection from "./Components/HeroSection";
import ProductsRow from "./Components/Products/ProductsRow";
import Cart from "./Components/Cart/Cart";
import LoginCard from "./Components/Login/LoginCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <ProductsRow />
            </>
          }
        />{" "}
        {/* Combine Landing Page components */}
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart />
            </>
          }
        />
        <Route path="/login" element={<><LoginCard /></>} />{" "}
        {/* Replace with actual login component */}
      </Routes>
    </Router>
  );
}

export default App;
