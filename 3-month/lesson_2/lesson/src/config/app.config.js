const { config } = require('dotenv')

config()

const appConfig = {
    port: parseInt(process.env.APP_PORT) || 5001,
    host: process.env.APP_HOST
}

module.exports = appConfig
