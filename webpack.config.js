const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [ './index.js', './index.html' ],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      { test: /\.css$/, loader: 'style!css?modules' }
    ]
  },

  output: {
    path: 'dist/',
    filename: '[name].js'
  }
};
