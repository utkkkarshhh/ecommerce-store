import React, { useContext } from "react";
import CartContext from "../Store/CartContext";
import styles from "./CartItemsCard.module.css";
import CartProductCard from "./CartProductCard";

const CartItemsCard = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={styles.CartItemsCard}>
      <div className={styles.header}>
        <p className={styles.heading}>Shopping Cart</p>
        <hr />
      </div>
      {cartCtx.cartItems.length === 0 ? (
        <div className={styles.cartNoItem}>
          <h1 className={styles.emptyCartHeading}>YOUR CART IS EMPTY</h1>
          <p className={styles.emptyCartFooter}>Please fill in some items to purchase!</p>
        </div>
      ) : (
        <div className={styles.productsInCart}>
          {cartCtx.cartItems.map((cartItem, i) => (
            <CartProductCard
              key={i}
              id={cartItem.id}
              name={cartItem.name}
              price={cartItem.price}
              cents={cartItem.cents}
              rating={cartItem.rating}
              quantity={cartItem.quantity}
              image={cartItem.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartItemsCard;
