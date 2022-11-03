const express = require("express");
const { get, post } = require("../controllers/index");
const { validate } = require("../middlewares");
const { testSchema } = require("../schemas");
const categoriesRouter = require("./categories");

const router = express.Router();

// example of a route with index controller get function
router.get("/", get);
// example of a route with index controller post function
router.post("/", validate(testSchema), post);

router.use("/category", categoriesRouter);

module.exports = router;
