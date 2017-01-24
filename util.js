var request = require('request');

module.exports = {

  fetch: function(callback) {
   console.log('5-------');
  request.get('https://api.stlouisfed.org/fred/releases/dates?api_key=a6ad301408e6f755651595dfdc02c247&file_type=json', function(err, response, body) {
      if(response.statusCode === 200) {
        console.log('data', body);
        callback(null, body);
      }
    });
  }
}













