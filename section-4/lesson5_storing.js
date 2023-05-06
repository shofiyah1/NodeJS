const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
//    }
// // Covert JavaScript object into JSON string
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// // Covert JSON string into object
// const bookObject = JSON.parse(bookJSON)
// console.log(bookObject.title) // Print: Ego is the Enemy

// fs.writeFileSync('lesson5_storing.json', bookJSON)

const dataBuffer = fs.readFileSync('lesson5_storing.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Gunther'
user.planet = 'Earth'
user.age = 54

const userJSON = JSON.stringify(user)
fs.writeFileSync('lesson5_storing.json', userJSON)