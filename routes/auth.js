const express = require("express");
const { validate } = require("../middlewares");
const { loginSchema } = require("../schemas");
const { login } = require("../controllers/authController");


const router = express.Router();

router.post("/login", validate(loginSchema), login);


module.exports = router;