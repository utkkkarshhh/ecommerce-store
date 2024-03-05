import React from "react";
import styles from "./ProductsRow.module.css";
import ProductCard from "./ProductCard";
import products from "../Store/Products";

const ProductRow = () => {
  return (
    <div className={styles.productsRow}>
      <div className={styles.row}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            cents={product.cents}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductRow;
