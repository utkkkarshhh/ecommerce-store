import styles from "./Cart.module.css";
import CartTotalCard from "./CartTotalCard";
import CartItemsCard from "./CartItemsCard";

const Cart = () => {
  return (
    <div className={styles.body}>
      <div className={styles.CartCard}>
        <CartItemsCard />
        <CartTotalCard />
      </div>
    </div>
  );
};

export default Cart;
