var router = require('express').Router();
var login = require('./login');

router.use('/login', login);

module.exports = router;