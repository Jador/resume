const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [ './index.js', './index.html' ],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.html|jpeg$/, loader: 'file?name=[name].[ext]' },
      { test: /\.css$/, loader: 'style!css?modules&importLoaders=1!postcss' }
    ]
  },

  devtool: '#source-map',

  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      warnings: false
    })
  ],

  postcss: [ require('autoprefixer') ],

  output: {
    path: 'dist/',
    filename: '[name].js'
  }
};
