import React, { useContext } from "react";
import styles from "./ProductCard.module.css";
import CartContext from "../Store/CartContext";

const ProductCard = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      cents: props.cents,
      image: props.image,
    });
  };
  return (
    <div className={styles.card}>
      <div className={styles.productTitle}>
        <b>
          <p>{props.name}</p>
        </b>
        <p className={styles.price}>
          <span className={styles.currency}>$</span>
          {props.price}
          <span className={styles.adjustedMoney}>{props.cents}</span>
        </p>
        <p className={styles.ratings}>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>
      </div>
      <div className={styles.productImage}>
        <img src={props.image} alt="Product Depiction"></img>
      </div>
      <div className={styles.productCardButton}>
        <button
          className={styles.productCardAddToCardButton}
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
