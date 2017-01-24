var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

// console.log(BUILD_DIR);
// console.log(APP_DIR);
var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?/,
      include: APP_DIR,
      loader: 'babel',
      excludes: /node_modules/,
      query: {
        presets:['es2015','react']
      }
    }
    ]
  }
}

module.exports = config;