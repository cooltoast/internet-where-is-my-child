var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('coordinates.db');

db.serialize(function() {
  db.run('CREATE TABLE coordinate_table (latitude REAL, longitude REAL, timestamp TEXT)');
  db.run('INSERT INTO coordinate_table VALUES (45.6, 43.6, "sql test 1")');

});