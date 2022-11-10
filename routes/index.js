const express = require("express");
const { get, post } = require("../controllers/index");
const { validate, auth } = require("../middlewares");
const { testSchema } = require("../schemas");
const userRouter = require("./user-routes");
const imagesRouter = require("./images.routes.js")
const categoriesRouter = require("./categories");
const transactionsRoutes = require("./transactionsRoutes");
const authRouter = require("./auth");

const router = express.Router();

// example of a route with index controller get function
router.get("/", get);
// example of a route with index controller post function
router.post("/", validate(testSchema), post);

router.use("/transactions", auth(), transactionsRoutes);
router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/category", auth(), categoriesRouter);
router.use("/images" , auth(), imagesRouter);

module.exports = router;