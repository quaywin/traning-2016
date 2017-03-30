var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var dbConfig = require('./config/db.config');

var errorHandler = require('./middlewares/error-handler');

process.env.SECRET_KEY="huycongxe"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Router
app.use(serverConfig.BASE_URL + '/user', require('./routes/user')());
app.use('/', require('./routes/item')());

app.use(errorHandler.errorHandler());

app.listen(serverConfig.PORT);

console.log("Server is listening on port " + serverConfig.PORT)
