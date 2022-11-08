const express = require("express");
const { validate } = require("../middlewares");
const { categorySchema } = require("../schemas");
const {
    allCategories,
  getCategory,
  postCategory,
  updateCategory,
} = require("../controllers/category.controller");

const router = express.Router();

//Crud - Categorias
router.get("/", allCategories);
router.get("/:id", getCategory);
router.post("/", validate(categorySchema), postCategory);
router.patch("/:id", validate(categorySchema), updateCategory);

module.exports = router;
