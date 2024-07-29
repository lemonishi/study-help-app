const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw Error("All fields must be filled");
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw Error("Incorrect email");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw Error("Incorrect password");
    }

    const token = createToken(user._id);
    res
      .status(200)
      .json({ message: `Welcome back, ${user.username}`, email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
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
    if (emailExists) {
      throw Error("Email already in use");
    } else if (userExists) {
      throw Error("Username taken");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({ username, email, password: hash });

    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { loginUser, registerUser };
