var express = require('express');
var router = express.Router();

var Movie = require('../model/moviesSchema');

router.post('/addMovie', (req, res) => {
    var reg = new Movie(req.body)
    reg.save((err, result) => {
        if (err) {
            res.json({ message: "something went wrong" })
        } else {
            res.json({ message: "data saved succussfully", data: result })
        }
    })
})

module.exports = router;
