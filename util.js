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

  fetchDataPoint: function(callback) {
    //request.get()
    console.log('dataPoint', data);
  }

}













