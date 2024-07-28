const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");

const loginUser = async (req, res, next) => {
  return res.status(200).json({ message: "Logged in" });
};

const registerUser = async (req, res, next) => {
  const { username, password, email } = req.body;
  try {
    if (!email || !username || !password) {
      throw Error("All fields must be filled");
    }
    if (!validator.isEmail(email)) {
      throw Error("Invalid email");
    }
    if (!validator.isStrongPassword(password)) {
      throw Error("Password is too weak");
    }

    const userExists = await User.findOne({ username });
    const emailExists = await User.findOne({ email });
    if (userExists && emailExists) {
      throw Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({ username, email, password: hash });
    res.status(200).json({ email, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { loginUser, registerUser };
