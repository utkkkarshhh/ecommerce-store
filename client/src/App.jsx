import "./App.css";
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Reusable/Header";
import Home from "./Components/pages/Home";
import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";
import CartPage from "./Components/pages/CartPage";
import PrivateRoute from "./Components/Store/PrivateRoute";
import AuthContext from "./Components/Store/AuthContext";
import CartProvider from "./Components/Store/CartProvider";
import ProductPage from "./Components/pages/ProductPage";
import NotFoundPage from "./Components/pages/NotFoundPage";

function App(props) {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* private routes */}
        <Route element={<PrivateRoute renderCondition={{ isAuthenticated }} />}>
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="product/:id" element={<ProductPage />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
