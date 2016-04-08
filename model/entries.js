'use strict';

class Entries {
  constructor () {

  }

  getEntries () {
    return Promise.resolve([
      { distance: 32, date: new Date(2016, 3, 3) },
      { distance: 10, date: new Date(2016, 3, 4) },
      { distance: 10, date: new Date(2016, 3, 8) }
    ]);
  }
}

module.exports = Entries;
