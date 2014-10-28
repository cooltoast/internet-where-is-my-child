var express = require("express");
var ejs = require("ejs");
var pg = require('pg');
var app = express();

///////////////////////////////////////////////////////////////////////////////
// APP CONFIGURATION                                                         //
///////////////////////////////////////////////////////////////////////////////
//configure logging
app.use(express.logger());
//make files in static folder publicly accessible
app.use('/static', express.static(__dirname + '/static'));
//use ejs for html templates
app.engine('html', ejs.renderFile);

///////////////////////////////////////////////////////////////////////////////
// APP ROUTES                                                                //
///////////////////////////////////////////////////////////////////////////////
//default route
app.get('/', function(req, res) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    console.log(err);
    client.query('SELECT * FROM coordinate_table', function(err, items) {
      if(err) return console.error(err);
      console.log(items.rows);
      done();
      res.render('index.html', { items: items.rows });
    });
  });
});

app.get('/submit_coordinates', function(req, res) {
  var latitude = req.query['latitude'];
  var longitude = req.query['longitude'];
  var timestamp = req.query['timestamp'];

  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('INSERT INTO coordinate_table VALUES (' + latitude + "," + longitude + ",'" + timestamp + "')", function(err, items) {
      if(err) return console.error(err);
      console.log(items.rows);
      done();
      res.redirect('/');
    });
  });
});

app.get('/last_coordinate', function(req, res) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    console.log(err);
    client.query('SELECT * FROM coordinate_table', function(err, items) {
      if(err) return console.error(err);
      console.log(items.rows);

      res.contentType('application/json');
      var last = items[items.length - 1];
      var lastCoord = {
        latitude: last.latitude,
        longitude: last.longitude
      }
      //var lastCoordJSON = JSON.stringify(lastCoord);

      res.json(lastCoord);
    });
  });
});


  
//////////////////////////////////////////////////////////////////////////////
// RUN CONFIGURATION                                                         //
///////////////////////////////////////////////////////////////////////////////
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
