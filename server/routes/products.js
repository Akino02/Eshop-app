const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");

router.get("/", productsController.getAllProducts);

router.get("/:id", productsController.getProductById);

router.delete("/:id", productsController.deleteProduct);

router.put("/:id", productsController.updateProduct);

router.post("/", productsController.createProduct);

module.exports = router;
