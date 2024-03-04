import React, { useContext } from "react";
import styles from "./CartTotalCard.module.css";
import CartContext from "../Store/CartContext";

const CartTotalCard = (props) => {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.cartAmount;
  console.log(cartTotal);

  return (
    <div className={styles.CartTotalCard}>
      <p className={styles.header}>
        Subtotal ({cartCtx.cartItems.length} items) : ${cartTotal}
      </p>
      <div className={styles.input}>
        <input type="checkbox"></input>
        <p>This order contains a gift</p>
      </div>

      <button className={styles.checkoutButton}>Checkout now</button>
    </div>
  );
};

export default CartTotalCard;
