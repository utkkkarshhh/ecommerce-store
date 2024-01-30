const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

const saltRounds = 10;
const port = 8972;

// Middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // Adjust the origin as needed
app.use(cookieParser());
app.use(
  session({
    secret: "utkarsh",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set secure to false if not using HTTPS
  })
);

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ecommerce",
  password: "utkarsh",
  port: 8000,
});

let isLoggedIn = false;

const checkAuth = (req, res, next) => {
  if (isLoggedIn) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

app.post("/api/register", async (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    const result = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
      [userName, email, hashedPassword]
    );

    const newUser = result.rows[0];
    console.log("Registration successful. User:", newUser);
    res.status(201).json({
      success: true,
      message: "Registration successful!",
      user: newUser,
      redirect: "/login",
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.post("/api/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE user_email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    const hashedPassword = result.rows[0].user_password;
    const passwordMatch = await bcrypt.compare(password, hashedPassword);

    if (passwordMatch) {
      isLoggedIn = true;
      req.session.user = {
        user_id: result.rows[0].user_id,
        user_name: result.rows[0].user_name,
        user_email: result.rows[0].user_email,
        isLoggedIn: true,
      };
      res.status(200).json({
        success: true,
        message: "Login successful!",
        user: req.session.user,
        redirect: "/home",
      });
    } else {
      return res.status(401).json({ error: "Incorrect Password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/logout", function (req, res) {
  if (req.session.user) {
    req.session.user.isLoggedIn = false;
  }
  isLoggedIn = false;
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.status(201).json({
        success: true,
        message: "Logged Out",
        redirect: "/login",
      });
    }
  });
});

app.get("/api/userInfo", checkAuth, (req, res) => {
  const { user_id, user_name, user_email, isLoggedIn } = req.session.user;

  res.json({
    success: true,
    user_id,
    user_name,
    user_email,
    isLoggedIn: isLoggedIn || false,
  });
});

app.listen(port, () => {
  console.log(`App live on port ${port}`);
});
