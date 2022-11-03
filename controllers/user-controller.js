const createHttpError = require("http-errors");
const { User } = require("../database/models");
const { endpointResponse } = require("../helpers/success");
const { catchAsync } = require("../helpers/catchAsync");
const { ErrorObject } = require("../helpers/error");
const { Security } = require("../config/security");
const { response } = require("express");

module.exports = {
  allUsers: catchAsync(async (req, res, next) => {
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
      if (response[0] == null) {
        throw new ErrorObject("ID provided not existing", 404);
      }
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
  createUser: catchAsync(async (req, res, next) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const encryptPassword = await Security.encryptPassword(password);
      const isEmail = await User.findAll({
        where: { email },
      });
      if (isEmail[0] != null) {
        throw new ErrorObject("Email provided already existing", 409);
      }
      const response = await User.create({
        firstName,
        lastName,
        email,
        password: encryptPassword,
      });
      console.log(response);
      endpointResponse({
        res,
        message: "User retrieved successfully",
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving /users] - [user - POST]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
