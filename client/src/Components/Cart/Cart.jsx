import styles from "./Cart.module.css";
import CartTotalCard from "./CartTotalCard";
import CartItemsCard from "./CartItemsCard";

const Cart = () => {
  return (
    <div className={styles.cartBody}>
      <div className={styles.cartCard}>
        <CartItemsCard />
        <CartTotalCard />
      </div>
    </div>
  );
};

export default Cart;
