const express = require("express");
const router = express.Router();

const categoriesController = require("../controllers/categories");

router.get("/", categoriesController.getAllCategories);

//router.get("/:id", categoriesController.getCatById);

router.delete("/:id", categoriesController.deleteCategory);

//router.put("/:id", categoriesController.updateCat);

router.post("/", categoriesController.createCategory);

module.exports = router;
