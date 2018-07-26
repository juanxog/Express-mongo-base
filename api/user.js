var router = require('express').Router();
var item = require("../models/item");

router.get('/' ,function (req, res) {
        
    item.findOne({ _id: "5b5a36b1daed0c673ce84533" }).populate('options').exec(function(err,data){
        console.log(data);
        res.send(data);
    })
    
})

module.exports = router;