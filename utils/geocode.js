const request = require('request')
const { geo_endpoint, geo_key } = require('./config')
const geo_parameters = 'limit=1&'

const geocode = (address, callback) => {
  const geo_url =
    geo_endpoint +
    encodeURIComponent(address) +
    '.json?' +
    geo_parameters +
    'access_token=' +
    geo_key
  request({ url: geo_url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to Geo services.', undefined)
    } else if (response.body.error) {
      callback('Unable to find location.', undefined)
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      })
    }
  })
}

module.exports = geocode
