const express = require("express");
const { validate } = require("../middlewares");
const { categorySchema } = require("../schemas");
const {
  //   allCategories,
  getCategory,
  postCategory,
  updateCategory,
} = require("../controllers/category.controller");

const router = express.Router();

//Crud - Categorias
// router.get("/category", allCategories);
router.get("/category/:id", getCategory);
router.post("/category", validate(categorySchema), postCategory);
router.patch("/category/:id", validate(categorySchema), updateCategory);

module.exports = router;
