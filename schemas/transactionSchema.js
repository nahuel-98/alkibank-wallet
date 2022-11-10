const { body } = require('express-validator');
const { User, Category } = require("../database/models");


const transactionSchema = [
    body("userId")
        .notEmpty().withMessage("the 'userId' field must not be empty").bail()
        .isNumeric().withMessage("the 'userId' field must be numeric value").bail()
        .custom(async (value, { req }) => {
            const userId = value
            const response = await User.findByPk(userId)
            if (response == null) {
                throw new Error("user not found")
            }
            return true
        })
    ,

    body("amount")
        .notEmpty().withMessage("the 'amount' field must not be empty").bail()
        .isNumeric().withMessage("the 'amount' field must be a numeric value"),

    body("categoryId")
        .notEmpty().withMessage("the 'categoryId' field must not be empty").bail()
        .isNumeric().withMessage("the 'categoryId' field must be a numeric value").bail()
        .custom(async (value, { req }) => {
            const categoryId = value
            const response = await Category.findByPk(categoryId)
            if (response == null) {
                throw new Error("category not found")
            }
            return true
        })
    ,

    body("date")
        .notEmpty().withMessage("the 'date' field must not be empty").bail()
        // .isDate().withMessage("the 'date' field must be a date")
];

module.exports = transactionSchema