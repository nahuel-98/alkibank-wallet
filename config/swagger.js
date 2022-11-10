require('dotenv').config()
const port = process.env.PORT || 3000
const path = require('path')

const swaggerSpec = {
    definition: {
      openapi: "3.0.0",
      info: { title: "Alkybank Wallet API", version: "1.0.0" },
    servers: [
      {
        url: `http://localhost:${port}`
      }
    ]
  },
    apis: [`${path.join(__dirname, "../routes/*.js")}`]
  }

module.exports = { swaggerSpec };