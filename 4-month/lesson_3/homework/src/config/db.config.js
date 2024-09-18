const { config } = require("dotenv");
const { Sequelize } = require('sequelize')

config()

const sequelize = new Sequelize(process.env.DB_URL)

module.exports = sequelize