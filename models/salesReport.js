const mongoose = require("mongoose");

const salesReportSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now,
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
});

module.exports = mongoose.model("SalesReport", salesReportSchema);
