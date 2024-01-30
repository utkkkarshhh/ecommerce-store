import React from "react";
import styles from "./LoginPageHeader.module.css";

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <p>E-COMMERCE STORE</p>
      </div>
    </header>
  );
};

export default Header;
