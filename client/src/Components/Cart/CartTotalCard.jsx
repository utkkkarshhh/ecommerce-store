import styles from "./CartTotalCard.module.css";

const CartTotalCard = (props) => {
  const cartTotal = "$2000";
  return (
    <div className={styles.CartTotalCard}>
      <p className={styles.header}>
        Subtotal (1 {props.numberOfItems}items) : {cartTotal}
      </p>
      <div className={styles.input}>
        <input type="checkbox"></input>
        <p>This order contains a gift</p>
      </div>

      <button className={styles.checkoutButton}>Checkout now</button>
    </div>
  );
};

export default CartTotalCard;
