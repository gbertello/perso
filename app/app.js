var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public'));

app.get('/CV/', function(req, res){
  var cv = require("./cv.js");
  res.render('cv', cv);
});

app.listen(80);