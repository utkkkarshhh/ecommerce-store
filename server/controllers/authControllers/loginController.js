const { pool } = require("../../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

const secretKey = "ramisgreat";

exports.loginUser = async (req, res) => {
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
      const user = {
        user_id: result.rows[0].user_id,
        user_name: result.rows[0].user_name,
        user_email: result.rows[0].user_email,
        isLoggedIn: true,
      };

      const accessToken = jwt.sign(user, secretKey, {
        expiresIn: "1h",
      });

      // Set the accessToken cookie
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("accessToken", accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // Set to true in production
          sameSite: "lax",
          maxAge: 3600000,
        })
      );

      res.status(200).json({
        success: true,
        message: "Login successful!",
        user: user,
        redirect: "/home",
        accessToken: accessToken,
      });
    } else {
      return res.status(401).json({ error: "Incorrect Password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
