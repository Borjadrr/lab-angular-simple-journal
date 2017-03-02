/*jshint esversion: 6*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalEntrySchema = new Schema({
  date: {type: Date, default:""},
  title: {type: String, default: "title"},
  content: {type: String, default: "content"}
});

journalEntrySchema.set('timestamps', true);

const journalEntry = mongoose.model('journalEntry', journalEntrySchema);

module.exports = journalEntry;
