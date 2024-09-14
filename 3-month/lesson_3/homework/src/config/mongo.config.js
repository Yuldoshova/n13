const { default: mongoose } = require("mongoose");
const dbConfig = require("./db.config");

async function mongoDb() {
    await mongoose.connect(dbConfig.url)
}

module.exports = mongoDb