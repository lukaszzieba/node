const fs = require('fs');

let orgianlNote = {
    title: "Some title",
    body: "Some body"
};

let orginalNoteString = JSON.stringify(orgianlNote);
fs.writeFileSync('notes.json', orginalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);