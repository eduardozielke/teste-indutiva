const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    category: String
})

module.exports = mongoose.model('categories', categorySchema)