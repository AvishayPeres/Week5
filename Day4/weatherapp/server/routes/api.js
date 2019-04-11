const express = require('express')
const request = require('request')
const router = express.Router()
const City = require('../model/City')

const API_KEY = '192b5268fbc94ca5b5481657191104'


router.get('/city/:cityName', function (req, res) {
    let cityName = req.params.city
    request (`http://api.apixu.com/v1/forecast.json?key=(${API_KEY}&q=${cityName})`)
        let weatherInfo = JSON.parse(response.body)
        let weatherIcon = weatherInfo.current.condition.icon.slice(2)
        let cityInfo = {
            name: weatherInfo.location.name,
            updatedAt: weatherInfo.current.last_updated,
            temperature: weatherInfo.current.temp_c,
            condition: weatherInfo.current.condition.text,
            conditionPic: weatherIcon
        }
    res.send(cityInfo)
})

router.get('/cities', function(req, res) {
    City.find({}, function(err, cities) {
        res.send(cities)
    })
})

router.post('/city', function(req, res) {
    let cityData = req.body

    let newCity = new City({
        name: cityData.name,
        updatedAt: cityData.updatedAt,
        temperature: cityData.temperature,
        condition: cityData.condition,
        conditionPic: cityData.conditionPic
    })

    let save = newCity.save()
    save.then(function(newcity) {
        res.send(`${newcity.name}: saved.`)
    })
})

router.delete('/city/:cityName', function(req, res) {
    let cityName = req.params.cityName
    City.deleteOne({ name: cityName }, function(err, response) {
        res.send(`${cityName}: deleted`)
    })
})

module.exports = router