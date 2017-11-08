const
  Sequelize = require('sequelize'),
  name = require('../../package.json').name,
  connection = process.env.DATABASE_URL || `postgres://localhost:5432/${name}`,
  conn = new Sequelize(connection, {
    operatorsAliases: false,
    logging: false,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
      acquire: 10000
    }})

console.log(`Opening database connection to ${connection}`)

module.exports = conn
