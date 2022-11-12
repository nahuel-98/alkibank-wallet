"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Comida",
          description: "Categoria de comidas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Entretenimiento",
          description: "Netflix, Disney + ...",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
