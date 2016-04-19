'use strict';

const Entries = require('../model/entries');

class Entry {
  constructor(app, db) {
    this.entries = new Entries(db);
    app.get('/', this.index.bind(this));
  }

  index (request, response) {
    this.entries.getEntries()
      .then((entries) => {
        let sum = 0;

        for (let entry of entries) {
          sum += entry.distance;
        }

        response.render('index.hbs', {
          entries: entries,
          entriesSum: sum,
          entriesPercent: sum / 10, // divided by 1000 multiplied by 100
        });
      });
  }
}

module.exports = Entry;
