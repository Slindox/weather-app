const request = require('request')
const dotenv = require('dotenv')

// reading from .env file
dotenv.config()
const url = process.env.URL

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.current)
})
