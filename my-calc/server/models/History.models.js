const mongoose = require('mongoose')
const Schema = mongoose.Schema


const historySchema = new Schema({
    expression: String,
    result: Number
})

module.exports = mongoose.model("History", historySchema)