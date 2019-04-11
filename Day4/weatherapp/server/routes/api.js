const express = require('express')
const request = require('request')
const router = express.Router()
const City = require('../model/City')

const API_KEY = '192b5268fbc94ca5b5481657191104'


router.get('/city/:cityName', function (req, res) {
    let city = req.params.city
    request (`http://api.apixu.com/v1/forecast.json?key=(${API_KEY}&q=${city})`)
        res.send(response)
})

router.get('/cities', function (req, res) {

})

router.post('/city', function (req, res) {

})

router.delete('/city', function (req, res) {

})

module.exports = router