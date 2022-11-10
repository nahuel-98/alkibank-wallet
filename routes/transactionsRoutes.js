const express = require("express");
const { validate, auth, ownershipTransaction } = require("../middlewares");
const { transactionSchema } = require("../schemas");
const router = express.Router()
const transactionsController = require("./../controllers/transactionsController")

//list
/**
 *
 * @swagger
 * components:
 *  schemas:
 *    Transactions:
 *      type: object
 *      properties:
 *        amount:
 *          type: number
 *        description:
 *          type: string
 *        userId:
 *          type: number       
 *        categoryId:
 *          type: number 
 *        date:
 *          type: string
 *          format: date-time       
 *      required:
 *        - amount
 *        - description
 *        - userId
 *        - categoryId
 *        - date
 *      example:
 *        amount: 500
 *        description: depósito
 *        userId: 5
 *        categoryId: 10
 *        date: 2022-09-25
 */

/**
 * @swagger
 * /Transactions:
 *  get:
 *    summary: All Transactions
 *    tags: [Transactions]
 *    parameters:
 *      - in: header
 *        name: x-access-token
 *        schema:
 *          type: string
 *        required: true
 *        description: Access Token
 *    responses:
 *      200:
 *        description: All Transactions.
 *        content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Transactions'
 *      400:
 *        description: invalid token.
 *      403:
 *        description: the record does not belong to you or User not logged in.
 *
 */
router.get("/", transactionsController.transactionList);

//detail
/**
 * @swagger
 * /Transactions/{id}:
 *  get:
 *    summary: Transactions by id
 *    tags: [Transactions]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *          required: true
 *          description: Category Id
 *      - in: header
 *        name: x-access-token
 *        schema:
 *          type: string
 *        required: true
 *        description: Access Token
 *    responses:
 *      200:
 *        description: Transactions.
 *        content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Transactions'
 *      400:
 *        description: invalid token.
 *      401:
 *        description: invalid id.
 *      403:
 *        description: the record does not belong to you or User not logged in.
 *      404:
 *        description: Transaction not found
 *
 */
router.get("/:id", [auth(), ownershipTransaction()], transactionsController.transactionDetail);
/**
 * @swagger
 * /Transactions:
 *  post:
 *    summary: Create Transaction
 *    tags: [Transactions]
 *    parameters:
 *      - in: header
 *        name: x-access-token
 *        schema:
 *          type: string
 *        required: true
 *        description: Access Token
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: "#/components/schemas/Transactions"
 *    responses:
 *      200:
 *        description: Transaction created.
 *      400:
 *        description: invalid token.
 *      403:
 *        description: the record does not belong to you or User not logged in.
 *
 */
//create
router.post("/",
    validate(transactionSchema),
    transactionsController.transactionCreate);

//delete
/**
 * @swagger
 * /Transaction/{id}:
 *  delete:
 *    summary: Delete Transaction
 *    tags: [Transactions]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *          required: true
 *          description: Transaction Id
 *      - in: header
 *        name: x-access-token
 *        schema:
 *          type: string
 *        required: true
 *        description: Access Token
 *    responses:
 *      200:
 *        description: Transaction eliminated.
 *      400:
 *        description: invalid token.
 *      403:
 *        description: the record does not belong to you or User not logged in.
 *      404:
 *        description: Transaction not found
 *
 */

router.delete("/:id", transactionsController.transactionDelete);
/**
 * @swagger
 * /Transactions/{id}:
 *  patch:
 *    summary: Edit Category
 *    tags: [Transactions]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *          required: true
 *          description: Transaction Id
 *      - in: header
 *        name: x-access-token
 *        schema:
 *          type: string
 *        required: true
 *        description: Access Token
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              amount:
 *                  type: number
 *              description:
 *                  type: string
 *              userId:
 *                  type: number       
 *              categoryId:
 *                  type: number 
 *              date:
 *                  type: string
 *                  format: date-time
 *    responses:
 *      200:
 *        description: Transaction edited.
 *      400:
 *        description: invalid token.
 *      403:
 *        description: the record does not belong to you or User not logged in.
 *      404:
 *        description: Transaction not found
 *
 */
//update
router.put("/:id", transactionsController.transactionUpdate);


module.exports = router;