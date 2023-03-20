const bcrypt = require("bcryptjs");
const config = require("../config/config");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    phone,
    address,
    city,
    country,
    image,
  } = req.body;

  if (
    !email ||
    !password ||
    !firstName ||
    !lastName ||
    !phone ||
    !address ||
    !city ||
    !country
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: "Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hashedPassword,
    role: "USER",
    firstName,
    lastName,
    phone,
    address,
    city,
    country,
    image,
  });

  try {
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign(
    { userId: user._id, email: user.email, role: user.role },
    config.tokenSecret,
    { expiresIn: "1d" }
  );
  res.status(200).json({ token, role: user.role });
};

module.exports = {
  register,
  login,
};
