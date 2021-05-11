const mongoose = require('mongoose')
const schema = mongoose.Schema({
    naam: String,
    plaats: Number,
    date: String
})

module.exports = mongoose.model('shema',schema)