var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('coordinates.db');

db.serialize(function() {
  db.run('CREATE TABLE coordinate_table (latitude REAL, longitude REAL, timestamp TEXT)');
  db.run('INSERT INTO coordinate_table VALUES (40.5, -75.4, "sql test 1")');
  db.run('INSERT INTO coordinate_table VALUES (45.6, 43.6, "sql test 2")');
  db.run('INSERT INTO coordinate_table VALUES (35.6, 43.6, "sql test 3")');
  db.run('INSERT INTO coordinate_table VALUES (49, 43.6, "sql test 4")');
  db.run('INSERT INTO coordinate_table VALUES (45.6, 47.6, "sql test 5")');
  db.run('INSERT INTO coordinate_table VALUES (45.6, 23, "sql test 6")');
  db.run('INSERT INTO coordinate_table VALUES (45.6, 75, "sql test 7")');
  db.run('INSERT INTO coordinate_table VALUES (-45, 43.6, "sql test 8")');

});