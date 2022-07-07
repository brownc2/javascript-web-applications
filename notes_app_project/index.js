const NotesModel = require("./notesmodel");
const NotesView = require("./notesview");

const model = new NotesModel();
model.addNote('This is an example note');


const view = new NotesView(model);

view.displayNotes();

