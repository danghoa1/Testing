var fs = require('fs');

var htmlFile = "./views/index.html";
var buffer = fs.readFileSync(htmlFile);

exports.home = function(req, res){
  res.send(buffer.toString());
};