const jwt = require("jsonwebtoken");
const { tokenSecret } = require("../config/config");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const token = req.get("Authorization").split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, tokenSecret);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error!" });
  }

  if (!decodedToken) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  next();
};
