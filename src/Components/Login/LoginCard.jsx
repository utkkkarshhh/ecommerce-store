import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginCard.module.css";

const LoginCard = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (event) => {
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
    event.preventDefault();
  };

  return (
    <>
      <Link to="/" className={styles.logo}>
        E-COMMERCE STORE
      </Link>
      <div className={styles.loginCard}>
        <p className={styles.heading}>Login</p>
        <form onSubmit={loginHandler}>
          <div className={styles.loginInput}>
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.ctaButton}>
            Sign in
          </button>
        </form>
        <p className={styles.policyText}>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>
        <p className={styles.altText}>Create an account</p>
      </div>
    </>
  );
};

export default LoginCard;
