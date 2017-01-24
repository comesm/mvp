var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected');
  // we're connected!
});

module.exports = db;

// var mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost/test');

// // Run in seperate terminal window using 'mongod'
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log('Mongodb connection open');
// });

// module.exports = db;