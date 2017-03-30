var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var dbConfig = require('./config/db.config');
var serverConfig = require('./config/server.config');

app.use(bodyParser.json());

app.listen(serverConfig.PORT);
console.log("Server connecting port " + serverConfig.PORT);