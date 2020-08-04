var express = require('express');
    var bodyParser = require('body-parser')
var mongoose= require('mongoose');
var Register = require('./model/userScheema')
var app = express()
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect('mongodb://localhost:27017/basicApp', {useNewUrlParser: true}).catch((err)=>{
//     console.log('not connected to mongoose')
// });

app.post('/',(req,res)=>{
    console.log(req.body);
    Register.create(req.body).then((result)=>{
        // console.log("result====>",result);
        res.json({status:true,data:result});
    })
  
})

app.get('/',(req,res)=>{
    res.send('hello heroku');
})

app.listen('4200',()=>{
    console.log('am listening up on 4200');
})