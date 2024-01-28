import React from "react";
import styles from "./Header.module.css";
// import amazonLogo from "../../Assets/images/Amazon.png";
import { MdSearch } from "react-icons/md";
import CartButton from "../Cart/CartButton";
import { Link } from "react-router-dom";

const Header = (props) => {
  const userName = "Utkarsh";

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <p>E-COMMERCE STORE</p>
      </Link>
      <div className={styles.searchBar}>
        <div className={styles.left}>
          <select name="All" id="category">
            <option value="All">All</option>
            <option value="Mobile Phone">Mobile Phones</option>
            <option value="Books">Books</option>
            <option value="Home Products">Home Products</option>
          </select>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search for products" />
        </div>
        <div className={styles.right}>
          <button type="submit">
            <MdSearch style={{ fontSize: "24px", color: "black" }} />
          </button>
        </div>
      </div>
      <div className={styles.userActions}>
        <Link to="/login" className={styles.signIn}>
          Hello <b>{userName}</b>,<br></br> Sign out
        </Link>
        <div className={styles.order}>Orders</div>
        <Link to="/cart" className={styles.cart}>
          <CartButton />
        </Link>
      </div>
    </header>
  );
};

export default Header;
