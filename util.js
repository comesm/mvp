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
}






