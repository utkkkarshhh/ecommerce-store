const initialCartState = {
  cartItems: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );

    const existingCartItem = state.cartItems[existingItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount,
      };
      updatedItems = [...state.cartItems];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.cartItems.concat(action.payload);
    }

    const updatedTotalAmount =
      state.totalAmount +
      (action.payload.price + action.payload.cents / 100) *
        action.payload.quantity;

    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    // Handle remove action
  }
  return state;
};

export { initialCartState, cartReducer };
