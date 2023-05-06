const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./lesson10_listing.js')

// Customize yargs version
yargs.version('1.1.0')

// Customize yargs version
yargs.version('1.1.0')
// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})
yargs.parse()