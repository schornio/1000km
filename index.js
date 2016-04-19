'use strict';

const PORT = process.env.PORT || 8080;
const DB = process.env.DB || 'mongodb://localhost/test';

const express = require('express');
const mm = require('modern-mongo');
const Entry = require('./controller/entry');

let app = express();

app.set('view engine', 'hbs');

app.use('/static', express.static(`${__dirname}/static`));

mm.connect(DB).then((db)=>{
  let entryInstance = new Entry(app, db);

  app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
})
.catch(console.log);
