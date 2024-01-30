import styles from "./CartItemsCard.module.css";
import CartProductCard from "./CartProductCard";

const CartItemsCard = (props) => {
  return (
    <div className={styles.CartItemsCard}>
      <div className={styles.header}>
        <p className={styles.heading}>Shopping Cart</p>
        <hr></hr>
      </div>
      <div className={styles.productsInCart}>
        <CartProductCard
          id="1"
          name="Smart Watch with Bluetooth Calling, 240 * 280 Pixel High Resolution"
          price="99"
          cents="99"
          rating={5}
          image="https://ongpng.com/wp-content/uploads/2023/03/4.Fire-Boltt-Ninja_1500x1500.png"
        />
      </div>
    </div>
  );
};

export default CartItemsCard;
