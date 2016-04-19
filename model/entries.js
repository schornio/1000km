'use strict';

const COLLECTION = 'entries';

const mm = require('modern-mongo');

class Entry extends mm.Document {
  constructor (db) {
    super(db, COLLECTION);
  }
}

class Entries extends mm.Collection {
  constructor (db) {
    super (db, Entry, COLLECTION);
  }

  getEntries () {
    return this.findMany();
  }
}

module.exports = Entries;
