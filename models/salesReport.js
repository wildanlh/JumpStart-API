const mongoose = require("mongoose");

const salesReportSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now,
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
});

module.exports = mongoose.model("SalesReport", salesReportSchema);
