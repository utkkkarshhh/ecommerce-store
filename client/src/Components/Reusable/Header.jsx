import React, { useState, useEffect, useContext } from "react";
import styles from "./Header.module.css";
import { MdSearch } from "react-icons/md";
import CartButton from "../Cart/CartButton";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Store/AuthContext";
import axios from "axios";
import HeaderAvatar from "./HeaderAvatar";
import MobileCart from "../Cart/MobileCart";

const Header = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Utkarsh");
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8972/api/userInfo");

        if (response.data.success) {
          setUserName(response.data.user_name);
        } else {
          setUserName(""); // Reset username if userInfo fetch fails
          console.error("User information not available:", response.data);
        }
      } catch (error) {
        console.error("Error during user information fetch:", error);
      }
    };

    fetchUserData();
  }, []);

  const logOutHandler = async () => {
    try {
      await axios.post("http://localhost:8972/api/logout");
      setUserName("");
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <header className={styles.header}>
          <div className={styles.brand}>
            <Link to="/home">
              <p className={styles.logo}>E-COMMERCE STORE</p>
            </Link>
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
              <button className={styles.searchbarSearchButton} type="submit">
                <MdSearch style={{ fontSize: "24px", color: "black" }} />
              </button>
            </div>
          </div>
          {/* Mobile view */}
          <div className={styles.mobileMenu}>
            <span className={styles.avatar}>
              <HeaderAvatar />
            </span>
            <span>
              <MobileCart />
            </span>
          </div>
          {/* Desktop view */}
          <div className={styles.userActions}>
            <div onClick={logOutHandler} className={styles.logOut}>
              Hello <b>{userName}</b>,<br /> <Link to="/login">Log out</Link>
            </div>
            <div
              className={styles.order}
              onClick={() => alert("Working on it")}
            >
              Orders
            </div>
            <Link to="/cart" className={styles.cart}>
              <CartButton />
            </Link>
          </div>
        </header>
      ) : (
        <div className={styles.logoutHeader}>
          <div className={styles.brand}>
            <p>E-COMMERCE STORE</p>
          </div>
          <div className={styles.userActionsUnauthenticated}>
            <Link to="/register">
              <button className={styles.logoutPageButtons}>Sign up</button>
            </Link>
            <Link to="/login">
              <button className={styles.logoutPageButtons}>Login</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
