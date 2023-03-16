const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
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
  },
  costPrice: {
    type: Number,
    required: true,
  },
  sellingPrice: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
