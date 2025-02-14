const Product = require("../models/products");

exports.getAllProducts = async (req, res) => {
  try {
    const result = await Product.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Products found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Products not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const result = await Product.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Product found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Product not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Product deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      cost: req.body.cost,
    };
    const result = await Product.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Product updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Product was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const data = new Product({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      cost: req.body.cost,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Product created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Product was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
