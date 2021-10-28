const express = require('express')
const mongoose = require('mongoose')
const bluebird = require('bluebird')
const History = require('./models/History.models')
const config = require('config')
const app = express()
const mainRouter = require('./routes/mainRoutes')

const PORT = config.get('port') || process.env.PORT

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

app.get('/data', (req, res) => {
    History.find({}, function (err, docs) {
        mongoose.disconnect()
        if (err) return res.send(err)
        res.send(docs)
    })
})

app.use('/', mainRouter)