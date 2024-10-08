const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    age: Number,
    phone: String,
    interests: [String]
})

const User = model('User', userSchema)

module.exports = User