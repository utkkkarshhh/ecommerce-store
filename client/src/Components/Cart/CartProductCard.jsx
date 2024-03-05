import React, { useContext } from "react";
import styles from "./CartProductCard.module.css";
import QuantityButton from "./QuantityButton";
import CartContext from "../Store/CartContext";

const CartProductCard = (props) => {
  const { cartItems, removeItem } = useContext(CartContext);

  const itemRemovalHandler = () => {
    removeItem(props.id);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={styles.productInfo}>
        <p className={styles.productName}>{props.name}</p>
        <p className={styles.productPrice}>
          <span className={styles.currency}>$</span>
          {props.price}
          <span className={styles.adjustedMoney}>{props.cents}</span>
        </p>
        <div className={styles.ratings}>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <div className={styles.actionButtons}>
          <button
            className={styles.cartProductCardRemoveItem}
            onClick={itemRemovalHandler}
          >
            Remove Item
          </button>
          <QuantityButton
            id={props.id}
            quantity={cartItems.find((item) => item.id === props.id)?.quantity}
          />
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
