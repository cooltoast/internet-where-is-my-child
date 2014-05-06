var express = require("express");
var ejs = require("ejs");
var app = express();

var latitudes = [43.4, 41.5, 43.5, 24]
var longitudes = [51.6, 50.7, 52.5, 45]

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




  //res.render('index.html', { latitude: latitudes[latitudes.length - 1], longitude: longitudes[longitudes.length - 1], latitudes: latitudes, longitudes: longitudes });
});

  
//////////////////////////////////////////////////////////////////////////////
// RUN CONFIGURATION                                                         //
///////////////////////////////////////////////////////////////////////////////
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
