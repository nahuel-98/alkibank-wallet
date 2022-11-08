const createHttpError = require("http-errors");
const { User } = require("../database/models");
const { endpointResponse } = require("../helpers/success");
const { catchAsync } = require("../helpers/catchAsync");
const { ErrorObject } = require("../helpers/error");
const { Security } = require("../config/security");
const { response } = require("express");
const createUrlPreviousAndNext = require("../utils/create-url-previous-next");

module.exports = {
  allUsers: catchAsync(async (req, res, next) => {
    try {
      const limit = 10;
      const page = Number(req.query.page) || 0;
      let [response, countPages] = await Promise.all([
        User.findAll({
          attributes: ["firstname", "lastname", "email", "createdAt"],
          limit,
          offset: page * limit,
        }),

        User.count(),
      ]);

      const options = createUrlPreviousAndNext(limit, countPages, page, req);

      endpointResponse({
        res,
        message: "User retrieved successfully",
        body: response,
        options: options,
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
      const response = await User.create({
        firstName,
        lastName,
        email,
        password: encryptPassword,
      });
      endpointResponse({
        res,
        message: "User created",
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

  editUser: catchAsync(async (req, res, next) => {
    try {
      const { firstName, lastName, email } = req.body;
      const id = req.params.id;
      const userFind = await User.findAll({
        where: { id: id },
      });
      if (userFind[0] == null) {
        throw new ErrorObject("ID provided not existing", 404);
      }
      await User.update(
        { firstName, lastName, email },
        {
          where: { id: id },
        }
      );
      const response = await User.findAll({
        where: { id: id },
        attributes: ["firstName", "lastName", "email"],
      });
      endpointResponse({
        res,
        message: "User edited",
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving /users] - [user - PUT]: ${error.message}`
      );
      next(httpError);
    }
  }),
  deleteUser: catchAsync(async (req, res, next) => {
    try {
      const id = req.params.id;
      const response = await User.findAll({
        where: { id: id },
      });
      if (response[0] == null) {
        throw new ErrorObject("ID provided not existing", 404);
      }
      await User.destroy({
        where: { id: id },
      });
      endpointResponse({
        res,
        message: "User eliminated",
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving /users/id] - [user - DELETED]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
