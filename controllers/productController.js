const Product = require("../models/product");

// Create a new Product
const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all Products
const getAllProduct = async (req, res) => {
  try {
    const Products = await Product.find();
    res.send(Products);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a Product by id
const getByIdProduct = async (req, res) => {
  try {
    const Product = await Product.findById(req.params.id);
    if (!Product) {
      return res.status(404).send();
    }
    res.send(Product);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a Product by id
const updateProduct = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "ProductCode",
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
    const Product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!Product) {
      return res.status(404).send();
    }

    res.send(Product);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a Product by id
const deleteProduct = async (req, res) => {
  try {
    const Product = await Product.findByIdAndDelete(req.params.id);
    if (!Product) {
      return res.status(404).send();
    }
    res.send(Product);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addProduct,
  getAllProduct,
  getByIdProduct,
  updateProduct,
  deleteProduct,
};
