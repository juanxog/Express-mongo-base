var express = require('express')
var app = express();
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/xplor", { useNewUrlParser: true });

app.use('/api',require('./api'));

app.listen(3000);