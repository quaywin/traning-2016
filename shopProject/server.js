var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var dbConfig = require('./config/db.config');
var serverConfig = require('./config/server.config');

var errorHandler = require('./middlewares/error-handler');

process.env.SECRET_KEY = "huycongxe"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Router
// app.use(serverConfig.BASE_URL + '/user', require('./routes/user')());
app.use('/item', require('./routes/item')());
app.use(serverConfig.BASE_URL + '/user', require('./routes/user')());
<<<<<<< HEAD
app.use('/', require('./routes/item')());
app.use('/', require('./routes/order')());
app.use('/', require('./routes/detail')());
=======

>>>>>>> 7aa87e8e834c18529ea88bb7003af6a318ec63f0
app.use(errorHandler.errorHandler());

app.listen(serverConfig.PORT);

console.log("Server is listening on port " + serverConfig.PORT)
