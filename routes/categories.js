const express = require("express");
const { validate, ownership } = require("../middlewares");
const { categorySchema } = require("../schemas");
const {
  allCategories,
  getCategory,
  postCategory,
  updateCategory,
  deleteCategory
} = require("../controllers/category.controller");
const checkUserId = require("../middlewares/checkUserId");

const router = express.Router();

//Crud - Categorias
router.get("/category", ownership(), allCategories);
router.get("/:id", getCategory );
router.post("/", validate(categorySchema), postCategory);
router.patch("/:id",validate(categorySchema), updateCategory );
router.delete("/:id", deleteCategory );

module.exports = router;