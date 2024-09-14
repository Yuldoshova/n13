const mongoose = require('mongoose')

const mealSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    ownerId: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
}, {
    collection: "meals",
    timestamps: true
})

const Meal = mongoose.model('Meal', mealSchema)

module.exports = Meal