'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'ADMIN',
        description: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'USER',
        description: 'Usuario',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
