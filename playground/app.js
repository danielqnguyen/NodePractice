const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('../notes.js');

const argv = yargs.argv
var command = argv._[0];
// yargs allow for easy parsing

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note Created');
    notes.logNote(note)
  } else {
    console.log('Title already exist');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Print ${allNotes.length} note(s).`)
  allNotes.forEach((note) => notes.logNote(note))
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note Found');
    notes.logNote(note)
  } else {
    console.log('note not found')
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('NO')
}