const express = require("express");
const { validate } = require("../middlewares");
const { categorySchema } = require("../schemas");
const {
    allCategories,
  getCategory,
  postCategory,
  updateCategory,
  deleteCategory
} = require("../controllers/category.controller");

const router = express.Router();

//Crud - Categorias
router.get("/category", allCategories);
router.get("/:id", getCategory);
router.post("/", validate(categorySchema), postCategory);
router.patch("/:id", validate(categorySchema), updateCategory);
router.delete("/:id", validate(categorySchema), deleteCategory)

module.exports = router;
