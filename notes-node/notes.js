console.log('Starting notes,js');

const fs = require('fs');
const _ = require('lodash');

var fetchNodes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (err) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNodes();
    var note = {
        title,
        body
    };

    var duplicateNoted = notes.filter(note => note.title === title);

    if (duplicateNoted.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var removeNote = (title) => {
    var notes = fetchNodes();
    var notesAfterDelete = [];
    if (notes.length) {
        notesAfterDelete =  _.remove(notes, title);
    }
    saveNotes(notes);

    return notes.length !== notesAfterDelete.length;
};

var getAll = () => {
    return fetchNodes();
};

var getNote = (title) => {    
    return _.find(fetchNodes(), note => note.title === title);
};

var logNote = (note) => {
    debugger;

    if (note) {
        console.log("Note added");
        console.log('---');
        console.log(`Note title: ${note.title}`);
        console.log(`Note: ${note.body}`);
    } else {
        console.log(`ERROR: Note already exist`);
    }
}

module.exports = {
    addNote,
    removeNote,
    getAll,
    getNote,
    logNote
};