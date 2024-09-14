const mongoose = require('mongoose')
const dbConfig = require("./database.config.js");

async function mongoDB() {
    await mongoose.connect(dbConfig.url)
}

module.exports = mongoDB