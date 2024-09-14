const { config } = require("dotenv");

config()

const dbConfig = {
    url: process.env.MONGO_URL + process.env.DB_NAME
}

module.exports = dbConfig