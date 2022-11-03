const createHttpError = require("http-errors");
const { User } = require("../database/models");
const { endpointResponse } = require("../helpers/success");
const { catchAsync } = require("../helpers/catchAsync");

module.exports = {
  allUser: catchAsync(async (req, res, next) => {
    try {
      const response = await User.findAll({
        attributes: ["firstname", "lastname", "email", "createdAt"],
      });
      endpointResponse({
        res,
        message: "User retrieved successfully",
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving /users] - [user - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
  idUser: catchAsync(async (req, res, next) => {
    try {
      const id = req.params.id;
      const response = await User.findAll({
        where: { id: id },
      });
      endpointResponse({
        res,
        message: "User retrieved successfully",
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving /users/id] - [user - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
