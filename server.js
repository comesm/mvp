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
    //console.log('request body', req.body);
    var searchKey = req.body.text;
    if(requestCounter === 0 && req.body.dataSelection === 'today') {
      requestCounter++;
      util.fetch(function(err, data) {
        if(err) {
          res.send(404);
        } else {
          //console.log(data);
          dataCache.data = dataCache.data.concat(data);
          res.send(dataCache);
        }
      });
    }
      else {
      var responseLoad = dataCache.data.filter(function(value) {
        return value.release_name.includes(searchKey);
      });
      //console.log(responseLoad);
      res.send({data: responseLoad});
    }
});


app.post('/datapoint', function(req, res) {
  var id = req.body.data_id;
  var date = req.body.date;
  util.fetchDataPoint(id, date, function(err, data) {
    if(err) {
      res.sendStatus(404);
    } else {
      res.send(data);
    }

  });
});

app.use('/', express.static('src/client'));

app.listen(3000, function() {
  console.log('listening - populating DB');

});

