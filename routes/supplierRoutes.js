const express = require("express");
const {
  addSupplier,
  updateSupplier,
  getAllSupplier,
  getByIdSupplier,
  deleteSupplier,
} = require("../controllers/supplierController");
const authToken = require("../middlewares/authToken");
const checkRole = require("../middlewares/checkRole");
const router = express.Router();

router.post("/add", authToken, checkRole, addSupplier);
router.patch("/:id", updateSupplier);
router.get("/", getAllSupplier);
router.get("/:id", getByIdSupplier);
router.delete("/:id", deleteSupplier);

module.exports = router;
