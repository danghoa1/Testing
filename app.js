var express = require("express");
var routes = require("./routes");
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routing

app.get('/', routes.index);
app.get('/danghoa1', routes.danghoa1);


// Listening to port

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});