var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http');
var https = require('https');

var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/storage', express.static(path.join(__dirname, 'storage')));

var basicAuth = require('express-basic-auth');
var users = [];
users[process.env.USERNAME] = process.env.PASSWORD;
var myAuth = basicAuth({challenge: true, users: users});

app.get('/', function(req, res){
  res.redirect('/CV');
});

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

app.get('/CoverLetter', myAuth, function(req, res){
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

app.get('/Loisirs', function(req, res){
  var MongoClient = require('mongodb').MongoClient
  MongoClient.connect('mongodb://mongo_' + process.env.ENV + ':27017/loisirs', function(err, db) {
    if (err) throw err;
    db.db("loisirs").collection("loisirs").find().toArray(function(err, result) {
      if (err) throw err; 
      db.close();
      res.render('loisirs', {loisirs: result[0]});
    });
  });
});

if (process.env.ENV == 'prod') {
  var privateKey = fs.readFileSync('certs/privkey.pem', 'utf8');
  var certificate = fs.readFileSync('certs/cert.pem', 'utf8');
  var ca = fs.readFileSync('certs/chain.pem', 'utf8');

  var credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
  };

  var httpsServer = https.createServer(credentials, app);
  httpsServer.listen(443);

  var appHttp = express();
  appHttp.get('*', function(req, res) {  
      res.redirect('https://' + req.headers.host + req.url);
  })
  
  var httpServer = http.createServer(appHttp);
  httpServer.listen(80);
} else {
  var httpServer = http.createServer(app);
  httpServer.listen(80);
}
