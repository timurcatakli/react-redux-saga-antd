// inside webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const modeConfig = env => require(`./webpack-build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  console.log('*****************************************');
  console.log(`Webpack is starting in ${mode.toUpperCase()} Mode`);
  console.log('*****************************************');
  return webpackMerge(
    {
      mode,
      // core concept 1 - entry
      entry: ['babel-polyfill', './src/index.js'],
      // core concept 2 - output
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
      },
      devServer: {
        contentBase: './build',
        port: 3000,
      },
      // core concept 3 - loaders & rules
      module: {
        rules: [
          { test: /\.js$/, use: 'babel-loader' },
          // css loader puts the css in memory...
          // style loader creates js module
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode),
  );
};
