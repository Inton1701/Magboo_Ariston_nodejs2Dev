const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const routes = require('./routes/router');
const path = require('path');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000);