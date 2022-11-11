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
router.get("/:id",
  [
    checkUserId,
    ownership()
  ],
  getCategory
);
router.post("/", validate(categorySchema), postCategory);
router.patch("/:id",
  [
    checkUserId,
    validate(categorySchema),
    ownership()
  ],
  updateCategory
);
router.delete("/:id",
  [
    checkUserId,
    ownership()
  ],
  deleteCategory
);

module.exports = router;