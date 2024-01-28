import React from "react";
import styles from "./Header.module.css";
// import amazonLogo from "../../Assets/images/Amazon.png";
import { MdSearch } from "react-icons/md";
import CartButton from "./CartButton";

const Header = (props) => {
  const userName = "Utkarsh";

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <p>E-COMMERCE STORE</p>
      </div>
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
        <div className={styles.signIn}>
          Hello <b>{userName}</b>,<br></br> Sign out
        </div>
        <div className={styles.order}>Orders</div>
        <div className={styles.cart}>
          <CartButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
