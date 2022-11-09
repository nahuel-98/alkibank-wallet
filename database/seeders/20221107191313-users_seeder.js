'use strict';

const { Security } = require("../../config/security");


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hash_password = await Security.encryptPassword('password');
    const date = new Date();
    const admin_role_id = 1;
    const user_role_id = 2;

    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        firstName: 'Mohammed',
        lastName: 'Haag',
        email: 'reinhold83@example.com',
        password: hash_password,
        roleId: admin_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 2,
        firstName: 'Gregoria',
        lastName: 'Durgan',
        email: 'jace.kuvalis@example.net',
        password: hash_password,
        roleId: admin_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 3,
        firstName: 'Frieda',
        lastName: 'Langosh',
        email: 'tiana01@example.net',
        password: hash_password,
        roleId: admin_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 4,
        firstName: 'Houston',
        lastName: 'Bartoletti',
        email: 'fkuhic@example.net',
        password: hash_password,
        roleId: admin_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 5,
        firstName: 'Brett',
        lastName: 'Christiansen',
        email: 'wdamore@example.org',
        password: hash_password,
        roleId: admin_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 6,
        firstName: 'Rebekah',
        lastName: 'Cormier',
        email: 'bryana.schmidt@example.org',
        password: hash_password,
        roleId: admin_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 7,
        firstName: 'Amir',
        lastName: 'Ritchie',
        email: 'hettinger.sasha@example.net',
        password: hash_password,
        roleId: admin_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 8,
        firstName: 'Weldon',
        lastName: 'Aufderhar',
        email: 'elwyn.brakus@example.org',
        password: hash_password,
        roleId: admin_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 9,
        firstName: 'Herminia',
        lastName: 'Zemlak',
        email: 'emery.swaniawski@example.com',
        password: hash_password,
        roleId: admin_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 10,
        firstName: 'Antonietta',
        lastName: 'Abbott',
        email: 'swift.claud@example.net',
        password: hash_password,
        roleId: admin_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 11,
        firstName: 'Arlo',
        lastName: 'Wunsch',
        email: 'alison.halvorson@example.org',
        password: hash_password,
        roleId: user_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 12,
        firstName: 'Judy',
        lastName: 'Bauch',
        email: 'xabshire@example.com',
        password: hash_password,
        roleId: user_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 13,
        firstName: 'Adolph',
        lastName: 'Shields',
        email: 'tyrese.torphy@example.org',
        password: hash_password,
        roleId: user_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 14,
        firstName: 'Audreanne',
        lastName: 'Treutel',
        email: 'casimer87@example.org',
        password: hash_password,
        roleId: user_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 15,
        firstName: 'Florine',
        lastName: 'Heller',
        email: 'antwon.kunze@example.org',
        password: hash_password,
        roleId: user_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 16,
        firstName: 'Dariana',
        lastName: 'Waters',
        email: 'volkman.karli@example.com',
        password: hash_password,
        roleId: user_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 17,
        firstName: 'Juliana',
        lastName: 'Stiedemann',
        email: 'rjohnston@example.net',
        password: hash_password,
        roleId: user_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 18,
        firstName: 'Neva',
        lastName: 'Langworth',
        email: 'rudolph76@example.org',
        password: hash_password,
        roleId: user_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 19,
        firstName: 'Eli',
        lastName: 'Bauch',
        email: 'payton.beatty@example.net',
        password: hash_password,
        roleId: user_role_id,
        createdAt: date,
        updatedAt: date
      },
      {
        id: 20,
        firstName: 'Kristy',
        lastName: 'Dickens',
        email: 'berge.lesley@example.net',
        password: hash_password,
        roleId: user_role_id,
        createdAt: date,
        updatedAt: date
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
