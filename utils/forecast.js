const request = require('request')
const { weather_endpoint, weather_key } = require('./config')

const forecast = (lat, lon, callback) => {
  const weather_url =
    weather_endpoint +
    'current?access_key=' +
    weather_key +
    '&query=' +
    encodeURIComponent(lat) +
    ',' +
    encodeURIComponent(lon) +
    '&units=m'
  request({ url: weather_url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather services.', undefined)
    } else if (response.body.error) {
      callback('Unable to find weather.', undefined)
    } else {
      callback(undefined, {
        temperature: response.body.current.temperature,
      })
    }
  })
}

module.exports = forecast
