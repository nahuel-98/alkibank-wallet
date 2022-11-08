'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Categories', [{
        name: "Ingresos",
        description: "Income",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      name: "Egresos",
      description: "Outcome",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {

    });
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
