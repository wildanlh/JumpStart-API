const Costumer = require("../models/costumer");

// Create a new Costumer
const addCostumer = async (req, res) => {
  try {
    const costumer = new Costumer(req.body);
    await costumer.save();
    res.status(201).send(costumer);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all Costumers
const getAllCostumer = async (req, res) => {
  try {
    const costumers = await Costumer.find();
    res.send(costumers);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a Costumer by id
const getByIdCostumer = async (req, res) => {
  try {
    const costumer = await Costumer.findById(req.params.id);
    if (!costumer) {
      return res.status(404).send();
    }
    res.send(costumer);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a Costumer by id
const updateCostumer = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "customerCode",
    "firstName",
    "lastName",
    "phone",
    "debit",
    "credit",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const costumer = await Costumer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!costumer) {
      return res.status(404).send();
    }

    res.send(costumer);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a Costumer by id
const deleteCostumer = async (req, res) => {
  try {
    const costumer = await Costumer.findByIdAndDelete(req.params.id);
    if (!costumer) {
      return res.status(404).send();
    }
    res.send(costumer);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addCostumer,
  getAllCostumer,
  getByIdCostumer,
  updateCostumer,
  deleteCostumer,
};
