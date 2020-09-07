var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');



var app = express()



mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }, function (error) {
    if (error) {
        console.log("not connected to DB", error)
    } else {
        console.log('connected to mongo db')
    }
});

const port = process.env.PORT || 81
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


// app.post('/registration', (req, res) => {
//     var reg = new Register(req.body)
//     reg.save((err, result) => {
//         if (err) {
//             res.json({ message: "something went wrong" })
//         } else {
//             res.json({ message: "data saved succussfully", data: result })
//         }
//     })
// })
require('./routes')(app,express);
// app.get('/', (req, res) => {
//     console.log('am in get function');
//     var origin = req.headers.host
//     res.json({ test: 'hello from aws', origin: origin, hello: "fsdf" });

// })

app.listen(port, (req) => {
    console.log(`am listening up on ${port}`);

})