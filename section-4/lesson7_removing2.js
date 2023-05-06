const yargs = require('yargs')
const notes = require('./lesson7_removing.js')
const chalk = require('chalk')
yargs.version('1.1.0')

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
}
)
console.log(yargs.argv)