// inside webpack.config.js
const path = require('path');
const webpack = require('webpack');

module.exports = {
  // ['babel-polyfill'] is added for generator support plus many others
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    port: 3000,
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }],
  },
};
