import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginCard.module.css";
import axios from "axios";

const LoginCard = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8972/api/login", {
        email,
        password,
      });

      if (response.data.success) {
        console.log("Login successful. Received data:", response.data);
        navigate("/home");
      } else {
        console.log("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }

    setEmail("");
    setPassword("");
  };

  return (
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
        Beware, this is not an actual website. Don't put critical information.
        Details like "Passwords" are hashed!
      </p>
      <Link to="/register" className={styles.altText}>
        Create an account
      </Link>
    </div>
  );
};

export default LoginCard;
