var express = require('express');
var logSession = require('./logs_SSE');
var Heroku = require('heroku-client');
var app = express();


//TODO check for token
var API_KEY = process.env.HEROKU_API_KEY


app.get('/', function (req, res) {
  res.send('Hello World!');
});

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/logs/:app', function(req, res) {
  var session = logSession(API_KEY);
  session.sse(req.params.app, req, res);
});

app.get('/apps', function(req, res) {
    heroku = new Heroku({token: API_KEY});
    heroku.apps().list(function (err, apps) {
      res.send(apps)
    });
})

var PORT = process.env.PORT || 14000
var server = app.listen(PORT, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Heroku log SSE endpoint: http://%s:%s', host, port);

});
