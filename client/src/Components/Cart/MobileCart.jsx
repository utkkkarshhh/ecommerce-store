import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./MobileCart.module.css";
import { FaCartShopping } from "react-icons/fa6";
import CartContext from "../Store/CartContext";

const MobileCart = () => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.cartItems.length;

  return (
    <Link to="/cart">
      <div className={styles.mobileCart}>
        <Link to="/cart">
          <FaCartShopping />
        </Link>
        {cartItems > 0 && <div className={styles.badge}>{cartItems}</div>}
      </div>
    </Link>
  );
};

export default MobileCart;
