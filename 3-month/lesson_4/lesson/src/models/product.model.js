const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must be title"],
        trim: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: {
            values: ['active', 'inactive'],
            message: "Status type only active or inactive",
            default: 'active'
        }
    },
    color: {
        type: String
    },
    brand: {
        type: String
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, {
    collection: "products"
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product