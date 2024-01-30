import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
  const addToCartHandler = () => {
    console.log("Product added to cart:", {
      name: props.name,
      price: `${props.price}.${props.cents}`,
      rating: props.rating,
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
      <div className={styles.button}>
        <button onClick={addToCartHandler}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
