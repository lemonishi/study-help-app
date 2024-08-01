const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const createAccessToken = (_id) => {
  return jwt.sign({ _id }, secret, { expiresIn: "1h" });
};
const createRefreshToken = (_id) => {
  return jwt.sign({ _id }, secret, { expiresIn: "1d" });
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

    const accessToken = createAccessToken(user._id);
    const refreshToken = createRefreshToken(user._id);

    res
      .cookie("jwt", refreshToken, {
        httpOnly: true,
        // secure: true,
        sameSite: "strict",
      })
      .header("Authorization", accessToken)
      .status(200)
      .json({ message: `Welcome back, ${user.username}`, email, accessToken });
  } catch (err) {
    res.status(401).json({ error: err.message });
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

    const accessToken = createAccessToken(user._id);
    const refreshToken = createRefreshToken(user._id);

    res
      .cookie("jwt", refreshToken, {
        httpOnly: true,
        // secure: true,
        sameSite: "strict",
      })
      .header("Authorization", accessToken)
      .status(200)
      .json({ email, accessToken, message: "User registered" });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

const refreshAuth = (req, res, next) => {
  const refreshToken = req.cookies["jwt"];
  if (!refreshToken) {
    return res
      .status(401)
      .json({ message: "Access denied. No refresh token provided" });
  }

  try {
    const decoded = jwt.verify(refreshToken, secret);
    const accessToken = jwt.sign({ _id: decoded.user._id }, secret, {
      expiresIn: "1h",
    });

    res
      .header("Authorization", accessToken)
      .status(200)
      .json({ user: decoded.user });
  } catch (err) {
    return res.status(401).json({ message: "Invalid refresh token" });
  }
};

module.exports = { loginUser, registerUser, refreshAuth };
