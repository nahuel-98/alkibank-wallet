
// const models = require("../database/models/index")
// const errors = require("../const/errors")
const createHttpError = require("http-errors");
const { Category } = require("../database/models");
const { endpointResponse } = require("../helpers/success");
const { catchAsync } = require("../helpers/catchAsync");
const { ErrorObject } = require("../helpers/error");

module.exports = {
    allCategories: catchAsync(async (req, res, next) => {
          try {
            const categories = await Category.findAll();
            endpointResponse({
              res,
              message: "Category retrieved successfully",
              body: categories,
            });
          } catch (error) {
            const httpError = createHttpError(
              error.statusCode,
              `[Error retrieving Category] - [Category - GET]: ${error.message}`
            );
            next(httpError);
          }
        }),


}