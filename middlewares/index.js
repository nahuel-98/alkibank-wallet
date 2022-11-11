const validate = require('./validator')
const auth = require('./auth')
const ownership = require('./ownership')
const ownershipTransaction = require('./ownershipTransaction')

module.exports = {
  validate,
  auth,
  ownership,
  ownershipTransaction,
}