import React, { useState } from "react";
import styles from "./QuantityButton.module.css";

const QuantityButton = (props) => {
  const [quantityCount, setQuantityCount] = useState(1);

  const quantityDecreaseHandler = () => {
    if (quantityCount > 1) {
      setQuantityCount(quantityCount - 1);
    }
  };

  const quantityIncreaseHandler = () => {
    if (quantityCount < 10) {
      setQuantityCount(quantityCount + 1);
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
        max={10}
        value={quantityCount}
      ></input>
      <button
        className={styles.qtyButtonRight}
        onClick={props.quantityIncreaseHandler}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
