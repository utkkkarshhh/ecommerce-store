import React, { useReducer } from "react";
import CartContext from "./CartContext";
import { initialCartState, cartReducer } from "./CartReducer";

const CartProvider = ({ children }) => {
  const [cartState, disptachCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemHandler = (item) => {
    disptachCartAction({
      type: "ADD",
      payload: item,
    });
  };
  const removeItemHandler = (id) => {
    disptachCartAction({ type: "REMOVE", payload: id });
  };

  const context = {
    cartItems: cartState.cartItems,
    cartAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
