const mongoose = require("mongoose");

const currentStockSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  productCode: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  productName: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  revenue: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  fullName: {
    type: Schema.Types.ObjectId,
    ref: "Supplier",
  },
  soldBy: {
    type: Schema.Types.ObjectId,
    ref: "Costumer",
  },
});

module.exports = mongoose.model("CurrentStock", currentStockSchema);
