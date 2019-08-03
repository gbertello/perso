var express = require('express');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://mongo_' + process.env.ENV + ':27017/';

var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/perso/public', express.static(path.join(__dirname, 'public')));
app.use('/perso/storage', express.static(path.join(__dirname, 'storage')));

var basicAuth = require('express-basic-auth');
var users = [];
users[process.env.USERNAME] = process.env.PASSWORD;
var myAuth = basicAuth({challenge: true, users: users});

app.get('/perso', function(req, res){
  res.redirect('/perso/CV');
});

app.get('/perso/CV', function(req, res){
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) throw err;
    db.db("perso").collection("cv").find().toArray(function(err, result) {
      if (err) throw err; 
      res.render('cv', {cv: result[0]});
    });
  });
});

app.get('/perso/CoverLetter', myAuth, function(req, res){
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) throw err;
    db.db("perso").collection("cv").find().toArray(function(err, result) {
      if (err) throw err;
      db.db("perso").collection("cover_letter").find().toArray(function(err, result2) {
        if (err) throw err;
        res.render('cover_letter', {cv: result[0], cover_letter: result2[0]});  
      });
    });
  });
});

app.get('/perso/Livres', function(req, res){
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) throw err;
    db.db("perso").collection("books").find().toArray(function(err, result) {
      if (err) throw err; 
      res.render('books', {books: result});
    });
  });
});

app.listen(80);
