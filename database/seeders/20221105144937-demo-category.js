'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    

     await queryInterface.bulkInsert('Categories', [{
        name: 'Gastos',
        description: "Gastos realizados en mayo"
      },
      {
        name: 'Egresos',
        description: "Gastos realizados en mayo"
      },
      {
        name: 'Ingresos',
        description: "Gastos realizados en mayo"
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('People', null, {});
     
  }
};
