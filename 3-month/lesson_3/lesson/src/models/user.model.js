const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    first_name: {
        type: String,
        minLenght: [5, "first name uchun min uzunlik 5 ga teng!"],
        required: [true, "first name berilishi shart!"],
        maxLenght: 100,
        trim: true
    },
    last_name: String,
    age: {
        type: Number,
        min: 1,
        max: 3
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female'],
            message: "Gender must be female or male!"
        }
    },
    status: {
        type: String,
        enum: ['active', 'inactive']
    },
    phone: {
        type: String,
        minLenght: 13,
        maxLenght: 13,
        default: "no number"
    },
    birthDate: Date,
    interests: {
        type: [String],
        requires: true
    }
})

const User = model('User', userSchema)

module.exports = User