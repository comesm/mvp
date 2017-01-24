//use express - serve static files
var express = require('express');
var db = require('./src/db/db.js');
var bodyParse = require('body-parser');
var User = require('./src/Models/User');
var path = require('path');
var data = require('./dummyData.js');
var app = express();

app.use(bodyParse.json());

app.use(bodyParse.urlencoded({ extended: false }))


// app.post('/login', function(req, res) {
//   var user = req.body;
//   var userName = new User({name:user.firstname, last:user.lastname}).save();


//   //console.log(stuff);
//   res.send('ok');

// });

// app.get('/links', function(req, res) {

//   var stuff = User.find(function(err, user){
//     res.send(user);
//   });
//   //res.send(stuff);


// })

app.get('/data', function(req, res) {

    res.send(data);

});

//app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));


app.use('/', express.static('src/client'));

app.listen(3000, function() {
  console.log('listening');
});


