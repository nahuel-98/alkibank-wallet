const express = require("express");
const { get, post } = require("../controllers/index");
const {
//   allCategories,
  getCategory,
  postCategory,
  updateCategory,
} = require("../controllers/category.controller");
const { validate } = require("../middlewares");
const { testSchema, categorySchema } = require("../schemas");

const router = express.Router();

// example of a route with index controller get function
router.get("/", get);
// example of a route with index controller post function
router.post("/", validate(testSchema), post);

//Crud - Categorias
// router.get("/category", allCategories);
router.get("/category/:id", getCategory);
router.post("/category", validate(categorySchema), postCategory);
router.patch("/category/:id", validate(categorySchema), updateCategory);

module.exports = router;
