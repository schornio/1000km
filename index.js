'use strict';

const PORT = process.env.PORT || 8080;

const express = require('express');
const Entries = require('./model/entries');

let app = express();

app.set('view engine', 'hbs');

app.use('/static', express.static(`${__dirname}/static`));

app.get('/', (request, response) => {
  let entries = new Entries();

  entries.getEntries()
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
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
