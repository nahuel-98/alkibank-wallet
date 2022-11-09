const { Transaction } = require("../database/models");
const { endpointResponse } = require("../helpers/success")
const { catchAsync } = require('../helpers/catchAsync')
const createHttpError = require('http-errors')

//CRUD pattern
const transactionsController = {
    //Read
    transactionList: catchAsync(async (req, res, next) => {
        try {

            const response = await Transaction.findAll({attributes:["id", "amount", "date"],
                include:[
                    {association:"User", attributes:["id", "firstName", "lastName"]},
                    {association:"Category", attributes:["name"]}
                ]})
            endpointResponse({
                res,
                message: 'transactions recived succefull',
                body: response,
            })

        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error retrieving index] - [index - GET]: ${error.message}`,
            )
            next(httpError)
        }
    }),
    
    //Detail
    transactionDetail: catchAsync(async (req, res, next) => {
        try {
            const transactionId = req.params.id
            const response = await Transaction.findById(transactionId)

            endpointResponse({
                res,
                message: 'transaction recived succefull',
                body: response,
            })

        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error retrieving index] - [index - GET]: ${error.message}`,
            )
            next(httpError)
        } 
    }),

    //Create
    transactionCreate: catchAsync(async (req, res, next) => {
        try {
            const transaction = {
                            description: req.body.description,
                            amount: req.body.amount,
                            userId: req.body.userId,
                            categoryId: req.body.categoryId,
                            date: req.body.date
                        }
            const response = await Transaction.create(transaction)
            endpointResponse({
                res,
                message: 'transactions created succefull',
                body: response,
            })

        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error retrieving index] - [index - GET]: ${error.message}`,
            )
            next(httpError)
        }
    }),

    //Delete
    transactionDelete:catchAsync(async (req, res, next) => {
        try {
            const transactionId = req.params.id

            const response = await Transaction.destroy({ where: { id: transactionId } })
            endpointResponse({
                res,
                message: 'transactions deleted succefull',
                body: response,
            })

        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error retrieving index] - [index - GET]: ${error.message}`,
            )
            next(httpError)
        }
    }),

    //Update
    transactionUpdate: catchAsync(async (req, res, next) => {
        try {
            const transactionId = req.params.id
            const transaction = {
                        description: req.body.description,
                        amount: req.body.amount,
                        userId: req.body.userId,
                        categoryId: req.body.categoryId,
                        date: req.body.date
                    }

            const response = await Transaction.update(transaction, { where: { id: transactionId } })
            endpointResponse({
                res,
                message: 'transactions updated succefull',
                body: response,
            })

        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error retrieving index] - [index - GET]: ${error.message}`,
            )
            next(httpError)
        }
    })
}

module.exports = transactionsController