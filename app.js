var express = require("express");
var routes = require("./routes");
var app = express();
app.use(express.logger());


// Routing

app.get('/', routes.index);
app.get('/danghoa1', routes.danghoa1);


// Listening to port

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});