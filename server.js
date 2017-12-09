var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/nodejsModel'),
    bodyParser = require('body-parser');

// mongoose instance
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/nodeREST');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/nodejsRoutes'); // import route
routes(app); // register route

app.listen(port);

console.log('nodejs RESTful API started on port: ' + port);