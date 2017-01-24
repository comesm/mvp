//use express - serve static files
var express = require('express');
var db = require('./src/db/db.js');
var bodyParse = require('body-parser');
var Data = require('./src/Models/Data');
var path = require('path');
var econData = require('./dummyData.js');
var app = express();
var util = require('./util.js')
var dataCache = {data:[]};

app.use(bodyParse.json());

app.use(bodyParse.urlencoded({ extended: false }))

//fred api key - a6ad301408e6f755651595dfdc02c247
var requestCounter = 0;
app.post('/data', function(req, res) {
    console.log('request body', req.body);
    var searchKey = req.body.text;
    if(requestCounter === 0 && req.body.dataSelection === 'today') {
      requestCounter++;
      util.fetch(function(err, data) {
        if(err) {
          res.send(404);
        } else {
          dataCache.data.push(data);
          res.send({data: data});
        }
      });
    }
      else {
      var responseLoad = dataCache.data.filter(function(value) {
        return value.name.includes(searchKey);
      });
      res.send({data: responseLoad});
    }
});

//app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));


app.use('/', express.static('src/client'));

app.listen(3000, function() {
  console.log('listening - populating DB');

  econData.data.forEach(function(item) {

  var data = new Data({name: item.name, date: item.date, number: item.number});

  dataCache.data.push(item);
  Data.find({name:item.name, date: item.date}).then(function(item) {
    //console.log('err', err);
    if(item) {
      console.log('element found in db - no need to add');
    } else {
      console.log('new data element');
      data.save();
    }
  });
});

});

