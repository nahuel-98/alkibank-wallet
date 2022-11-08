const { User } = require("../database/models");
const createHttpError = require("http-errors");

module.exports = async function checkUserId(req, res, next) {
  const id = req.params.id;
  const response = await User.findByPk(id);
  if (response == null) {
    const httpError = createHttpError(
      404,
      `[Error Id user]: ID provided not existing`
    );
    next(httpError);
  }

  next();
};
