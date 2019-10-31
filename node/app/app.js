var express = require('express');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var basicAuth = require('express-basic-auth');

var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/perso/public', express.static(path.join(__dirname, 'public')));
app.use('/perso/storage', express.static(path.join(__dirname, 'storage')));

if (process.env.ENV == 'prod') {
  var users = [];
  users[process.env.USERNAME] = process.env.PASSWORD;
  app.use('/cv/lettre', basicAuth({challenge: true, users: users}));
}

var mongoUrl = process.env.MONGO_URI;
  
app.get('/', function(req, res){
  res.redirect('/livres');
});

app.get('/perso', function(req, res){
  res.redirect('/livres');
});

app.get('/cv', function(req, res){
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) throw err;
    db.db("perso").collection("perso").find().toArray(function(err, result) {
      if (err) throw err; 
      res.render('cv', {perso: result[0]});
    });
  });
});

app.get('/cv/lettre', function(req, res){
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) throw err;
    db.db("perso").collection("perso").find().toArray(function(err, result) {
      if (err) throw err;
      res.render('cover_letter', {perso: result[0]});
    });
  });
});

app.get('/livres', function(req, res){
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) throw err;
    db.db("perso").collection("perso").find().toArray(function(err, result_perso) {
      if (err) throw err;  
      db.db("perso").collection("books").find().toArray(function(err, result_books) {
        if (err) throw err; 
        res.render('books', {perso: result_perso[0], books: result_books});
      });
    });
  });
});

app.get('/piano', function(req, res){
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) throw err;
    db.db("perso").collection("perso").find().toArray(function(err, result_perso) {
      if (err) throw err;
      res.render('piano', {perso: result_perso[0]});
    });
  });
});

app.listen(80);
