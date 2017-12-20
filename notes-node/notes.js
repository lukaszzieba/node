console.log('Starting notes,js');

var addNote = (title, body) => {
    console.log('Add note', title, body);
};

var removeNote = (title) => {
    console.log('Remove note', title);
};

var getAll = () => {
    console.log('Get all');
};

var getNote = (title) => {
    console.log('Get note', title);
};

module.exports = {
    addNote, 
    removeNote,
    getAll,
    getNote
};