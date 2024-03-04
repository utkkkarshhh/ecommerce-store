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
        <hr></hr>
      </div>
      <div className={styles.productsInCart}>
        {cartCtx.cartItems.map((cartItem, i) => (
          <CartProductCard
            key={i}
            id={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            cents={cartItem.cents}
            rating={cartItem.rating}
            image={cartItem.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItemsCard;
