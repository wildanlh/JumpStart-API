const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = () => {
  mongoose
    .connect(`${config.mongoDB}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = connectDB;
