const bcrypt = require("bcrypt");
const pool = require("../../config/database");

const saltRounds = 10;

exports.registerUser = async (req, res) => {
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
};
