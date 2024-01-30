import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./RegisterCard.module.css";
import axios from "axios";

const RegisterCard = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const registerUserHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8972/api/register", {
        userName,
        email,
        password,
      });

      if (response.data.success) {
        console.log("Registration successful. Received data:", response.data);
        if (response.data.redirect) {
          // Redirect to the specified route using navigate
          navigate(response.data.redirect);
        }
      } else {
        console.log("Registration failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.registerCard}>
      <p className={styles.heading}>Register User</p>
      <form onSubmit={registerUserHandler}>
        <div className={styles.registerInput}>
          <label>Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
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
          Register
        </button>
      </form>
      <p className={styles.policyText}>
        Beware, this is not an actual website. Don't put critical information.
        Details like "Passwords" are hashed!
      </p>
      <Link to="/login" className={styles.altText}>
        Login Instead?
      </Link>
    </div>
  );
};

export default RegisterCard;
