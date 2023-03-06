const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  supplierCode: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  debit: {
    type: Number,
    required: true,
  },
  credit: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Supplier", supplierSchema);
