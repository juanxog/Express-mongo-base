var router = require('express').Router();
var user = require("../models/user");

router.post('/', function (req, res) {

    let username = req.body.username;
    let password = req.body.password;
    
    user.findOne({ username: username }, function (err, data) {
        if (err) {
            return res.status(500).json({ success: false, message: 'no found' });
        } else {
            if (data && data.password == password) {
                return res.status(200).json({ success: false, data: data });
            } else {
                return res.status(500).json({ success: false, message: 'Usuario o contraseña invalida' });
            }
        }
    })


})

module.exports = router;