const DB = require("./../database/models")
const { body } = require("express-validator")
const { validationResult } = require("express-validator")

const transactionValidatorMiddleware = {

    createForm : [
        body("userId")
            .notEmpty().withMessage("the 'userId' field must not be empty").bail()
            .isNumeric().withMessage("the 'userId' field must be numeric value").bail()
            .custom( async(value, {req})=>{
                const userId = value
                const response = await DB.User.findById(userId)
                if( response == null) {
                    throw new Error("user not found")
                }
                return true
            }),
        body("amount")
            .notEmpty().withMessage("the 'amount' field must not be empty").bail()
            .isNumeric().withMessage("the 'amount' field must be a numeric value"),
        body("categoryId")
            .notEmpty().withMessage("the 'categoryId' field must not be empty").bail()
            .isNumeric().withMessage("the 'categoryId' field must be a numeric value").bail()
            .custom( async(value, {req})=>{
                const categoryId = value
                const response = await DB.Category.findById(categoryId)
                if( response == null){
                    throw new Error("category not found")
                }
                return true
            }),
        body("date")
            .notEmpty().withMessage("the 'date' field must not be empty").bail()
            .isDate().withMessage("the 'date' field must be a date")
    ],

    validationResults : (req, res, next)=>{
        const errors = validationResult( req )

        if(!errors.isEmpty()){
            const httpError = createHttpError(
                `[Error retrieving index] - [index - GET]: ${errors.mapped()}`,
            )
            return next(httpError)
        } else {
            return next()
        }
    }
}

module.exports = transactionValidatorMiddleware