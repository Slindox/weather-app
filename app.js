const request = require('request')
const dotenv = require('dotenv')

// using config.js
const {
  weather_endpoint,
  weather_key,
  geo_endpoint,
  geo_key,
} = require('./config')

const weather_querry = '&query=Berlin&units=m'

const url =
  weather_endpoint + 'current?access_key=' + weather_key + weather_querry

request({ url: url, json: true }, (error, response) => {
  var t = response.body.current.temperature
  var f = response.body.current.feelslike
  var forecast = response.body.current.weather_descriptions[0]
  console.log(
    'It is',
    forecast + '. The current temperature is',
    t,
    'degrees. But it feels like',
    f,
    'degrees.'
  )
})
