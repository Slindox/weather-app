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
const geo_search = 'Bodega%20Bay'
const geo_parameters = 'limit=1&'
const geo_url = `${geo_endpoint}${geo_search}.json?${geo_parameters}access_token=${geo_key}`
request({ url: geo_url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to Geo services.')
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location. Try another search')
  } else {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log('Latitude:  ' + latitude)
    console.log('Longitude: ' + longitude)
  }
})

// request({ url: weather_url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service')
//   } else if (response.body.error) {
//     console.log('Unable to find location')
//   } else {
//     console.log(
//       'It is',
//       response.body.current.weather_descriptions[0] +
//         '. The current temperature is',
//       response.body.current.temperature,
//       'degrees. But it feels like',
//       response.body.current.feelslike,
//       'degrees.'
//     )
//   }
// })
