const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: String, required: true},
    date: {type: Date, default: Date.now},
    launch: {type: Boolean, default: false},
    photos: [String]
})

module.exports = mongoose.model('Products', productSchema)