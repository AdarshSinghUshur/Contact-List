var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Contact = require('./api/models/contactListModel'), //created model loading here
  bodyParser = require('body-parser');
  expressValidator = require('express-validator');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ContactListdb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());

var routes = require('./api/routes/contactListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Contact List RESTful API server started on: ' + port);
