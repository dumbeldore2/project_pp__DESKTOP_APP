const mongoose = require('mongoose')
const schema = mongoose.Schema({
    _id: Number,
    account: String,
    date: String,
    object: String,
    email: String,
    password: String
})

module.exports = mongoose.model('shema',schema)
