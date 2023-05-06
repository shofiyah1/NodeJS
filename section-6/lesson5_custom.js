const request = require('request')
const url ='http://api.weatherstack.com/current?access_key=afbff729322e7a2a27c12da6767a4d66&query=41.203323,-77.194527'

request({ url: url, json: true}, (error, response) => {
    // console.log(response.body.current)
    console.log('It is currently ' + response.body.currentConditions.temp + ' degrees out. There is a ' + response.body.currentConditions.precip + '% chance of rain.')
})