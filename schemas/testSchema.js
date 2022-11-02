const { body } = require('express-validator');

const testSchema = [
    body('name', 'The name field is required').notEmpty(),
];

module.exports = testSchema