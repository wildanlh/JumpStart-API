require("dotenv").config();

const config = {
  mongoDB: process.env.MONGO_URI,
  port: process.env.PORT,
  tokenSecret: process.env.JWT_SECRET,
};

module.exports = config;
