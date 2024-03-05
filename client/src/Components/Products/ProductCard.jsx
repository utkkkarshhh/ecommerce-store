import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
      quantity: 1,
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
        <div className={styles.ratings}>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
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
        <button className={styles.viewProductButton}>
          <Link
            to={{
              pathname: `/product/${props.id}`,
              state: {
                id: props.id,
                name: props.name,
                price: props.price,
                cents: props.cents,
                rating: props.rating,
                image: props.image,
              },
            }}
            className={styles.viewProductButton}
          >
            View Product
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
