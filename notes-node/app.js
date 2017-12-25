console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('Comand:', command);
console.log('Yargs argv:', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    notes.logNote(note);
} else if (command === 'remove') {
    var wasDeleted = notes.removeNote(argv.title);
    var message = wasDeleted ? 'Note removed' : 'Note does not exist';
    console.log(message);
} else if (command === 'list') {
    console.log(notes.getAll());
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    notes.logNote(note);
} else {
    console.log('No command!');
}