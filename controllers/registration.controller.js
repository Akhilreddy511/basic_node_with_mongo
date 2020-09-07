var express = require('express');
var router = express.Router();

var Register = require('../model/userScheema');

router.post('/registration', (req, res) => {
    var reg = new Register(req.body)
    reg.save((err, result) => {
        if (err) {
            res.json({ message: "something went wrong" })
        } else {
            res.json({ message: "data saved succussfully", data: result })
        }
    })
})

module.exports = router;
