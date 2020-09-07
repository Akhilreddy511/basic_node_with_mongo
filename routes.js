// var registrationController = require('./controllers/registration.controller')
module.exports =function(app,express){
app.use('/users',require('./controllers/registration.controller'))
app.use('/movies',require('./controllers/movies.controller'))
}