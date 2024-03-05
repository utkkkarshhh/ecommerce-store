import React, { useState, useContext, useEffect } from "react";
import styles from "./QuantityButton.module.css";
import CartContext from "../Store/CartContext";

const QuantityButton = (props) => {
  const [quantityCount, setQuantityCount] = useState(props.quantity || 1);
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  useEffect(() => {
    setQuantityCount(props.quantity || 1);
  }, [props.quantity]);

  const quantityDecreaseHandler = () => {
    if (quantityCount > 1) {
      setQuantityCount(quantityCount - 1);
      decreaseQuantity(props.id);
    }
  };

  const quantityIncreaseHandler = () => {
    if (quantityCount < 5) {
      setQuantityCount(quantityCount + 1);
      increaseQuantity(props.id);
    }
  };

  return (
    <div className={styles.quantityInputButton}>
      <button
        className={styles.qtyButtonLeft}
        onClick={quantityDecreaseHandler}
      >
        -
      </button>
      <input
        className={styles.quantityInput}
        min={1}
        max={5}
        value={quantityCount}
        readOnly
      />
      <button
        className={styles.qtyButtonRight}
        onClick={quantityIncreaseHandler}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
