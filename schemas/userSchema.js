const { check } = require("express-validator");
const { User } = require("../database/models");
const { ErrorObject } = require("../helpers/error");

const userSchema = [
  check("firstName").exists().isLength({ max: 120, min: 5 }).notEmpty(),

  check("lastName").exists().isLength({ max: 120, min: 5 }).notEmpty(),

  check("password").exists().isLength({ max: 120, min: 5 }).notEmpty(),

  check("email")
    .exists()
    .isEmail()
    .isLength({ max: 255, min: 10 })
    .notEmpty()
    .custom(async (value, { req }) => {
      const emailFind = await User.findAll({
        where: { email: value },
      });
      console.log(emailFind);
      if (emailFind[0] != null) {
        throw new ErrorObject("Email provided already existing", 409);
      }
      return true;
    }),
];

module.exports = userSchema;
