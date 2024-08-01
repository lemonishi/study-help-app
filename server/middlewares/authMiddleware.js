const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const authenticate = (req, res, next) => {
  const accessToken = req.headers["authorization"];
  const refreshToken = req.cookies["jwt"];

  if (!accessToken && !refreshToken) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided" });
  }

  try {
    const decoded = jwt.verify(accessToken, secret);
    req.user._id = decoded.user._id;
    next();
  } catch (err) {
    if (!refreshToken) {
      return res.status(401).json({ message: "No refresh token provided" });
    }

    try {
      const decoded = jwt.verify(refreshToken, secret);
      const accessToken = jwt.sign({ _id: decoded.user._id }, secret, {
        expiresIn: "1h",
      });

      res
        .cookie("jwt", refreshToken, { httpOnly: true, sameSite: "strict" })
        .header("Authorization", accessToken)
        .status(200)
        .json({ message: "Access token updated" });
    } catch (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
  }
};

module.exports = authenticate;
