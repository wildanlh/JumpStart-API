const mongoose = require("mongoose");

const currentStockSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  productCode: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  revenue: {
    type: Number,
    required: true,
  },
  fullName: {
    type: Number,
    required: true,
  },
  soldBy: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("CurrentStock", currentStockSchema);
