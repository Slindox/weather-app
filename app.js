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
const weather_url = `${weather_endpoint}current?access_key=${weather_key}${weather_querry}`
const geo_querry = '-122.463%2C%2037.7648.json'
const geo_url = `${geo_endpoint}${geo_querry}?access_token=${geo_key}`

request({ url: geo_url, json: true }, (error, response) => {
  console.log(response)
})

request({ url: weather_url, json: true }, (error, response) => {
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
