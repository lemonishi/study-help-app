const express = require("express");
const {
  loginUser,
  registerUser,
  refreshAuth,
} = require("../controllers/userController");
const router = express.Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

router.post("/refresh", refreshAuth);

module.exports = router;
