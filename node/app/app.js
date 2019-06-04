var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('./public'));

app.get('/CV/', function(req, res){
  var MongoClient = require('mongodb').MongoClient
  MongoClient.connect('mongodb://mongo_' + process.env.ENV + ':27017/cv', function(err, db) {
    if (err) throw err;
    db.db("cv").collection("cv").find().toArray(function(err, result) {
      if (err) throw err;
      db.close();
      res.render('cv', {cv: result[0]});
    });
  });
});

app.listen(80);