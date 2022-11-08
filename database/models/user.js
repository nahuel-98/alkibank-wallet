'use strict';
const {
  Model
} = require('sequelize');
const { JWT } = require('../../config/jwt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Role)
    }
    generateAuthToken() {
      return JWT.encode({ id: this.id }, process.env.SECRET_WORD);
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING, 
    roleId: DataTypes.INTEGER,
    deletedAt: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: true,
    modelName: 'User',
  });
  return User;
};
