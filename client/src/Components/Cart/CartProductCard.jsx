import styles from "./CartProductCard.module.css";

const CartProductCard = (props) => {
  const itemRemovalHandler = (event) =>{
    console.log(event);
  }
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={props.image} alt={props.name}></img>
      </div>
      <div className={styles.productInfo}>
        <p className={styles.productName}>{props.name}</p>
        <p className={styles.productPrice}>
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
        <div className={styles.actionButtons}>
          <button onClick={itemRemovalHandler}>Remove Item</button>
        </div>
      </div>
    </div>
    
  );
};

export default CartProductCard;
