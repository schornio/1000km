'use strict';

const PORT = process.env.PORT || 8080;

const express = require('express');
const Entry = require('./controller/entry');

let app = express();

app.set('view engine', 'hbs');

app.use('/static', express.static(`${__dirname}/static`));

let entryInstance = new Entry(app);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
