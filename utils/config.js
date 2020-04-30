const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  weather_endpoint: process.env.WEATHER_ENDPOINT,
  weather_key: process.env.WEATHER_API_KEY,
  geo_endpoint: process.env.GEO_ENDPOINT,
  geo_key: process.env.GEO_PUB_TOKEN,
}
