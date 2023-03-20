const Supplier = require("../models/supplier");

// Create a new supplier
const addSupplier = async (req, res) => {
  try {
    const supplier = new Supplier(req.body);
    await supplier.save();
    res.status(201).send(supplier);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all suppliers
const getAllSupplier = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.send(suppliers);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a supplier by id
const getByIdSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    if (!supplier) {
      return res.status(404).send();
    }
    res.send(supplier);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a supplier by id
const updateSupplier = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "supplierCode",
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
    const supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!supplier) {
      return res.status(404).send();
    }

    res.send(supplier);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a supplier by id
const deleteSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndDelete(req.params.id);
    if (!supplier) {
      return res.status(404).send();
    }
    res.send(supplier);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addSupplier,
  getAllSupplier,
  getByIdSupplier,
  updateSupplier,
  deleteSupplier,
};
