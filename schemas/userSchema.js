const { check, body } = require("express-validator");
const { User } = require("../database/models");
const { ErrorObject } = require("../helpers/error");

const userSchema = [
  check("firstName")
    .exists()
    .isLength({ max: 120, min: 2 })
    .withMessage("Firstname should be more than 5 and little than 120")
    .notEmpty()
    .withMessage("Required firstname"),

  check("lastName")
    .exists()
    .isLength({ max: 120, min: 2 })
    .withMessage("Lastname should be more than 5 and little than 120 characters")
    .notEmpty()
    .withMessage("Required lastname"),

  check("password")
    .exists()
    .notEmpty()
    .withMessage("Required password")
    .isLength({ max: 120, min: 5 })
    .withMessage("Password should be more than 5 and little than 120 characters"),

  check("email")
    .exists()
    .isEmail()
    .withMessage("Should be email")
    .isLength({ max: 120, min: 5 })
    .withMessage("Email should be more than 5 and little than 120 characters")
    .notEmpty()
    .withMessage("Required email"),
];

module.exports = userSchema;
