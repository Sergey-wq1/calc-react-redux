const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const jsonParser = express.json()
const bluebird = require('bluebird')

const app = express()

const PORT = 3001 || process.env.PORT


const historySchema = new Schema({
    expression: String,
    result: Number
})

const History = mongoose.model("History", historySchema);

const startServer = () => {
    app.listen(PORT)
    console.log(`App started on port ${PORT}`)
}
const connectDb = () => {
    mongoose.Promise = bluebird
    mongoose.connect('mongodb://localhost/userdb')
    return mongoose.connection
}

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)

app.get('/his', (req, res) => {
    History.find({}, function (err, docs) {
        mongoose.disconnect()
        if (err) return res.send(err)
        res.send(docs)
    })
})

app.post("/", jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    const expression = req.body.expression,
        result = req.body.result
    console.log('добавляю >>' + result + expression)
    const history_ = new History({
        expression: expression,
        result: result
    })

    history_.save(function (err) {
        if (err) return console.log(err)
        res.send(history_)
    })
})

app.delete('/', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    const expression = req.body.expression,
        result = req.body.result
    console.log('удаляю >>' + result + expression)
    History.deleteOne({
        expression,
        result
    }, function (err, result) {
        mongoose.disconnect()
        if (err) return res.send('Обрабатываю запрос...')
    })
})