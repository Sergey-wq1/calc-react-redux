const express = require('express')
const jsonParser = express.json()
const mongoose = require('mongoose')
const router = express.Router()
const History = require('./../models/History.models')

router.post("/", jsonParser, function (req, res) {
    try {
        if (!req.body) return res.sendStatus(400)
        const {expression,result} = req.body
        console.log('добавляю >>' + result + expression)
        const history_ = new History({
            expression: expression,
            result: result
        })

        history_.save(function (err) {
            if (err) return console.log(err)
            res.send(history_)
        })
    } catch (e) {
        res.send($ `ошибка ${e}`)
    }
})

router.delete('/', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    const {expression,result} = req.body
    console.log('удаляю >>' + result + expression)
    History.deleteOne({
        expression,
        result
    }, function (err, result) {
        if (err) return res.send('Обрабатываю запрос...')
    })
})

module.exports = router