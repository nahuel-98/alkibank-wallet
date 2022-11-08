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
      const response = await User.findByPk(req.params.id);
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
