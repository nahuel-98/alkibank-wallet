const { check } = require("express-validator");


const loginSchema = [
  check("email").notEmpty().isEmail(),
  check("password").notEmpty(),
];

module.exports = loginSchema;