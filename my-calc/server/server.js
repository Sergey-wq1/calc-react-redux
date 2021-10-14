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

app.get('/', (req, res) => {
    res.json({
        user: 'Alex'
    })
})

app.post("/", jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    console.log(req.body)
    const expression = req.body.expression,
        result = req.body.result
    const history_ = new History({
        expression: expression,
        result: result
    });

    history_.save(function (err) {
        if (err) return console.log(err);
        res.send(history_);
    });
})