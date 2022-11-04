const express = require("express");
const { get, post } = require("../controllers/index");
const { validate } = require("../middlewares");
const { testSchema } = require("../schemas");
const userRouter = require("./user-routes");
const categoriesRouter = require("./categories");
const authRouter = require("./auth");

const router = express.Router();

// example of a route with index controller get function
router.get("/", get);
// example of a route with index controller post function
router.post("/", validate(testSchema), post);

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/category", categoriesRouter);

module.exports = router;
