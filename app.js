var express = require("express");
var ejs = require("ejs");
var app = express();

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('coordinates.db');

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
  db.all('SELECT * FROM coordinate_table', function(err, items) {
   // render page here
   console.log(items);

   res.render('index.html', { items: items });
  });
});

app.get('/submit_coordinates', function(req, res) {
  var latitude = req.query['latitude'];
  var longitude = req.query['longitude'];
  var timestamp = req.query['timestamp'];
  db.run('INSERT INTO coordinate_table VALUES (' + latitude + "," + longitude + ',"' + timestamp + '")');
  
  res.redirect('/');
});


  
//////////////////////////////////////////////////////////////////////////////
// RUN CONFIGURATION                                                         //
///////////////////////////////////////////////////////////////////////////////
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
