const express = require('express')
const mongoose = require('mongoose')
const bluebird = require('bluebird')
const History = require('./models/History.models')
const config = require('config')
const app = express()
const mainRouter = require('./routes/mainRoutes')

const PORT = config.get('port') || process.env.PORT

const startServer = () => {
    try {
        app.listen(PORT)
        console.log(`App started on port ${PORT}`)
    } catch (e) {
        console.log(e)
    }
}
/* const connectDb = () => {
    mongoose.Promise = bluebird
    mongoose.connect('mongodb://localhost/userdb')
    return mongoose.connection
}

connectDb()
    .on('error', console.log)
    .on('disconnected', () => {
        console.log('MongoDB disconnected!')
        connectToDb()
    })
    .once('open', startServer)*/

mongoose.connect('mongodb://localhost/userdb')

mongoose.connection.on('error', (err) => {
    console.error("Database Connection Error: " + err)
    console.error('Админ сервер MongoDB Запусти!')
    process.exit(2);
})

mongoose.connection.on('connected', () => {
    console.info("Succesfully connected to MongoDB Database")
    startServer()
})

app.get('/data', (req, res) => {
    console.log('работаю')
    History.find({}, function (err, docs) {
        if (err) return res.send(err)
        console.log('отправил')
        res.send(docs)
    })
})

app.use('/', mainRouter)