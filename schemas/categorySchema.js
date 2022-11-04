const { body } = require('express-validator');

const categorySchema = [
    body('name', 'The name field is required').notEmpty(),
];

module.exports = categorySchema