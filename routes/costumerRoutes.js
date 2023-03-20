const express = require("express");
const {
  addCostumer,
  updateCostumer,
  getAllCostumer,
  getByIdCostumer,
  deleteCostumer,
} = require("../controllers/CostumerController");
const authToken = require("../middlewares/authToken");
const checkRole = require("../middlewares/checkRole");
const router = express.Router();

router.post("/add", authToken, checkRole, addCostumer);
router.patch("/:id", updateCostumer);
router.get("/", getAllCostumer);
router.get("/:id", getByIdCostumer);
router.delete("/:id", deleteCostumer);

module.exports = router;
