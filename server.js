var express = require('express')
var app = express();
var mongoose = require('mongoose');
var api = require('./api');
var public = require('./public');
var config = require('./config');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/aidu", { useNewUrlParser: true });

app.set('superSecret', config.secret);

var verify_token = function (req, res) {

    var token = req.headers['x-access-token'];
    // decode token
    if (token) {
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.status(500).json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                req.decoded = decoded;
                next();
            }
        });

    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
}

app.use('/api', verify_token, api);
app.use('/', public);

app.listen(3000);