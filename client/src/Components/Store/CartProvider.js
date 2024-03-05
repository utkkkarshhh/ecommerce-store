import React, { useReducer } from "react";
import CartContext from "./CartContext";
import { initialCartState, cartReducer } from "./CartReducer";

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", payload: id });
  };

  const increaseQuantityOfAItem = (id) => {
    dispatchCartAction({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantityOfAItem = (id) => {
    dispatchCartAction({ type: "DECREASE_QUANTITY", payload: id });
  };

  const context = {
    cartItems: cartState.cartItems,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    increaseQuantity: increaseQuantityOfAItem,
    decreaseQuantity: decreaseQuantityOfAItem,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
