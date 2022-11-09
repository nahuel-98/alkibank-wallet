'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [
      {
        id: 1,
        name: 'ADMIN',
        description: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
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
