var request = require('request');

module.exports = {

  fetch: function(callback) {
    request.get('https://api.stlouisfed.org/fred/releases/dates?api_key=a6ad301408e6f755651595dfdc02c247&file_type=json', function(err, response, body) {
      if(response.statusCode === 200) {
        var data = JSON.parse(body).release_dates;
        //console.log('data', data);
        callback(null, data);
      }
    });
  },

  fetchDataPoint: function(id, date, callback) {
    //get the series IDs from the release id

    // https://api.stlouisfed.org/fred/release/series?release_id=INPUT ID HERE api_key=a6ad301408e6f755651595dfdc02c247&file_type=json

    //with the fetched series ids get the data
    request.get('https://api.stlouisfed.org/fred/release/series?release_id=' +id+'&api_key=a6ad301408e6f755651595dfdc02c247&file_type=json', function(err, response, body) {
      if(err) {
        console.log('30');
        callback(err, null);
      }
      if(response.statusCode === 200) {
        console.log('27');
        var seriesId = JSON.parse(body).seriess[0].id;
        request.get('https://api.stlouisfed.org/fred/series/observations?series_id='+seriesId+'&observation_start='+'2017-01-01'+'&sort_order=desc&observation_end='+date+'&api_key=a6ad301408e6f755651595dfdc02c247&file_type=json',
          function(err, response, body) {
             if(err) {
              console.log('32', err);
              callback(err, null);
             } else {
               callback(err, body);
             }
          });
      }
    });
  }


//https://api.stlouisfed.org/fred/series/observations?series_id=GNPCA&observation_start=START_DATE&observation_end=END_DATE&api_key=a6ad301408e6f755651595dfdc02c247&file_type=json
   // var series_id = id;
    //console.log('dataPoint', data);
  }




//https://api.stlouisfed.org/fred/series?series_id=BOMTVLM133S&api_key=a6ad301408e6f755651595dfdc02c247&file_type=json










