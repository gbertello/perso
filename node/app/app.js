var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, 'public')));

var basicAuth = require('express-basic-auth');
var users = [];
users[process.env.USERNAME] = process.env.PASSWORD;
var myAuth = basicAuth({challenge: true, users: users});

app.get('/CV', function(req, res){
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

app.get('/CV/coverLetter', myAuth, function(req, res){
  var MongoClient = require('mongodb').MongoClient
  MongoClient.connect('mongodb://mongo_' + process.env.ENV + ':27017/cv', function(err, db) {
    if (err) throw err;
    db.db("cv").collection("cv").find().toArray(function(err, result) {
      if (err) throw err;
      db.db("cv").collection("cover_letter").find().toArray(function(err, result2) {
        if (err) throw err;
        db.close();
        res.render('cover_letter', {cv: result[0], cover_letter: result2[0]});  
      });
    });
  });
});

app.get('/', function(req, res){
  res.redirect('/CV');
});

app.listen(80);