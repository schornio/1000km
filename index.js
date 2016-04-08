'use strict';

const PORT = process.env.PORT || 8080;

const express = require('express');

let app = express();

app.set('view engine', 'hbs');

app.use('/static', express.static(`${__dirname}/static`));

app.get('/', (request, response) => {
  response.render('index.hbs', {});
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
