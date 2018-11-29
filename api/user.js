var router = require('express').Router();
var user = require("../models/user");

router.get('/', function (req, res) {
    return res.status(200).json({ code: '200', err: "ahjashjkdas jhsa jkda shkjda" });
})

router.get('/get/:id', function (req, res) {

    let id = req.params.id;

    user.findOne({ _id: id }, function (err, data) {
        if (err) {
            return res.status(500).json({ code: '200', err: err });
        } else {
            return res.status(200).json({ code: '500', msg: data });
        }
    })

})

router.post('/create', function (req, res) {

    let user = req.body.user;

    let user_save = new user();

    user_save.name = user.name;
    user_save.lastname = user.lastname;
    user_save.username = user.username;
    user_save.password = user.password;
    user_save.date = new Date();
    user_save.profile = 'U';

    user_save.save(function (err) {
        if (err) {
            return res.status(500).json({ code: '404', err: 'ERROR' });
        } else {
            return res.status(200).json({ code: '500', msg: 'hello!' });
        }
    });

})

module.exports = router;