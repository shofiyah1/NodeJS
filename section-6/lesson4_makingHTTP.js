const request = require('request')
const url ='http://api.weatherstack.com/current?access_key=afbff729322e7a2a27c12da6767a4d66&query=41.203323,-77.194527'

request({ url: url }, (error, response) => {
 console.log(response)
 const data = JSON.parse(response.body)
 console.log(data)
})