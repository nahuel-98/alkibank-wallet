const express = require("express");
const { validate } = require("../middlewares");
const { categorySchema } = require("../schemas");
const {
  allCategories,
  getCategory,
  postCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller");

const router = express.Router();

/**
 *
 * @swagger
 * components:
 *  schemas:
 *    Category:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        description:
 *          type: string
 *        createdAt:
 *          type: string
 *          format: date-time
 *        updatedAt:
 *          type: string
 *          format: date-time
 *      required:
 *        - name
 *        - createdAt
 *        - updatedAt
 *      example:
 *        name: ingresos
 *        description: depósito
 *        createdAt: 2022-09-25
 *        updatedAt: 2022-10-25
 *
 */

/**
 * @swagger
 * /category:
 *  get:
 *    summary: All Categories
 *    tags: [Category]
 *    parameters:
 *      - in: header
 *        name: x-access-token
 *        schema:
 *          type: string
 *        required: true
 *        description: Access Token
 *    responses:
 *      200:
 *        description: All categories.
 *        content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Category'
 *      400:
 *        description: invalid token.
 *      403:
 *        description: the record does not belong to you or User not logged in.
 *
 */
router.get("", allCategories);
/**
 * @swagger
 * /category/{id}:
 *  get:
 *    summary: Category by id
 *    tags: [Category]
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
 *        description: Category.
 *        content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Category'
 *      400:
 *        description: invalid token.
 *      401:
 *        description: invalid id.
 *      403:
 *        description: the record does not belong to you or User not logged in.
 *      404:
 *        description: category not found
 *
 */
router.get("/:id", getCategory);
/**
 * @swagger
 * /category:
 *  post:
 *    summary: Create Category
 *    tags: [Category]
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
 *            $ref: "#/components/schemas/Category"
 *    responses:
 *      200:
 *        description: Category created.
 *      400:
 *        description: invalid token.
 *      403:
 *        description: the record does not belong to you or User not logged in.
 *
 */
router.post("/", validate(categorySchema), postCategory);
/**
 * @swagger
 * /category/{id}:
 *  patch:
 *    summary: Edit Category
 *    tags: [Category]
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
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              description:
 *                type: string
 *    responses:
 *      200:
 *        description: Category edited.
 *      400:
 *        description: invalid token.
 *      403:
 *        description: the record does not belong to you or User not logged in.
 *      404:
 *        description: category not found
 *
 */
router.patch("/:id", validate(categorySchema), updateCategory);
/**
 * @swagger
 * /category/{id}:
 *  delete:
 *    summary: Delete Category
 *    tags: [Category]
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
 *        description: Category eliminated.
 *      400:
 *        description: invalid token.
 *      403:
 *        description: the record does not belong to you or User not logged in.
 *      404:
 *        description: category not found
 *
 */

router.delete("/:id", deleteCategory);

module.exports = router;
