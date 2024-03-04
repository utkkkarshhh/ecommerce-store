const express = require("express");
const router = express.Router();
const {
  registerUser,
} = require("../../controllers/authControllers/registerController");
const {
  loginUser,
} = require("../../controllers/authControllers/loginController");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
