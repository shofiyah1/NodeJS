const yargs = require('yargs')
const notes = require('./lesson11_reading.js')
yargs.version('1.1.0')

// const users = [{
//     name: 'Andrew Mead',
//     age: 27
//    },{
//     name: 'George Hudson',
//     age: 72
//    },{
//     name: 'Clay Klay',
//     age: 45
//    }]
//    const user = users.find((user) => user.name === 'George Hudson')
//    console.log(user) // Will print the second object in the array

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()