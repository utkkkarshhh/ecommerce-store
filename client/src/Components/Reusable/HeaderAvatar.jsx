import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderAvatar.module.css";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";

const HeaderAvatar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const visibilityHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.headerAvatar}>
      <FaUser onClick={visibilityHandler} />
      {isVisible && (
        <div className={styles.optionBox}>
          <Link to="/home">
            <p className={styles.option}>
              <FaHome /> Home
            </p>
          </Link>
          <Link to="/cart">
            <p className={styles.option}>
              <FaCartArrowDown /> Cart
            </p>
          </Link>
          <Link to="/login">
            <p className={styles.option}>
              <IoLogOut /> Logout
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderAvatar;
