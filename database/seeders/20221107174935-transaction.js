"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    [
      {
        description: "compra almacen",
        amount: 250.5,
        userId: 1,
        categoryId: 2,
        date: new Date(),
      },
      {
        description: "compra kiosco",
        amount: 25.1,
        userId: 2,
        categoryId: 2,
        date: new Date(),
      },
      {
        description: "compra almacen",
        amount: 100.5,
        userId: 3,
        categoryId: 2,
        date: new Date(),
      },
      {
        description: "depósito banco",
        amount: 1000,
        userId: 4,
        categoryId: 2,
        date: new Date(),
      },
      {
        description: "depósito cajero",
        amount: 3000,
        userId: 5,
        categoryId: 2,
        date: new Date(),
      },
      {
        description: "compra supermercado",
        amount: 2500,
        userId: 6,
        categoryId: 1,
        date: new Date(),
      },
      {
        description: "compra online",
        amount: 290,
        userId: 7,
        categoryId: 1,
        date: new Date(),
      },
      {
        description: "depósito banco",
        amount: 3000,
        userId: 8,
        categoryId: 2,
        date: new Date(),
      },
      {
        description: "compra almacen",
        amount: 150.9,
        userId: 9,
        categoryId: 1,
        date: new Date(),
      },
      {
        description: "depósito banco",
        amount: 3900,
        userId: 10,
        categoryId: 2,
        date: new Date(),
      },
      {
        description: "depósito cajero",
        amount: 2000,
        userId: 9,
        categoryId: 2,
        date: new Date(),
      },
      {
        description: "depósito banco",
        amount: 1900,
        userId: 5,
        categoryId: 2,
        date: new Date(),
      },
      {
        description: "depósito cajero",
        amount: 5900,
        userId: 2,
        categoryId: 2,
        date: new Date(),
      },
    ];
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Transactions", null, {});
  },
};
