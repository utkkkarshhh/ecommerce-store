import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  cartAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
