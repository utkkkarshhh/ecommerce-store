import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import QuantityButton from "../Cart/QuantityButton";
import products from "../Store/Products";
import CartContext from "../Store/CartContext";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const { addItem } = useContext(CartContext);

  const addItemToCartHandler = (product) => {
    addItem(product);
  };

  useEffect(() => {
    const selectedProduct = products.find((product) => product.id === id);
    setProduct(selectedProduct);
  }, [id]);

  console.log(product);

  return (
    <div className={styles.productPage}>
      <div className={styles.productPageWrapper}>
        <div className={styles.productPageProductImage}>
          <img
            className={styles.productPageProductImageTag}
            src={product.image}
            alt={product.name}
          ></img>
        </div>
        <div className={styles.productPageProductInfo}>
          <div className={styles.productPageProductName}>
            <h2>{product.name}</h2>
          </div>
          <hr></hr>
          <div className={styles.productPageProductRating}>
            {Array(product.rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
          <div className={styles.productPageAmount}>
            <span className={styles.productPageCurrency}>$</span>
            <span className={styles.productPagePrice}>{product.price}</span>
            <span className={styles.productPageCents}>{product.cents}</span>
          </div>
          <div className={styles.productPageButtons}>
            <button
              className={styles.productPageButton}
              onClick={() => addItemToCartHandler(product)}
            >
              Add to cart
            </button>
            <QuantityButton></QuantityButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
